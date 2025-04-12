// --- Configuration Constants ---
export const GRID_SIZE = 60;
export const UNIT_SIZE = 1;
export const BASE_SNAKE_SPEED = 0.2;
export const CAMERA_DISTANCE = 9;
export const CAMERA_HEIGHT = 12;
export const CAMERA_LAG = 0.2;
export const CAMERA_POSITION_SMOOTHNESS = 0.01; // Lower = smoother camera position movement
export const CAMERA_ROTATION_SMOOTHNESS = 0.06; // Lower = smoother camera rotation
export const SPRITE_SHEET_DIM = 2;
export const NUM_INITIAL_FOOD = 50;
export const MIN_SNAKE_LENGTH = 3;
export const NUM_OBSTACLES = 17;
export const POWERUP_TEXT_ANIMATION_DURATION = 1500; // Keep for CSS sync if needed

// Food speed boost settings
export const FOOD_SPEED_BOOST_DURATION = 7.0; // Duration of speed boost in seconds
export const FOOD_SPEED_BOOST_MULTIPLIER = 1.5; // How much faster the snake moves during boost
export const ALPHA_MODE_EXTENSION_PER_FOOD = 0.5; // Seconds to extend Alpha Mode when eating food in Alpha Mode

// Power-up settings
export const POWERUP_SPEED_DURATION = 20.0; // Duration of speed boost power-up in seconds
export const POWERUP_SPEED_MULTIPLIER = 1.3; // How much faster the snake moves during speed boost power-up

export const POWERUP_SHRINK_AMOUNT = 3; // Number of segments to remove when shrink power-up is activated

export const POWERUP_SCORE_MULTIPLIER = 3.0; // Score multiplier for the score multiplier power-up
export const POWERUP_SCORE_MULTIPLIER_DURATION = 10.0; // Duration of score multiplier power-up in seconds

export const POWERUP_GHOST_DURATION = 8.0; // Duration of ghost mode power-up in seconds

// Alpha Mode score multiplier settings
export const ALPHA_MODE_SCORE_MULTIPLIER = 1.8; // Multiplier for each stack
export const ALPHA_MODE_SCORE_MULTIPLIER_DURATION = 5.0; // How long each multiplier stack lasts
export const ALPHA_MODE_MAX_SCORE_MULTIPLIER = 16.0; // Maximum allowed multiplier

// Alpha Mode activation limits - DISABLED
export const ALPHA_MODE_MAX_CONSECUTIVE_ACTIVATIONS = 999; // Setting to a high number effectively disables the limit
export const ALPHA_MODE_COOLDOWN_DURATION = 0.1; // Setting to a very short duration effectively disables cooldown

// Alpha Points System
export const ALPHA_POINTS_THRESHOLD = 30; // Points needed to activate Alpha Mode
export const ALPHA_POINTS_FOOD = 3; // Points earned for eating normal food
export const ALPHA_POINTS_FROG = 6; // Points earned for eating a frog
export const ALPHA_POINTS_ENEMY = 10; // Points earned for killing an enemy snake
export const ALPHA_POINTS_DECAY_RATE = 0.8; // Points lost per second when not in Alpha Mode
export const ALPHA_POINTS_FROG_MULTIPLIER = 1.5; // Multiplier for frog alpha points in Alpha Mode

// Alpha Mode settings
export const ALPHA_MODE_SCORE_THRESHOLD = 1000; // Score needed to activate Alpha Mode
export const ALPHA_MODE_DURATION = 6; // Duration in seconds
export const ALPHA_MODE_SPEED_MULTIPLIER = 1.5; // How much faster the snake moves in Alpha Mode
export const ALPHA_MODE_COLOR = 0x9C27B0; // Purple color for Alpha Mode
export const ALPHA_MODE_EXTENSION_PER_ENEMY = 1.5; // Seconds to extend Alpha Mode when killing an enemy snake

