import type { CoreState, SerializableCoreState, PlayerState, FoodItem, Vec3 } from './core-types';

type CoreStateLike = CoreState | SerializableCoreState;

function toSerializable(state: CoreStateLike): SerializableCoreState {
  const maybeRng = (state as CoreState).rng;
  if (maybeRng && typeof maybeRng.nextFloat === 'function') {
    const { rng, ...rest } = state as CoreState;
    return { ...rest, rng: { seed: rng.seed } };
  }
  return state as SerializableCoreState;
}

export const STATE_SCHEMA_VERSION = 2 as const;

// --- Full Snapshot ---

export type SnapshotEnvelope = {
  version: typeof STATE_SCHEMA_VERSION;
  full: true;
  state: SerializableCoreState;
};

// --- Delta Patch Types ---

export type PlayerPatch = Partial<Pick<
  PlayerState,
  'segments' | 'direction' | 'nextDirection' | 'speed' | 'score' | 'dead' |
  'respawnAt' | 'ghostModeActive' | 'name' | 'colorIndex' | 'moveTimer' |
  'scoreMultiplier' | 'activePowerUps' | 'alphaMode'
>>;

export type DeltaPatch = {
  tick: number;
  time: number;
  eventIdCounter?: number;
  players?: Record<string, PlayerPatch | null>; // null = removed
  enemies?: SerializableCoreState['enemies'];
  food?: { positions: FoodItem[] };
  rng?: { seed: number };
  flags?: SerializableCoreState['flags'];
};

export type DeltaEnvelope = {
  version: typeof STATE_SCHEMA_VERSION;
  full: false;
  baseTick: number;
  patch: DeltaPatch;
};

export type SnapshotMessage = SnapshotEnvelope | DeltaEnvelope;

// --- Encoding ---

export function encodeSnapshot(state: CoreStateLike): Uint8Array {
  const payload: SnapshotEnvelope = { version: STATE_SCHEMA_VERSION, full: true, state: toSerializable(state) };
  const json = JSON.stringify(payload);
  return new TextEncoder().encode(json);
}

export function decodeSnapshot(buffer: Uint8Array): SerializableCoreState {
  const json = new TextDecoder().decode(buffer);
  const payload = JSON.parse(json) as SnapshotEnvelope;
  return payload.state;
}

// --- Delta Computation ---

function arraysEqual<T>(a: T[], b: T[], eq: (x: T, y: T) => boolean): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!eq(a[i], b[i])) return false;
  }
  return true;
}

function vec3Equal(a: Vec3, b: Vec3): boolean {
  return a.x === b.x && a.y === b.y && a.z === b.z;
}

function segmentsEqual(a: Vec3[], b: Vec3[]): boolean {
  return arraysEqual(a, b, vec3Equal);
}

function diffPlayer(prev: PlayerState, next: PlayerState): PlayerPatch | null {
  const patch: PlayerPatch = {};
  let changed = false;

  if (!segmentsEqual(prev.segments, next.segments)) {
    patch.segments = next.segments;
    changed = true;
  }
  if (!vec3Equal(prev.direction, next.direction)) {
    patch.direction = next.direction;
    changed = true;
  }
  if (!vec3Equal(prev.nextDirection, next.nextDirection)) {
    patch.nextDirection = next.nextDirection;
    changed = true;
  }
  if (prev.speed !== next.speed) {
    patch.speed = next.speed;
    changed = true;
  }
  if (prev.score?.current !== next.score?.current || prev.score?.multiplier !== next.score?.multiplier) {
    patch.score = next.score;
    changed = true;
  }
  if (prev.dead !== next.dead) {
    patch.dead = next.dead;
    changed = true;
  }
  if (prev.respawnAt !== next.respawnAt) {
    patch.respawnAt = next.respawnAt;
    changed = true;
  }
  if (prev.ghostModeActive !== next.ghostModeActive) {
    patch.ghostModeActive = next.ghostModeActive;
    changed = true;
  }
  if (prev.name !== next.name) {
    patch.name = next.name;
    changed = true;
  }
  if (prev.colorIndex !== next.colorIndex) {
    patch.colorIndex = next.colorIndex;
    changed = true;
  }
  if (prev.moveTimer !== next.moveTimer) {
    patch.moveTimer = next.moveTimer;
    changed = true;
  }
  if (prev.scoreMultiplier !== next.scoreMultiplier) {
    patch.scoreMultiplier = next.scoreMultiplier;
    changed = true;
  }
  if (prev.alphaMode?.active !== next.alphaMode?.active ||
      prev.alphaMode?.progress !== next.alphaMode?.progress ||
      prev.alphaMode?.alphaPoints !== next.alphaMode?.alphaPoints) {
    patch.alphaMode = next.alphaMode;
    changed = true;
  }

  return changed ? patch : null;
}

