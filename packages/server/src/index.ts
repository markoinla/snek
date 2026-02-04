import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import Colyseus from 'colyseus';
const matchMaker = (Colyseus as any).matchMaker;
import { WebSocketTransport } from '@colyseus/ws-transport';
import { Schema, type, MapSchema } from '@colyseus/schema';
import {
  INPUT_SCHEMA_VERSION,
  MessageType,
  PROTOCOL_VERSION,
  STATE_SCHEMA_VERSION,
  encodeSnapshot,
  encodeDelta,
  type InputMessage,
  type ServerMeta,
} from 'snek-shared';
import type { CoreState, SerializableCoreState, EventEnvelope } from 'snek-shared';
import CONFIG from '../../client/src/config';
import { loadConfigOverrides } from './configManager.ts';
import { createAdminRouter } from './adminRoutes.ts';
import { createInitialCoreState, createPlayerState } from '../../client/src/core/state.ts';
import { applyPlayerInput } from '../../client/src/core/player.ts';
import { stepCore } from '../../client/src/core/step.ts';
import { spawnFoodCore, spawnObstaclesCore, generateUniquePositionCore } from '../../client/src/core/spawn.ts';
import { spawnInitialEnemiesCore } from '../../client/src/core/enemy.ts';

const DEFAULT_PORT = Number(process.env.PORT ?? 2567);
const TICK_RATE = 30;
const SNAPSHOT_INTERVAL_TICKS = 3;
const MAX_INPUT_QUEUE = 32;
const MAX_INPUT_AHEAD_TICKS = 6;
const MAX_INPUT_LAG_TICKS = 10;

const metrics = {
  roomsCreated: 0,
  roomsActive: 0,
  connectedClients: 0,
  lastTickDurationMs: 0,
  lastTickAt: 0,
  tickRate: TICK_RATE,
};

class PlayerMeta extends Schema {
  @type('string') id = '';
  @type('string') name = '';
  @type('number') lastInputTick = 0;
}

const DEFAULT_NAMES = ['Snek', 'Cobra', 'Viper', 'Python'];

