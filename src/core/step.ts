import type { CoreState, StepResult } from './types';
import { updatePlayerCore } from './player';
import { checkAndEatFoodCore } from './food';
import { addFoodCore } from './spawn';
import { updateEnemiesCore, spawnEnemyCore } from './enemy';
import { checkEnemyCollisionCoreDetailed, killEnemyCore, processEnemyRespawnsCore } from './combat';

export function stepCore(state: CoreState, delta: number): StepResult {
  state.time += delta;
  const result = updatePlayerCore(state, delta);

  const moved = result.events.some(event => event.type === 'PLAYER_MOVED');
  if (moved) {
    const head = state.player.segments[0];
    if (head) {
      const enemyCollision = checkEnemyCollisionCoreDetailed(state, { x: head.x, z: head.z });
      if (enemyCollision) {
        const alphaActive = state.player.alphaMode?.active;
        const ghostActive = state.player.ghostModeActive;
        const canEat = enemyCollision.isTail || alphaActive;

        if (canEat) {
          if (killEnemyCore(state, enemyCollision.enemyId)) {
            result.events.push({
              type: 'ENEMY_KILLED',
              payload: { enemyId: enemyCollision.enemyId, viaTail: enemyCollision.isTail },
            });
          }
        } else if (!ghostActive) {
          state.flags.gameOver = true;
          result.events.push({ type: 'PLAYER_DEAD', payload: { reason: 'ENEMY_COLLISION' } });
          return result;
        }
      }

      const foodResult = checkAndEatFoodCore(state, { x: head.x, z: head.z });
      if (foodResult) {
        // Remove food from core state
        state.food.positions.splice(foodResult.index, 1);

        const scoreMultiplier = state.player.alphaMode?.active ? state.player.scoreMultiplier : 1;
        const scoreDelta = Math.round(foodResult.scoreValue * scoreMultiplier);
        state.score.current += scoreDelta;

        result.events.push({
          type: 'FOOD_EATEN',
          payload: { type: foodResult.type, score: scoreDelta, effects: foodResult.effects },
        });
        result.events.push({
          type: 'SCORE_CHANGED',
          payload: { score: state.score.current },
        });

        // Respawn food deterministically in core
        const spawned = addFoodCore(state);
        if (spawned) {
          result.events.push({
            type: 'FOOD_SPAWNED',
            payload: { type: spawned.type, x: spawned.x, z: spawned.z },
          });
        }
      }
    }
  }

  const enemyResult = updateEnemiesCore(state, delta);
  result.events.push(...enemyResult.events);

  const respawned = processEnemyRespawnsCore(state);
  respawned.forEach(enemyId => {
    spawnEnemyCore(state, enemyId);
    result.events.push({ type: 'ENEMY_RESPAWNED', payload: { enemyId } });
  });

  return result;
}
