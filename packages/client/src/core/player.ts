import CONFIG from '../config.js';
import type { CoreState, CoreStepResult } from './types';
import { EventType } from 'snek-shared';
import { checkObstacleCollisionCore } from './collision';

export type PlayerInput = {
  turn: 'left' | 'right' | null;
  playerId?: string;
};

export type TurnQueueState = {
  queue: Array<{ x: number; y: number; z: number }>;
  lastDirection: { x: number; y: number; z: number };
};

export type PlayerMoveResult = {
  newHead: { x: number; y: number; z: number };
  collisionReason: 'WALL' | 'SELF' | 'OBSTACLE' | null;
  obstacleType?: string | null;
};

export function evaluatePlayerMove(state: CoreState, playerId: string, collisionForgiveness = 0): PlayerMoveResult {
  const player = state.players[playerId];
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

  const playerId = input.playerId || 'local';
  const player = state.players[playerId];
  if (!player) return;

  initTurnQueue(player);

  if (input.turn === 'left') {
    queueTurn(player, turnLeftDir);
  } else if (input.turn === 'right') {
    queueTurn(player, turnRightDir);
  }
}

export function updatePlayerCore(state: CoreState, playerId: string, delta: number): CoreStepResult {
  const events: CoreStepResult['events'] = [];
  const player = state.players[playerId];
  if (!player || player.dead) return { events };

  player.moveTimer += delta;

  let speedMultiplier = 1;
  if (player.speedBoostUntil && state.time < player.speedBoostUntil) {
    speedMultiplier *= CONFIG.FOOD_SPEED_BOOST_MULTIPLIER;
  }
  if (player.alphaMode?.active) {
    speedMultiplier *= CONFIG.ALPHA_MODE_SPEED_MULTIPLIER;
  }
  const effectiveSpeed = player.speed / speedMultiplier;

  if (player.moveTimer < effectiveSpeed) {
    return { events };
  }

  player.moveTimer = 0;

  initTurnQueue(player);

  if (player.turnQueue!.queue.length > 0) {
    const nextDir = player.turnQueue!.queue.shift();
    if (nextDir) {
      player.direction = { ...nextDir };
    } else {
      player.direction = { ...player.nextDirection };
    }
  } else {
    player.direction = { ...player.nextDirection };
  }

  const head = player.segments[0];
  if (!head) {
    events.push({ type: EventType.Debug, payload: { message: 'NO_HEAD' } });
    return { events };
  }

  const { newHead, collisionReason } = evaluatePlayerMove(state, playerId);
  if (collisionReason === 'WALL') {
    events.push({ type: EventType.PlayerDead, playerId, payload: { reason: 'WALL_COLLISION' } });
    return { events };
  }
  if (collisionReason === 'SELF') {
    events.push({ type: EventType.PlayerDead, playerId, payload: { reason: 'SELF_COLLISION' } });
    return { events };
  }
  if (collisionReason === 'OBSTACLE') {
    events.push({ type: EventType.PlayerDead, playerId, payload: { reason: 'OBSTACLE_COLLISION' } });
    return { events };
  }

  // Movement update
  player.segments.unshift(newHead);
  player.turnQueue!.lastDirection = { ...player.direction };
  player.segments.pop();

  events.push({ type: EventType.PlayerMoved, playerId });
  return { events };
}

function initTurnQueue(player: any) {
  if (!player.turnQueue) {
    player.turnQueue = { queue: [], lastDirection: { ...player.direction } };
  }
}

function queueTurn(player: any, directionFn: (dir: { x: number; y: number; z: number }) => { x: number; y: number; z: number }) {
  const reference = player.turnQueue.queue.length > 0 ? player.turnQueue.queue[player.turnQueue.queue.length - 1] : player.turnQueue.lastDirection;
  const nextDir = directionFn(reference);

  if (nextDir.x === -reference.x && nextDir.z === -reference.z) {
    return;
  }

  player.turnQueue.queue.push({ ...nextDir });
  player.nextDirection = nextDir;
}

function turnLeftDir(currentDir: { x: number; y: number; z: number }) {
  return { x: currentDir.z, y: 0, z: -currentDir.x };
}

function turnRightDir(currentDir: { x: number; y: number; z: number }) {
  return { x: -currentDir.z, y: 0, z: currentDir.x };
}