function sanitizePlayerName(raw: string | undefined, colorIndex: number): string {
  if (!raw || typeof raw !== 'string') return DEFAULT_NAMES[colorIndex % DEFAULT_NAMES.length];
  const cleaned = raw.replace(/[<>&"']/g, '').trim().slice(0, 16);
  return cleaned || DEFAULT_NAMES[colorIndex % DEFAULT_NAMES.length];
}

const ROOM_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O/1/I/L

function generateRoomCode(): string {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += ROOM_CODE_CHARS[Math.floor(Math.random() * ROOM_CODE_CHARS.length)];
  }
  return code;
}

class RoomState extends Schema {
  @type('number') tick = 0;
  @type('number') seed = 0;
  @type({ map: PlayerMeta }) players = new MapSchema<PlayerMeta>();
}

class SnekRoom extends Colyseus.Room<RoomState> {
  private coreState: CoreState;
  private seed: number;
  private inputQueues = new Map<string, InputMessage[]>();
  private snapshotCounter = 0;
  private pendingEvents: EventEnvelope[] = [];
  private prevBroadcastState: SerializableCoreState | null = null;
  private fullSnapshotCounter = 0;
  private static readonly FULL_SNAPSHOT_INTERVAL = 10;
  roomCode: string = '';
  displayName: string = '';

  onCreate(options: any) {
    this.maxClients = 4;
    this.seed = Date.now();
    this.coreState = createInitialCoreState(this.seed);
    this.initializeCoreState(this.coreState);

    this.setState(new RoomState());
    this.state.seed = this.seed;
    this.state.tick = this.coreState.tick;

    this.roomCode = generateRoomCode();
    this.displayName = `Room ${this.roomCode}`;
    this.setMetadata({ roomCode: this.roomCode, displayName: this.displayName, playerCount: 0 });

    this.setSimulationInterval(() => this.tick(), 1000 / TICK_RATE);
    metrics.roomsCreated += 1;
    metrics.roomsActive += 1;
  }

  onJoin(client: Colyseus.Client, options: any) {
    if (
      options?.clientVersion !== PROTOCOL_VERSION ||
      options?.stateVersion !== STATE_SCHEMA_VERSION ||
      options?.inputVersion !== INPUT_SCHEMA_VERSION
    ) {
      client.send(MessageType.Error, { message: 'Schema mismatch. Please refresh.' });
      client.leave(4000);
      return;
    }

    metrics.connectedClients += 1;
    const playerMeta = new PlayerMeta();
    playerMeta.id = client.sessionId;
    playerMeta.lastInputTick = this.coreState.tick;
    this.state.players.set(client.sessionId, playerMeta);
    this.inputQueues.set(client.sessionId, []);

    // Create player snake in core simulation
    this.createPlayerSnake(client.sessionId);

    // Sanitize and assign player name
    const colorIndex = this.coreState.players[client.sessionId].colorIndex;
    const sanitizedName = sanitizePlayerName(options?.playerName, colorIndex);
    playerMeta.name = sanitizedName;
    this.coreState.players[client.sessionId].name = sanitizedName;

    const meta: ServerMeta = {
      serverVersion: PROTOCOL_VERSION,
      tickRate: TICK_RATE,
      seed: this.seed,
      sessionId: client.sessionId,
      playerName: sanitizedName,
      roomCode: this.roomCode,
    };
    client.send(MessageType.Meta, meta);
    client.send(MessageType.Snapshot, this.serializeSnapshot());

    this.setMetadata({ playerCount: this.clients.length });

    this.onMessage('input', (client, message: InputMessage) => {
      this.handleInput(client.sessionId, message);
    });
  }

  async onLeave(client: Colyseus.Client, consented?: boolean) {
    metrics.connectedClients = Math.max(0, metrics.connectedClients - 1);

    if (consented) {
      this.cleanupPlayer(client.sessionId);
      return;
    }

    // Mark as dead immediately so ghost snake doesn't block the grid
    const player = this.coreState.players[client.sessionId];
    if (player) {
      player.dead = true;
      player.segments = [];
    }

    try {
      await this.allowReconnection(client, 30);
      // Reconnected — respawn player at a new position
      metrics.connectedClients += 1;
      const existingMeta = this.state.players.get(client.sessionId);
      if (player) {
        player.dead = false;
        player.respawnAt = 0;
        const startPos = generateUniquePositionCore(this.coreState, CONFIG.START_SAFE_ZONE);
        player.segments = [];
        for (let i = 0; i < CONFIG.MIN_SNAKE_LENGTH; i++) {
          player.segments.push({ x: startPos.x - i, y: 0, z: startPos.z });
        }
        player.direction = { x: 1, y: 0, z: 0 };
        player.nextDirection = { x: 1, y: 0, z: 0 };
        player.speed = CONFIG.BASE_SNAKE_SPEED;
      }

      // Re-send meta and snapshot to the reconnected client
      const meta: ServerMeta = {
        serverVersion: PROTOCOL_VERSION,
        tickRate: TICK_RATE,
        seed: this.seed,
        sessionId: client.sessionId,
        playerName: existingMeta?.name || '',
        roomCode: this.roomCode,
      };
      client.send(MessageType.Meta, meta);
      client.send(MessageType.Snapshot, this.serializeSnapshot());

      // Re-register input handler (Colyseus requires this after reconnection)
      this.onMessage('input', (c, message: InputMessage) => {
        this.handleInput(c.sessionId, message);
      });
    } catch {
      // Reconnection timed out or room was disposed
      this.cleanupPlayer(client.sessionId);
    }
  }

  private cleanupPlayer(sessionId: string) {
    this.state.players.delete(sessionId);
    this.inputQueues.delete(sessionId);
    delete this.coreState.players[sessionId];
    this.setMetadata({ playerCount: this.clients.length });
  }

  onDispose() {
    metrics.roomsActive = Math.max(0, metrics.roomsActive - 1);
  }

  private initializeCoreState(state: CoreState) {
    // Players are created on join — start with empty players map
    spawnObstaclesCore(state, CONFIG.NUM_OBSTACLES, CONFIG.START_SAFE_ZONE);
    spawnFoodCore(state, CONFIG.NUM_INITIAL_FOOD);
    spawnInitialEnemiesCore(state, CONFIG.NUM_ENEMIES);
  }

  private nextColorIndex = 0;

  private createPlayerSnake(sessionId: string) {
    const player = createPlayerState(sessionId);
    player.colorIndex = this.nextColorIndex;
    this.nextColorIndex = (this.nextColorIndex + 1) % 4;
    const startPos = generateUniquePositionCore(this.coreState, CONFIG.START_SAFE_ZONE);
    player.segments = [];
    for (let i = 0; i < CONFIG.MIN_SNAKE_LENGTH; i++) {
      player.segments.push({ x: startPos.x - i, y: 0, z: startPos.z });
    }
    player.direction = { x: 1, y: 0, z: 0 };
    player.nextDirection = { x: 1, y: 0, z: 0 };
    player.speed = CONFIG.BASE_SNAKE_SPEED;
    this.coreState.players[sessionId] = player;
  }

  private handleInput(sessionId: string, message: InputMessage) {
    if (!message || message.version !== INPUT_SCHEMA_VERSION) {
      return;
    }
    if (message.turn !== 'left' && message.turn !== 'right') {
      return;
    }
    const queue = this.inputQueues.get(sessionId);
    if (!queue) return;
    const targetTick = message.tick;
    if (targetTick > this.coreState.tick + MAX_INPUT_AHEAD_TICKS) return;
    if (targetTick < this.coreState.tick - MAX_INPUT_LAG_TICKS) return;

    // Stamp playerId from server-side session (trust server, not client)
    message.playerId = sessionId;
    queue.push(message);
    if (queue.length > MAX_INPUT_QUEUE) {
      queue.shift();
    }
    queue.sort((a, b) => a.tick - b.tick);

    const player = this.state.players.get(sessionId);
    if (player) {
      player.lastInputTick = message.tick;
    }
  }

  private tick() {
    const start = Date.now();
    const targetTick = this.coreState.tick + 1;
    const inputs = this.consumeInputsForTick(targetTick);
    for (const input of inputs) {
      applyPlayerInput(this.coreState, input);
    }

    const result = stepCore(this.coreState, 1 / TICK_RATE);
    this.state.tick = this.coreState.tick;
    this.pendingEvents.push(...result.events);

    this.snapshotCounter += 1;
    if (this.snapshotCounter >= SNAPSHOT_INTERVAL_TICKS) {
      this.snapshotCounter = 0;

      const currentState = this.getSerializableState();
      this.fullSnapshotCounter += 1;

      let payload: Uint8Array;
      if (!this.prevBroadcastState || this.fullSnapshotCounter >= SnekRoom.FULL_SNAPSHOT_INTERVAL) {
        // Send full snapshot
        payload = encodeSnapshot(currentState);
        this.fullSnapshotCounter = 0;
      } else {
        // Compute delta and compare sizes
        const deltaPayload = encodeDelta(this.prevBroadcastState, currentState);
        const fullPayload = encodeSnapshot(currentState);
        payload = deltaPayload.length < fullPayload.length ? deltaPayload : fullPayload;
      }

      this.prevBroadcastState = JSON.parse(JSON.stringify(currentState));
      this.broadcast(MessageType.Snapshot, payload);

      if (this.pendingEvents.length > 0) {
        this.broadcast(MessageType.Events, this.pendingEvents);
        this.pendingEvents = [];
      }
    }

    metrics.lastTickDurationMs = Date.now() - start;
    metrics.lastTickAt = Date.now();
  }

  private consumeInputsForTick(tick: number) {
    const collected: InputMessage[] = [];
    for (const queue of this.inputQueues.values()) {
      while (queue.length && queue[0].tick <= tick) {
        const input = queue.shift();
        if (!input) break;
        // Accept inputs for this tick AND slightly-late inputs (arrived
        // after their target tick but still within the lag window).
        // This prevents keypresses from being silently dropped due to
        // network jitter or stale client-side tick counters.
        collected.push(input);
      }
    }
    return collected;
  }

  private getSerializableState(): SerializableCoreState {
    const { rng, ...rest } = this.coreState;
    return { ...rest, rng: { seed: rng.seed } };
  }

  private serializeSnapshot(): Uint8Array {
    return encodeSnapshot(this.getSerializableState());
  }
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(createAdminRouter());
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});
app.get('/metrics', (_req, res) => {
  res.json(metrics);
});

