// Minimal headless smoke tests for core logic
import { createInitialCoreState } from '../src/core/state.js';
import { stepCore } from '../src/core/step.js';
import { spawnFoodCore } from '../src/core/spawn.js';

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

const state = createInitialCoreState(123);
state.player.segments = [{ x: 0, y: 0, z: 0 }];
state.player.direction = { x: 1, y: 0, z: 0 };
state.player.nextDirection = { x: 1, y: 0, z: 0 };
state.player.speed = 0.1;
state.food.positions = [];
state.obstacles = { list: [] };
state.enemies = { list: [], kills: 0, respawnQueue: [] };

spawnFoodCore(state, 1);
assert(state.food.positions.length === 1, 'Food should spawn');

// Move until food eaten (or max ticks)
let eaten = false;
for (let i = 0; i < 50; i++) {
  const result = stepCore(state, 0.1);
  if (result.events.some(e => e.type === 'FOOD_EATEN')) {
    eaten = true;
    break;
  }
}
assert(eaten, 'Food should be eaten in smoke test');

console.log('Core smoke test passed');
