export type Vec2 = { x: number; z: number };
export type Vec3 = { x: number; y: number; z: number };

export type PlayerState = {
  segments: Vec3[];
  direction: Vec3;
  nextDirection: Vec3;
  speed: number;
  moveTimer: number;
  animationFrame: number;
  animationTimer: number;
  scoreMultiplier: number;
  ghostModeActive: boolean;
  activePowerUp: { type: string; endTime: number } | null;
  enlargedHeadUntil: number;
  alphaMode: {
    active: boolean;
    startTime: number;
    endTime: number;
    lastScoreThreshold: number;
  };
};

export type EnemyState = {
  id: number;
  snake: Vec3[];
  direction: Vec3;
  nextDirection: Vec3;
  targetFoodIndex: number | null;
  state: 'seeking' | 'idle' | 'avoiding';
  lastMoveTime: number;
  animationFrame: number;
  animationTimer: number;
  speed: number;
};

export type FoodMovement = {
  directionX: number;
  directionZ: number;
  timer: number;
  moveInterval: number;
  maxDistance: number;
  originX: number;
  originZ: number;
  changeProbability: number;
};

export type FoodItem = {
  x: number;
  y: number;
  z: number;
  type: string;
  movement?: FoodMovement;
};

export type ObstaclesState = {
  list: Array<{ x: number; z: number; type: string; occupiedCells: Vec2[] }>;
};

export type ScoreState = {
  current: number;
  multiplier: number;
};

export type CoreFlags = {
  gameOver: boolean;
};

export type CoreState = {
  time: number;
  rng: {
    seed: number;
    nextFloat: () => number;
    nextInt: (maxExclusive: number) => number;
  };
  player: PlayerState;
  enemies: { list: EnemyState[]; kills: number };
  food: { positions: FoodItem[] };
  obstacles: ObstaclesState;
  score: ScoreState;
  flags: CoreFlags;
};

export type CoreEvent =
  | { type: 'PLAYER_MOVED' }
  | { type: 'PLAYER_DEAD'; payload: { reason: string } }
  | { type: 'FOOD_EATEN'; payload: { type: string; score: number; effects: { alphaPoints: number; speedBoostDuration: number; alphaModeExtension: number; addScoreMultiplier: boolean } } }
  | { type: 'FOOD_SPAWNED'; payload: { type: string; x: number; z: number } }
  | { type: 'ENEMY_MOVED'; payload: { enemyId: number } }
  | { type: 'ENEMY_KILLED'; payload: { enemyId: number; viaTail: boolean } }
  | { type: 'ENEMY_RESPAWNED'; payload: { enemyId: number } }
  | { type: 'POWERUP_APPLIED'; payload: { type: string; duration: number } }
  | { type: 'ALPHA_MODE_ACTIVATED'; payload: { duration: number } }
  | { type: 'ALPHA_MODE_ENDED' }
  | { type: 'ALPHA_POINTS_CHANGED'; payload: { points: number } }
  | { type: 'SCORE_POPUP'; payload: { text: string; color: number } }
  | { type: 'SCORE_CHANGED'; payload: { score: number } }
  | { type: 'DEBUG'; payload: { message: string } };

export type StepResult = {
  events: CoreEvent[];
};
