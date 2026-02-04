import type { CoreState } from './types';
import { createInitialCoreState, createPlayerState } from './state';

export function bindCoreState(gameState: any): CoreState {
  const core = gameState.core || createInitialCoreState();

  // Bind players map: gameState.players → core.players
  if (gameState.players && Object.keys(gameState.players).length > 0) {
    core.players = gameState.players;
  } else if (gameState.playerSnake) {
    // Backward compat: single-player mode uses "local" key
    // Merge gameState.playerSnake into a proper PlayerState
    const localId = gameState.localPlayerId || 'local';
    const base = createPlayerState(localId);
    core.players[localId] = Object.assign(base, gameState.playerSnake);
  }

  // Ensure local player exists
  const localId = gameState.localPlayerId || 'local';
  if (!core.players[localId]) {
    core.players[localId] = createPlayerState(localId);
  }

  // Alias gameState.playerSnake to the core player so mutations are shared
  if (core.players[localId]) {
    gameState.playerSnake = core.players[localId];
  }

  core.enemies = gameState.enemies;
  core.food.positions = gameState.food.positions;
  core.obstacles = gameState.obstacles;
  core.flags = gameState.flags;

  gameState.core = core;
  return core;
}

export function applyCoreStateToGameState(gameState: any, core: CoreState) {
  gameState.core = core;

  // Sync players map
  gameState.players = core.players;

  // Alias local player for backward compat
  const localId = gameState.localPlayerId || 'local';
  gameState.playerSnake = core.players[localId] || null;

  // Alias score for backward compat (score is now per-player)
  const localPlayer = core.players[localId];
  if (localPlayer) {
    gameState.score = localPlayer.score;
  }

  gameState.enemies = { ...gameState.enemies, ...core.enemies };
  gameState.food = { ...gameState.food, positions: core.food.positions };
  gameState.obstacles = { ...gameState.obstacles, ...core.obstacles };
  gameState.flags = { ...gameState.flags, ...core.flags };
}
