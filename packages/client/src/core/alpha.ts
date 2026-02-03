import CONFIG from '../config.js';
import { getAdjustedSetting } from '../gameState.js';
import type { CoreState, CoreStepResult } from './types';
import { EventType } from 'snek-shared';

export function addAlphaPointsCore(state: CoreState, points: number, events: CoreStepResult['events']) {
  const player = state.player;
  if (player.alphaMode.active) return;

  player.alphaMode.alphaPoints += points;
  events.push({ type: EventType.AlphaPointsChanged, payload: { points: player.alphaMode.alphaPoints } });
}

export function decayAlphaPointsCore(state: CoreState, currentTime: number) {
  const player = state.player;

  if (!player.alphaMode.lastDecayTime || player.alphaMode.lastDecayTime === 0 || isNaN(player.alphaMode.lastDecayTime)) {
    player.alphaMode.lastDecayTime = currentTime;
    return;
  }

  const deltaTime = currentTime - player.alphaMode.lastDecayTime;
  if (deltaTime > 0 && deltaTime < 1.0) {
    if (player.alphaMode.alphaPoints > 0) {
      const decayRate = CONFIG.ALPHA_POINTS_DECAY_RATE;
      player.alphaMode.alphaPoints = Math.max(0, player.alphaMode.alphaPoints - decayRate * deltaTime);
    }
  }

  player.alphaMode.lastDecayTime = currentTime;
}

export function checkAlphaModeActivationPointsCore(state: CoreState, currentTime: number, events: CoreStepResult['events']) {
  const player = state.player;
  if (player.alphaMode.active) return false;

  const pointsThreshold = getAdjustedSetting('ALPHA_POINTS_THRESHOLD') || CONFIG.ALPHA_POINTS_THRESHOLD;
  if (player.alphaMode.alphaPoints >= pointsThreshold) {
    player.alphaMode.alphaPoints = 0;
    activateAlphaModeCore(state, currentTime, events);
    return true;
  }
  return false;
}

export function activateAlphaModeCore(state: CoreState, currentTime: number, events: CoreStepResult['events']) {
  const player = state.player;
  const alphaDuration = getAdjustedSetting('ALPHA_MODE_DURATION') || CONFIG.ALPHA_MODE_DURATION;

  player.alphaMode.active = true;
  player.alphaMode.progress = 1.0;
  player.alphaMode.startTime = currentTime;
  player.alphaMode.endTime = currentTime + alphaDuration;
  player.alphaMode.scoreMultiplier = CONFIG.ALPHA_MODE_SCORE_MULTIPLIER;
  player.alphaMode.consecutiveActivations = (player.alphaMode.consecutiveActivations || 0) + 1;
  player.alphaMode.scoreMultiplierStack = [];

  events.push({ type: EventType.AlphaModeActivated, payload: { duration: alphaDuration } });
}

export function updateAlphaModeCore(state: CoreState, currentTime: number, events: CoreStepResult['events']) {
  const player = state.player;
  if (!player.alphaMode.active) return;

  if (currentTime >= player.alphaMode.endTime) {
    player.alphaMode.active = false;
    player.alphaMode.scoreMultiplier = 1.0;
    player.alphaMode.scoreMultiplierStack = [];
    events.push({ type: EventType.AlphaModeEnded });
    return;
  }

  // Update multiplier stack (if used)
  player.alphaMode.scoreMultiplierStack = player.alphaMode.scoreMultiplierStack.filter((m: any) => m.endTime > currentTime);
  if (player.alphaMode.scoreMultiplierStack.length > 0) {
    let totalMultiplier = 1.0;
    player.alphaMode.scoreMultiplierStack.forEach((m: any) => { totalMultiplier *= m.value; });
    player.alphaMode.scoreMultiplier = Math.min(totalMultiplier, CONFIG.ALPHA_MODE_MAX_SCORE_MULTIPLIER);
  } else {
    player.alphaMode.scoreMultiplier = 1.0;
  }
}

export function addScoreMultiplierCore(state: CoreState, currentTime: number) {
  if (!state.player.alphaMode.active) return;

  state.player.alphaMode.scoreMultiplierStack.push({
    value: CONFIG.ALPHA_MODE_SCORE_MULTIPLIER,
    endTime: currentTime + CONFIG.ALPHA_MODE_SCORE_MULTIPLIER_DURATION,
  });
}
