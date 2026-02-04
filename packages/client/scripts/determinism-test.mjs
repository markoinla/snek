import { createInitialCoreState, createPlayerState } from '../src/core/state.ts';
import { stepCore } from '../src/core/step.ts';
import { applyPlayerInput } from '../src/core/player.ts';
import { spawnFoodCore } from '../src/core/spawn.ts';
import { spawnInitialEnemiesCore } from '../src/core/enemy.ts';

if (!globalThis.localStorage) {
  globalThis.localStorage = {
    getItem: () => null,
    setItem: () => {},
  };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function initState(seed) {
  const state = createInitialCoreState(seed);
  state.players['test'] = createPlayerState('test');
  state.players['test'].segments = [{ x: 0, y: 0, z: 0 }];
  state.players['test'].direction = { x: 1, y: 0, z: 0 };
  state.players['test'].nextDirection = { x: 1, y: 0, z: 0 };
  state.players['test'].speed = 0.1;
  state.obstacles = { list: [] };
  state.food.positions = [];
  state.enemies = { list: [], kills: 0, respawnQueue: [] };
  spawnFoodCore(state, 5);
  spawnInitialEnemiesCore(state, 2);
  return state;
}

function serializeState(state) {
  const { rng, ...rest } = state;
  return JSON.stringify({ ...rest, rng: { seed: rng.seed } });
}

const seed = 12345;
const stateA = initState(seed);
const stateB = initState(seed);

for (let tick = 0; tick < 120; tick++) {
  if (tick % 5 === 0) {
    applyPlayerInput(stateA, { turn: 'left', playerId: 'test' });
    applyPlayerInput(stateB, { turn: 'left', playerId: 'test' });
  }
  if (tick % 7 === 0) {
    applyPlayerInput(stateA, { turn: 'right', playerId: 'test' });
    applyPlayerInput(stateB, { turn: 'right', playerId: 'test' });
  }
  stepCore(stateA, 1 / 30);
  stepCore(stateB, 1 / 30);
}

assert(serializeState(stateA) === serializeState(stateB), 'Determinism test failed');
console.log('Determinism test passed');
