import CONFIG from '../config.js';
import type { CoreState } from './types';
import { randomCardinalDirection } from './spawn';

export type FoodEatResult = {
  index: number;
  type: string;
  scoreValue: number;
  grow: boolean;
  effects: FoodEffects;
};

export type FoodEffects = {
  alphaPoints: number;
  speedBoostDuration: number;
  alphaModeExtension: number;
  addScoreMultiplier: boolean;
};

export function checkAndEatFoodCore(state: CoreState, position: { x: number; z: number }): FoodEatResult | null {
  const food = state.food;
  if (!food?.positions) return null;

  for (let i = 0; i < food.positions.length; i++) {
    const item = food.positions[i];
    if (position.x === item.x && position.z === item.z) {
      const effects = getFoodEffects(item.type, state.player?.alphaMode?.active || false);
      return {
        index: i,
        type: item.type,
        scoreValue: 1,
        grow: item.type !== 'shrink',
        effects,
      };
    }
  }

  return null;
}

export function getFoodEffects(foodType: string, isAlphaModeActive: boolean): FoodEffects {
  if (foodType === 'normal') {
    return {
      alphaPoints: CONFIG.ALPHA_POINTS_FOOD,
      speedBoostDuration: CONFIG.FOOD_SPEED_BOOST_DURATION,
      alphaModeExtension: isAlphaModeActive ? CONFIG.ALPHA_MODE_EXTENSION_PER_FOOD : 0,
      addScoreMultiplier: isAlphaModeActive,
    };
  }

  const basePoints = CONFIG.ALPHA_POINTS_FROG;
  const multiplier = isAlphaModeActive ? CONFIG.ALPHA_POINTS_FROG_MULTIPLIER : 1;
  return {
    alphaPoints: basePoints * multiplier,
    speedBoostDuration: 0,
    alphaModeExtension: 0,
    addScoreMultiplier: false,
  };
}

export function updateFoodMovementCore(state: CoreState, delta: number) {
  for (const item of state.food.positions) {
    if (item.type === 'normal') continue;
    if (!item.movement) {
      const dir = randomCardinalDirection(state);
      item.movement = {
        directionX: dir.x,
        directionZ: dir.z,
        timer: 0,
        moveInterval: CONFIG.FROG_MOVEMENT.MOVE_INTERVAL,
        maxDistance: CONFIG.FROG_MOVEMENT.MAX_DISTANCE,
        originX: item.x,
        originZ: item.z,
        changeProbability: CONFIG.FROG_MOVEMENT.DIRECTION_CHANGE_PROBABILITY,
      };
    }

    item.movement.timer += delta;
    if (item.movement.timer < item.movement.moveInterval) continue;

    item.movement.timer = 0;

    if (state.rng.nextFloat() < item.movement.changeProbability) {
      const newDir = randomCardinalDirection(state);
      item.movement.directionX = newDir.x;
      item.movement.directionZ = newDir.z;
    }

    let nextX = item.x + item.movement.directionX;
    let nextZ = item.z + item.movement.directionZ;

    const maxDist = item.movement.maxDistance;
    const distX = Math.abs(nextX - item.movement.originX);
    const distZ = Math.abs(nextZ - item.movement.originZ);

    const halfGrid = CONFIG.GRID_SIZE / 2;
    const outOfBounds =
      nextX >= halfGrid ||
      nextX < -halfGrid ||
      nextZ >= halfGrid ||
      nextZ < -halfGrid;

    if (distX > maxDist || distZ > maxDist || outOfBounds) {
      // Turn back toward origin when out of bounds or too far
      if (Math.abs(item.x - item.movement.originX) > Math.abs(item.z - item.movement.originZ)) {
        item.movement.directionX = Math.sign(item.movement.originX - item.x) || item.movement.directionX * -1;
        item.movement.directionZ = 0;
      } else {
        item.movement.directionZ = Math.sign(item.movement.originZ - item.z) || item.movement.directionZ * -1;
        item.movement.directionX = 0;
      }
      nextX = item.x + item.movement.directionX;
      nextZ = item.z + item.movement.directionZ;
    }

    item.x = nextX;
    item.z = nextZ;
  }
}
