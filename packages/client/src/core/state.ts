import type { CoreState } from './types';
import { createRng } from './rng';

export function createInitialCoreState(seed = Date.now()): CoreState {
  return {
    time: 0,
    rng: createRng(seed),
    player: {
      segments: [],
      direction: { x: 1, y: 0, z: 0 },
      nextDirection: { x: 1, y: 0, z: 0 },
      speed: 0,
      moveTimer: 0,
      animationFrame: 0,
      animationTimer: 0,
      scoreMultiplier: 1,
      ghostModeActive: false,
      activePowerUp: null,
      enlargedHeadUntil: 0,
      alphaMode: {
        active: false,
        startTime: 0,
        endTime: 0,
        lastScoreThreshold: 0,
      },
    },
    enemies: {
      list: [],
      kills: 0,
    },
    food: {
      positions: [],
    },
    obstacles: {
      list: [],
    },
    score: {
      current: 0,
      multiplier: 1,
    },
    flags: {
      gameOver: false,
    },
  };
}
