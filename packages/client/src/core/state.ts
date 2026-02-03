import type { CoreState } from './types';
import type { PlayerState } from 'snek-shared';
import { createRng } from './rng';

export function createPlayerState(id: string): PlayerState {
  return {
    segments: [],
    direction: { x: 1, y: 0, z: 0 },
    nextDirection: { x: 1, y: 0, z: 0 },
    speed: 0,
    moveTimer: 0,
    animationFrame: 0,
    animationTimer: 0,
    scoreMultiplier: 1,
    ghostModeActive: false,
    activePowerUps: [],
    enlargedHeadUntil: 0,
    alphaMode: {
      active: false,
      startTime: 0,
      endTime: 0,
      lastScoreThreshold: 0,
      alphaPoints: 0,
      lastDecayTime: 0,
      scoreMultiplier: 1,
      scoreMultiplierStack: [],
      consecutiveActivations: 0,
      cooldownActive: false,
      cooldownEndTime: 0,
      progress: 0,
    },
    dead: false,
    respawnAt: 0,
    score: { current: 0, multiplier: 1 },
    colorIndex: 0,
  };
}

export function createInitialCoreState(seed = Date.now()): CoreState {
  return {
    time: 0,
    tick: 0,
    eventIdCounter: 0,
    rng: createRng(seed),
    players: {},
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
    flags: {
      gameOver: false,
    },
  };
}
