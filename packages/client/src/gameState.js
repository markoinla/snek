import * as THREE from 'three';
import CONFIG from './config.js';

// Centralized Game State
// This object will be passed around to modules that need access to shared state.
export const gameState = {
    core: null,
    scene: null,
    camera: null,
    renderer: null,
    materials: null, // Loaded materials { snake, enemy, food, obstacle, etc. }
    lights: {
        ambientLight: null,
        directionalLight: null,
    },
    clock: null,
    frameCount: 0, // Track frame count for throttling UI updates
    simulation: {
        tickRate: 30, // Fixed simulation ticks per second
        fixedDelta: 1 / 30, // 1 / tickRate
        accumulator: 0,
        time: 0,
        lastTimeMs: 0,
        maxSubSteps: 5,
    },

    // Game mode - Normal or Casual
    gameMode: loadGameMode(),
    
    // Game Objects State
    playerSnake: {
        segments: [],
        direction: { x: 1, y: 0, z: 0 },
        nextDirection: { x: 1, y: 0, z: 0 },
        speed: CONFIG.BASE_SNAKE_SPEED,
        moveTimer: 0,
        animationFrame: 0,
        animationTimer: 0,
        scoreMultiplier: 1,
        ghostModeActive: false,
        activePowerUp: null, // { type, endTime }
        enlargedHeadUntil: 0, // Timestamp when enlarged head effect ends
        // Alpha Mode properties
        alphaMode: {
            active: false,
            startTime: 0,
            endTime: 0,
            lastScoreThreshold: 0, // Last score threshold that triggered Alpha Mode
        },
    },
    enemies: {
        list: [], // Array of enemy state objects
        // Note: Enemy meshes are stored separately in enemySnake.js `enemyMeshes` cache
        kills: 0, // Track number of enemy snakes killed
    },
    food: {
        positions: [], // Array of { x, y, z, type }
        meshes: [],    // Array of THREE.Mesh corresponding to positions
    },
    obstacles: {
        list: [],      // Array of { x, y, z, type, mesh, occupiedCells }
        group: null,   // THREE.Group containing all obstacle meshes
    },
    particles: {
        // Active particles are managed within particleSystem.js
    },
    environment: {
        groundMesh: null,
        wallGroup: null,
        grassInstances: null,
        skybox: null,
    },

    // Camera effects
    cameraEffects: {
        shake: {
            active: false,
            startTime: 0,
            duration: 0,
            intensity: 0,
            originalPosition: new THREE.Vector3()
        }
    },

    // Game Status
    score: {
        current: 0,
        multiplier: 1
    },
    highScore: loadHighScore(), // Load high score from localStorage
    stats: {
        applesEaten: 0,   // Track normal food (apples) eaten
        frogsEaten: 0,    // Track power-up frogs eaten
        snakesEaten: 0,   // Track enemy snakes eaten
    },
    flags: {
        gameOver: false,
        gameStarted: false,
        gamePaused: false,
        gameRunning: false, // Indicate if the main loop is active
        restartRequested: false,
        animating: false,   // Track if the animation loop is currently running
        audioHealthCheckRun: false,
        useCoreSimulation: true,
    },
    inputQueue: [],
    network: {
        enabled: false,
        status: 'idle',
        room: null,
        sessionId: null,
        lastSnapshotTick: 0,
        sendInput: null,
    },

    // Input cleanup function
    cleanupInput: null,
};

// Function to load high score from localStorage
function loadHighScore() {
    if (typeof localStorage === 'undefined') {
        return 0;
    }
    try {
        const savedHighScore = localStorage.getItem('alphaSnek_highScore');
        return savedHighScore ? parseInt(savedHighScore, 10) : 0;
    } catch (error) {
        console.warn('Could not load high score from localStorage:', error);
        return 0;
    }
}

// Function to save high score to localStorage
export function saveHighScore(score) {
    if (typeof localStorage === 'undefined') {
        return;
    }
    try {
        localStorage.setItem('alphaSnek_highScore', score.toString());
        console.log('High score saved:', score);
    } catch (error) {
        console.warn('Could not save high score to localStorage:', error);
    }
}

// Function to save the current game mode to localStorage
export function saveGameMode(mode) {
    if (typeof localStorage === 'undefined') {
        return;
    }
    try {
        localStorage.setItem('alphaSnek_gameMode', mode);
        console.log('Game mode saved:', mode);
        
        // Update gameState with the new mode
        gameState.gameMode = mode;
    } catch (error) {
        console.warn('Could not save game mode to localStorage:', error);
    }
}

