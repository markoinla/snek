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

export function applyCoreStateToGameState(gameState: any, core: CoreState) {
  gameState.core = core;
  gameState.playerSnake = core.player;
  gameState.enemies = { ...gameState.enemies, ...core.enemies };
  gameState.food = { ...gameState.food, positions: core.food.positions };
  gameState.obstacles = { ...gameState.obstacles, ...core.obstacles };
  gameState.score = core.score;
  gameState.flags = { ...gameState.flags, ...core.flags };
}
