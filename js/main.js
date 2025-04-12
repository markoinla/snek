import * as THREE from 'three';
import * as CONFIG from './config.js';
import { gameState, resetGameStateForNewGame, saveHighScore } from './gameState.js';
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
import * as Audio from './audioSystem.js';
import { performanceSettings } from './deviceUtils.js';
import { initLogger, Logger, isLoggingEnabled } from './debugLogger.js';
import Stats from '../lib/stats.module.js';

// FPS counter
let stats;

// Store event listener references so we can clean them up
const globalEventListeners = [];

// Helper function to add event listeners that we can clean up later
function addManagedEventListener(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    globalEventListeners.push({ target, type, listener });
}

// Helper function to clean up all global event listeners
function cleanupAllEventListeners() {
    globalEventListeners.forEach(({ target, type, listener }) => {
        target.removeEventListener(type, listener);
    });
    globalEventListeners.length = 0; // Clear the array
}

// Clean up event listeners and other resources when restarting or ending game
function cleanupGameResources() {
    cleanupAllEventListeners();
    
    // Clean up audio resources
    Audio.cleanupAudio();
    
    // Remove stats if it was added
    if (stats && stats.dom && stats.dom.parentNode) {
        stats.dom.parentNode.removeChild(stats.dom);
        stats = null;
    }
}

// --- Initialization ---
async function init() {
    // Initialize debug logger
    const debugEnabled = initLogger();
    
    Logger.system.info("Initializing game...");
    gameState.flags.gameRunning = false; // Not running until setup is complete

    // Initialize performance settings based on device
    const isMobile = performanceSettings.initializeForCurrentDevice();
    Logger.system.info(`Device type: ${isMobile ? 'Mobile' : 'Desktop'}`);
    Logger.system.info(`Performance settings: Shadows=${performanceSettings.shadows}, Detail=${performanceSettings.detailLevel}`);

    // Validate configuration
    validateConfig();

    // Basic Setup
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) {
        Logger.system.error("Canvas element #gameCanvas not found!");
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
        Logger.system.info("Materials loaded and created.");

        // Check if essential materials exist
        if (!gameState.materials?.snake?.head1 || !gameState.materials?.ground || !gameState.materials.particle) {
             throw new Error("Essential materials failed to create after loading.");
        }

    } catch (error) {
        Logger.system.error("Fatal Error: Could not load/create materials.", error);
        // Display error to user?
        alert("Error loading game materials. Please refresh the page and try again.");
        return; // Stop initialization
    }

    // Setup Scene Environment (Ground, Walls, Grass, Skybox)
    const env = SceneSetup.setupBasicScene(gameState.scene, gameState.materials);
    gameState.environment = { ...env };

    // Initialize Systems that need materials/scene
    Particles.initParticles(gameState.materials.particle);
    
    // Initialize Audio System
    Audio.initAudioSystem(gameState.camera);
    
    // Setup Input Listeners (store cleanup function)
    gameState.cleanupInput = Input.setupInputListeners(gameState, UI.elements);

    // Set up game start event listener
    addManagedEventListener(window, 'gameStarted', startGameplay);
    
    // Set up game pause/resume event listeners
    addManagedEventListener(window, 'gamePaused', pauseGame);
    addManagedEventListener(window, 'gameResumed', resumeGame);
    
    // Show intro screen (only shown for first-time users)
    UI.showIntroScreen();
    
    // Event Listeners
    addManagedEventListener(window, 'resize', onWindowResize);

    // Add event listeners for UI buttons
    document.getElementById('startButton')?.addEventListener('click', UI.startGame);
    document.getElementById('settingsButton')?.addEventListener('click', UI.showSettingsMenu);
    document.getElementById('closeSettings')?.addEventListener('click', UI.hideSettingsMenu);
    document.getElementById('restartButton')?.addEventListener('click', requestRestart);
    
    // Add event listener for Alpha Mode cooldown reset button
    document.getElementById('resetAlphaModeCooldown')?.addEventListener('click', function() {
        // Reset the Alpha Mode cooldown
        Player.resetAlphaModeCooldown(gameState);
        
        // Show a message to the player
        UI.showPowerUpTextEffect("Alpha Mode cooldown reset!");
        
        Logger.system.info("Alpha Mode cooldown reset button clicked");
    });
    
    // Add stats display if query string parameter is set
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get('stats') === 'true') {
        stats = new Stats();
        document.body.appendChild(stats.dom);
    }
    
    // Add event listeners for game state changes
    addManagedEventListener(window, 'gameStarted', onGameStart);
    addManagedEventListener(window, 'gameOver', onGameOver);
    addManagedEventListener(window, 'gamePaused', onGamePaused);
    addManagedEventListener(window, 'gameResumed', onGameResumed);
    addManagedEventListener(window, 'gameRestart', requestRestart);
    
    // Add restart button event listener
    document.getElementById('restartButton')?.addEventListener('click', requestRestart);
}

