import { Client } from 'colyseus.js';
import {
  decodeSnapshot,
  decodeMessage,
  applyDeltaPatch,
  INPUT_SCHEMA_VERSION,
  MessageType,
  PROTOCOL_VERSION,
  STATE_SCHEMA_VERSION,
  type InputMessage,
  type ServerMeta,
  type SnapshotEnvelope,
  type DeltaEnvelope,
  type SerializableCoreState,
} from 'snek-shared';
import { createRng } from '../core/rng.ts';
import { applyCoreStateToGameState } from '../core/sync.ts';
import { Logger } from '../debugLogger.js';
import * as UI from '../ui.js';
import type { RoomInfo } from 'snek-shared';
import * as Player from '../playerSnake.js';
import * as Obstacles from '../obstacles.js';
import CONFIG from '../config';

type NetworkStatus = 'idle' | 'connecting' | 'connected' | 'reconnecting' | 'disconnected' | 'error';

type NetworkState = {
  enabled: boolean;
  status: NetworkStatus;
  room: any;
  sessionId: string | null;
  lastSnapshotTick: number;
  lastSnapshotTimeMs: number;
  snapshotIntervalMs: number;
  sendInput: ((input: InputMessage) => void) | null;
  pendingServerEvents: import('snek-shared').EventEnvelope[];
};

type MultiplayerOptions = {
  serverUrl?: string;
  roomName?: string;
  roomCode?: string;
  createRoom?: boolean;
  playerName?: string;
};

let lastSerializedState: SerializableCoreState | null = null;

function rehydrateCoreState(serialized: any) {
  const { rng, ...rest } = serialized;
  return {
    ...rest,
    rng: createRng(rng?.seed ?? Date.now()),
  };
}

function updateFromSnapshot(gameState: any, buffer: ArrayBuffer | Uint8Array) {
  const snapshotBuffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  const message = decodeMessage(snapshotBuffer);

  let snapshot: SerializableCoreState;
  if (message.full) {
    snapshot = (message as SnapshotEnvelope).state;
  } else {
    const delta = message as DeltaEnvelope;
    if (!lastSerializedState || lastSerializedState.tick !== delta.baseTick) {
      // Can't apply delta — base tick mismatch or no prior state; skip and wait for full
      Logger.system.warn(`Delta baseTick mismatch: have ${lastSerializedState?.tick}, need ${delta.baseTick}. Waiting for full snapshot.`);
      return;
    }
    snapshot = applyDeltaPatch(lastSerializedState, delta.patch);
  }

  lastSerializedState = JSON.parse(JSON.stringify(snapshot));
  const core = rehydrateCoreState(snapshot);
  applyCoreStateToGameState(gameState, core);
  gameState.simulation.time = core.time;

  // Track snapshot timing for interpolation
  const nowMs = performance.now();
  const prevTick = gameState.network.lastSnapshotTick;
  if (prevTick > 0 && core.tick > prevTick) {
    gameState.network.snapshotIntervalMs = nowMs - (gameState.network.lastSnapshotTimeMs || nowMs);
  }
  gameState.network.lastSnapshotTick = core.tick;
  gameState.network.lastSnapshotTimeMs = nowMs;

  // Mesh interpolation is handled by the render loop (once per frame at 60fps).
  // Only sync obstacles here since they don't interpolate — they just appear/disappear.
  Obstacles.syncObstacleMeshes(gameState);

  // Score is now per-player; use local player's score
  const localId = gameState.localPlayerId || 'local';
  const localPlayer = core.players?.[localId];
  if (localPlayer) {
    UI.updateScore(localPlayer.score.current);
  }
  UI.updateKills(core.enemies.kills);

  // Update multiplayer scoreboard
  if (core.players) {
    UI.updateScoreboard(core.players, localId);
  }
}

function handleMeta(gameState: any, meta: ServerMeta) {
  Logger.system.info(`Connected to multiplayer server v${meta.serverVersion}, tick ${meta.tickRate}`);
  gameState.simulation.tickRate = meta.tickRate;
  gameState.simulation.fixedDelta = 1 / meta.tickRate;
  // Server provides authoritative sessionId in meta
  if (meta.sessionId) {
    gameState.localPlayerId = meta.sessionId;
  } else if (gameState.network?.sessionId) {
    gameState.localPlayerId = gameState.network.sessionId;
  }
  // Update URL to reflect the room code
  if (meta.roomCode && window.location.pathname !== '/' + meta.roomCode) {
    window.history.pushState({}, '', '/' + meta.roomCode);
  }
}

