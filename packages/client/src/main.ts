import * as THREE from 'three';
import CONFIG from './config';
import { gameState, resetGameStateForNewGame, saveHighScore, getAdjustedSetting } from './gameState';
import * as Utils from './utils.js';
import * as SceneSetup from './sceneSetup.js';
import * as Materials from './materials.js';
import * as UI from './ui.js';
import * as Input from './inputHandler';
import * as Particles from './particleSystem.js';
import * as Food from './food.js';
import * as Obstacles from './obstacles.js';
import * as Player from './playerSnake.js';
import * as Enemy from './enemySnake.js';
import * as Audio from './audioSystem.js';
import { FOOD_TYPES } from './constants';
import { performanceSettings } from './deviceUtils.js';
import { initLogger, Logger, isLoggingEnabled } from './debugLogger.js';
import Stats from '../lib/stats.module.js';
import * as GameModes from './gameModes.js';
import { createInitialCoreState, createPlayerState } from './core/state.ts';
import { EVENT_SCHEMA_VERSION, EventType } from 'snek-shared';
import { bindCoreState } from './core/sync.ts';
import { stepCore } from './core/step.ts';
import { applyPlayerInput } from './core/player.ts';
import { spawnFoodCore } from './core/spawn.ts';
import { spawnInitialEnemiesCore } from './core/enemy.ts';
import { connectMultiplayer } from './network/colyseusClient.ts';

// FPS counter
let stats: any;

// Store event listener references so we can clean them up
const globalEventListeners: Array<{ target: EventTarget; type: string; listener: EventListenerOrEventListenerObject }> = [];

// Helper function to add event listeners that we can clean up later
function addManagedEventListener(target: EventTarget, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
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
    
    if (typeof gameState.cleanupInput === 'function') {
        gameState.cleanupInput();
        gameState.cleanupInput = null;
    }

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
    const urlParams = new URLSearchParams(window.location.search);

    // Admin panel (dev tool) - activate via ?admin=1
    if (urlParams.get('admin') === '1') {
        import('./adminPanel.js').then(({ initAdminPanel }) => {
            initAdminPanel();
        }).catch(console.error);
    }

    const urlSeed = urlParams.get('seed');
    const seed = urlSeed ? Number(urlSeed) : Date.now();
    gameState.core = createInitialCoreState(seed);
    // Create local player in single-player mode
    gameState.core.players['local'] = createPlayerState('local');
    gameState.localPlayerId = 'local';
    Logger.system.info(`Core RNG seed: ${seed}`);
    Logger.system.info(`Event schema version: ${EVENT_SCHEMA_VERSION}`);
    bindCoreState(gameState);
    gameState.simulation.fixedDelta = 1 / gameState.simulation.tickRate;
    gameState.simulation.lastTimeMs = performance.now();
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
    
    // Show intro screen (only shown for first-time users; room code URLs handled below)
    const initPath = window.location.pathname;
    const isRoomCodeUrl = /^\/[A-Z0-9]{6}$/.test(initPath);
    if (!isRoomCodeUrl) {
        UI.showIntroScreen();
    }
    
    // Event Listeners
    addManagedEventListener(window, 'resize', onWindowResize);

    // Add event listener for Alpha Mode cooldown reset button
    document.getElementById('resetAlphaModeCooldown')?.addEventListener('click', function() {
        // Reset the Alpha Mode cooldown
        Player.resetAlphaModeCooldown(gameState);
        
        // Show a message to the player
        UI.showPowerUpTextEffect("Alpha Mode cooldown reset!");
        
        Logger.system.info("Alpha Mode cooldown reset button clicked");
    });
    
    // Add stats display if query string parameter is set
    if (urlParams.get('stats') === 'true') {
        stats = new (Stats as any)();
        document.body.appendChild(stats.dom);
    }

    // Multiplayer connection helper
    const startMultiplayer = async (opts: { roomCode?: string; createRoom?: boolean } = {}) => {
        UI.hideNameOverlay();
        UI.startGame();
        try {
            await connectMultiplayer(gameState, {
                playerName: UI.getPlayerName(),
                ...opts,
            });
            UI.showPowerUpTextEffect('Connected to multiplayer', 0x4caf50);
        } catch (error) {
            Logger.system.warn('Multiplayer connection failed; running offline.', error);
        }
    };

    addManagedEventListener(window, 'multiplayerJoin', () => {
        startMultiplayer();
    });

    addManagedEventListener(window, 'multiplayerCreateRoom', () => {
        startMultiplayer({ createRoom: true });
    });

    // Direct room code URL (e.g. /A3FH2K) — prompt for name if needed, then join
    const path = window.location.pathname;
    const roomCodeMatch = path.match(/^\/([A-Z0-9]{6})$/);
    if (roomCodeMatch) {
        const roomCode = roomCodeMatch[1];
        const joinRoom = async () => {
            UI.hideNameOverlay();
            UI.startGame();
            try {
                await connectMultiplayer(gameState, { playerName: UI.getPlayerName(), roomCode });
                UI.showPowerUpTextEffect('Connected to multiplayer', 0x4caf50);
            } catch (error) {
                Logger.system.warn('Room not found or connection failed', error);
                window.history.replaceState({}, '', '/');
                UI.showIntroScreen();
                UI.showPowerUpTextEffect('Room not found', 0xff4444);
            }
        };
        const name = UI.getPlayerName();
        if (name) {
            await joinRoom();
        } else {
            UI.showNameOverlay(() => { joinRoom(); });
        }
    } else if (path === '/multi') {
        // Legacy /multi URL — skip intro, auto-join
        try {
            await connectMultiplayer(gameState, { playerName: UI.getPlayerName() });
            UI.showPowerUpTextEffect('Connected to multiplayer', 0x4caf50);
        } catch (error) {
            Logger.system.warn('Multiplayer connection failed; running offline.', error);
        }
    }
    
    // Add event listeners for game state changes
    addManagedEventListener(window, 'gameOver', onGameOver);
    addManagedEventListener(window, 'gamePaused', onGamePaused);
    addManagedEventListener(window, 'gameResumed', onGameResumed);
    addManagedEventListener(window, 'gameRestart', requestRestart);
    
    // Initialize game modes system
    GameModes.initGameModeSystem();
}

