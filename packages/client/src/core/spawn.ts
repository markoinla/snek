import * as CONFIG from '../config.js';
import type { CoreState, FoodItem } from './types';

export function generateUniquePositionCore(state: CoreState, safeZoneRadius = 0) {
  const halfGrid = Math.floor(CONFIG.GRID_SIZE / 2);
  let attempts = 0;
  const maxAttempts = CONFIG.GRID_SIZE * CONFIG.GRID_SIZE;

  while (attempts < maxAttempts) {
    const pos = {
      x: Math.floor(state.rng.nextFloat() * CONFIG.GRID_SIZE) - halfGrid,
      y: 0,
      z: Math.floor(state.rng.nextFloat() * CONFIG.GRID_SIZE) - halfGrid,
    };

    if (Math.abs(pos.x) <= safeZoneRadius && Math.abs(pos.z) <= safeZoneRadius) {
      attempts++;
      continue;
    }

    if (!isPositionOccupiedCore(state, pos)) {
      return pos;
    }

    attempts++;
  }

  return { x: 0, y: 0, z: 0 };
}

export function isPositionOccupiedCore(state: CoreState, targetPos: { x: number; z: number }) {
  if (state.player?.segments?.some(segment => segment.x === targetPos.x && segment.z === targetPos.z)) {
    return true;
  }
  if (state.food?.positions?.some(f => f.x === targetPos.x && f.z === targetPos.z)) {
    return true;
  }
  if (state.obstacles?.list) {
    for (const obs of state.obstacles.list) {
      if (obs.occupiedCells?.some(cell => cell.x === targetPos.x && cell.z === targetPos.z)) {
        return true;
      }
    }
  }
  if (state.enemies?.list) {
    for (const enemy of state.enemies.list) {
      if (enemy.snake.some(segment => segment.x === targetPos.x && segment.z === targetPos.z)) {
        return true;
      }
    }
  }
  return false;
}

export function selectFoodTypeByRatioCore(rng: { nextFloat: () => number }) {
  const randomValue = Math.floor(rng.nextFloat() * 100) + 1;
  let cumulativeProbability = 0;

  for (const key of Object.keys(CONFIG.FOOD_SPAWN_RATIOS)) {
    const ratio = CONFIG.FOOD_SPAWN_RATIOS[key] || 0;
    cumulativeProbability += ratio;
    if (randomValue <= cumulativeProbability) {
      return key;
    }
  }

  return 'normal';
}

export function spawnFoodCore(state: CoreState, count: number, safeZoneRadius = 0) {
  for (let i = 0; i < count; i++) {
    addFoodCore(state, safeZoneRadius);
  }
}

export function addFoodCore(state: CoreState, safeZoneRadius = 0) {
  const pos = generateUniquePositionCore(state, safeZoneRadius);
  const type = selectFoodTypeByRatioCore(state.rng);
  const spawned: FoodItem = { ...pos, type };

  if (type !== 'normal') {
    const direction = randomCardinalDirection(state);
    const intervalVariance = 0.8 + state.rng.nextFloat() * 0.4;
    const distanceVariance = (state.rng.nextFloat() * 2 - 1) * CONFIG.FROG_MOVEMENT.DISTANCE_VARIATION;
    spawned.movement = {
      directionX: direction.x,
      directionZ: direction.z,
      timer: 0,
      moveInterval: CONFIG.FROG_MOVEMENT.MOVE_INTERVAL * intervalVariance,
      maxDistance: Math.max(1, CONFIG.FROG_MOVEMENT.MAX_DISTANCE + distanceVariance),
      originX: spawned.x,
      originZ: spawned.z,
      changeProbability: CONFIG.FROG_MOVEMENT.DIRECTION_CHANGE_PROBABILITY,
    };
  }

  state.food.positions.push(spawned);
  return spawned;
}

export function randomCardinalDirection(state: CoreState) {
  const dirs = [
    { x: 1, z: 0 },
    { x: -1, z: 0 },
    { x: 0, z: 1 },
    { x: 0, z: -1 },
  ];
  return dirs[state.rng.nextInt(dirs.length)];
}