const httpServer = createServer(app);
const gameServer = new Colyseus.Server({
  transport: new WebSocketTransport({ server: httpServer }),
});

gameServer.define('snek', SnekRoom).filterBy(['roomCode']);

app.post('/join-by-code', async (req, res) => {
  const { roomCode, ...options } = req.body;
  if (!roomCode) {
    return res.status(400).json({ error: 'roomCode is required' });
  }
  try {
    const rooms = await matchMaker.query({ name: 'snek' });
    const target = rooms.find((r: any) => r.metadata?.roomCode === roomCode);
    if (!target) {
      return res.status(404).json({ error: `Room ${roomCode} not found` });
    }
    const reservation = await matchMaker.joinById(target.roomId, options);
    res.json(reservation);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to join room' });
  }
});

app.get('/rooms', async (_req, res) => {
  try {
    const rooms = await matchMaker.query({ name: 'snek' });
    const result = rooms.map((r: any) => ({
      roomId: r.roomId,
      roomCode: r.metadata?.roomCode || '',
      displayName: r.metadata?.displayName || '',
      playerCount: r.metadata?.playerCount ?? r.clients ?? 0,
      maxPlayers: r.maxClients ?? 4,
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to list rooms' });
  }
});

(async () => {
  await loadConfigOverrides();
  httpServer.listen(DEFAULT_PORT, () => {
    console.log(`Snek Colyseus server listening on :${DEFAULT_PORT}`);
    if (process.env.ADMIN_API_KEY) {
      console.log(`Admin panel: http://localhost:${DEFAULT_PORT}/admin?key=${process.env.ADMIN_API_KEY}`);
    }
  });
})();
