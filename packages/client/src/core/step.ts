import * as CONFIG from '../config.js';
import type { CoreState, CoreStepResult, StepResult } from './types';
import { EventType, EVENT_SCHEMA_VERSION } from 'snek-shared';
import { updatePlayerCore } from './player';
import { checkAndEatFoodCore, updateFoodMovementCore } from './food';
import { addFoodCore } from './spawn';
import { updateEnemiesCore, spawnEnemyCore } from './enemy';
import { checkEnemyCollisionCoreDetailed, killEnemyCore, processEnemyRespawnsCore } from './combat';
import { addAlphaPointsCore, addScoreMultiplierCore, checkAlphaModeActivationPointsCore, decayAlphaPointsCore, updateAlphaModeCore } from './alpha';
import { applyPowerUpCore, updatePowerUpTimersCore } from './powerups';

function wrapEvents(state: CoreState, events: CoreStepResult['events']): StepResult['events'] {
  return events.map(event => ({
    tick: state.tick,
    eventId: state.eventIdCounter++,
    version: EVENT_SCHEMA_VERSION,
    event
  }));
}

export function stepCore(state: CoreState, delta: number): StepResult {
  state.time += delta;
  state.tick += 1;
  const result = updatePlayerCore(state, delta);

  const moved = result.events.some(event => event.type === EventType.PlayerMoved);
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
            if (enemyCollision.isTail && !alphaActive) {
              addAlphaPointsCore(state, CONFIG.ALPHA_POINTS_ENEMY, result.events);
            }
            result.events.push({
              type: EventType.EnemyKilled,
              payload: { enemyId: enemyCollision.enemyId, viaTail: enemyCollision.isTail },
            });
          }
        } else if (!ghostActive) {
          result.events.push({ type: EventType.PlayerDead, payload: { reason: 'ENEMY_COLLISION' } });
          return { events: wrapEvents(state, result.events) };
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
          type: EventType.FoodEaten,
          payload: { type: foodResult.type, score: scoreDelta, effects: foodResult.effects },
        });
        result.events.push({
          type: EventType.ScoreChanged,
          payload: { score: state.score.current },
        });

        // Grow snake if the food effect allows it
        if (foodResult.grow) {
          const tail = state.player.segments[state.player.segments.length - 1];
          if (tail) {
            state.player.segments.push({ ...tail });
          }
        }

        // Apply food effects to core state
        if (foodResult.effects.speedBoostDuration > 0) {
          state.player.speedBoostUntil = state.time + foodResult.effects.speedBoostDuration;
        }
        if (foodResult.effects.alphaModeExtension > 0 && state.player.alphaMode.active) {
          state.player.alphaMode.endTime += foodResult.effects.alphaModeExtension;
          if (foodResult.effects.addScoreMultiplier) {
            addScoreMultiplierCore(state, state.time);
          }
        }
        if (foodResult.effects.alphaPoints > 0) {
          addAlphaPointsCore(state, foodResult.effects.alphaPoints, result.events);
        }

        if (foodResult.type !== 'normal') {
          const powerup = applyPowerUpCore(foodResult.type, state, state.time);
          result.events.push({ type: EventType.PowerupApplied, payload: { type: foodResult.type, duration: powerup.duration } });
        }

        // Respawn food deterministically in core
        const spawned = addFoodCore(state);
        if (spawned) {
            result.events.push({
              type: EventType.FoodSpawned,
              payload: { type: spawned.type, x: spawned.x, z: spawned.z },
            });
        }
      }
    }
  }

  decayAlphaPointsCore(state, state.time);
  checkAlphaModeActivationPointsCore(state, state.time, result.events);
  updateAlphaModeCore(state, state.time, result.events);
  updatePowerUpTimersCore(state, state.time);

  const enemyResult = updateEnemiesCore(state, delta);
  result.events.push(...enemyResult.events);

  updateFoodMovementCore(state, delta);

  const respawned = processEnemyRespawnsCore(state);
  respawned.forEach(enemyId => {
    spawnEnemyCore(state, enemyId);
    result.events.push({ type: EventType.EnemyRespawned, payload: { enemyId } });
  });

  return { events: wrapEvents(state, result.events) };
}