export async function connectMultiplayer(gameState: any, options: MultiplayerOptions = {}) {
  const serverUrl = options.serverUrl ?? CONFIG.MULTIPLAYER_SERVER_URL;
  const roomName = options.roomName ?? 'snek';
  const client = new Client(serverUrl);
  let reconnectAttempts = 0;

  gameState.network.enabled = true;
  gameState.network.status = 'connecting';
  gameState.flags.useCoreSimulation = true;

  let reconnectionToken: string | null = null;

  const bindRoom = (room: any) => {
    gameState.network.room = room;
    gameState.network.sessionId = room.sessionId;
    gameState.network.status = 'connected';
    reconnectionToken = room.reconnectionToken || null;
    gameState.network.sendInput = (input: InputMessage) => {
      room.send('input', input);
    };

    room.onMessage(MessageType.Meta, (meta: ServerMeta) => handleMeta(gameState, meta));
    room.onMessage(MessageType.Snapshot, (payload: ArrayBuffer | Uint8Array) => {
      updateFromSnapshot(gameState, payload);
    });
    room.onMessage(MessageType.Events, (events: import('snek-shared').EventEnvelope[]) => {
      if (!gameState.network.pendingServerEvents) {
        gameState.network.pendingServerEvents = [];
      }
      gameState.network.pendingServerEvents.push(...events);
    });
    room.onMessage(MessageType.Error, (payload: { message: string }) => {
      Logger.system.warn(`Server error: ${payload.message}`);
      UI.showPowerUpTextEffect(payload.message, 0xff4444);
    });

    room.onLeave((code: number) => {
      gameState.network.status = 'disconnected';
      Logger.system.warn(`Disconnected from multiplayer (code ${code}).`);
      UI.showPowerUpTextEffect('Disconnected from server', 0xff4444);
      UI.hideRespawnOverlay();
      UI.hideScoreboard();
      Player.resetAllRemotePlayerMeshes(gameState);
      // Don't reconnect on schema mismatch (4000)
      if (code !== 4000) {
        scheduleReconnect();
      }
    });

    room.onError((code: number, message: string) => {
      gameState.network.status = 'error';
      Logger.system.error(`Room error ${code}: ${message}`);
      UI.showPowerUpTextEffect('Network error', 0xff4444);
      Player.resetAllRemotePlayerMeshes(gameState);
      scheduleReconnect();
    });
  };

  const joinOptions = () => ({
    clientVersion: PROTOCOL_VERSION,
    stateVersion: STATE_SCHEMA_VERSION,
    inputVersion: INPUT_SCHEMA_VERSION,
    playerName: options.playerName || UI.getPlayerName(),
    ...(options.roomCode ? { roomCode: options.roomCode } : {}),
    ...(options.createRoom ? { createRoom: true } : {}),
  });

  const scheduleReconnect = () => {
    if (!gameState.network.enabled) return;
    if (reconnectAttempts >= 5) return;
    reconnectAttempts += 1;
    gameState.network.status = 'reconnecting';
    UI.showPowerUpTextEffect('Reconnecting...', 0xffc107);
    setTimeout(async () => {
      try {
        let room: any;
        if (reconnectionToken) {
          try {
            room = await client.reconnect(reconnectionToken);
          } catch {
            Logger.system.warn('Reconnect with token failed, falling back to joinOrCreate');
            reconnectionToken = null;
            room = await client.joinOrCreate(roomName, joinOptions());
          }
        } else {
          room = await client.joinOrCreate(roomName, joinOptions());
        }
        reconnectAttempts = 0;
        bindRoom(room);
      } catch (error) {
        Logger.system.warn('Reconnect attempt failed', error);
        scheduleReconnect();
      }
    }, 1500);
  };

  try {
    let room: any;
    if (options.createRoom) {
      room = await client.create(roomName, joinOptions());
    } else if (options.roomCode) {
      // Server-side room code resolution + seat reservation in one request
      const httpUrl = serverUrl.replace(/^ws/, 'http');
      const res = await fetch(`${httpUrl}/join-by-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomCode: options.roomCode, ...joinOptions() }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Room not found' }));
        throw new Error(err.error || `Room ${options.roomCode} not found`);
      }
      const reservation = await res.json();
      room = await client.consumeSeatReservation(reservation);
    } else {
      room = await client.joinOrCreate(roomName, joinOptions());
    }
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
  network.room.leave(true); // consented leave — server won't wait for reconnection
  network.room = null;
  network.sessionId = null;
  network.sendInput = null;
  network.status = 'disconnected';
  network.enabled = false;
}
