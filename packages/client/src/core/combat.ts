import * as CONFIG from '../config.js';
import type { CoreState } from './types';

export type EnemyCollisionResult = {
  enemyId: number;
  segmentIndex: number;
  isTail: boolean;
  isHead: boolean;
} | null;

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
  const enemyIndex = state.enemies.list.findIndex(e => e.id === enemyId);
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