// Audio settings
export const AUDIO_VOLUME = {
    MUSIC: 0.3,               // Background music volume (0.0 to 1.0)
    MOVEMENT_SOUNDS: 0.4,     // Snake movement sound effects volume
    EATING_SOUNDS: 0.5,       // Food eating sound effects volume
    ALPHA_MODE_SOUNDS: 0.6,   // Alpha Mode sound effects volume (explosions, voice lines)
    DEATH_SOUND: 0.6          // Player death sound volume
};

// Default audio states
export const AUDIO_ENABLED = {
    MUSIC: false,             // Music off by default
    SOUND_EFFECTS: true       // Sound effects on by default
};

// Audio preloading
export const AUDIO_PRELOAD_ALL = true; // Whether to preload all sound effects at game start

// Enemy snake settings
export const NUM_ENEMIES = 6;
export const ENEMY_START_LENGTH = 5;
export const ENEMY_SNAKE_SPEED = 0.3; // Time between moves in seconds
export const ENEMY_START_SAFE_ZONE = 10; // Minimum distance from center
export const ENEMY_TAIL_EDIBLE_SEGMENTS = 3; // Number of tail segments that are edible
export const ENEMY_TAIL_COLOR = 0x4DD0E1; // Lighter cyan color for edible tail segments (was 0xE91E63)
export const ENEMY_KILL_SCORE = 10; // Points awarded for killing an enemy
export const ENEMY_RESPAWN_TIME = 5; // Seconds before a new enemy spawns after being killed
export const ENEMY_KILL_SEGMENTS = 5; // Number of segments the player snake grows when eating an enemy

// Player powerup settings
export const ENLARGED_HEAD_DURATION = 0; // Seconds the player's head stays enlarged after killing an enemy
export const ENLARGED_HEAD_SCALE = 1; // How much larger the head becomes

// Particle effect for killing an enemy
export const PARTICLE_COUNT_KILL = 10; // Number of particles when killing an enemy
export const PARTICLE_COLOR_KILL = 0xFF5722; // Orange color for kill particles

// Regular food particle settings (smaller, green effect)
export const PARTICLE_COUNT_NORMAL_FOOD = 2; // Fewer particles for regular food
export const PARTICLE_COLOR_NORMAL_FOOD = 0x4CAF50; // Green color for regular food particles

export const WALL_HEIGHT = 3;
export const WALL_THICKNESS = 1;

export const FOG_COLOR = 0xFFFFFF;
export const FOG_DENSITY = 0.03;

export const START_SAFE_ZONE = 5; // Player start area free of obstacles

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
                ENEMY_COLLISION: "You choked on a snek",
                OBSTACLE_COLLISION: "You crashed into an obstacle",
                TREE_COLLISION: "You tried to eat a tree",
                BUSH_COLLISION: "You got tangled in a bush"
            }
        },
    },
    
    // Alpha Mode Text
    ALPHA_MODE: {
        PROGRESS_LABEL: "",
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
            "YOU ARE OMEGA SNEK"
        ]
    },
    
    // Power-up Messages
    POWERUPS: {
        SPEED_BOOST: "Speed boost!",
        GHOST_MODE: "Ghost mode!",
        SHRINK: "Shrinkaaage!",
        SCORE_MULTIPLIER: "3x rewards!",
        // Array of possible enemy kill messages - one will be randomly selected
        ENEMY_KILLED_MESSAGES: [
            "MILOS SMELLS",
            "MILOS IS THE BEST",
            "MILOS IS A GOOD SNEK",
            "MILOS IS THE BEST SNEK"
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
    HOP_HEIGHT: 0.2,
    
    // Base frequency of hopping (higher = more frequent hops)
    HOP_FREQUENCY: 1.0,
    
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

export const PARTICLE_COUNT_DEATH = 10;
export const PARTICLE_SIZE = 2;
export const PARTICLE_LIFESPAN = 0.2;
export const PARTICLE_SPEED = 3.0;

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