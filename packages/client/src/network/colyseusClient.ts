import { Client } from 'colyseus.js';
import {
  decodeSnapshot,
  INPUT_SCHEMA_VERSION,
  MessageType,
  PROTOCOL_VERSION,
  STATE_SCHEMA_VERSION,
  type InputMessage,
  type ServerMeta,
} from 'snek-shared';
import { createRng } from '../core/rng.ts';
import { applyCoreStateToGameState } from '../core/sync.ts';
import { Logger } from '../debugLogger.js';
import * as UI from '../ui.js';
import * as Food from '../food.js';
import * as Enemy from '../enemySnake.js';
import * as Player from '../playerSnake.js';
import CONFIG from '../config.js';

type NetworkStatus = 'idle' | 'connecting' | 'connected' | 'reconnecting' | 'disconnected' | 'error';

type NetworkState = {
  enabled: boolean;
  status: NetworkStatus;
  room: any;
  sessionId: string | null;
  lastSnapshotTick: number;
  sendInput: ((input: InputMessage) => void) | null;
};

type MultiplayerOptions = {
  serverUrl?: string;
  roomName?: string;
};

function rehydrateCoreState(serialized: any) {
  const { rng, ...rest } = serialized;
  return {
    ...rest,
    rng: createRng(rng?.seed ?? Date.now()),
  };
}

function updateFromSnapshot(gameState: any, buffer: ArrayBuffer | Uint8Array) {
  const snapshotBuffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  const snapshot = decodeSnapshot(snapshotBuffer);
  const core = rehydrateCoreState(snapshot);
  applyCoreStateToGameState(gameState, core);
  gameState.simulation.time = core.time;
  gameState.network.lastSnapshotTick = core.tick;

  Player.syncPlayerMeshes(gameState);
  Enemy.syncEnemyMeshes(gameState);
  Food.syncFoodMeshes(gameState);

  UI.updateScore(core.score.current);
  UI.updateKills(core.enemies.kills);
}

function handleMeta(gameState: any, meta: ServerMeta) {
  Logger.system.info(`Connected to multiplayer server v${meta.serverVersion}, tick ${meta.tickRate}`);
  gameState.simulation.tickRate = meta.tickRate;
  gameState.simulation.fixedDelta = 1 / meta.tickRate;
}

export async function connectMultiplayer(gameState: any, options: MultiplayerOptions = {}) {
  const serverUrl = options.serverUrl ?? CONFIG.MULTIPLAYER_SERVER_URL;
  const roomName = options.roomName ?? 'snek';
  const client = new Client(serverUrl);
  let reconnectAttempts = 0;

  gameState.network.enabled = true;
  gameState.network.status = 'connecting';
  gameState.flags.useCoreSimulation = true;

  const bindRoom = (room: any) => {
    gameState.network.room = room;
    gameState.network.sessionId = room.sessionId;
    gameState.network.status = 'connected';
    gameState.network.sendInput = (input: InputMessage) => {
      room.send('input', input);
    };

    room.onMessage(MessageType.Meta, (meta: ServerMeta) => handleMeta(gameState, meta));
    room.onMessage(MessageType.Snapshot, (payload: ArrayBuffer | Uint8Array) => {
      updateFromSnapshot(gameState, payload);
    });
    room.onMessage(MessageType.Error, (payload: { message: string }) => {
      Logger.system.warn(`Server error: ${payload.message}`);
      UI.showPowerUpTextEffect(payload.message, 0xff4444);
    });

    room.onLeave(code => {
      gameState.network.status = 'disconnected';
      Logger.system.warn(`Disconnected from multiplayer (code ${code}).`);
      UI.showPowerUpTextEffect('Disconnected from server', 0xff4444);
      scheduleReconnect();
    });

    room.onError((code, message) => {
      gameState.network.status = 'error';
      Logger.system.error(`Room error ${code}: ${message}`);
      UI.showPowerUpTextEffect('Network error', 0xff4444);
      scheduleReconnect();
    });
  };

  const scheduleReconnect = () => {
    if (!gameState.network.enabled) return;
    if (reconnectAttempts >= 5) return;
    reconnectAttempts += 1;
    gameState.network.status = 'reconnecting';
    UI.showPowerUpTextEffect('Reconnecting...', 0xffc107);
    setTimeout(async () => {
      try {
        const room = await client.joinOrCreate(roomName, {
          clientVersion: PROTOCOL_VERSION,
          stateVersion: STATE_SCHEMA_VERSION,
          inputVersion: INPUT_SCHEMA_VERSION,
        });
        reconnectAttempts = 0;
        bindRoom(room);
      } catch (error) {
        Logger.system.warn('Reconnect attempt failed', error);
        scheduleReconnect();
      }
    }, 1500);
  };

  try {
    const room = await client.joinOrCreate(roomName, {
      clientVersion: PROTOCOL_VERSION,
      stateVersion: STATE_SCHEMA_VERSION,
      inputVersion: INPUT_SCHEMA_VERSION,
    });
    bindRoom(room);
    return room;
  } catch (error) {
    gameState.network.status = 'error';
    Logger.system.error('Failed to connect to multiplayer server', error);
    UI.showPowerUpTextEffect('Unable to connect to server', 0xff4444);
    throw error;
  }
}

export function disconnectMultiplayer(gameState: any) {
  const network: NetworkState = gameState.network;
  if (!network?.room) return;
  network.room.leave();
  network.room = null;
  network.sessionId = null;
  network.sendInput = null;
  network.status = 'disconnected';
  network.enabled = false;
}
