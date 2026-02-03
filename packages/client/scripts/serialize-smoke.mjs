import { createInitialCoreState, createPlayerState } from '../src/core/state.ts';
import { encodeSnapshot, decodeSnapshot, encodeDelta, applyDelta } from 'snek-shared';

// Stub localStorage for gameState import side-effects
if (!globalThis.localStorage) {
  globalThis.localStorage = {
    getItem: () => null,
    setItem: () => {},
  };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const state = createInitialCoreState(42);
state.players['test'] = createPlayerState('test');
state.players['test'].segments = [{ x: 0, y: 0, z: 0 }];
state.food.positions = [{ x: 1, y: 0, z: 1, type: 'normal' }];

const snap = encodeSnapshot(state);
const restored = decodeSnapshot(snap);
assert(restored.players['test'].segments.length === 1, 'Snapshot round-trip should preserve player');

const next = createInitialCoreState(43);
next.players['test'] = createPlayerState('test');
next.players['test'].segments = [{ x: 2, y: 0, z: 2 }];
const delta = encodeDelta(state, next);
const applied = applyDelta(state, delta);
assert(applied.players['test'].segments[0].x === 2, 'Delta application should update state');

console.log('Serialize smoke test passed');
