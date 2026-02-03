// --- Configuration Constants ---
// All game settings in a single mutable object.
// Tweak at runtime via admin panel (?admin=1). Overrides persist in localStorage.

const CONFIG = {
    GRID_SIZE: 80,
    UNIT_SIZE: 1,
    BASE_SNAKE_SPEED: 0.25,
    CAMERA_DISTANCE: 9,
    CAMERA_HEIGHT: 12,
    CAMERA_LAG: 0.2,
    CAMERA_POSITION_SMOOTHNESS: 0.01,
    CAMERA_ROTATION_SMOOTHNESS: 0.06,
    SPRITE_SHEET_DIM: 2,
    NUM_INITIAL_FOOD: 100,
    MIN_SNAKE_LENGTH: 3,
    NUM_OBSTACLES: 30,
    POWERUP_TEXT_ANIMATION_DURATION: 1500,

    // Multiplayer settings
    MULTIPLAYER_DEFAULT_ENABLED: false,
    MULTIPLAYER_SERVER_URL: 'ws://localhost:2567',
    MULTIPLAYER_TICK_RATE: 30,

    // Food speed boost settings
    FOOD_SPEED_BOOST_DURATION: 7.0,
    FOOD_SPEED_BOOST_MULTIPLIER: 1.5,
    ALPHA_MODE_EXTENSION_PER_FOOD: 0.5,

    // Power-up settings
    POWERUP_SPEED_DURATION: 20.0,
    POWERUP_SPEED_MULTIPLIER: 1.3,
    POWERUP_SHRINK_AMOUNT: 3,
    POWERUP_SCORE_MULTIPLIER: 3.0,
    POWERUP_SCORE_MULTIPLIER_DURATION: 10.0,
    POWERUP_GHOST_DURATION: 8.0,

    // Alpha Mode score multiplier settings
    ALPHA_MODE_SCORE_MULTIPLIER: 1.8,
    ALPHA_MODE_SCORE_MULTIPLIER_DURATION: 5.0,
    ALPHA_MODE_MAX_SCORE_MULTIPLIER: 16.0,

    // Alpha Mode activation limits - DISABLED
    ALPHA_MODE_MAX_CONSECUTIVE_ACTIVATIONS: 999,
    ALPHA_MODE_COOLDOWN_DURATION: 0.1,

    // Alpha Points System
    ALPHA_POINTS_THRESHOLD: 30,
    ALPHA_POINTS_FOOD: 3,
    ALPHA_POINTS_FROG: 6,
    ALPHA_POINTS_ENEMY: 10,
    ALPHA_POINTS_DECAY_RATE: 0.8,
    ALPHA_POINTS_FROG_MULTIPLIER: 1.5,

    // Alpha Mode settings
    ALPHA_MODE_SCORE_THRESHOLD: 1000,
    ALPHA_MODE_DURATION: 6,
    ALPHA_MODE_SPEED_MULTIPLIER: 1.5,
    ALPHA_MODE_COLOR: 0x9C27B0,
    ALPHA_MODE_EXTENSION_PER_ENEMY: 1.5,

    // Audio settings
    AUDIO_VOLUME: {
        MUSIC: 0.3,
        MOVEMENT_SOUNDS: 0.4,
        EATING_SOUNDS: 0.5,
        ALPHA_MODE_SOUNDS: 0.6,
        DEATH_SOUND: 0.6
    },
    AUDIO_ENABLED: {
        MUSIC: false,
        SOUND_EFFECTS: true
    },
    AUDIO_PRELOAD_ALL: true,

    // Enemy snake settings
    NUM_ENEMIES: 8,
    ENEMY_START_LENGTH: 5,
    ENEMY_SNAKE_SPEED: 0.3,
    ENEMY_START_SAFE_ZONE: 10,
    ENEMY_TAIL_EDIBLE_SEGMENTS: 3,
    ENEMY_TAIL_COLOR: 0x4DD0E1,
    ENEMY_KILL_SCORE: 10,
    ENEMY_RESPAWN_TIME: 5,
    ENEMY_KILL_SEGMENTS: 5,

    // Player powerup settings
    ENLARGED_HEAD_DURATION: 0,
    ENLARGED_HEAD_SCALE: 1,

    // Particle effects
    PARTICLE_COUNT_KILL: 10,
    PARTICLE_COLOR_KILL: 0xFF5722,
    PARTICLE_COUNT_NORMAL_FOOD: 2,
    PARTICLE_COLOR_NORMAL_FOOD: 0x4CAF50,
    PARTICLE_COUNT_DEATH: 10,
    PARTICLE_SIZE: 2,
    PARTICLE_LIFESPAN: 0.2,
    PARTICLE_SPEED: 3.0,

    WALL_HEIGHT: 3,
    WALL_THICKNESS: 1,
    FOG_COLOR: 0xFFFFFF,
    FOG_DENSITY: 0.03,
    START_SAFE_ZONE: 5,
    GROUND_COLOR: 0x4682B4,

    // Camera shake settings
    CAMERA_SHAKE_ENABLED: true,
    CAMERA_SHAKE_DURATION: 0.2,
    CAMERA_SHAKE_INTENSITY: 3,

    // Food type spawn ratios (must add up to 100)
    FOOD_SPAWN_RATIOS: {
        normal: 89,
        speed: 5,
        shrink: 1,
        score_x2: 3,
        ghost: 2
    },

    // Game Modes Configuration
    GAME_MODES: {
        NORMAL: "normal",
        CASUAL: "casual"
    },
    DEFAULT_GAME_MODE: "normal",
    MODE_SETTINGS: {
        "normal": {
            SNAKE_SPEED_MULTIPLIER: 1.0,
            OBSTACLE_COUNT_MULTIPLIER: 1.0,
            FOOD_COUNT_MULTIPLIER: 1.0,
            ALPHA_POINTS_THRESHOLD_MULTIPLIER: 1.0,
            ALPHA_MODE_DURATION_MULTIPLIER: 1.0,
            COLLISION_FORGIVENESS: 0.2
        },
        "casual": {
            SNAKE_SPEED_MULTIPLIER: 0.7,
            OBSTACLE_COUNT_MULTIPLIER: 0.7,
            FOOD_COUNT_MULTIPLIER: 1.5,
            ALPHA_POINTS_THRESHOLD_MULTIPLIER: 0.7,
            ALPHA_MODE_DURATION_MULTIPLIER: 1.5,
            COLLISION_FORGIVENESS: 0.5
        }
    },

    // Game Text Configuration
    GAME_TEXT: {
        UI: {
            SCORE_LABEL: "SCORE",
            KILLS_LABEL: "KILLS",
            GAME_OVER: {
                TITLE: "GAME OVER!",
                SCORE_PREFIX: "FINAL SCORE: ",
                RESTART_BUTTON: "RESTART",
                HIGH_SCORE: "HIGH SCORE",
                DEATH_REASONS: {
                    WALL_COLLISION: "You crashed into a wall",
                    SELF_COLLISION: "You ate yourself",
                    ENEMY_COLLISION: "You choked on a snek",
                    OBSTACLE_COLLISION: "You crashed into an obstacle",
                    TREE_COLLISION: "You tried to eat a tree",
                    BUSH_COLLISION: "You got tangled in a bush",
                    PVP_COLLISION: "Another snek got you"
                }
            },
        },
        ALPHA_MODE: {
            PROGRESS_LABEL: "",
            ACTIVE_LABEL: "Alpha SNEK!",
            ACTIVATED_MESSAGE: "ALPHA SNEK ACTIVATED!",
            DEACTIVATED_MESSAGE: "ALPHA SNEK DEACTIVATED",
            KILL_MESSAGE: "ALPHA KILL!",
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
        POWERUPS: {
            SPEED_BOOST: "Speed boost!",
            GHOST_MODE: "Ghost mode!",
            SHRINK: "Shrinkaaage!",
            SCORE_MULTIPLIER: "3x rewards!",
            ENEMY_KILLED_MESSAGES: [
                "MILOS SMELLS",
                "MILOS IS THE BEST",
                "MILOS IS A GOOD SNEK",
                "MILOS IS THE BEST SNEK",
                "MILOS IS BETTER THAN EVERYONE",
                "YOU ATE FILIP!",
                "YOU ATE MILOS!"
            ]
        },
        TUTORIAL: {
            CONTROLS: "Left/Right keys to turn your Snek",
            MOBILE_CONTROLS: "Press left/right buttons to turn your Snek",
            OBJECTIVE: "Eat food and other sneks to grow your anaconda. Eat a Snek by eating its tail.",
            ALPHA_MODE_HINT: "Fill up the alpha meter to become the ALPHA SNEK!"
        }
    },

    // Frog Movement Settings
    FROG_MOVEMENT: {
        BASE_SPEED: 2,
        SPEED_VARIATION: 0.5,
        HOP_HEIGHT: 0.2,
        HOP_FREQUENCY: 1.0,
        HOP_FREQUENCY_VARIATION: 0.5,
        MAX_DISTANCE: 3,
        DISTANCE_VARIATION: 1.0,
        DIRECTION_CHANGE_PROBABILITY: 0.005,
        MOVEMENT_STYLE: 'crawl',
        MOVE_INTERVAL: 0.5
    },
};

// --- Defaults (frozen deep copy for reset) ---
function deepFreeze(obj) {
    Object.freeze(obj);
    for (const val of Object.values(obj)) {
        if (val && typeof val === 'object') deepFreeze(val);
    }
    return obj;
}

const DEFAULTS = deepFreeze(JSON.parse(JSON.stringify(CONFIG)));

// --- Persistence ---
const STORAGE_KEY = 'snek_adminConfig';

function deepAssign(target, source) {
    for (const key of Object.keys(source)) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) &&
            target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
            deepAssign(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
}

export function saveOverrides() {
    try {
        const diff = {};
        for (const key of Object.keys(DEFAULTS)) {
            if (JSON.stringify(CONFIG[key]) !== JSON.stringify(DEFAULTS[key])) {
                diff[key] = CONFIG[key];
            }
        }
        if (Object.keys(diff).length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(diff));
        } else {
            localStorage.removeItem(STORAGE_KEY);
        }
    } catch (e) {
        console.warn('Failed to save config overrides:', e);
    }
}

export function resetAllConfig() {
    deepAssign(CONFIG, DEFAULTS);
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
}

export function getDefaults() {
    return DEFAULTS;
}

// Load saved overrides on module init
try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        deepAssign(CONFIG, JSON.parse(saved));
    }
} catch (e) {
    console.warn('Failed to load config overrides:', e);
}

export default CONFIG;