/**
 * Function to start the actual gameplay after intro screen
 */
function startGameplay() {
    Logger.system.info("Starting gameplay...");
    
    // Reset game state if needed
    if (gameState.flags.gameOver) {
        resetGame();
    }
    
    // Set game flags
    gameState.flags.gameStarted = true;
    gameState.flags.gameOver = false;
    gameState.flags.gamePaused = false;
    
    // Force audio context start (browser requirement for audio)
    if (window.fixAudio) {
        window.fixAudio();
    }
    
    // Add debug audio button for users to test audio
    addDebugAudioButton();
    
    // Start animation if not already running
    if (!gameState.flags.animating) {
        gameState.flags.animating = true;
        animate();
        
        // Don't automatically play background music
        // Audio.playBackgroundMusic();
    }
}

// Add a visible audio test button for debugging audio issues
function addDebugAudioButton() {
    // Only add if it doesn't exist and we're in debug mode or have persistent audio issues
    if (!document.getElementById('audioDebugButton')) {
        const button = document.createElement('button');
        button.id = 'audioDebugButton';
        button.innerText = '🔊 Test Sound';
        button.style.position = 'fixed';
        button.style.bottom = '10px';
        button.style.right = '10px';
        button.style.zIndex = '1000';
        button.style.padding = '5px 10px';
        button.style.backgroundColor = '#444';
        button.style.color = 'white';
        button.style.border = '1px solid #666';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '12px';
        
        // Add click handler
        button.addEventListener('click', function() {
            // First resume the audio context
            if (window.fixAudio) {
                window.fixAudio();
            }
            
            // Then play a test sound
            if (window.playTestSound) {
                window.playTestSound();
                
                // Visual feedback
                this.innerText = '✓ Sound Test';
                this.style.backgroundColor = '#0a0';
                
                // Reset after a moment
                setTimeout(() => {
                    this.innerText = '🔊 Test Sound';
                    this.style.backgroundColor = '#444';
                }, 2000);
            }
        });
        
        // Add to document
        document.body.appendChild(button);
    }
}

// Function to pause the game (when help screen is opened)
function pauseGame() {
    Logger.system.info("Game paused");
    gameState.flags.gameRunning = false;
    
    // Pause background music
    Audio.pauseBackgroundMusic();
}

// Function to resume the game (when help screen is closed)
function resumeGame() {
    Logger.system.info("Game resumed");
    if (!gameState.flags.gameOver) {
        gameState.flags.gameRunning = true;
        
        // If animation loop isn't running, restart it
        if (!gameState.flags.animating) {
            gameState.flags.animating = true;
            animate();
        }
        
        // Resume background music
        Audio.playBackgroundMusic();
    }
}

// Game start handler
function onGameStart() {
    Logger.system.info("Game started");
    gameState.flags.gameOver = false;
    gameState.flags.gamePaused = false;
    
    // Reset game state
    resetGame();
    
    // Don't automatically play background music
    // Audio.playBackgroundMusic();
}

// Game over handler
function onGameOver() {
    Logger.system.info("Game over handler called");
    
    // Don't pause background music on game over
    // Audio.pauseBackgroundMusic();
}

// Game paused handler
function onGamePaused() {
    Logger.system.info("Game paused");
    gameState.flags.gamePaused = true;
    
    // Pause background music
    Audio.pauseBackgroundMusic();
}

// Game resumed handler
function onGameResumed() {
    Logger.system.info("Game resumed");
    
    // Only resume if the game was previously running (not game over)
    if (!gameState.flags.gameOver) {
        gameState.flags.gamePaused = false;
        
        // Resume background music
        Audio.playBackgroundMusic();
    }
}

