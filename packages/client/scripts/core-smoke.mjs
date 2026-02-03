// Minimal headless smoke tests for core logic
import { createInitialCoreState } from '../src/core/state.js';
import { stepCore } from '../src/core/step.js';
import { spawnFoodCore } from '../src/core/spawn.js';
import { spawnInitialEnemiesCore } from '../src/core/enemy.js';

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

function runFoodTest() {
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

  let eaten = false;
  for (let i = 0; i < 50; i++) {
    const result = stepCore(state, 0.1);
    if (result.events.some(e => e.type === 'FOOD_EATEN')) {
      eaten = true;
      break;
    }
  }
  assert(eaten, 'Food should be eaten in smoke test');
}

function runWallCollisionTest() {
  const state = createInitialCoreState(456);
  state.player.segments = [{ x: 0, y: 0, z: 0 }];
  state.player.direction = { x: 1, y: 0, z: 0 };
  state.player.nextDirection = { x: 1, y: 0, z: 0 };
  state.player.speed = 0.1;
  state.food.positions = [];
  state.obstacles = { list: [] };
  state.enemies = { list: [], kills: 0, respawnQueue: [] };

  let dead = false;
  for (let i = 0; i < 200; i++) {
    const result = stepCore(state, 0.1);
    if (result.events.some(e => e.type === 'PLAYER_DEAD' && e.payload.reason === 'WALL_COLLISION')) {
      dead = true;
      break;
    }
  }
  assert(dead, 'Player should die on wall collision');
}

function runEnemyKillRespawnTest() {
  const state = createInitialCoreState(789);
  state.player.segments = [{ x: 0, y: 0, z: 0 }];
  state.player.direction = { x: 1, y: 0, z: 0 };
  state.player.nextDirection = { x: 1, y: 0, z: 0 };
  state.player.speed = 0.1;
  state.player.alphaMode.active = true; // allow kill
  state.food.positions = [];
  state.obstacles = { list: [] };
  state.enemies = { list: [], kills: 0, respawnQueue: [] };

  spawnInitialEnemiesCore(state, 1);
  assert(state.enemies.list.length === 1, 'Enemy should spawn');

  // Move player onto enemy head position for kill
  const enemyHead = state.enemies.list[0].snake[0];
  state.player.segments[0] = { x: enemyHead.x, y: 0, z: enemyHead.z };

  let killed = false;
  for (let i = 0; i < 5; i++) {
    const result = stepCore(state, 0.1);
    if (result.events.some(e => e.type === 'ENEMY_KILLED')) {
      killed = true;
      break;
    }
  }
  assert(killed, 'Enemy should be killable in alpha mode');

  // Advance time until respawn
  let respawned = false;
  for (let i = 0; i < 200; i++) {
    const result = stepCore(state, 0.1);
    if (result.events.some(e => e.type === 'ENEMY_RESPAWNED')) {
      respawned = true;
      break;
    }
  }
  assert(respawned, 'Enemy should respawn after delay');
}

runFoodTest();
runWallCollisionTest();
runEnemyKillRespawnTest();

console.log('Core smoke tests passed');
