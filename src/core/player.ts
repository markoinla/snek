import * as CONFIG from '../config.js';
import type { CoreState, StepResult } from './types';
import { checkObstacleCollisionCore } from './collision';

export type PlayerInput = {
  turn: 'left' | 'right' | null;
};

export type PlayerMoveResult = {
  newHead: { x: number; y: number; z: number };
  collisionReason: 'WALL' | 'SELF' | 'OBSTACLE' | null;
  obstacleType?: string | null;
};

export function evaluatePlayerMove(state: CoreState, collisionForgiveness = 0): PlayerMoveResult {
  const player = state.player;
  const head = player.segments[0];
  const newHead = {
    x: head.x + player.direction.x,
    y: 0,
    z: head.z + player.direction.z,
  };

  const halfGrid = CONFIG.GRID_SIZE / 2;
  if (
    newHead.x >= halfGrid ||
    newHead.x < -halfGrid ||
    newHead.z >= halfGrid ||
    newHead.z < -halfGrid
  ) {
    return { newHead, collisionReason: 'WALL' };
  }

  if (!player.ghostModeActive) {
    for (let i = 0; i < player.segments.length - 1; i++) {
      const seg = player.segments[i];
      if (checkPositionCollision(newHead, seg, collisionForgiveness)) {
        return { newHead, collisionReason: 'SELF' };
      }
    }
  }

  if (!player.ghostModeActive) {
    const obstacleType = checkObstacleCollisionCore(state.obstacles, newHead);
    if (obstacleType) {
      return { newHead, collisionReason: 'OBSTACLE', obstacleType };
    }
  }

  return { newHead, collisionReason: null, obstacleType: null };
}

function checkPositionCollision(
  pos1: { x: number; z: number },
  pos2: { x: number; z: number },
  forgiveness = 0
) {
  if (forgiveness > 0) {
    return (
      Math.abs(pos1.x - pos2.x) < 1 - forgiveness &&
      Math.abs(pos1.z - pos2.z) < 1 - forgiveness
    );
  }
  return pos1.x === pos2.x && pos1.z === pos2.z;
}

export function applyPlayerInput(state: CoreState, input: PlayerInput) {
  if (state.flags.gameOver) return;

  if (input.turn === 'left') {
    turnLeft(state);
  } else if (input.turn === 'right') {
    turnRight(state);
  }
}

export function updatePlayerCore(state: CoreState, delta: number): StepResult {
  const events: StepResult['events'] = [];
  const player = state.player;

  player.moveTimer += delta;

  if (player.moveTimer < player.speed) {
    return { events };
  }

  player.moveTimer = 0;

  // Apply pending direction
  player.direction = { ...player.nextDirection };

  const head = player.segments[0];
  if (!head) {
    state.flags.gameOver = true;
    events.push({ type: 'PLAYER_ERROR', payload: { reason: 'NO_HEAD' } });
    return { events };
  }

  const { newHead, collisionReason } = evaluatePlayerMove(state);
  if (collisionReason === 'WALL') {
    state.flags.gameOver = true;
    events.push({ type: 'PLAYER_DEAD', payload: { reason: 'WALL_COLLISION' } });
    return { events };
  }
  if (collisionReason === 'SELF') {
    state.flags.gameOver = true;
    events.push({ type: 'PLAYER_DEAD', payload: { reason: 'SELF_COLLISION' } });
    return { events };
  }
  if (collisionReason === 'OBSTACLE') {
    state.flags.gameOver = true;
    events.push({ type: 'PLAYER_DEAD', payload: { reason: 'OBSTACLE_COLLISION' } });
    return { events };
  }

  // Movement update
  player.segments.unshift(newHead);
  player.segments.pop();

  events.push({ type: 'PLAYER_MOVED' });
  return { events };
}

function turnLeft(state: CoreState) {
  const player = state.player;
  const currentDir = player.direction;
  const nextDir = { x: currentDir.z, y: 0, z: -currentDir.x };
  // Prevent 180-degree turns
  if (nextDir.x === -currentDir.x && nextDir.z === -currentDir.z) return;
  player.nextDirection = nextDir;
}

function turnRight(state: CoreState) {
  const player = state.player;
  const currentDir = player.direction;
  const nextDir = { x: -currentDir.z, y: 0, z: currentDir.x };
  // Prevent 180-degree turns
  if (nextDir.x === -currentDir.x && nextDir.z === -currentDir.z) return;
  player.nextDirection = nextDir;
}
