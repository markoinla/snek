// --- Configuration Constants ---
export const GRID_SIZE = 60;
export const UNIT_SIZE = 1;
export const BASE_SNAKE_SPEED = 0.2;
export const CAMERA_DISTANCE = 11;
export const CAMERA_HEIGHT = 9;
export const CAMERA_LAG = 0.18;
export const SPRITE_SHEET_DIM = 2;
export const NUM_INITIAL_FOOD = 50;
export const MIN_SNAKE_LENGTH = 3;
export const NUM_OBSTACLES = 17;
export const POWERUP_TEXT_ANIMATION_DURATION = 2000; // Keep for CSS sync if needed

// Enemy snake settings
export const NUM_ENEMIES = 6;
export const ENEMY_START_LENGTH = 5;
export const ENEMY_SNAKE_SPEED = 0.3; // Time between moves in seconds
export const ENEMY_START_SAFE_ZONE = 10; // Minimum distance from center
export const ENEMY_TAIL_EDIBLE_SEGMENTS = 3; // Number of tail segments that are edible
export const ENEMY_TAIL_COLOR = 0x4DD0E1; // Lighter cyan color for edible tail segments (was 0xE91E63)
export const ENEMY_KILL_SCORE = 7; // Points awarded for killing an enemy
export const ENEMY_RESPAWN_TIME = 5; // Seconds before a new enemy spawns after being killed

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

export const FOG_COLOR = 0xFFFFFF;
export const FOG_DENSITY = 0.018;

export const START_SAFE_ZONE = 5; // Player start area free of obstacles

// Alpha Mode settings
export const ALPHA_MODE_SCORE_THRESHOLD = 25; // Score needed to trigger Alpha Mode
export const ALPHA_MODE_DURATION = 7; // Duration in seconds
export const ALPHA_MODE_SPEED_MULTIPLIER = 1.5; // How much faster the snake moves in Alpha Mode
export const ALPHA_MODE_COLOR = 0x9C27B0; // Purple color for Alpha Mode

export const GRASS_COUNT = 15000;
export const PARTICLE_COUNT_EAT = 25;

// Game Text Configuration
// This section allows you to customize all text messages in the game
export const GAME_TEXT = {
    // UI Elements
    UI: {
        SCORE_LABEL: "SCORE",
        KILLS_LABEL: "KILLS",
        GAME_OVER: {
            TITLE: "GAME OVER!",
            SCORE_PREFIX: "FINAL SCORE: ",
            RESTART_BUTTON: "RESTART",
            HIGH_SCORE: "HIGH SCORE",
            // Death reason messages
            DEATH_REASONS: {
                WALL_COLLISION: "You crashed into a wall",
                SELF_COLLISION: "You ate yourself",
                ENEMY_COLLISION: "You were eaten by another snek",
                OBSTACLE_COLLISION: "You crashed into an obstacle",
                TREE_COLLISION: "You tried to eat a tree",
                BUSH_COLLISION: "You got tangled in a bush"
            }
        },
    },
    
    // Alpha Mode Text
    ALPHA_MODE: {
        PROGRESS_LABEL: "Alpha meter",
        ACTIVE_LABEL: "Alpha SNEK!",
        ACTIVATED_MESSAGE: "ALPHA SNEK ACTIVATED!",
        DEACTIVATED_MESSAGE: "ALPHA SNEK DEACTIVATED",
        KILL_MESSAGE: "ALPHA KILL!",
        // Array of possible alpha mode kill messages - one will be randomly selected
        ALPHA_KILL_MESSAGES: [
            "ALPHA KILL",
            "DOUBLE KILL",
            "TRIPLE KILL",
            "M-M-M-MONSTER KILL",
            "UNSTOPPABLE",
            "GODLIKE",
            "SNEK KING",
            "SNEK EMPORER",
            "SNEK GOD",
            "THE ONE SNEK TO RULE THEM ALL",
            "YOU ARE THE OMEGA SNEK"
        ]
    },
    
    // Power-up Messages
    POWERUPS: {
        SPEED_BOOST: "Speed boost!",
        GHOST_MODE: "Ghost mode!",
        SHRINK: "Shrinkaaage!",
        SCORE_MULTIPLIER: "2x points!",
        // Array of possible enemy kill messages - one will be randomly selected
        ENEMY_KILLED_MESSAGES: [
            "SWALLOWED WHOLE",
            "SNEK SNACK",
            "TASTY SNEK",
            "DEVOURED",
            "GULP",
            "YOU ATE YOUR COUSIN",
            "GROWING BOY",
            "HOW DOES THAT FIT IN THERE",
            "BIG SNEK",
            "YOUR MOM WOULD BE PROUD",
            "YOUR DAD WOULD BE PROUD",
            "SNEK JOB",
            "JUST THE TAIL"
        ]
    },
    
    // Tutorial/Help Messages
    TUTORIAL: {
        CONTROLS: "Left/Right keys to turn your Snek",
        MOBILE_CONTROLS: "Press left/right buttons to turn your Snek",
        OBJECTIVE: "Eat food and other sneks to grow your anaconda. Eat a Snek by eating its tail.",
        ALPHA_MODE_HINT: "Fill up the alpha meter to become the ALPHA SNEK!"
    }
};

// Frog Movement Settings
// These settings control how the frog powerups move around
export const FROG_MOVEMENT = {
    // Base speed multiplier for all frogs (higher = faster)
    BASE_SPEED: 2,
    
    // Random speed variation (adds/subtracts from base speed)
    SPEED_VARIATION: 0.5,
    
    // How high frogs hop (in grid units)
    HOP_HEIGHT: 0.3,
    
    // Base frequency of hopping (higher = more frequent hops)
    HOP_FREQUENCY: 2.0,
    
    // Random hop frequency variation
    HOP_FREQUENCY_VARIATION: 0.5,
    
    // Maximum distance frogs can move from their original position (in grid units)
    MAX_DISTANCE: 3,
    
    // Random distance variation
    DISTANCE_VARIATION: 1.0,
    
    // Probability of changing direction (0-1, checked each frame)
    DIRECTION_CHANGE_PROBABILITY: 0.005,
    
    // Movement style: 'hop' or 'crawl'
    MOVEMENT_STYLE: 'crawl',
    
    // Time between movement steps (in seconds)
    MOVE_INTERVAL: 0.5
};

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
    normal: 89,    // Regular food (60% chance)
    speed: 5,     // Speed boost (10% chance)
    shrink: 1,    // Shrink snake (10% chance)
    score_x2: 3,  // Score multiplier (10% chance)
    ghost: 2      // Ghost mode (10% chance)
};