// --- Game Reset ---
function resetGame() {
    Logger.system.info("--- RESETTING GAME ---");
    gameState.flags.gameRunning = false; // Pause updates during reset

    // Reset core game state variables (score, flags)
    resetGameStateForNewGame();

    // Initialize camera effects if not already present
    if (!gameState.cameraEffects) {
        gameState.cameraEffects = {
            shake: {
                active: false,
                startTime: 0,
                duration: 0,
                intensity: 0,
                originalPosition: new THREE.Vector3()
            }
        };
    }

    // Clean up audio resources but restore music afterward if it was enabled
    Audio.cleanupAudio();
    
    // Use a timeout to stagger heavy operations to prevent frame drops
    // Stage 1: Clean up existing objects
    setTimeout(() => {
        // Reset individual game components - the order matters here!
        // Each of these calls should properly clean up their THREE.js objects
        // to prevent memory leaks
        
        // Clean up any active particles first
        Particles.resetParticles(gameState.scene);
        
        // Reset food objects - this removes food meshes from the scene
        Food.resetFood(gameState); 
        
        // Second stage: Recreate game world with slight delays
        setTimeout(() => {
            // Reset obstacles - removes obstacle meshes from the scene
            Obstacles.resetObstacles(gameState); 
            
            // Reset enemies - removes enemy snake meshes from the scene
            Enemy.resetEnemies(gameState); 
            
            // Reset player - removes player snake meshes from the scene 
            Player.resetPlayer(gameState);
            
            // Final stage: Spawn new entities with slight delays
            setTimeout(() => {
                // Respawn initial elements
                Obstacles.spawnInitialObstacles(gameState);
                Food.spawnInitialFood(gameState); // Spawn food after obstacles
                
                setTimeout(() => {
                    Enemy.spawnInitialEnemies(gameState); // Spawn enemies last
                    
                    // Reset UI elements
                    UI.resetUI(0, gameState); // Reset score display, hide game over, etc.
                    UI.updateKills(0); // Initialize kill counter
                    
                    // Restore music if needed
                    Audio.restoreMusicIfEnabled();
                    
                    Logger.system.info("--- GAME RESET COMPLETE ---");
                    gameState.flags.gameRunning = true; // Resume updates
                    gameState.flags.gameOver = false; // Ensure game over is false
                }, 10);
            }, 10);
        }, 10);
    }, 10);
}

// --- Game Over ---
export function setGameOver(state = gameState, deathReason = 'DEFAULT') { // Allow passing state for flexibility
    if (state.flags.gameOver) return; // Prevent multiple triggers

    Logger.system.info("Game Over! Final Score:", state.score.current, "Reason:", deathReason);
    state.flags.gameOver = true;
    state.flags.gameRunning = false; // Stop game logic updates
    
    // Update high score if current score is higher
    if (state.score.current > state.highScore) {
        state.highScore = state.score.current;
        Logger.system.info("New High Score:", state.highScore);
        // Save high score to localStorage for persistence between sessions
        saveHighScore(state.highScore);
        // Update the high score display in the game UI
        UI.updateHighScore(state.highScore);
    }

    // Prepare game stats for the game over screen
    const gameStats = {
        applesEaten: state.stats.applesEaten || 0,
        frogsEaten: state.stats.frogsEaten || 0,
        snakesEaten: state.stats.snakesEaten || 0
    };
    
    // Show UI with death reason and game stats
    UI.showGameOver(state.score.current, state.highScore, deathReason, gameStats);
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

    // Pause background music
    // Audio.pauseBackgroundMusic();
}

// --- Restart Request ---
// Called by input handler when 'R' is pressed
export function requestRestart() {
    if (gameState.flags.gameOver) { // Only allow restart if game is over
        // Hide game over screen
        UI.hideGameOver();
        
        // Clean up resources
        cleanupGameResources();
        
        // Reset the game state
        resetGame();
        
        // Start the game directly without showing intro screen
        UI.startGame();
        
        Logger.system.info("Restart requested.");
    }
}

