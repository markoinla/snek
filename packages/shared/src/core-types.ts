export type Vec2 = { x: number; z: number };
export type Vec3 = { x: number; y: number; z: number };

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
  activePowerUps: Array<{ type: string; endTime: number }>;
  enlargedHeadUntil: number;
  alphaMode: {
    active: boolean;
    startTime: number;
    endTime: number;
    lastScoreThreshold: number;
    alphaPoints: number;
    lastDecayTime: number;
    scoreMultiplier: number;
    scoreMultiplierStack: Array<{ value: number; endTime: number }>;
    consecutiveActivations: number;
    cooldownActive: boolean;
    cooldownEndTime: number;
    progress: number;
  };
  speedBoostUntil?: number;
  turnQueue?: {
    queue: Array<{ x: number; y: number; z: number }>;
    lastDirection: { x: number; y: number; z: number };
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
  tick: number;
  eventIdCounter: number;
  rng: {
    seed: number;
    nextFloat: () => number;
    nextInt: (maxExclusive: number) => number;
  };
  player: PlayerState;
  enemies: { list: EnemyState[]; kills: number; respawnQueue?: Array<{ id: number; respawnTime: number }> };
  food: { positions: FoodItem[] };
  obstacles: ObstaclesState;
  score: ScoreState;
  flags: CoreFlags;
};

export type SerializableRng = {
  seed: number;
};

export type SerializableCoreState = Omit<CoreState, 'rng'> & {
  rng: SerializableRng;
};
