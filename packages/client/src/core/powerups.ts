import CONFIG from '../config.js';
import type { CoreState } from './types';

export function applyPowerUpCore(type: string, state: CoreState, playerId: string, currentTime: number) {
  const player = state.players[playerId];

  if (!player.activePowerUps) {
    player.activePowerUps = [] as any;
  }

  switch (type) {
    case 'speed':
      player.speed = CONFIG.BASE_SNAKE_SPEED / CONFIG.POWERUP_SPEED_MULTIPLIER;
      player.activePowerUps.push({ type, endTime: currentTime + CONFIG.POWERUP_SPEED_DURATION });
      return { duration: CONFIG.POWERUP_SPEED_DURATION };
    case 'ghost':
      player.ghostModeActive = true;
      player.activePowerUps.push({ type, endTime: currentTime + CONFIG.POWERUP_GHOST_DURATION });
      return { duration: CONFIG.POWERUP_GHOST_DURATION };
    case 'score_x2':
      player.scoreMultiplier = CONFIG.POWERUP_SCORE_MULTIPLIER;
      player.activePowerUps.push({ type, endTime: currentTime + CONFIG.POWERUP_SCORE_MULTIPLIER_DURATION });
      return { duration: CONFIG.POWERUP_SCORE_MULTIPLIER_DURATION };
    case 'shrink':
      const currentLength = player.segments.length;
      const segmentsToRemove = Math.min(CONFIG.POWERUP_SHRINK_AMOUNT, currentLength - CONFIG.MIN_SNAKE_LENGTH);
      if (segmentsToRemove > 0) {
        player.segments.splice(player.segments.length - segmentsToRemove, segmentsToRemove);
      }
      return { duration: 0 };
    default:
      return { duration: 0 };
  }
}

export function updatePowerUpTimersCore(state: CoreState, playerId: string, currentTime: number) {
  const player = state.players[playerId];
  if (!player.activePowerUps || player.activePowerUps.length === 0) return;

  player.activePowerUps = player.activePowerUps.filter((powerUp: any) => {
    if (powerUp.endTime > currentTime) return true;

    switch (powerUp.type) {
      case 'speed':
        player.speed = CONFIG.BASE_SNAKE_SPEED;
        break;
      case 'ghost':
        player.ghostModeActive = false;
        break;
      case 'score_x2':
        player.scoreMultiplier = 1;
        break;
      default:
        break;
    }

    return false;
  });
}
