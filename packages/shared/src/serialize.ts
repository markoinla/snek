import type { CoreState, SerializableCoreState } from './core-types';

type CoreStateLike = CoreState | SerializableCoreState;

function toSerializable(state: CoreStateLike): SerializableCoreState {
  const maybeRng = (state as CoreState).rng;
  if (maybeRng && typeof maybeRng.nextFloat === 'function') {
    const { rng, ...rest } = state as CoreState;
    return { ...rest, rng: { seed: rng.seed } };
  }
  return state as SerializableCoreState;
}

export const STATE_SCHEMA_VERSION = 1 as const;

export type SnapshotEnvelope = {
  version: typeof STATE_SCHEMA_VERSION;
  full: true;
  state: SerializableCoreState;
};

export type DeltaEnvelope = {
  version: typeof STATE_SCHEMA_VERSION;
  full: false;
  state: SerializableCoreState;
};

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

// TODO: Replace with structural diff encoding.
export function encodeDelta(_prev: CoreStateLike, next: CoreStateLike): Uint8Array {
  const payload: DeltaEnvelope = { version: STATE_SCHEMA_VERSION, full: false, state: toSerializable(next) };
  const json = JSON.stringify(payload);
  return new TextEncoder().encode(json);
}

// TODO: Replace with delta patch application.
export function applyDelta(_state: SerializableCoreState, delta: Uint8Array): SerializableCoreState {
  const json = new TextDecoder().decode(delta);
  const payload = JSON.parse(json) as DeltaEnvelope;
  return payload.state;
}
