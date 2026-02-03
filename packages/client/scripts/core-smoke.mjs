// Minimal headless smoke tests for core logic
import { createInitialCoreState, createPlayerState } from '../src/core/state.ts';
import { stepCore } from '../src/core/step.ts';
import { spawnFoodCore } from '../src/core/spawn.ts';
import { spawnInitialEnemiesCore } from '../src/core/enemy.ts';

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

function hasEvent(events, type, predicate) {
  return events.some(e => e.event.type === type && (!predicate || predicate(e.event)));
}

function runFoodTest() {
  const state = createInitialCoreState(123);
  state.players['test'] = createPlayerState('test');
  state.players['test'].segments = [{ x: 0, y: 0, z: 0 }];
  state.players['test'].direction = { x: 1, y: 0, z: 0 };
  state.players['test'].nextDirection = { x: 1, y: 0, z: 0 };
  state.players['test'].speed = 0.1;
  state.food.positions = [];
  state.obstacles = { list: [] };
  state.enemies = { list: [], kills: 0, respawnQueue: [] };

  // Place food directly in player's path (3 cells ahead)
  state.food.positions.push({ x: 3, y: 0, z: 0, type: 'normal' });
  assert(state.food.positions.length === 1, 'Food should exist');

  let eaten = false;
  for (let i = 0; i < 50; i++) {
    const result = stepCore(state, 0.1);
    if (hasEvent(result.events, 'FOOD_EATEN')) {
      eaten = true;
      break;
    }
  }
  assert(eaten, 'Food should be eaten in smoke test');
}

function runWallCollisionTest() {
  const state = createInitialCoreState(456);
  state.players['test'] = createPlayerState('test');
  state.players['test'].segments = [{ x: 0, y: 0, z: 0 }];
  state.players['test'].direction = { x: 1, y: 0, z: 0 };
  state.players['test'].nextDirection = { x: 1, y: 0, z: 0 };
  state.players['test'].speed = 0.1;
  state.food.positions = [];
  state.obstacles = { list: [] };
  state.enemies = { list: [], kills: 0, respawnQueue: [] };

  let dead = false;
  for (let i = 0; i < 200; i++) {
    const result = stepCore(state, 0.1);
    if (hasEvent(result.events, 'PLAYER_DEAD', e => e.payload.reason === 'WALL_COLLISION')) {
      dead = true;
      break;
    }
  }
  assert(dead, 'Player should die on wall collision');
}

function runEnemyKillRespawnTest() {
  const state = createInitialCoreState(789);
  state.players['test'] = createPlayerState('test');
  state.players['test'].segments = [{ x: 0, y: 0, z: 0 }];
  state.players['test'].direction = { x: 1, y: 0, z: 0 };
  state.players['test'].nextDirection = { x: 1, y: 0, z: 0 };
  state.players['test'].speed = 0.1;
  state.players['test'].alphaMode.active = true; // allow kill
  state.food.positions = [];
  state.obstacles = { list: [] };
  state.enemies = { list: [], kills: 0, respawnQueue: [] };

  spawnInitialEnemiesCore(state, 1);
  assert(state.enemies.list.length === 1, 'Enemy should spawn');

  // Move player onto enemy head position for kill
  const enemyHead = state.enemies.list[0].snake[0];
  state.players['test'].segments[0] = { x: enemyHead.x, y: 0, z: enemyHead.z };

  let killed = false;
  for (let i = 0; i < 5; i++) {
    const result = stepCore(state, 0.1);
    if (hasEvent(result.events, 'ENEMY_KILLED')) {
      killed = true;
      break;
    }
  }
  assert(killed, 'Enemy should be killable in alpha mode');

  // Advance time until respawn
  let respawned = false;
  for (let i = 0; i < 200; i++) {
    const result = stepCore(state, 0.1);
    if (hasEvent(result.events, 'ENEMY_RESPAWNED')) {
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
