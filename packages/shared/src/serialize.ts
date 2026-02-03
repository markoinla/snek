import type { CoreState } from './core-types';

export const STATE_SCHEMA_VERSION = 1 as const;

export type SnapshotEnvelope = {
  version: typeof STATE_SCHEMA_VERSION;
  full: true;
  state: CoreState;
};

export type DeltaEnvelope = {
  version: typeof STATE_SCHEMA_VERSION;
  full: false;
  state: CoreState;
};

export function encodeSnapshot(state: CoreState): Uint8Array {
  const payload: SnapshotEnvelope = { version: STATE_SCHEMA_VERSION, full: true, state };
  const json = JSON.stringify(payload);
  return new TextEncoder().encode(json);
}

export function decodeSnapshot(buffer: Uint8Array): CoreState {
  const json = new TextDecoder().decode(buffer);
  const payload = JSON.parse(json) as SnapshotEnvelope;
  return payload.state;
}

// TODO: Replace with structural diff encoding.
export function encodeDelta(prev: CoreState, next: CoreState): Uint8Array {
  const payload: DeltaEnvelope = { version: STATE_SCHEMA_VERSION, full: false, state: next };
  const json = JSON.stringify(payload);
  return new TextEncoder().encode(json);
}

// TODO: Replace with delta patch application.
export function applyDelta(_state: CoreState, delta: Uint8Array): CoreState {
  const json = new TextDecoder().decode(delta);
  const payload = JSON.parse(json) as DeltaEnvelope;
  return payload.state;
}
