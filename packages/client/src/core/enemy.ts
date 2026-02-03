import * as CONFIG from '../config.js';
import type { CoreState, CoreStepResult, Vec3 } from './types';
import { EventType } from 'snek-shared';
import { checkObstacleCollisionCore } from './collision';
import { addFoodCore, generateUniquePositionCore } from './spawn';

export function updateEnemiesCore(state: CoreState, delta: number): CoreStepResult {
  const events: CoreStepResult['events'] = [];

  for (const enemy of state.enemies.list) {
    // Animation timing (core just updates counters)
    enemy.animationTimer += delta;
    if (enemy.animationTimer > 0.25) {
      enemy.animationFrame = (enemy.animationFrame + 1) % 2;
      enemy.animationTimer = 0;
    }

    updateEnemyAI(enemy, state);

    if (state.time - enemy.lastMoveTime >= enemy.speed) {
      const moveResult = moveEnemyCore(enemy, state);
      enemy.lastMoveTime = state.time;
      if (moveResult.moved) {
        events.push({ type: EventType.EnemyMoved, payload: { enemyId: enemy.id } });
      }
      if (moveResult.foodSpawned) {
        events.push({
          type: EventType.FoodSpawned,
          payload: {
            type: moveResult.foodSpawned.type,
            x: moveResult.foodSpawned.x,
            z: moveResult.foodSpawned.z,
          },
        });
      }
    }
  }

  return { events };
}

function updateEnemyAI(enemy: any, state: CoreState) {
  const headPos = enemy.snake[0];
  const currentDir = enemy.direction;

  if (enemy.state === 'seeking') {
    const { index: targetIndex, position: targetPos } = findClosestFood(headPos, state);
    enemy.targetFoodIndex = targetIndex;

    if (targetPos) {
      const dx = targetPos.x - headPos.x;
      const dz = targetPos.z - headPos.z;

      let desiredDir = { x: 0, y: 0, z: 0 };
      if (Math.abs(dx) > Math.abs(dz)) {
        desiredDir.x = Math.sign(dx);
      } else if (Math.abs(dz) > 0) {
        desiredDir.z = Math.sign(dz);
      } else {
        enemy.state = 'idle';
        enemy.nextDirection = currentDir;
        return;
      }

      let potentialNextDir = desiredDir;
      let potentialHeadPos = { x: headPos.x + potentialNextDir.x, y: 0, z: headPos.z + potentialNextDir.z };

      if (isMoveInvalid(potentialHeadPos, enemy, state)) {
        const possibleTurns = getPossibleTurns(desiredDir);
        let foundValidTurn = false;
        for (const turnDir of possibleTurns) {
          potentialHeadPos = { x: headPos.x + turnDir.x, y: 0, z: headPos.z + turnDir.z };
          if (!isMoveInvalid(potentialHeadPos, enemy, state)) {
            potentialNextDir = turnDir;
            foundValidTurn = true;
            break;
          }
        }

        if (!foundValidTurn) {
          potentialHeadPos = { x: headPos.x + currentDir.x, y: 0, z: headPos.z + currentDir.z };
          if (!isMoveInvalid(potentialHeadPos, enemy, state)) {
            potentialNextDir = currentDir;
          } else {
            const oppositeDir = { x: -currentDir.x, y: 0, z: -currentDir.z };
            potentialHeadPos = { x: headPos.x + oppositeDir.x, y: 0, z: headPos.z + oppositeDir.z };
            if (!isMoveInvalid(potentialHeadPos, enemy, state)) {
              potentialNextDir = oppositeDir;
            } else {
              const randomTurns = getPossibleTurns(currentDir);
              for (const turnDir of randomTurns) {
                potentialHeadPos = { x: headPos.x + turnDir.x, y: 0, z: headPos.z + turnDir.z };
                if (!isMoveInvalid(potentialHeadPos, enemy, state)) {
                  potentialNextDir = turnDir;
                  break;
                }
              }
              enemy.state = 'idle';
            }
          }
        }
      }

      enemy.nextDirection = potentialNextDir;
    } else {
      enemy.state = 'idle';
      enemy.nextDirection = currentDir;
    }
  } else if (enemy.state === 'idle') {
    if (state.rng.nextFloat() < 0.15) {
      const possibleTurns = getPossibleTurns(currentDir);
      const randomTurnIndex = state.rng.nextInt(possibleTurns.length);
      let potentialNextDir = possibleTurns[randomTurnIndex];
      let potentialHeadPos = { x: headPos.x + potentialNextDir.x, y: 0, z: headPos.z + potentialNextDir.z };

      if (isMoveInvalid(potentialHeadPos, enemy, state)) {
        potentialNextDir = possibleTurns[(randomTurnIndex + 1) % possibleTurns.length];
        potentialHeadPos = { x: headPos.x + potentialNextDir.x, y: 0, z: headPos.z + potentialNextDir.z };
        if (isMoveInvalid(potentialHeadPos, enemy, state)) {
          potentialNextDir = currentDir;
          potentialHeadPos = { x: headPos.x + currentDir.x, y: 0, z: headPos.z + currentDir.z };
          if (isMoveInvalid(potentialHeadPos, enemy, state)) {
            potentialNextDir = currentDir;
          }
        }
      }
      enemy.nextDirection = potentialNextDir;
    } else {
      let potentialNextDir = currentDir;
      let potentialHeadPos = { x: headPos.x + currentDir.x, y: 0, z: headPos.z + currentDir.z };
      if (isMoveInvalid(potentialHeadPos, enemy, state)) {
        const possibleTurns = getPossibleTurns(currentDir);
        let foundValidTurn = false;
        for (const turnDir of possibleTurns) {
          potentialHeadPos = { x: headPos.x + turnDir.x, y: 0, z: headPos.z + turnDir.z };
          if (!isMoveInvalid(potentialHeadPos, enemy, state)) {
            potentialNextDir = turnDir;
            foundValidTurn = true;
            break;
          }
        }
        if (!foundValidTurn) {
          potentialNextDir = { x: -currentDir.x, y: 0, z: -currentDir.z };
          potentialHeadPos = { x: headPos.x + potentialNextDir.x, y: 0, z: headPos.z + potentialNextDir.z };
          if (isMoveInvalid(potentialHeadPos, enemy, state)) {
            potentialNextDir = currentDir;
          }
        }
      }
      enemy.nextDirection = potentialNextDir;
    }

    if (state.rng.nextFloat() < 0.05) {
      enemy.state = 'seeking';
    }
  }
}

