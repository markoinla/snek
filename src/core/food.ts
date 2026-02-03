import * as CONFIG from '../config.js';
import type { CoreState } from './types';

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
