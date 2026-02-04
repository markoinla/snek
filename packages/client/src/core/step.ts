import CONFIG from '../config';
import type { CoreState, CoreStepResult, StepResult } from './types';
import { EventType, EVENT_SCHEMA_VERSION } from 'snek-shared';
import { updatePlayerCore } from './player';
import { checkAndEatFoodCore, updateFoodMovementCore } from './food';
import { addFoodCore } from './spawn';
import { updateEnemiesCore, spawnEnemyCore } from './enemy';
import { checkEnemyCollisionCoreDetailed, checkPlayerCollisionCore, killEnemyCore, killPlayerCore, processEnemyRespawnsCore, processPlayerRespawnsCore } from './combat';
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
  const allEvents: CoreStepResult['events'] = [];

  // Update ALL players (sorted by ID for determinism)
  const playerIds = Object.keys(state.players).sort();
  for (const playerId of playerIds) {
    const player = state.players[playerId];
    if (player.dead) continue;

    const result = updatePlayerCore(state, playerId, delta);
    allEvents.push(...result.events);

    // Handle deaths from wall/self/obstacle collisions detected in updatePlayerCore
    const diedInMove = result.events.some(event => event.type === EventType.PlayerDead);
    if (diedInMove) {
      killPlayerCore(state, playerId);
      continue;
    }

    const moved = result.events.some(event => event.type === EventType.PlayerMoved);
    if (moved) {
      const head = player.segments[0];
      if (head) {
        // Enemy collision (per player)
        const enemyCollision = checkEnemyCollisionCoreDetailed(state, { x: head.x, z: head.z });
        if (enemyCollision) {
          const alphaActive = player.alphaMode?.active;
          const ghostActive = player.ghostModeActive;
          const canEat = enemyCollision.isTail || alphaActive;

          if (canEat) {
            if (killEnemyCore(state, enemyCollision.enemyId)) {
              if (alphaActive) {
                player.alphaMode.endTime += CONFIG.ALPHA_MODE_EXTENSION_PER_ENEMY;
                addScoreMultiplierCore(state, playerId, state.time);
              } else {
                addAlphaPointsCore(state, playerId, CONFIG.ALPHA_POINTS_ENEMY, allEvents);
              }
              allEvents.push({
                type: EventType.EnemyKilled,
                playerId,
                payload: { enemyId: enemyCollision.enemyId, viaTail: enemyCollision.isTail },
              });
            }
          } else if (!ghostActive) {
            killPlayerCore(state, playerId);
            allEvents.push({ type: EventType.PlayerDead, playerId, payload: { reason: 'ENEMY_COLLISION' } });
            continue;
          }
        }

        // Player-vs-player collision (per player)
        const pvpCollision = checkPlayerCollisionCore(state, { x: head.x, z: head.z }, playerId);
        if (pvpCollision) {
          const attackerAlpha = !!player.alphaMode?.active;
          const attackerGhost = player.ghostModeActive;
          const victim = state.players[pvpCollision.targetPlayerId];
          const victimAlpha = !!victim?.alphaMode?.active;

          if (pvpCollision.isHead) {
            // Head-on collision
            if (attackerAlpha && !victimAlpha) {
              // Attacker wins — victim dies
              killPlayerCore(state, pvpCollision.targetPlayerId);
              addAlphaPointsCore(state, playerId, CONFIG.ALPHA_POINTS_ENEMY, allEvents);
              allEvents.push({ type: EventType.PlayerKilledPlayer, playerId, payload: { victimId: pvpCollision.targetPlayerId, headOn: true } });
              allEvents.push({ type: EventType.PlayerDead, playerId: pvpCollision.targetPlayerId, payload: { reason: 'PVP_COLLISION' } });
            } else if (!attackerAlpha && victimAlpha) {
              // Victim wins — attacker dies
              if (!attackerGhost) {
                killPlayerCore(state, playerId);
                allEvents.push({ type: EventType.PlayerDead, playerId, payload: { reason: 'PVP_COLLISION' } });
                allEvents.push({ type: EventType.PlayerKilledPlayer, playerId: pvpCollision.targetPlayerId, payload: { victimId: playerId, headOn: true } });
                addAlphaPointsCore(state, pvpCollision.targetPlayerId, CONFIG.ALPHA_POINTS_ENEMY, allEvents);
                continue;
              }
            } else {
              // Both alpha or both non-alpha: mutual kill (ghost bypasses for attacker)
              if (!attackerGhost) {
                killPlayerCore(state, playerId);
                allEvents.push({ type: EventType.PlayerDead, playerId, payload: { reason: 'PVP_COLLISION' } });
              }
              if (!victim.ghostModeActive) {
                killPlayerCore(state, pvpCollision.targetPlayerId);
                allEvents.push({ type: EventType.PlayerDead, playerId: pvpCollision.targetPlayerId, payload: { reason: 'PVP_COLLISION' } });
              }
              if (!attackerGhost) continue;
            }
          } else {
            // Head hits other player's body segment
            if (attackerAlpha || pvpCollision.isTail) {
              // Alpha attacker or tail-eater kills victim
              killPlayerCore(state, pvpCollision.targetPlayerId);
              addAlphaPointsCore(state, playerId, CONFIG.ALPHA_POINTS_ENEMY, allEvents);
              allEvents.push({ type: EventType.PlayerKilledPlayer, playerId, payload: { victimId: pvpCollision.targetPlayerId, headOn: false } });
              allEvents.push({ type: EventType.PlayerDead, playerId: pvpCollision.targetPlayerId, payload: { reason: 'PVP_COLLISION' } });
            } else if (!attackerGhost) {
              // Non-alpha attacker hitting non-tail body dies
              killPlayerCore(state, playerId);
              allEvents.push({ type: EventType.PlayerDead, playerId, payload: { reason: 'PVP_COLLISION' } });
              continue;
            }
          }
        }

        // Food collision (per player)
        const foodResult = checkAndEatFoodCore(state, { x: head.x, z: head.z }, player.alphaMode?.active || false);
        if (foodResult) {
          state.food.positions.splice(foodResult.index, 1);

          const scoreMultiplier = player.alphaMode?.active ? player.scoreMultiplier : 1;
          const scoreDelta = Math.round(foodResult.scoreValue * scoreMultiplier);
          player.score.current += scoreDelta;

          allEvents.push({
            type: EventType.FoodEaten,
            playerId,
            payload: { type: foodResult.type, score: scoreDelta, effects: foodResult.effects },
          });
          allEvents.push({
            type: EventType.ScoreChanged,
            playerId,
            payload: { score: player.score.current },
          });

          if (foodResult.grow) {
            const tail = player.segments[player.segments.length - 1];
            if (tail) {
              player.segments.push({ ...tail });
            }
          }

          if (foodResult.effects.speedBoostDuration > 0) {
            player.speedBoostUntil = state.time + foodResult.effects.speedBoostDuration;
          }
          if (foodResult.effects.alphaModeExtension > 0 && player.alphaMode.active) {
            player.alphaMode.endTime += foodResult.effects.alphaModeExtension;
            if (foodResult.effects.addScoreMultiplier) {
              addScoreMultiplierCore(state, playerId, state.time);
            }
          }
          if (foodResult.effects.alphaPoints > 0) {
            addAlphaPointsCore(state, playerId, foodResult.effects.alphaPoints, allEvents);
          }

          if (foodResult.type !== 'normal') {
            const powerup = applyPowerUpCore(foodResult.type, state, playerId, state.time);
            allEvents.push({ type: EventType.PowerupApplied, playerId, payload: { type: foodResult.type, duration: powerup.duration } });
          }

          const spawned = addFoodCore(state);
          if (spawned) {
            allEvents.push({
              type: EventType.FoodSpawned,
              payload: { type: spawned.type, x: spawned.x, z: spawned.z },
            });
          }
        }
      }
    }

    // Per-player alpha/powerup updates
    decayAlphaPointsCore(state, playerId, state.time);
    checkAlphaModeActivationPointsCore(state, playerId, state.time, allEvents);
    updateAlphaModeCore(state, playerId, state.time, allEvents);
    updatePowerUpTimersCore(state, playerId, state.time);
  }

  // Update enemies (unchanged)
  const enemyResult = updateEnemiesCore(state, delta);
  allEvents.push(...enemyResult.events);

  // Update food movement (unchanged)
  updateFoodMovementCore(state, delta);

  // Process enemy respawns
  const respawned = processEnemyRespawnsCore(state);
  respawned.forEach(enemyId => {
    spawnEnemyCore(state, enemyId);
    allEvents.push({ type: EventType.EnemyRespawned, payload: { enemyId } });
  });

  // Process player respawns
  const respawnedPlayers = processPlayerRespawnsCore(state);
  for (const pid of respawnedPlayers) {
    allEvents.push({ type: EventType.PlayerRespawned, playerId: pid });
  }

  return { events: wrapEvents(state, allEvents) };
}