export function computeDelta(prev: SerializableCoreState, next: SerializableCoreState): DeltaPatch {
  const patch: DeltaPatch = {
    tick: next.tick,
    time: next.time,
  };

  if (prev.eventIdCounter !== next.eventIdCounter) {
    patch.eventIdCounter = next.eventIdCounter;
  }

  // Players diff
  const playerPatches: Record<string, PlayerPatch | null> = {};
  let hasPlayerChanges = false;

  // Check for changed or new players
  for (const id of Object.keys(next.players)) {
    if (!prev.players[id]) {
      // New player — include full state
      playerPatches[id] = { ...next.players[id] };
      hasPlayerChanges = true;
    } else {
      const diff = diffPlayer(prev.players[id], next.players[id]);
      if (diff) {
        playerPatches[id] = diff;
        hasPlayerChanges = true;
      }
    }
  }

  // Check for removed players
  for (const id of Object.keys(prev.players)) {
    if (!next.players[id]) {
      playerPatches[id] = null;
      hasPlayerChanges = true;
    }
  }

  if (hasPlayerChanges) {
    patch.players = playerPatches;
  }

  // Enemies: full replacement (they move every tick, diffing cost > benefit)
  patch.enemies = next.enemies;

  // Food: include if changed
  if (prev.food.positions.length !== next.food.positions.length ||
      JSON.stringify(prev.food.positions) !== JSON.stringify(next.food.positions)) {
    patch.food = next.food;
  }

  // RNG: include if seed changed
  if (prev.rng.seed !== next.rng.seed) {
    patch.rng = next.rng;
  }

  // Flags
  if (prev.flags.gameOver !== next.flags.gameOver) {
    patch.flags = next.flags;
  }

  return patch;
}

export function applyDeltaPatch(state: SerializableCoreState, patch: DeltaPatch): SerializableCoreState {
  const result: SerializableCoreState = {
    ...state,
    tick: patch.tick,
    time: patch.time,
    eventIdCounter: patch.eventIdCounter ?? state.eventIdCounter,
    rng: patch.rng ?? state.rng,
    flags: patch.flags ?? state.flags,
    enemies: patch.enemies ?? state.enemies,
    food: patch.food ?? state.food,
    obstacles: state.obstacles, // obstacles never change mid-game
    players: { ...state.players },
  };

  if (patch.players) {
    for (const [id, playerPatch] of Object.entries(patch.players)) {
      if (playerPatch === null) {
        // Player removed
        delete result.players[id];
      } else if (!state.players[id]) {
        // New player — playerPatch contains full state
        result.players[id] = playerPatch as PlayerState;
      } else {
        // Merge patch into existing player
        result.players[id] = { ...state.players[id], ...playerPatch };
      }
    }
  }

  return result;
}

// --- Encoding / Decoding ---

export function encodeDelta(prev: CoreStateLike, next: CoreStateLike): Uint8Array {
  const prevSer = toSerializable(prev);
  const nextSer = toSerializable(next);
  const patch = computeDelta(prevSer, nextSer);
  const payload: DeltaEnvelope = {
    version: STATE_SCHEMA_VERSION,
    full: false,
    baseTick: prevSer.tick,
    patch,
  };
  const json = JSON.stringify(payload);
  return new TextEncoder().encode(json);
}

export function decodeMessage(buffer: Uint8Array): SnapshotMessage {
  const json = new TextDecoder().decode(buffer);
  return JSON.parse(json) as SnapshotMessage;
}

// Kept for backward compatibility
export function applyDelta(_state: SerializableCoreState, delta: Uint8Array): SerializableCoreState {
  const message = decodeMessage(delta);
  if (message.full) {
    return (message as SnapshotEnvelope).state;
  }
  return applyDeltaPatch(_state, (message as DeltaEnvelope).patch);
}
