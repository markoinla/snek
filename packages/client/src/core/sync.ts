import type { CoreState } from './types';
import { createInitialCoreState } from './state';

export function bindCoreState(gameState: any): CoreState {
  const core = gameState.core || createInitialCoreState();

  core.player = gameState.playerSnake;
  core.enemies = gameState.enemies;
  core.food.positions = gameState.food.positions;
  core.obstacles = gameState.obstacles;
  core.score = gameState.score;
  core.flags = gameState.flags;

  gameState.core = core;
  return core;
}