// --- Main Loop ---
function animate() {
    requestAnimationFrame(animate);
    
    // Increment frame counter for throttling updates
    gameState.frameCount++;
    
    // Skip rendering if game is not running
    if (!gameState.flags.gameRunning) return;
    
    render();
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
    
    // Run audio health check more frequently (every second) to ensure audio stability
    if (Math.floor(currentTime * 2) % 2 === 0 && !gameState.flags.audioHealthCheckRun) {
        Audio.performAudioHealthCheck();
        gameState.flags.audioHealthCheckRun = true;
    } else if (Math.floor(currentTime * 2) % 2 !== 0) {
        gameState.flags.audioHealthCheckRun = false;
    }

    // Update game state only if running
    if (gameState.flags.gameRunning && !gameState.flags.gameOver) {
        Player.updatePlayer(deltaTime, currentTime, gameState);
        
        // Update power-up timers and UI display
        Player.updatePowerUps(gameState);
        
        Enemy.updateEnemies(deltaTime, currentTime, gameState);
        Enemy.checkEnemyRespawns(gameState); // Check if any enemies need to respawn
        Particles.updateParticles(deltaTime, gameState.scene); // Update particles regardless of game over? Your choice.
        
        // Update frog animations
        Food.updateFoodAnimations(gameState, deltaTime);
    } else {
        // Still update particles even if game is over?
        Particles.updateParticles(deltaTime, gameState.scene);
        
        // Continue animating frogs even when game is paused for visual appeal
        Food.updateFoodAnimations(gameState, deltaTime);
    }

    // Update camera (even slightly after game over for effect?)
    Player.updateCamera(gameState);
    
    // Update camera effects (shake, etc.)
    updateCameraEffects(currentTime);

    // Render the scene
    gameState.renderer.render(gameState.scene, gameState.camera);

    // Update stats display if present
    if (stats) {
        stats.update();
    }
}

// --- Camera Effects ---
function updateCameraEffects(currentTime) {
    const { camera, cameraEffects } = gameState;
    if (!camera || !cameraEffects || !cameraEffects.shake) return; // Add safety check
    
    // Handle camera shake effect
    if (cameraEffects.shake.active) {
        const shake = cameraEffects.shake;
        const elapsedTime = currentTime - shake.startTime;
        
        // Check if shake effect should end
        if (elapsedTime >= shake.duration) {
            // Reset camera position and deactivate shake
            camera.position.copy(shake.originalPosition);
            shake.active = false;
        } else {
            // Calculate shake intensity based on remaining time (fade out effect)
            const remainingFactor = 1 - (elapsedTime / shake.duration);
            const currentIntensity = shake.intensity * remainingFactor;
            
            // Apply random displacement to camera position
            const originalPos = shake.originalPosition;
            camera.position.set(
                originalPos.x + (Math.random() * 2 - 1) * currentIntensity,
                originalPos.y + (Math.random() * 2 - 1) * currentIntensity * 0.5, // Less vertical shake
                originalPos.z + (Math.random() * 2 - 1) * currentIntensity
            );
        }
    }
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

// --- Configuration Validation ---
function validateConfig() {
    // Validate food spawn ratios
    const foodRatios = CONFIG.FOOD_SPAWN_RATIOS;
    let totalRatio = 0;
    
    // Calculate total of all ratios
    for (const type in foodRatios) {
        if (foodRatios.hasOwnProperty(type)) {
            totalRatio += foodRatios[type];
        }
    }
    
    // Check if ratios add up to 100
    if (Math.abs(totalRatio - 100) > 0.001) { // Allow for tiny floating point errors
        Logger.system.warn(`Food spawn ratios do not add up to 100! Current total: ${totalRatio}`);
        
        // Normalize ratios to ensure they add up to 100
        const normalizationFactor = 100 / totalRatio;
        for (const type in foodRatios) {
            if (foodRatios.hasOwnProperty(type)) {
                foodRatios[type] = Math.round(foodRatios[type] * normalizationFactor);
            }
        }
        
        Logger.system.info("Food spawn ratios have been normalized:", foodRatios);
    }
    
    // Apply ground color from config
    updateGroundColor();
    
    Logger.system.info("Configuration validated.");
}

// Function to update ground color from config
function updateGroundColor() {
    if (gameState.environment && gameState.environment.groundMesh) {
        const groundMesh = gameState.environment.groundMesh;
        if (groundMesh.material) {
            // Update the color directly
            groundMesh.material.color.set(CONFIG.GROUND_COLOR || 0xFFFFFF);
            groundMesh.material.needsUpdate = true;
            Logger.system.info("Ground color updated to:", CONFIG.GROUND_COLOR ? 
                "#" + CONFIG.GROUND_COLOR.toString(16).padStart(6, '0') : "No tint (white)");
        }
    }
}

// --- Start Game ---
init().catch(error => {
    Logger.system.error("Initialization failed:", error);
    // Display a user-friendly error message on the page
    alert("Error initializing the game. Please check the console for details.");
});