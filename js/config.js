// --- Configuration Constants ---
export const GRID_SIZE = 80;
export const UNIT_SIZE = 1;
export const BASE_SNAKE_SPEED = 0.12;
export const CAMERA_DISTANCE = 10;
export const CAMERA_HEIGHT = 8;
export const CAMERA_LAG = 0.1;
export const SPRITE_SHEET_DIM = 2;
export const NUM_INITIAL_FOOD = 35;
export const MIN_SNAKE_LENGTH = 3;
export const NUM_OBSTACLES = 35;
export const POWERUP_TEXT_ANIMATION_DURATION = 2000; // Keep for CSS sync if needed

// Enemy snake settings
export const NUM_ENEMIES = 3;
export const ENEMY_START_LENGTH = 5;
export const ENEMY_SNAKE_SPEED = 0.3; // Time between moves in seconds
export const ENEMY_START_SAFE_ZONE = 10; // Minimum distance from center
export const ENEMY_TAIL_EDIBLE_SEGMENTS = 3; // Number of tail segments that are edible
export const ENEMY_TAIL_COLOR = 0x4DD0E1; // Lighter cyan color for edible tail segments (was 0xE91E63)
export const ENEMY_KILL_SCORE = 10; // Points awarded for killing an enemy
export const ENEMY_RESPAWN_TIME = 10; // Seconds before a new enemy spawns after being killed

// Player powerup settings
export const ENLARGED_HEAD_DURATION = 5; // Seconds the player's head stays enlarged after killing an enemy
export const ENLARGED_HEAD_SCALE = 1.5; // How much larger the head becomes

// Particle effect for killing an enemy
export const PARTICLE_COUNT_KILL = 30; // Number of particles when killing an enemy
export const PARTICLE_COLOR_KILL = 0xFF5722; // Orange color for kill particles

// Regular food particle settings (smaller, green effect)
export const PARTICLE_COUNT_NORMAL_FOOD = 1; // Fewer particles for regular food
export const PARTICLE_COLOR_NORMAL_FOOD = 0x4CAF50; // Green color for regular food particles

export const WALL_HEIGHT = 3;
export const WALL_THICKNESS = 1;

export const FOG_COLOR = 0x050508;
export const FOG_DENSITY = 0.018;

export const START_SAFE_ZONE = 5; // Player start area free of obstacles

export const GRASS_COUNT = 15000;
export const PARTICLE_COUNT_EAT = 25;
export const PARTICLE_COUNT_DEATH = 60;
export const PARTICLE_SIZE = 5;
export const PARTICLE_LIFESPAN = 0.8;
export const PARTICLE_SPEED = 5.0;

// Ground color (set to null to use texture without tint)
export const GROUND_COLOR = 0x4682B4; // Light blue tint

// Camera shake settings
export const CAMERA_SHAKE_ENABLED = true;
export const CAMERA_SHAKE_DURATION = 0.2; // seconds
export const CAMERA_SHAKE_INTENSITY = 3; // maximum displacement

// Food type spawn ratios (must add up to 100)
export const FOOD_SPAWN_RATIOS = {
    normal: 75,    // Regular food (60% chance)
    speed: 10,     // Speed boost (10% chance)
    shrink: 5,    // Shrink snake (10% chance)
    score_x2: 5,  // Score multiplier (10% chance)
    ghost: 5      // Ghost mode (10% chance)
};