/**
 * Function to start the actual gameplay after intro screen
 */
function startGameplay() {
    Logger.system.info("Starting gameplay...");
    
    // Reset game state for a fresh run
    resetGame();
    
    // Set game flags
    gameState.flags.gameStarted = true;
    gameState.flags.gameOver = false;
    gameState.flags.gamePaused = false;
    
    // Force audio context start (browser requirement for audio)
    if ((window as any).fixAudio) {
        (window as any).fixAudio();
    }
    
    // Start animation if not already running
    if (!gameState.flags.animating) {
        gameState.flags.animating = true;
        animate();
        
        // Don't automatically play background music
        // Audio.playBackgroundMusic();
    }
}

// Function to pause the game (when help screen is opened)
function pauseGame() {
    Logger.system.info("Game paused");
    gameState.flags.gameRunning = false;
    gameState.flags.gamePaused = true;
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
    gameState.simulation.time = 0;
    gameState.simulation.accumulator = 0;
    gameState.simulation.lastTimeMs = performance.now();

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
                    const multiplayerEnabled = gameState.network?.enabled;
                    if (!multiplayerEnabled) {
                        Obstacles.spawnInitialObstacles(gameState);
                    }
                if (gameState.flags.useCoreSimulation && !multiplayerEnabled) {
                    const foodCount = getAdjustedSetting('NUM_INITIAL_FOOD') || CONFIG.NUM_INITIAL_FOOD;
                    spawnFoodCore(gameState.core!, foodCount);
                    Food.syncFoodMeshes(gameState);
                } else if (!multiplayerEnabled) {
                    Food.spawnInitialFood(gameState); // Spawn food after obstacles
                }
                
                setTimeout(() => {
                    if (gameState.flags.useCoreSimulation && !multiplayerEnabled) {
                        spawnInitialEnemiesCore(gameState.core!, CONFIG.NUM_ENEMIES);
                        Enemy.syncEnemyMeshes(gameState);
                    } else if (!multiplayerEnabled) {
                        Enemy.spawnInitialEnemies(gameState); // Spawn enemies last
                    }
                    
                    // Reset UI elements
                    UI.resetUI(0, gameState); // Reset score display, hide game over, etc.
                    UI.updateKills(0); // Initialize kill counter

                    // Rebind core state to the newly reset runtime state
                    if (!multiplayerEnabled) {
                        bindCoreState(gameState);
                    }
                    
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
        // Start the game directly without showing intro screen
        UI.startGame();
        
        Logger.system.info("Restart requested.");
    }
}

// --- Event Processing ---
// Shared event handler for both single-player (local sim) and multiplayer (server events)
function processEventEnvelopes(envelopes: any[], state: any, isMultiplayer: boolean): void {
    const localId = state.localPlayerId || 'local';

    envelopes.forEach((envelope: any) => {
        if (envelope.version !== EVENT_SCHEMA_VERSION) {
            Logger.system.warn(`Event schema mismatch. Expected ${EVENT_SCHEMA_VERSION}, got ${envelope.version}`);
            return;
        }

        const event = envelope.event;
        const isLocalPlayer = !event.playerId || event.playerId === localId;

        if (event.type === EventType.PlayerDead) {
            if (isLocalPlayer) {
                Player.playPlayerDeathEffects(state);
                if (!isMultiplayer) {
                    setGameOver(state, event.payload?.reason || 'DEFAULT');
                } else {
                    // In multiplayer, death is temporary — show respawn overlay
                    UI.showRespawnOverlay(
                        event.payload?.reason || 'DEFAULT',
                        CONFIG.PLAYER_RESPAWN_DELAY_TICKS,
                        state.simulation?.tickRate || 30
                    );
                }
            }
        }
        if (event.type === EventType.ScoreChanged && isLocalPlayer) {
            UI.updateScore(event.payload.score);
        }
        if (event.type === EventType.FoodSpawned) {
            Food.syncFoodMeshes(state);
        }
        if (event.type === EventType.FoodEaten) {
            const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === event.payload.type);
            if (isLocalPlayer) {
                if (event.payload.type === 'normal') {
                    state.stats.applesEaten++;
                    Audio.playSoundEffect('eatApple');
                    if (event.payload.effects.speedBoostDuration > 0) {
                        UI.showPowerUpTextEffect("Speed Boost!", 0x00BFFF);
                    }
                } else {
                    state.stats.frogsEaten++;
                    Audio.playSoundEffect('eatFrog');
                }
                if (foodTypeInfo?.effectText) {
                    UI.showPowerUpTextEffect(foodTypeInfo.effectText, foodTypeInfo.colorHint.getHex());
                }
            }
        }
        if (event.type === EventType.EnemyKilled) {
            Enemy.renderEnemyKillEffects(event.payload.enemyId, state);
            if (isLocalPlayer && state.playerSnake?.alphaMode?.active) {
                Audio.playSoundEffect('alphaKillExplode1');
                Audio.playAlphaKillVoice();
            }
            if (isLocalPlayer) {
                state.stats.snakesEaten++;
            }
            UI.updateKills(state.enemies.kills);
        }
        if (event.type === EventType.PowerupApplied && isLocalPlayer) {
            const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === event.payload.type);
            if (foodTypeInfo?.effectText) {
                UI.showPowerUpTextEffect(foodTypeInfo.effectText, foodTypeInfo.colorHint.getHex());
            }
        }
        if (event.type === EventType.AlphaModeActivated && isLocalPlayer) {
            UI.showAlphaModeActivation();
            // @ts-expect-error -- function missing from audioSystem.js (pre-existing)
            Audio.playAlphaModeActivation();
            Player.updatePlayerSnakeTextures(state, true);
        }
        if (event.type === EventType.AlphaModeEnded && isLocalPlayer) {
            UI.showPowerUpTextEffect("Alpha Mode ended");
            Player.updatePlayerSnakeTextures(state, true);
        }
        if (event.type === EventType.EnemyRespawned) {
            Enemy.syncEnemyMeshes(state);
        }
        if (event.type === EventType.PlayerKilledPlayer) {
            const killerName = state.core?.players?.[event.playerId]?.name || 'A player';
            const victimName = state.core?.players?.[event.payload?.victimId]?.name || 'a player';
            if (isLocalPlayer) {
                Audio.playSoundEffect('eatApple');
                UI.addKillFeedMessage(`You killed ${victimName}!`);
            } else if (event.payload?.victimId === localId) {
                UI.addKillFeedMessage(`${killerName} killed you!`);
            } else {
                UI.addKillFeedMessage(`${killerName} killed ${victimName}`);
            }
        }
        if (event.type === EventType.PlayerRespawned && isLocalPlayer) {
            UI.hideRespawnOverlay();
            Player.syncPlayerMeshes(state);
        }
    });
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

    // Fixed timestep simulation
    const nowMs = performance.now();
    const frameTime = Math.min((nowMs - gameState.simulation.lastTimeMs) / 1000, 0.25);
    gameState.simulation.lastTimeMs = nowMs;
    gameState.simulation.accumulator += frameTime;

    // Run audio health check more frequently (every second) to ensure audio stability
    if (Math.floor(gameState.simulation.time * 2) % 2 === 0 && !gameState.flags.audioHealthCheckRun) {
        Audio.performAudioHealthCheck();
        gameState.flags.audioHealthCheckRun = true;
    } else if (Math.floor(gameState.simulation.time * 2) % 2 !== 0) {
        gameState.flags.audioHealthCheckRun = false;
    }

    const isMultiplayer = gameState.network?.enabled;

    if (isMultiplayer) {
        // Multiplayer: no local simulation stepping needed.
        // Drain server events once per frame and advance the timer.
        const consumed = Math.min(
            Math.floor(gameState.simulation.accumulator / gameState.simulation.fixedDelta),
            gameState.simulation.maxSubSteps
        );
        if (consumed > 0) {
            gameState.simulation.accumulator -= consumed * gameState.simulation.fixedDelta;
            gameState.simulation.time += consumed * gameState.simulation.fixedDelta;
        }

        if (gameState.flags.gameRunning && !gameState.flags.gameOver) {
            // Drain server events once per frame
            if (gameState.network.pendingServerEvents?.length) {
                const events = gameState.network.pendingServerEvents.splice(0);
                processEventEnvelopes(events, gameState, true);
            }
            Player.updatePlayerStateOnly(frameTime, gameState.simulation.time, gameState);
            Player.updatePowerUps(gameState);
            Enemy.checkEnemyRespawns(gameState);
        }
        Particles.updateParticles(frameTime, gameState.scene);
        Food.updateFoodAnimations(gameState, frameTime);
    } else {
        // Single-player / offline: fixed-timestep simulation loop
        let subSteps = 0;
        while (gameState.simulation.accumulator >= gameState.simulation.fixedDelta && subSteps < gameState.simulation.maxSubSteps) {
            const deltaTime = gameState.simulation.fixedDelta;
            gameState.simulation.time += deltaTime;

            if (gameState.flags.gameRunning && !gameState.flags.gameOver) {
                if (gameState.flags.useCoreSimulation) {
                    if (gameState.inputQueue.length > 1) {
                        gameState.inputQueue.sort((a, b) => a.tick - b.tick);
                    }
                    while (gameState.inputQueue.length > 0) {
                        const input = gameState.inputQueue.shift()!;
                        if (input.tick < gameState.core!.tick) {
                            continue;
                        }
                        applyPlayerInput(gameState.core!, input);
                    }

                    const coreResult = stepCore(gameState.core!, deltaTime);
                    if (coreResult?.events?.length) {
                        processEventEnvelopes(coreResult.events, gameState, false);
                    }

                    Player.updatePlayerStateOnly(deltaTime, gameState.simulation.time, gameState);
                } else {
                    Player.updatePlayer(deltaTime, gameState.simulation.time, gameState);
                    Enemy.updateEnemies(deltaTime, gameState.simulation.time, gameState);
                }

                Player.updatePowerUps(gameState);
                Enemy.checkEnemyRespawns(gameState);
                Particles.updateParticles(deltaTime, gameState.scene);
                Food.updateFoodAnimations(gameState, deltaTime);
            } else {
                Particles.updateParticles(deltaTime, gameState.scene);
                Food.updateFoodAnimations(gameState, deltaTime);
            }

            subSteps += 1;
            gameState.simulation.accumulator -= gameState.simulation.fixedDelta;
        }
    }

    // Mesh interpolation runs once per render frame (60fps) for smooth visuals.
    // In multiplayer mode, frameTime drives the exponential smoothing.
    if (gameState.flags.useCoreSimulation && gameState.flags.gameRunning && !gameState.flags.gameOver) {
        const interpolationDelta = gameState.network?.enabled ? frameTime : undefined;
        Player.syncAllPlayerMeshes(gameState, interpolationDelta);
        Enemy.syncEnemyMeshes(gameState, interpolationDelta);
        Food.syncFoodMeshes(gameState);
    }

    // Update camera (even slightly after game over for effect?)
    Player.updateCamera(gameState);
    
    // Update camera effects (shake, etc.)
    updateCameraEffects(gameState.simulation.time);

    // Render the scene
    gameState.renderer!.render(gameState.scene!, gameState.camera!);

    // Update stats display if present
    if (stats) {
        stats.update();
    }
}

// --- Camera Effects ---
function updateCameraEffects(currentTime: number): void {
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
    const foodRatios = CONFIG.FOOD_SPAWN_RATIOS as Record<string, number>;
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
            (groundMesh.material as THREE.MeshStandardMaterial).color.set(CONFIG.GROUND_COLOR || 0xFFFFFF);
            (groundMesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
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
