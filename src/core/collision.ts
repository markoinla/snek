import type { Vec3 } from './types';

export type CollisionResult = {
  obstacleType: string | null;
  enemy: { id: number; segmentIndex: number } | null;
};

export function checkObstacleCollisionCore(
  obstaclesState: { list?: Array<{ x: number; z: number; type: string; occupiedCells?: Array<{ x: number; z: number }> }> } | null,
  pos: Vec3
): string | null {
  const obstacles = obstaclesState?.list || [];
  for (const obs of obstacles) {
    if (obs.occupiedCells) {
      for (const cell of obs.occupiedCells) {
        if (cell.x === pos.x && cell.z === pos.z) return obs.type;
      }
    } else if (obs.x === pos.x && obs.z === pos.z) {
      return obs.type;
    }
  }
  return null;
}

export function checkEnemyCollisionCore(
  enemiesState: { list?: Array<{ id: number; snake: Array<{ x: number; z: number }> }> } | null,
  pos: Vec3
): CollisionResult['enemy'] {
  const enemies = enemiesState?.list || [];
  for (const enemy of enemies) {
    for (let i = 0; i < enemy.snake.length; i++) {
      const seg = enemy.snake[i];
      if (seg.x === pos.x && seg.z === pos.z) {
        return { id: enemy.id, segmentIndex: i };
      }
    }
  }
  return null;
}
