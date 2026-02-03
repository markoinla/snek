import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import Colyseus from 'colyseus';
import { WebSocketTransport } from '@colyseus/ws-transport';
import { Schema, type, MapSchema } from '@colyseus/schema';
import {
  INPUT_SCHEMA_VERSION,
  MessageType,
  PROTOCOL_VERSION,
  STATE_SCHEMA_VERSION,
  encodeSnapshot,
  type InputMessage,
  type ServerMeta,
} from 'snek-shared';
import type { CoreState, SerializableCoreState, EventEnvelope } from 'snek-shared';
import CONFIG from '../../client/src/config.js';
import { createInitialCoreState, createPlayerState } from '../../client/src/core/state.ts';
import { applyPlayerInput } from '../../client/src/core/player.ts';
import { stepCore } from '../../client/src/core/step.ts';
import { spawnFoodCore } from '../../client/src/core/spawn.ts';
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
  @type('number') lastInputTick = 0;
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

  onCreate() {
    this.maxClients = 4;
    this.seed = Date.now();
    this.coreState = createInitialCoreState(this.seed);
    this.initializeCoreState(this.coreState);

    this.setState(new RoomState());
    this.state.seed = this.seed;
    this.state.tick = this.coreState.tick;

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

    const meta: ServerMeta = {
      serverVersion: PROTOCOL_VERSION,
      tickRate: TICK_RATE,
      seed: this.seed,
      sessionId: client.sessionId,
    };
    client.send(MessageType.Meta, meta);
    client.send(MessageType.Snapshot, this.serializeSnapshot());

    this.onMessage('input', (client, message: InputMessage) => {
      this.handleInput(client.sessionId, message);
    });
  }

  onLeave(client: Colyseus.Client) {
    metrics.connectedClients = Math.max(0, metrics.connectedClients - 1);
    this.state.players.delete(client.sessionId);
    this.inputQueues.delete(client.sessionId);
    delete this.coreState.players[client.sessionId];
  }

  onDispose() {
    metrics.roomsActive = Math.max(0, metrics.roomsActive - 1);
  }

  private initializeCoreState(state: CoreState) {
    // Players are created on join — start with empty players map
    spawnFoodCore(state, CONFIG.NUM_INITIAL_FOOD);
    spawnInitialEnemiesCore(state, CONFIG.NUM_ENEMIES);
  }

  private nextColorIndex = 0;

  private createPlayerSnake(sessionId: string) {
    const player = createPlayerState(sessionId);
    player.colorIndex = this.nextColorIndex;
    this.nextColorIndex = (this.nextColorIndex + 1) % 4;
    const startPos = { x: 0, y: 0, z: 0 }; // TODO: generateUniquePositionCore
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
      this.broadcast(MessageType.Snapshot, this.serializeSnapshot());
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

  private serializeSnapshot(): Uint8Array {
    const { rng, ...rest } = this.coreState;
    const snapshot: SerializableCoreState = {
      ...rest,
      rng: { seed: rng.seed },
    };
    return encodeSnapshot(snapshot);
  }
}

const app = express();
app.use(cors());
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

gameServer.define('snek', SnekRoom);

httpServer.listen(DEFAULT_PORT, () => {
  console.log(`Snek Colyseus server listening on :${DEFAULT_PORT}`);
});
