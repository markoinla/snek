import * as THREE from 'three';
import * as CONFIG from './config.js';

// Centralized Game State
// This object will be passed around to modules that need access to shared state.
export const gameState = {
    scene: null,
    camera: null,
    renderer: null,
    materials: null, // Loaded materials { snake, enemy, food, obstacle, etc. }
    lights: {
        ambientLight: null,
        directionalLight: null,
    },
    clock: null,

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
    score: 0,
    highScore: loadHighScore(), // Load high score from localStorage
    stats: {
        applesEaten: 0,   // Track normal food (apples) eaten
        frogsEaten: 0,    // Track power-up frogs eaten
    },
    flags: {
        gameOver: false,
        gameRunning: false, // Indicate if the main loop is active
        restartRequested: false,
        animating: false,   // Track if the animation loop is currently running
    },

    // Input cleanup function
    cleanupInput: null,
};

// Function to load high score from localStorage
function loadHighScore() {
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
    try {
        localStorage.setItem('alphaSnek_highScore', score.toString());
        console.log('High score saved:', score);
    } catch (error) {
        console.warn('Could not save high score to localStorage:', error);
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
     gameState.score = 0;
     // Don't reset high score between games
     // gameState.highScore = 0;
     gameState.enemies.kills = 0;
     gameState.stats.applesEaten = 0;
     gameState.stats.frogsEaten = 0;
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