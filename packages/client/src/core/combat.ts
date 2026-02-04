import CONFIG from '../config';
import type { CoreState } from './types';
import { generateUniquePositionCore } from './spawn';
import { createPlayerState } from './state';

export type EnemyCollisionResult = {
  enemyId: number;
  segmentIndex: number;
  isTail: boolean;
  isHead: boolean;
} | null;

export type PlayerCollisionResult = {
  targetPlayerId: string;
  segmentIndex: number;
  isHead: boolean;
  isTail: boolean;
} | null;

/**
 * Check if a position collides with any other player's segments.
 * Skips the player identified by `excludePlayerId` and any dead players.
 */
export function checkPlayerCollisionCore(
  state: CoreState,
  pos: { x: number; z: number },
  excludePlayerId: string
): PlayerCollisionResult {
  for (const [pid, player] of Object.entries(state.players)) {
    if (pid === excludePlayerId || player.dead) continue;
    for (let i = 0; i < player.segments.length; i++) {
      const seg = player.segments[i];
      if (seg.x === pos.x && seg.z === pos.z) {
        const isTail = i >= player.segments.length - CONFIG.PLAYER_TAIL_EDIBLE_SEGMENTS;
        return { targetPlayerId: pid, segmentIndex: i, isHead: i === 0, isTail };
      }
    }
  }
  return null;
}

export function checkEnemyCollisionCoreDetailed(state: CoreState, pos: { x: number; z: number }): EnemyCollisionResult {
  for (const enemy of state.enemies.list) {
    for (let i = 0; i < enemy.snake.length; i++) {
      const seg = enemy.snake[i];
      if (seg.x === pos.x && seg.z === pos.z) {
        const isTail = i >= enemy.snake.length - CONFIG.ENEMY_TAIL_EDIBLE_SEGMENTS;
        return { enemyId: enemy.id, segmentIndex: i, isTail, isHead: i === 0 };
      }
    }
  }
  return null;
}

export function killEnemyCore(state: CoreState, enemyId: number) {
  const enemyIndex = state.enemies.list.findIndex((e: { id: number }) => e.id === enemyId);
  if (enemyIndex === -1) return false;
  state.enemies.list.splice(enemyIndex, 1);
  state.enemies.kills = (state.enemies.kills || 0) + 1;
  if (!state.enemies.respawnQueue) state.enemies.respawnQueue = [];
  state.enemies.respawnQueue.push({ id: enemyId, respawnTime: state.time + CONFIG.ENEMY_RESPAWN_TIME });
  return true;
}

export function processEnemyRespawnsCore(state: CoreState) {
  if (!state.enemies.respawnQueue?.length) return [] as number[];

  const respawned: number[] = [];
  const remaining = [];
  for (const item of state.enemies.respawnQueue) {
    if (state.time >= item.respawnTime) {
      respawned.push(item.id);
    } else {
      remaining.push(item);
    }
  }
  state.enemies.respawnQueue = remaining;
  return respawned;
}

/**
 * Mark a player as dead and schedule respawn.
 */
export function killPlayerCore(state: CoreState, playerId: string) {
  const player = state.players[playerId];
  if (!player || player.dead) return;
  player.dead = true;
  player.respawnAt = state.tick + CONFIG.PLAYER_RESPAWN_DELAY_TICKS;
}

/**
 * Check all dead players and respawn those whose respawnAt tick has arrived.
 * Returns list of respawned player IDs.
 */
export function processPlayerRespawnsCore(state: CoreState): string[] {
  const respawned: string[] = [];
  for (const [pid, player] of Object.entries(state.players)) {
    if (!player.dead || player.respawnAt <= 0) continue;
    if (state.tick >= player.respawnAt) {
      // Reset player to fresh state, preserving identity
      const fresh = createPlayerState(pid);
      const startPos = generateUniquePositionCore(state, CONFIG.START_SAFE_ZONE);
      fresh.segments = [];
      for (let i = 0; i < CONFIG.PLAYER_RESPAWN_LENGTH; i++) {
        fresh.segments.push({ x: startPos.x - i, y: 0, z: startPos.z });
      }
      fresh.direction = { x: 1, y: 0, z: 0 };
      fresh.nextDirection = { x: 1, y: 0, z: 0 };
      fresh.speed = CONFIG.BASE_SNAKE_SPEED;
      fresh.colorIndex = player.colorIndex; // preserve color assignment
      state.players[pid] = fresh;
      respawned.push(pid);
    }
  }
  return respawned;
}