function isMoveInvalid(pos: Vec3, enemy: any, state: CoreState) {
  const halfGrid = CONFIG.GRID_SIZE / 2;
  if (pos.x >= halfGrid || pos.x < -halfGrid || pos.z >= halfGrid || pos.z < -halfGrid) {
    return true;
  }

  for (let i = 0; i < enemy.snake.length - 1; i++) {
    if (enemy.snake[i].x === pos.x && enemy.snake[i].z === pos.z) {
      return true;
    }
  }

  if (checkObstacleCollisionCore(state.obstacles, pos)) {
    return true;
  }

  for (const otherEnemy of state.enemies.list) {
    if (otherEnemy.id === enemy.id) continue;
    if (otherEnemy.snake.some((segment: Vec3) => segment.x === pos.x && segment.z === pos.z)) {
      return true;
    }
  }

  return false;
}

function getPossibleTurns(direction: Vec3) {
  if (direction.x !== 0) {
    return [
      { x: 0, y: 0, z: 1 * direction.x },
      { x: 0, y: 0, z: -1 * direction.x },
    ];
  }
  if (direction.z !== 0) {
    return [
      { x: -1 * direction.z, y: 0, z: 0 },
      { x: 1 * direction.z, y: 0, z: 0 },
    ];
  }
  return [
    { x: 1, y: 0, z: 0 },
    { x: -1, y: 0, z: 0 },
  ];
}

function moveEnemyCore(enemy: any, state: CoreState): { moved: boolean; foodSpawned: null | { type: string; x: number; z: number } } {
  enemy.direction = enemy.nextDirection;
  const head = enemy.snake[0];
  const newHeadPos = {
    x: head.x + enemy.direction.x,
    y: 0,
    z: head.z + enemy.direction.z,
  };

  if (isMoveInvalid(newHeadPos, enemy, state)) {
    enemy.state = 'idle';
    return { moved: false, foodSpawned: null };
  }

  let ateFood = false;
  let eatenFoodIndex = -1;
  for (let i = 0; i < state.food.positions.length; i++) {
    if (newHeadPos.x === state.food.positions[i].x && newHeadPos.z === state.food.positions[i].z) {
      ateFood = true;
      eatenFoodIndex = i;
      break;
    }
  }

  enemy.snake.unshift(newHeadPos);
  let foodSpawned = null as null | { type: string; x: number; z: number };
  if (!ateFood) {
    enemy.snake.pop();
  } else {
    state.food.positions.splice(eatenFoodIndex, 1);
    foodSpawned = addFoodCore(state);
    enemy.state = 'seeking';
  }

  return { moved: true, foodSpawned };
}

export function spawnEnemyCore(state: CoreState, id: number) {
  const startPos = generateUniquePositionCore(state, CONFIG.ENEMY_START_SAFE_ZONE);
  const startDirX = state.rng.nextFloat() < 0.5 ? (state.rng.nextFloat() < 0.5 ? 1 : -1) : 0;
  const startDirZ = startDirX === 0 ? (state.rng.nextFloat() < 0.5 ? 1 : -1) : 0;
  const initialDirection = { x: startDirX, y: 0, z: startDirZ };

  const enemySnakeSegments = [];
  let currentPos = { ...startPos };
  for (let i = 0; i < CONFIG.ENEMY_START_LENGTH; i++) {
    enemySnakeSegments.push({ ...currentPos });
    currentPos.x -= initialDirection.x;
    currentPos.z -= initialDirection.z;
  }

  const newEnemy = {
    id,
    snake: enemySnakeSegments,
    direction: { ...initialDirection },
    nextDirection: { ...initialDirection },
    targetFoodIndex: null,
    state: 'seeking' as const,
    lastMoveTime: state.time + state.rng.nextFloat() * CONFIG.ENEMY_SNAKE_SPEED,
    animationFrame: 0,
    animationTimer: state.time,
    speed: CONFIG.ENEMY_SNAKE_SPEED,
  };

  state.enemies.list.push(newEnemy);
}

export function spawnInitialEnemiesCore(state: CoreState, count: number) {
  state.enemies.list = [];
  state.enemies.respawnQueue = [];
  for (let i = 0; i < count; i++) {
    spawnEnemyCore(state, i);
  }
}

function findClosestFood(headPos: Vec3, state: CoreState) {
  if (!state.food.positions.length) return { index: null, position: null };

  let closestIndex = null as number | null;
  let closestDistance = Infinity;
  let closestPos: Vec3 | null = null;

  for (let i = 0; i < state.food.positions.length; i++) {
    const foodPos = state.food.positions[i];
    const dx = foodPos.x - headPos.x;
    const dz = foodPos.z - headPos.z;
    const dist = Math.abs(dx) + Math.abs(dz);
    if (dist < closestDistance) {
      closestDistance = dist;
      closestIndex = i;
      closestPos = { x: foodPos.x, y: 0, z: foodPos.z };
    }
  }

  return { index: closestIndex, position: closestPos };
}
