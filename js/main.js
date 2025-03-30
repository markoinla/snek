import * as THREE from 'three';
import * as CONFIG from './config.js';
import { gameState, resetGameStateForNewGame } from './gameState.js';
import * as Utils from './utils.js';
import * as SceneSetup from './sceneSetup.js';
import * as Materials from './materials.js';
import * as UI from './ui.js';
import * as Input from './inputHandler.js';
import * as Particles from './particleSystem.js';
import * as Food from './food.js';
import * as Obstacles from './obstacles.js';
import * as Player from './playerSnake.js';
import * as Enemy from './enemySnake.js';

// --- Initialization ---
async function init() {
    console.log("Initializing game...");
    gameState.flags.gameRunning = false; // Not running until setup is complete

    // Basic Setup
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) {
        console.error("Canvas element #gameCanvas not found!");
        return;
    }
    gameState.scene = SceneSetup.createScene();
    gameState.camera = SceneSetup.createCamera();
    gameState.renderer = SceneSetup.createRenderer(canvas);
    gameState.clock = new THREE.Clock();
    gameState.lights = SceneSetup.createLights(gameState.scene);

    // Loading screen placeholder?

    // Load Materials (async)
    try {
        gameState.materials = await Materials.loadAndCreateMaterials();
        console.log("Materials loaded and created.");

        // Check if essential materials exist
        if (!gameState.materials?.snake?.head1 || !gameState.materials?.ground || !gameState.materials.particle) {
             throw new Error("Essential materials failed to create after loading.");
        }

    } catch (error) {
        console.error("Fatal Error: Could not load/create materials.", error);
        // Display error to user?
        UI.showGameOver("Loading Error"); // Show game over screen with error
        return; // Stop initialization
    }

    // Setup Scene Environment (Ground, Walls, Grass, Skybox)
    const env = SceneSetup.setupBasicScene(gameState.scene, gameState.materials);
    gameState.environment = { ...env };

    // Initialize Systems that need materials/scene
    Particles.initParticles(gameState.materials.particle);

    // Setup Input Listeners (store cleanup function)
    gameState.cleanupInput = Input.setupInputListeners(gameState, UI.elements);

    // Initial Game Reset (spawns player, food, obstacles, enemies)
    resetGame(); // This now sets flags.gameRunning = true

    // Start Animation Loop
    animate();

    // Event Listeners
    window.addEventListener('resize', onWindowResize);
}

// --- Game Reset ---
function resetGame() {
    console.log("--- RESETTING GAME ---");
    gameState.flags.gameRunning = false; // Pause updates during reset

    // Reset core game state variables (score, flags)
    resetGameStateForNewGame();

    // Reset individual game components
    Particles.resetParticles(gameState.scene);
    Food.resetFood(gameState); // Clear existing food objects/state
    Obstacles.resetObstacles(gameState); // Clear existing obstacles
    Enemy.resetEnemies(gameState); // Clear existing enemies
    Player.resetPlayer(gameState); // Resets player state and meshes

    // Respawn initial elements
    Obstacles.spawnInitialObstacles(gameState);
    Food.spawnInitialFood(gameState); // Spawn food after obstacles
    Enemy.spawnInitialEnemies(gameState); // Spawn enemies last

    // Reset UI elements
    UI.resetUI(0); // Reset score display, hide game over, etc.

    // Reset camera position/focus? (Optional, updateCamera handles it)
    // gameState.camera.position.set(0, CONFIG.CAMERA_HEIGHT, CONFIG.CAMERA_DISTANCE);
    // Player.updateCamera(gameState); // Force immediate camera update

    console.log("--- GAME RESET COMPLETE ---");
    gameState.flags.gameRunning = true; // Resume updates
    gameState.flags.gameOver = false; // Ensure game over is false
}

// --- Game Over ---
export function setGameOver(state = gameState) { // Allow passing state for flexibility
    if (state.flags.gameOver) return; // Prevent multiple triggers

    console.log("Game Over! Final Score:", state.score);
    state.flags.gameOver = true;
    state.flags.gameRunning = false; // Stop game logic updates

    // Show UI
    UI.showGameOver(state.score);
    UI.updatePowerUpInfo(''); // Clear any active power-up display
    UI.hidePowerUpTextEffect();

    // Reset player state flags that affect gameplay (speed, ghost) immediately
    state.playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
    state.playerSnake.scoreMultiplier = 1;
    if (state.playerSnake.ghostModeActive) {
         state.playerSnake.ghostModeActive = false;
         Player.updatePlayerSnakeTextures(state); // Update visuals immediately
    }
    state.playerSnake.activePowerUp = null;

    // Optional: Stop enemy movement? AI loop will stop due to gameRunning flag
}

// --- Restart Request ---
// Called by input handler when 'R' is pressed
export function requestRestart() {
    if (gameState.flags.gameOver) { // Only allow restart if game is over
         gameState.flags.restartRequested = true;
         console.log("Restart requested.");
    }
}


// --- Main Loop ---
function animate() {
    // Use renderer's built-in loop
    gameState.renderer.setAnimationLoop(render);
}

function render() {
    // Handle restart request
    if (gameState.flags.restartRequested) {
         resetGame(); // Execute the reset
         // No need to return here, let the frame render the reset state
    }

    // Get time delta
    const deltaTime = gameState.clock.getDelta();
    const currentTime = gameState.clock.getElapsedTime(); // Use elapsed time for timers

    // Update game state only if running
    if (gameState.flags.gameRunning && !gameState.flags.gameOver) {
        Player.updatePlayer(deltaTime, currentTime, gameState);
        Enemy.updateEnemies(deltaTime, currentTime, gameState);
        Particles.updateParticles(deltaTime, gameState.scene); // Update particles regardless of game over? Your choice.
    } else {
        // Still update particles even if game is over?
        Particles.updateParticles(deltaTime, gameState.scene);
    }

    // Update camera (even slightly after game over for effect?)
    Player.updateCamera(gameState);

    // Render the scene
    gameState.renderer.render(gameState.scene, gameState.camera);
}

// --- Event Handlers ---
function onWindowResize() {
    if (gameState.camera && gameState.renderer) {
        gameState.camera.aspect = window.innerWidth / window.innerHeight;
        gameState.camera.updateProjectionMatrix();
        gameState.renderer.setSize(window.innerWidth, window.innerHeight);
        // Note: Pixel ratio is set once at init, usually doesn't need update
    }
}

// --- Start Game ---
init().catch(error => {
    console.error("Initialization failed:", error);
    // Display a user-friendly error message on the page
    const body = document.querySelector('body');
    if (body) {
        body.innerHTML = `<div style="color: red; padding: 20px; font-size: 1.5em;">Failed to initialize game. Please check console for details.</div>`;
    }
});