export const EVENT_SCHEMA_VERSION = 1 as const;

export enum EventType {
  PlayerMoved = 'PLAYER_MOVED',
  PlayerDead = 'PLAYER_DEAD',
  FoodEaten = 'FOOD_EATEN',
  FoodSpawned = 'FOOD_SPAWNED',
  EnemyMoved = 'ENEMY_MOVED',
  EnemyKilled = 'ENEMY_KILLED',
  EnemyRespawned = 'ENEMY_RESPAWNED',
  PowerupApplied = 'POWERUP_APPLIED',
  AlphaModeActivated = 'ALPHA_MODE_ACTIVATED',
  AlphaModeEnded = 'ALPHA_MODE_ENDED',
  AlphaPointsChanged = 'ALPHA_POINTS_CHANGED',
  ScorePopup = 'SCORE_POPUP',
  ScoreChanged = 'SCORE_CHANGED',
  Debug = 'DEBUG'
}

export type CoreEvent =
  | { type: EventType.PlayerMoved }
  | { type: EventType.PlayerDead; payload: { reason: string } }
  | { type: EventType.FoodEaten; payload: { type: string; score: number; effects: { alphaPoints: number; speedBoostDuration: number; alphaModeExtension: number; addScoreMultiplier: boolean } } }
  | { type: EventType.FoodSpawned; payload: { type: string; x: number; z: number } }
  | { type: EventType.EnemyMoved; payload: { enemyId: number } }
  | { type: EventType.EnemyKilled; payload: { enemyId: number; viaTail: boolean } }
  | { type: EventType.EnemyRespawned; payload: { enemyId: number } }
  | { type: EventType.PowerupApplied; payload: { type: string; duration: number } }
  | { type: EventType.AlphaModeActivated; payload: { duration: number } }
  | { type: EventType.AlphaModeEnded }
  | { type: EventType.AlphaPointsChanged; payload: { points: number } }
  | { type: EventType.ScorePopup; payload: { text: string; color: number } }
  | { type: EventType.ScoreChanged; payload: { score: number } }
  | { type: EventType.Debug; payload: { message: string } };

export type EventEnvelope = {
  tick: number;
  eventId: number;
  version: typeof EVENT_SCHEMA_VERSION;
  event: CoreEvent;
};