// Function to get the current mode settings based on gameState.gameMode
export function getCurrentModeSettings() {
    const modeKey = gameState.gameMode === CONFIG.GAME_MODES.CASUAL ? 
        CONFIG.GAME_MODES.CASUAL : CONFIG.GAME_MODES.NORMAL;
    
    return CONFIG.MODE_SETTINGS[modeKey];
}

// Function to get a game setting adjusted for the current mode
// For example: getAdjustedSetting('BASE_SNAKE_SPEED') will return the base speed multiplied by the mode's speed multiplier
export function getAdjustedSetting(settingName) {
    const modeSettings = getCurrentModeSettings();
    
    switch (settingName) {
        case 'BASE_SNAKE_SPEED':
            return CONFIG.BASE_SNAKE_SPEED * modeSettings.SNAKE_SPEED_MULTIPLIER;
        case 'NUM_OBSTACLES':
            return Math.round(CONFIG.NUM_OBSTACLES * modeSettings.OBSTACLE_COUNT_MULTIPLIER);
        case 'NUM_INITIAL_FOOD':
            return Math.round(CONFIG.NUM_INITIAL_FOOD * modeSettings.FOOD_COUNT_MULTIPLIER);
        case 'ALPHA_POINTS_THRESHOLD':
            return Math.round(CONFIG.ALPHA_POINTS_THRESHOLD * modeSettings.ALPHA_POINTS_THRESHOLD_MULTIPLIER);
        case 'ALPHA_MODE_DURATION':
            return CONFIG.ALPHA_MODE_DURATION * modeSettings.ALPHA_MODE_DURATION_MULTIPLIER;
        case 'COLLISION_FORGIVENESS':
            return modeSettings.COLLISION_FORGIVENESS;
        default:
            console.warn(`No adjustment found for setting: ${settingName}`);
            return null;
    }
}

// Function to load game mode from localStorage
function loadGameMode() {
    if (typeof localStorage === 'undefined') {
        return CONFIG.GAME_MODES.NORMAL;
    }
    try {
        const savedGameMode = localStorage.getItem('alphaSnek_gameMode');
        // Make sure we return a valid mode, defaulting to NORMAL if needed
        return savedGameMode === CONFIG.GAME_MODES.CASUAL ? 
            CONFIG.GAME_MODES.CASUAL : CONFIG.GAME_MODES.NORMAL;
    } catch (error) {
        console.warn('Could not load game mode from localStorage:', error);
        return CONFIG.GAME_MODES.NORMAL;
    }
}

// Function to safely reset parts of the state, preserving essential refs like scene, camera, renderer
export function resetGameStateForNewGame() {
     console.log("Resetting game state for new game...");

     // Reset Player
     gameState.playerSnake.segments = [];
     gameState.playerSnake.direction = { x: 1, y: 0, z: 0 };
     gameState.playerSnake.nextDirection = { x: 1, y: 0, z: 0 };
     gameState.playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
     gameState.playerSnake.moveTimer = 0;
     gameState.playerSnake.animationFrame = 0;
     gameState.playerSnake.animationTimer = 0;
     gameState.playerSnake.scoreMultiplier = 1;
     gameState.playerSnake.ghostModeActive = false;
     gameState.playerSnake.activePowerUp = null;
     gameState.playerSnake.enlargedHeadUntil = 0;
     gameState.playerSnake.alphaMode = {
        active: false,
        startTime: 0,
        endTime: 0,
        lastScoreThreshold: 0, // Last score threshold that triggered Alpha Mode
     };

     // Enemies, Food, Obstacles will be reset by their respective modules calling their reset functions

     // Reset Status
     gameState.score.current = 0;
     gameState.score.multiplier = 1;
     // Don't reset high score between games
     // gameState.highScore = 0;
     gameState.enemies.kills = 0;
     gameState.stats.applesEaten = 0;
     gameState.stats.frogsEaten = 0;
     gameState.stats.snakesEaten = 0;
     gameState.flags.gameOver = false;
     gameState.flags.gameRunning = true; // Mark as running after reset
     gameState.flags.restartRequested = false;
     gameState.flags.animating = false; // Reset animating flag

     // Reset timers (might need access to clock)
     if (gameState.clock) {
         // Reset specific timers if needed, clock itself keeps running
         gameState.playerSnake.moveTimer = 0; // Example
         gameState.playerSnake.animationTimer = 0;
     }
}
