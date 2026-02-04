import * as THREE from 'three';
import CONFIG from './config';
import { FOOD_TYPES } from './constants'; // Import FOOD_TYPES for power-ups
import { createSnakeSegmentMesh } from './utils.js';
import { createExplosion } from './particleSystem.js';
import { setGameOver } from './main.ts'; // To trigger game over
import { checkEnemyCollision, killEnemySnake as killEnemy } from './enemySnake.js';
import { checkAndEatFood } from './food.js';
import { evaluatePlayerMove } from './core/player.ts';
import * as UI from './ui.js'; // For power-up UI updates
import { PALETTE } from './palette';
import * as Audio from './audioSystem.js'; // Import audio system for sound effects
import { Logger, isLoggingEnabled } from './debugLogger.js';
import { getAdjustedSetting } from './gameState'; // For mode-adjusted settings
import { tween, tweenUniform, ease, cancelTween } from './animations';

let playerSnakeMeshes = []; // Keep track of meshes separately for easy removal/update
let remotePlayerMeshes = {}; // Store meshes keyed by remote player ID: { id: [mesh1, mesh2,...] }

// Colors for multiplayer players (indexed by colorIndex)
const PLAYER_COLORS = [
    0x4CAF50, // green  (index 0 — local player default)
    0x2196F3, // blue
    0xF44336, // red
    0xFFEB3B, // yellow
];

// Helper: convert a direction vector {x, z} to a Y rotation angle (radians).
function directionToAngle(dir) {
    return Math.atan2(dir.x, dir.z);
}

// Trigger a squash-and-recover tween on the head mesh when turning.
function triggerHeadSquash() {
    const head = playerSnakeMeshes[0];
    if (!head) return;
    // Cancel any in-flight head scale tweens to avoid conflicts
    cancelTween(head, 'scale');
    // Squash: compress Y, expand X/Z, then bounce back via outElastic
    tween(head, 'scale', 'y', 0.7, 1.0, 0.15, ease.outElastic);
    tween(head, 'scale', 'x', 1.2, 1.0, 0.15, ease.outElastic);
    tween(head, 'scale', 'z', 1.2, 1.0, 0.15, ease.outElastic);
}

// Trigger a chomp (scale pulse) on the head mesh when eating food.
export function triggerHeadChomp() {
    const head = playerSnakeMeshes[0];
    if (!head) return;
    cancelTween(head, 'scale');
    tweenUniform(head, 'scale', 1.3, 1.0, 0.18, ease.outElastic);
}

// --- Player State (managed within gameState.playerSnake) ---
// gameState.playerSnake = {
//     segments: [],        // Array of {x, y, z} positions
//     direction: {x, y, z},
//     nextDirection: {x, y, z},
//     speed: BASE_SNAKE_SPEED,
//     moveTimer: 0,
//     animationFrame: 0,
//     animationTimer: 0,
//     scoreMultiplier: 1,
//     ghostModeActive: false,
//     activePowerUps: [], // { type, endTime }
//     enlargedHeadUntil: 0, // New property for enlarged head effect
//     alphaModeActive: false,
//     alphaMode: {
//         active: false,
//         progress: 0,
//         startTime: 0,
//         endTime: 0,
//         lastScoreThreshold: 0,
//         alphaPoints: 0,         // New property for alpha points system
//         lastDecayTime: 0, // Track when we last decayed alpha points
//         scoreMultiplier: 1.0,         // Current score multiplier (starts at 1.0)
//         scoreMultiplierStack: []       // Stack of active multipliers with their end times
//         consecutiveActivations: 0,    // Track consecutive Alpha Mode activations
//         cooldownActive: false,        // Track if Alpha Mode is in cooldown
//         cooldownEndTime: 0            // When the cooldown period ends
//     },
//     lastTextureUpdateFrame: 0, // Initialize last texture update frame
//     immediateDirectionChange: false, // New property for immediate direction change
//     lastDirection: {x, y, z}, // Track the last direction the snake actually moved
//     pendingTurns: [] // Queue for pending turns to prevent self-collision
// };

export function initPlayerSnake(gameState) {
    const { playerSnake, clock } = gameState;
    
    if (!playerSnake) return;
    
    // Reset all snake properties
    playerSnake.segments = [];
    playerSnake.direction = { x: 1, z: 0 };
    playerSnake.lastDirection = { x: 1, z: 0 };
    playerSnake.pendingTurns = [];
    
    // Use the mode-adjusted snake speed
    playerSnake.speed = getAdjustedSetting('BASE_SNAKE_SPEED') || CONFIG.BASE_SNAKE_SPEED;
    
    playerSnake.moveTimer = 0;
    playerSnake.animationFrame = 0;
    playerSnake.animationTimer = 0;
    playerSnake.ghostModeActive = false;
    playerSnake.activePowerUps = [];
    playerSnake.enlargedHeadUntil = 0;
    playerSnake.speedBoostUntil = 0;
    playerSnake.immediateDirectionChange = false;
    playerSnake.lastTextureUpdateFrame = 0;
    
    // Initialize Alpha Mode properties
    const currentTime = clock.getElapsedTime();
    playerSnake.alphaMode = {
        active: false,
        progress: 0,
        startTime: 0,
        endTime: 0,
        lastScoreThreshold: 0,
        alphaPoints: 0,         // New property for alpha points system
        lastDecayTime: currentTime, // Track when we last decayed alpha points
        scoreMultiplier: 1.0,
        scoreMultiplierStack: [],
        consecutiveActivations: 0,    // Track consecutive Alpha Mode activations
        cooldownActive: false,        // Track if Alpha Mode is in cooldown
        cooldownEndTime: 0            // When the cooldown period ends
    };
    
    // Create initial segments
    for (let i = 0; i < CONFIG.MIN_SNAKE_LENGTH; i++) {
        playerSnake.segments.push({ x: -i, y: 0, z: 0 });
    }
    
    // Create initial meshes
    createPlayerMeshes(gameState);
    Logger.gameplay.info("Player snake initialized.");
    
    // Force an update to the alpha points progress UI
    updateAlphaModeProgressPoints(gameState);
}

function createPlayerMeshes(gameState) {
    const { scene, materials, playerSnake } = gameState;
    if (!scene || !materials?.snake || !playerSnake?.segments) return;

    // Clear existing meshes first
    resetPlayerMeshes(gameState);

    playerSnake.segments.forEach((pos, index) => {
        const isHead = index === 0;
        const mesh = createSnakeSegmentMesh(pos, isHead, materials, true); // true for isPlayer
        if (mesh) {
            playerSnakeMeshes.push(mesh);
            scene.add(mesh);
        }
    });
    updatePlayerSnakeTextures(gameState); // Set initial textures correctly
}

function resetPlayerMeshes(gameState) {
    const { scene } = gameState;
    if (scene) {
        // Properly dispose of all snake segment meshes
        playerSnakeMeshes.forEach(mesh => {
            scene.remove(mesh);
            
            // Dispose of geometries and materials if they are not shared
            // Only dispose if it's not a shared geometry from GEOMETRIES constant
            if (mesh.geometry && !mesh.userData?.sharedGeometry) {
                mesh.geometry.dispose();
            }
            
            // Dispose cloned materials for each segment
            if (mesh.material) {
                if (Array.isArray(mesh.material)) {
                    mesh.material.forEach(material => material.dispose());
                } else {
                    mesh.material.dispose();
                }
            }
        });
    }
    playerSnakeMeshes = [];
}

export function resetPlayer(gameState) {
     resetPlayerMeshes(gameState); // Remove meshes
     initPlayerSnake(gameState); // Reinitialize state and meshes
     UI.resetUI(0, gameState); // Reset score display etc.
     Logger.gameplay.info("Player reset complete.");
}

export function updatePlayerStateOnly(deltaTime, currentTime, gameState) {
    const { playerSnake, score, flags } = gameState;
    if (flags.gameOver || !playerSnake) return;

    if (!flags.useCoreSimulation) {
        if (!playerSnake.alphaMode.active) {
            decayAlphaPoints(currentTime, gameState);
        }

        updateAlphaModeProgressPoints(gameState);
        updateAlphaModeProgress(score.current, gameState);
        checkAlphaModeActivation(score.current, currentTime, gameState);
        checkAlphaModeActivationPoints(currentTime, gameState);

        if (playerSnake.alphaMode.active) {
            updateAlphaMode(currentTime, gameState);
        } else if (playerSnake.alphaMode.cooldownActive) {
            UI.showAlphaModeCooldown(playerSnake.alphaMode.cooldownEndTime, currentTime);
        }

        updatePowerUpState(currentTime, gameState);
    } else {
        // Core simulation handles gameplay logic (decay, activation, etc.)
        // but we still need to update the UI from the shared state
        updateAlphaModeProgressPoints(gameState);

        if (playerSnake.alphaMode.active) {
            const remainingTime = playerSnake.alphaMode.endTime - currentTime;
            const totalDuration = Math.max(0.001, playerSnake.alphaMode.endTime - playerSnake.alphaMode.startTime);
            const progress = Math.max(0, Math.min(1, remainingTime / totalDuration));
            UI.updateAlphaModeUI(progress, remainingTime, playerSnake.alphaMode.scoreMultiplier);
        }
    }

    if (playerSnake.enlargedHeadUntil > 0 && currentTime > playerSnake.enlargedHeadUntil) {
        playerSnake.enlargedHeadUntil = 0;
        if (playerSnakeMeshes.length > 0 && playerSnakeMeshes[0]) {
            playerSnakeMeshes[0].scale.set(1, 1, 1);
        }
    }

    playerSnake.animationTimer += deltaTime;
    if (playerSnake.animationTimer >= 0.25) {
        playerSnake.animationTimer = 0;
        playerSnake.animationFrame = playerSnake.animationFrame === 0 ? 1 : 0;
        updatePlayerSnakeTextures(gameState);
    }
}

export function syncPlayerMeshes(gameState, frameDelta) {
    const { playerSnake, scene, materials } = gameState;
    if (!playerSnake?.segments || !scene || !materials?.snake) return;

    if (playerSnakeMeshes.length !== playerSnake.segments.length) {
        resetPlayerMeshes(gameState);
        createPlayerMeshes(gameState);
        return;
    }

    const isMultiplayer = gameState.network?.enabled;
    // In multiplayer, use frame-rate-independent exponential smoothing
    const lerpFactor = isMultiplayer && frameDelta != null
        ? 1 - Math.exp(-CONFIG.MULTIPLAYER_LERP_SPEED * frameDelta)
        : 1.0;

    const elapsedTime = gameState.clock ? gameState.clock.getElapsedTime() : 0;

    for (let i = 0; i < playerSnake.segments.length; i++) {
        const segment = playerSnake.segments[i];
        const mesh = playerSnakeMeshes[i];
        if (!mesh) continue;
        const targetX = segment.x * CONFIG.UNIT_SIZE;
        const baseY = CONFIG.UNIT_SIZE / 2;
        const targetZ = segment.z * CONFIG.UNIT_SIZE;
        const waveY = Math.sin(elapsedTime * CONFIG.WAVE_SPEED + i * CONFIG.WAVE_FREQUENCY) * CONFIG.WAVE_AMPLITUDE;
        if (lerpFactor >= 1.0) {
            mesh.position.set(targetX, baseY + waveY, targetZ);
        } else {
            mesh.position.x += (targetX - mesh.position.x) * lerpFactor;
            mesh.position.y = baseY + waveY;
            mesh.position.z += (targetZ - mesh.position.z) * lerpFactor;
        }

        // Head-specific: smooth rotation + speed stretch
        if (i === 0) {
            // Smooth rotation toward movement direction
            const targetAngle = directionToAngle(playerSnake.direction);
            // Shortest-arc interpolation: wrap difference to [-PI, PI]
            let angleDiff = targetAngle - mesh.rotation.y;
            angleDiff = ((angleDiff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
            mesh.rotation.y += angleDiff * 0.3;

            // Speed-based stretch along forward axis
            const speedRatio = CONFIG.BASE_SNAKE_SPEED / (calculateActualSpeed(gameState) || CONFIG.BASE_SNAKE_SPEED);
            if (speedRatio > 1.2) {
                const stretch = 1.0 + (speedRatio - 1.0) * 0.15;
                // Apply stretch in local Z (forward) and compress Y slightly
                // Only if no active squash tween is running (scale.x == 1 means idle)
                mesh.scale.z = stretch;
                mesh.scale.y = 1.0 / Math.sqrt(stretch); // Preserve volume
            }
        }
    }
    // Texture updates are driven by animation timer in updatePlayerStateOnly,
    // no need to call updatePlayerSnakeTextures every render frame.
}

// --- Remote / Multiplayer Player Mesh Sync ---

// Shared geometry for all remote player segments (avoids per-segment allocation)
const _sharedBoxGeometry = new THREE.BoxGeometry(1, 1, 1);

// Compute a lighter version of a color for edible tail segments
function lightenColor(hex, factor = 0.4) {
    const color = new THREE.Color(hex);
    color.r = color.r + (1 - color.r) * factor;
    color.g = color.g + (1 - color.g) * factor;
    color.b = color.b + (1 - color.b) * factor;
    return color;
}

function createRemotePlayerMeshes(playerId, segments, colorIndex, scene, materials) {
    const meshes = [];
    const color = PLAYER_COLORS[colorIndex % PLAYER_COLORS.length] || PLAYER_COLORS[1];
    const tailColor = lightenColor(color);
    const tailSegments = CONFIG.PLAYER_TAIL_EDIBLE_SEGMENTS;
    segments.forEach((pos, index) => {
        const isHead = index === 0;
        const isEdibleTail = segments.length >= tailSegments && index >= segments.length - tailSegments;
        const baseMat = isHead ? materials.snake.head1 : materials.snake.body1;
        if (!baseMat) return;
        const mat = baseMat.clone();
        mat.color = isEdibleTail ? tailColor.clone() : new THREE.Color(color);
        const mesh = new THREE.Mesh(_sharedBoxGeometry, mat);
        mesh.scale.setScalar(CONFIG.UNIT_SIZE);
        mesh.position.set(
            pos.x * CONFIG.UNIT_SIZE,
            CONFIG.UNIT_SIZE / 2,
            pos.z * CONFIG.UNIT_SIZE
        );
        mesh.castShadow = true;
        mesh.receiveShadow = false;
        mesh.name = `remotePlayer_${playerId}_${index}`;
        meshes.push(mesh);
        scene.add(mesh);
    });
    return meshes;
}

function removeRemotePlayerMeshes(playerId, scene) {
    const meshes = remotePlayerMeshes[playerId];
    if (!meshes) return;
    meshes.forEach(mesh => {
        scene.remove(mesh);
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
            if (Array.isArray(mesh.material)) {
                mesh.material.forEach(m => m.dispose());
            } else {
                mesh.material.dispose();
            }
        }
    });
    delete remotePlayerMeshes[playerId];
}

export function syncAllPlayerMeshes(gameState, frameDelta) {
    const { scene, materials, players, localPlayerId } = gameState;
    if (!scene || !materials?.snake || !players) return;

    const localId = localPlayerId || 'local';

    // Sync local player via existing path
    syncPlayerMeshes(gameState, frameDelta);

    // Determine which remote players exist
    const remoteIds = Object.keys(players).filter(id => id !== localId);

    // Remove meshes for players that left
    Object.keys(remotePlayerMeshes).forEach(id => {
        if (!players[id]) {
            removeRemotePlayerMeshes(id, scene);
        }
    });

    // Frame-rate-independent exponential smoothing for remote players
    const lerpFactor = frameDelta != null
        ? 1 - Math.exp(-CONFIG.MULTIPLAYER_LERP_SPEED * frameDelta)
        : 0.35;

    // Sync each remote player
    remoteIds.forEach(id => {
        const player = players[id];
        if (!player || !player.segments || player.segments.length === 0) {
            // Player has no segments (possibly dead or not yet spawned) — hide
            if (remotePlayerMeshes[id]) {
                remotePlayerMeshes[id].forEach(m => { m.visible = false; });
            }
            return;
        }

        if (player.dead) {
            // Dead player — hide meshes
            if (remotePlayerMeshes[id]) {
                remotePlayerMeshes[id].forEach(m => { m.visible = false; });
            }
            return;
        }

        const existingMeshes = remotePlayerMeshes[id];

        // Recreate meshes if segment count changed or meshes don't exist
        if (!existingMeshes || existingMeshes.length !== player.segments.length) {
            removeRemotePlayerMeshes(id, scene);
            remotePlayerMeshes[id] = createRemotePlayerMeshes(
                id, player.segments, player.colorIndex || 1, scene, materials
            );
            return;
        }

        // Update positions with frame-rate-independent lerp
        const remoteElapsed = gameState.clock ? gameState.clock.getElapsedTime() : 0;
        for (let i = 0; i < player.segments.length; i++) {
            const seg = player.segments[i];
            const mesh = existingMeshes[i];
            if (!mesh || !seg) continue;
            mesh.visible = true;
            const targetX = seg.x * CONFIG.UNIT_SIZE;
            const targetZ = seg.z * CONFIG.UNIT_SIZE;
            const waveY = Math.sin(remoteElapsed * CONFIG.WAVE_SPEED + i * CONFIG.WAVE_FREQUENCY) * CONFIG.WAVE_AMPLITUDE;
            mesh.position.x += (targetX - mesh.position.x) * lerpFactor;
            mesh.position.y = CONFIG.UNIT_SIZE / 2 + waveY;
            mesh.position.z += (targetZ - mesh.position.z) * lerpFactor;
            // Smooth head rotation for remote players
            if (i === 0 && player.direction) {
                const targetAngle = directionToAngle(player.direction);
                let angleDiff = targetAngle - mesh.rotation.y;
                angleDiff = ((angleDiff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
                mesh.rotation.y += angleDiff * 0.25;
            }
        }
    });
}

export function resetAllRemotePlayerMeshes(gameState) {
    const { scene } = gameState;
    Object.keys(remotePlayerMeshes).forEach(id => {
        removeRemotePlayerMeshes(id, scene);
    });
    remotePlayerMeshes = {};
}

// --- Movement and Input ---

export function turnLeft(gameState) {
    const { playerSnake, flags } = gameState;
    if (flags.gameOver) return;
    
    // Get current direction - use lastDirection to prevent double-turns in same frame
    const currentDirX = playerSnake.lastDirection.x;
    const currentDirZ = playerSnake.lastDirection.z;
    
    // Calculate the new direction
    const nextDir = { x: currentDirZ, y: 0, z: -currentDirX };
    
    // Check if there are pending turns, and if so, use the last pending turn as reference
    // This prevents 180-degree turns when rapidly alternating directions
    let referenceDir;
    if (playerSnake.pendingTurns.length > 0) {
        // Use the last pending turn as reference to prevent turning back
        const lastPendingTurn = playerSnake.pendingTurns[playerSnake.pendingTurns.length - 1];
        referenceDir = lastPendingTurn;
    } else {
        // No pending turns, use current direction
        referenceDir = { x: currentDirX, z: currentDirZ };
    }
    
    // Ensure the next direction isn't the direct opposite of the reference direction
    if ((nextDir.x !== -referenceDir.x || nextDir.z !== -referenceDir.z)) {
        // Store this turn in the pending turns queue
        playerSnake.pendingTurns.push({...nextDir});

        // Only update nextDirection if there are no other pending turns
        if (playerSnake.pendingTurns.length === 1) {
            playerSnake.nextDirection = nextDir;
        }

        // Set flag for immediate direction change
        playerSnake.immediateDirectionChange = true;

        // Squash the head on turn
        triggerHeadSquash();

        // For improved responsiveness: If we're adding a second turn in a short time,
        // boost the move timer to make the snake respond more quickly
        // This helps with rapid direction changes at slow speeds
        if (playerSnake.pendingTurns.length > 1) {
            // If the player is trying to make quick turns, increase the timer
            // to at least 80% of the required move time
            const actualSpeed = calculateActualSpeed(gameState);
            if (playerSnake.moveTimer < actualSpeed * 0.8) {
                playerSnake.moveTimer = actualSpeed * 0.8;
            }
        }
    }
}

export function turnRight(gameState) {
    const { playerSnake, flags } = gameState;
    if (flags.gameOver) return;
    
    // Get current direction - use lastDirection to prevent double-turns in same frame
    const currentDirX = playerSnake.lastDirection.x;
    const currentDirZ = playerSnake.lastDirection.z;
    
    // Calculate the new direction
    const nextDir = { x: -currentDirZ, y: 0, z: currentDirX };
    
    // Check if there are pending turns, and if so, use the last pending turn as reference
    // This prevents 180-degree turns when rapidly alternating directions
    let referenceDir;
    if (playerSnake.pendingTurns.length > 0) {
        // Use the last pending turn as reference to prevent turning back
        const lastPendingTurn = playerSnake.pendingTurns[playerSnake.pendingTurns.length - 1];
        referenceDir = lastPendingTurn;
    } else {
        // No pending turns, use current direction
        referenceDir = { x: currentDirX, z: currentDirZ };
    }
    
    // Ensure the next direction isn't the direct opposite of the reference direction
    if ((nextDir.x !== -referenceDir.x || nextDir.z !== -referenceDir.z)) {
        // Store this turn in the pending turns queue
        playerSnake.pendingTurns.push({...nextDir});

        // Only update nextDirection if there are no other pending turns
        if (playerSnake.pendingTurns.length === 1) {
            playerSnake.nextDirection = nextDir;
        }

        // Set flag for immediate direction change
        playerSnake.immediateDirectionChange = true;

        // Squash the head on turn
        triggerHeadSquash();

        // For improved responsiveness: If we're adding a second turn in a short time,
        // boost the move timer to make the snake respond more quickly
        // This helps with rapid direction changes at slow speeds
        if (playerSnake.pendingTurns.length > 1) {
            // If the player is trying to make quick turns, increase the timer
            // to at least 80% of the required move time
            const actualSpeed = calculateActualSpeed(gameState);
            if (playerSnake.moveTimer < actualSpeed * 0.8) {
                playerSnake.moveTimer = actualSpeed * 0.8;
            }
        }
    }
}


// --- Update Functions ---

export function updatePlayer(deltaTime, currentTime, gameState) {
    const { playerSnake, score, flags, scene, materials } = gameState;
    
    // Exit early if game is over
    if (flags.gameOver || !playerSnake) return;
    
    // Decay alpha points over time (when not in Alpha Mode)
    if (!playerSnake.alphaMode.active) {
        decayAlphaPoints(currentTime, gameState);
    }
    
    // Update progress toward Alpha Mode using alpha points system first
    // This ensures the alpha meter displays alpha points progress as priority
    updateAlphaModeProgressPoints(gameState);
    
    // Keep the score-based progress as a fallback (not actively shown on the UI)
    // but still track it in case the game logic requires it
    updateAlphaModeProgress(score.current, gameState);
    
    // Check if we should enter Alpha Mode based on score
    checkAlphaModeActivation(score.current, currentTime, gameState);
    
    // Check if we should enter Alpha Mode based on alpha points
    checkAlphaModeActivationPoints(currentTime, gameState);
    
    // Update Alpha Mode progress if active
    if (playerSnake.alphaMode.active) {
        updateAlphaMode(currentTime, gameState);
    } 
    // Show cooldown status if Alpha Mode is in cooldown
    else if (playerSnake.alphaMode.cooldownActive) {
        UI.showAlphaModeCooldown(playerSnake.alphaMode.cooldownEndTime, currentTime);
    }
    
    // Update Power-up Timers
    updatePowerUpState(currentTime, gameState);
    
    // Update Enlarged Head Timer
    if (playerSnake.enlargedHeadUntil > 0 && currentTime > playerSnake.enlargedHeadUntil) {
        // Reset head size when timer expires
        playerSnake.enlargedHeadUntil = 0;
        if (playerSnakeMeshes.length > 0 && playerSnakeMeshes[0]) {
            playerSnakeMeshes[0].scale.set(1, 1, 1);
        }
    }

    // Update Animation Frame
    playerSnake.animationTimer += deltaTime;
    if (playerSnake.animationTimer >= 0.25) { // Animation frame change every 0.25 seconds
        playerSnake.animationTimer = 0;
        playerSnake.animationFrame = playerSnake.animationFrame === 0 ? 1 : 0;
        updatePlayerSnakeTextures(gameState);
    }

    // Movement timer
    playerSnake.moveTimer += deltaTime;
    
    // Calculate actual speed based on power-ups, speed boost, and Alpha Mode
    const actualSpeed = calculateActualSpeed(gameState);
    
    // Check for immediate direction change flag
    if (playerSnake.immediateDirectionChange) {
        // If player has requested a direction change, update direction immediately
        playerSnake.direction = playerSnake.nextDirection;
        playerSnake.immediateDirectionChange = false;
    }
    
    if (playerSnake.moveTimer >= actualSpeed) {
        playerSnake.moveTimer = 0;
        
        // Process the next turn from the queue if available
        if (playerSnake.pendingTurns.length > 0) {
            playerSnake.direction = {...playerSnake.pendingTurns[0]};
            playerSnake.pendingTurns.shift(); // Remove the processed turn
            
            // If there are more turns in the queue, set up the next one
            if (playerSnake.pendingTurns.length > 0) {
                playerSnake.nextDirection = {...playerSnake.pendingTurns[0]};
            }
        } else {
            // No pending turns, use the next direction
            playerSnake.direction = {...playerSnake.nextDirection};
        }

        // Store the direction we actually moved in
        playerSnake.lastDirection = {...playerSnake.direction};

        // Check if direction became zero (shouldn't happen with turn logic)
        if (playerSnake.direction.x === 0 && playerSnake.direction.z === 0) {
            Logger.gameplay.warn("Player direction became zero. Reverting to previous.");
            // Attempt to revert - requires storing previous direction or guessing
             // For now, just stop moving this frame to prevent errors
             return;
        }

        // Make sure the player has segments before trying to access them
        if (!playerSnake.segments || playerSnake.segments.length === 0) {
            Logger.gameplay.error("No player snake segments found!");
            return;
        }

        const head = playerSnake.segments[0];
        // Safety check in case head is undefined
        if (!head) {
            Logger.gameplay.error("Player head segment is undefined!");
            return;
        }

        const { newHead: newHeadPos, collisionReason, obstacleType } = evaluatePlayerMove({
            player: playerSnake,
            obstacles: gameState.obstacles,
            flags: { gameOver: false }
        }, CONFIG.COLLISION_FORGIVENESS);

        // --- Collision Checks ---
        // 1. Wall/Self Collision (Ignore self if ghost mode inside evaluate)
        if (collisionReason === 'WALL') {
            Logger.gameplay.info("Collision: Wall");
            triggerPlayerDeath(gameState, 'WALL_COLLISION');
            return;
        }

        if (collisionReason === 'SELF') {
            Logger.gameplay.info("Collision: Self");
            triggerPlayerDeath(gameState, 'SELF_COLLISION');
            return;
        }
        
         // 3. Obstacle Collision (Ignore if ghost mode handled in core)
         if (collisionReason === 'OBSTACLE') {
            Logger.gameplay.info("Collision: Obstacle type:", obstacleType);

            // Use specific death message based on obstacle type
            let deathReason = 'OBSTACLE_COLLISION';
            if (obstacleType === 'tree') {
                deathReason = 'TREE_COLLISION';
            }

            triggerPlayerDeath(gameState, deathReason);
            return;
         }

         // Bush collision: slow the player instead of killing
         if (obstacleType === 'bush') {
            Logger.gameplay.info("Bush collision: applying slow effect");
            playerSnake.bushSlowUntil = currentTime + CONFIG.BUSH_SLOW_DURATION;
         }

         // 4. Enemy Collision - Check if it's an edible tail
         const enemyCollision = checkEnemyCollision(newHeadPos, gameState, true);
         if (enemyCollision.collided) {
             if (handleEnemyCollision(enemyCollision, gameState, currentTime)) {
                 // Player survived the collision
             } else {
                 // Player died
                 return;
             }
         }

        // --- Food Check ---
        const eatenFood = checkAndEatFood(newHeadPos, gameState);
        let growSnake = false;

        if (eatenFood) {
            triggerHeadChomp();
            Logger.gameplay.info("Food eaten in playerSnake.js:", eatenFood.type, "Alpha Mode active:", playerSnake.alphaMode?.active);
            
            // Calculate score with multiplier
            let scoreMultiplier = 1.0; // Default multiplier
            
            // Apply Alpha Mode score multiplier if active
            if (playerSnake.alphaMode && playerSnake.alphaMode.active) {
                scoreMultiplier = playerSnake.alphaMode.scoreMultiplier;
                Logger.gameplay.info(`Applying Alpha Mode score multiplier: x${scoreMultiplier}`);
            }
            
            // Apply the multiplier to the base score value
            const baseScore = eatenFood.scoreValue;
            const multipliedScore = Math.round(baseScore * scoreMultiplier);
            
            // Add the score and update UI
            gameState.score.current += multipliedScore;
            
            // Show score popup if multiplier is active
            if (scoreMultiplier > 1.0) {
                UI.showPowerUpTextEffect(`+${multipliedScore} pts!`, 0xFFD700); // Gold color for score
            }
            
            UI.updateScore(gameState.score.current);
            
            // Now apply power-up effect AFTER score update and food removal
            const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === eatenFood.type);
            if (foodTypeInfo) {
                applyPowerUp(foodTypeInfo.type, gameState); // Apply effects (speed, ghost, shrink etc.)
            }
            growSnake = eatenFood.grow !== false;
        }

        // --- Update Snake Segments ---
        playerSnake.segments.unshift(newHeadPos); // Add new head position

        if (!growSnake) {
            playerSnake.segments.pop(); // Remove tail segment if not growing
            // Reuse the tail mesh for the new head
            const tailMesh = playerSnakeMeshes.pop();
            if (tailMesh) {
                tailMesh.position.set(
                    newHeadPos.x * CONFIG.UNIT_SIZE,
                    CONFIG.UNIT_SIZE / 2, // Center Y
                    newHeadPos.z * CONFIG.UNIT_SIZE
                );
                playerSnakeMeshes.unshift(tailMesh); // Add to the front of mesh array
            } else {
                Logger.gameplay.error("Tail mesh missing during move!");
                 // Attempt recovery: Create a new mesh for the head
                 const newMesh = createSnakeSegmentMesh(newHeadPos, true, materials, true); // Fix: Set isPlayer to true
                 if (newMesh) {
                     scene.add(newMesh);
                     playerSnakeMeshes.unshift(newMesh);
                 }
            }
        } else {
             // Create a new mesh for the new head segment with pop-in animation
             const newMesh = createSnakeSegmentMesh(newHeadPos, true, materials, true); // Fix: Set isPlayer to true
             if (newMesh) {
                 newMesh.scale.setScalar(0);
                 tweenUniform(newMesh, 'scale', 0, 1.0, 0.2, ease.outBounce);
                 scene.add(newMesh);
                 playerSnakeMeshes.unshift(newMesh);
             }
        }

        // Update materials/textures for the new head and the segment behind it
        updatePlayerMaterialsAfterMove(gameState);
        
        // Store the direction we actually moved in
        playerSnake.lastDirection = {...playerSnake.direction};
        
        // Play movement sound based on Alpha Mode status
        Audio.playPlayerMoveSound(playerSnake.alphaMode?.active || false);
    }
}

// Function to enlarge the player's head
function enlargePlayerHead(gameState, currentTime) {
    const { playerSnake, clock } = gameState;
    if (!playerSnake || !clock) return;
    
    // Set the timer for when the effect should end
    playerSnake.enlargedHeadUntil = currentTime + CONFIG.ENLARGED_HEAD_DURATION;
    
    // Scale up the head mesh
    if (playerSnakeMeshes.length > 0 && playerSnakeMeshes[0]) {
        const scale = CONFIG.ENLARGED_HEAD_SCALE;
        playerSnakeMeshes[0].scale.set(scale, scale, scale);
    }
    
    Logger.gameplay.info(`Player head enlarged for ${CONFIG.ENLARGED_HEAD_DURATION} seconds`);
}

// Function to kill an enemy snake
export function killEnemySnake(enemyId, gameState) {
    const { playerSnake, clock } = gameState;
    const currentTime = clock.getElapsedTime();
    
    // Call the enemy module's kill function
    if (killEnemy(enemyId, gameState)) {
        // Calculate score with multiplier
        let scoreMultiplier = 1.0; // Default multiplier
        
        // Apply Alpha Mode score multiplier if active
        if (playerSnake.alphaMode && playerSnake.alphaMode.active) {
            scoreMultiplier = playerSnake.alphaMode.scoreMultiplier;
            
            // Add a new score multiplier to the stack for killing a snake in Alpha Mode
            addScoreMultiplier(currentTime, gameState);
            
            Logger.gameplay.info(`Applied Alpha Mode score multiplier: x${scoreMultiplier} and added new multiplier`);
        }
        
        // Apply the multiplier to the base score value
        const baseScore = CONFIG.ENEMY_KILL_SCORE;
        const multipliedScore = Math.round(baseScore * scoreMultiplier);
        
        // Add the score and update UI
        gameState.score.current += multipliedScore;
        gameState.enemies.kills += 1;
        gameState.stats.snakesEaten += 1; // Track snakes eaten for stats
        
        // Show score popup if multiplier is active
        if (scoreMultiplier > 1.0) {
            UI.showPowerUpTextEffect(`+${multipliedScore} pts!`, 0xFFD700); // Gold color for score
        }
        
        // Play snake eating sound
        Audio.playSoundEffect('eatSnake');
        
        // Update UI
        UI.updateScore(gameState.score.current);
        UI.updateKills(gameState.enemies.kills);
        
        // Show kill message with particle effect color
        UI.showPowerUpTextEffect(UI.getRandomEnemyKillMessage(), PALETTE.particles.kill);
        
        // Trigger camera shake
        startCameraShake(gameState);
        
        // Enlarge player's head for a duration
        enlargePlayerHead(gameState, currentTime);
        
        // Make the snake grow by the configured number of segments when eating an enemy
        growSnakeSegments(gameState, CONFIG.ENEMY_KILL_SEGMENTS);
        
        // If in alpha mode, extend the alpha mode duration by the configured amount
        if (playerSnake.alphaMode.active) {
            // Get the extension time from config
            const extensionTime = CONFIG.ALPHA_MODE_EXTENSION_PER_ENEMY;
            
            // Extend alpha mode duration
            playerSnake.alphaMode.endTime += extensionTime;
            
            // Show a message indicating the alpha mode extension
            UI.showPowerUpTextEffect(`+${extensionTime}s ALPHA TIME`, PALETTE.alpha.primary);
            
            Logger.gameplay.info(`Alpha mode extended by ${extensionTime} seconds! New end time:`, playerSnake.alphaMode.endTime);
        }
        
        return true;
    }
    return false;
}

/**
 * Grows the player snake by the specified number of segments
 * @param {Object} gameState - The game state object
 * @param {number} numSegments - Number of segments to grow
 */
function growSnakeSegments(gameState, numSegments) {
    const { playerSnake, scene, materials } = gameState;
    if (!playerSnake || !scene || !materials) return;
    
    // Get the last segment position
    const lastSegment = playerSnake.segments[playerSnake.segments.length - 1];
    if (!lastSegment) return;
    
    // Add new segments at the tail position
    for (let i = 0; i < numSegments; i++) {
        // Add a new segment to the snake
        const newSegment = { ...lastSegment }; // Clone the last segment position
        playerSnake.segments.push(newSegment);
        
        // Create a mesh for the new segment with pop-in animation
        const newMesh = createSnakeSegmentMesh(newSegment, false, materials, true); // Fix: Set isPlayer to true
        if (newMesh) {
            newMesh.scale.setScalar(0);
            tweenUniform(newMesh, 'scale', 0, 1.0, 0.2, ease.outBounce);
            scene.add(newMesh);
            playerSnakeMeshes.push(newMesh);
        }
    }
    
    // Update the snake's appearance
    updatePlayerMaterialsAfterMove(gameState);
}

// --- Camera ---

// Reusable objects to avoid per-frame allocations
const _lookDir = new THREE.Vector3();
const _targetLookAt = new THREE.Vector3();
const _targetCamPos = new THREE.Vector3();
const _targetQuat = new THREE.Quaternion();
const _dummyMatrix = new THREE.Matrix4();
const _up = new THREE.Vector3(0, 1, 0);

export function updateCamera(gameState) {
    const { camera, playerSnake, scene } = gameState;
    const sunLight = gameState.lights?.sunLight;

    if (!camera || !playerSnake || playerSnake.segments.length === 0 || playerSnakeMeshes.length === 0 || !sunLight) return;

    const headMesh = playerSnakeMeshes[0];
    const headPos = headMesh.position;

    // Target for camera to look at (slightly ahead of the snake)
    const lookAheadFactor = Math.max(2, CONFIG.CAMERA_DISTANCE * 0.2);
    _lookDir.set(playerSnake.direction.x, 0, playerSnake.direction.z).normalize();
    _targetLookAt.copy(headPos).addScaledVector(_lookDir, lookAheadFactor);

    // Sun light target follows the head for dynamic shadow positioning
    if (sunLight.target) {
        sunLight.target.position.lerp(headPos, CONFIG.CAMERA_LAG * 1.5);
    }

    // Target position for the camera (behind the snake)
    _targetCamPos.copy(headPos).addScaledVector(_lookDir, -CONFIG.CAMERA_DISTANCE);
    _targetCamPos.y = CONFIG.CAMERA_HEIGHT;

    // Smoothly interpolate camera position
    camera.position.lerp(_targetCamPos, CONFIG.CAMERA_POSITION_SMOOTHNESS);

    // Smooth LookAt using Quaternion slerp — compute target quaternion without cloning camera
    _dummyMatrix.lookAt(camera.position, _targetLookAt, _up);
    _targetQuat.setFromRotationMatrix(_dummyMatrix);
    camera.quaternion.slerp(_targetQuat, CONFIG.CAMERA_ROTATION_SMOOTHNESS);
}

// --- Power-ups ---
export function applyPowerUp(type, gameState) {
    const { playerSnake, clock } = gameState;
    if (!playerSnake || !clock) return;

    // Initialize activePowerUps array if it doesn't exist
    if (!playerSnake.activePowerUps) {
        playerSnake.activePowerUps = [];
    }

    const currentTime = gameState.flags?.useCoreSimulation ? gameState.simulation.time : clock.getElapsedTime();
    const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === type);
    
    if (!foodTypeInfo) {
        Logger.gameplay.error(`Unknown power-up type: ${type}`);
        return;
    }

    Logger.gameplay.info(`Applying power-up: ${foodTypeInfo.description}`);

    // Start camera shake effect if enabled AND it's not regular food
    if (CONFIG.CAMERA_SHAKE_ENABLED && type !== 'normal') {
        startCameraShake(gameState);
    }

    // Apply power-up effect based on type
    switch (type) {
        case 'speed':
            // Use the speed multiplier from config.js
            playerSnake.speed = CONFIG.BASE_SNAKE_SPEED / CONFIG.POWERUP_SPEED_MULTIPLIER;
            // Add to active power-ups array instead of replacing
            playerSnake.activePowerUps.push({
                type: type,
                endTime: currentTime + foodTypeInfo.powerUpDuration
            });
            updatePowerUpInfoDisplay(gameState);
            break;
        
        case 'ghost':
            playerSnake.ghostModeActive = true;
            // Add to active power-ups array
            playerSnake.activePowerUps.push({
                type: type,
                endTime: currentTime + foodTypeInfo.powerUpDuration
            });
            updatePlayerSnakeTextures(gameState); // Update visuals immediately
            updatePowerUpInfoDisplay(gameState);
            break;
        
        case 'score_x2':
            // Use the score multiplier from config.js
            playerSnake.scoreMultiplier = CONFIG.POWERUP_SCORE_MULTIPLIER;
            // Add to active power-ups array
            playerSnake.activePowerUps.push({
                type: type,
                endTime: currentTime + foodTypeInfo.powerUpDuration
            });
            updatePowerUpInfoDisplay(gameState);
            break;
        
        case 'shrink':
            // Shrink the snake by removing a configurable number of segments
            const currentLength = playerSnake.segments.length;
            const segmentsToRemove = Math.min(
                CONFIG.POWERUP_SHRINK_AMOUNT, 
                currentLength - CONFIG.MIN_SNAKE_LENGTH
            );
            
            if (segmentsToRemove > 0) {
                // Remove tail segments
                playerSnake.segments.splice(playerSnake.segments.length - segmentsToRemove, segmentsToRemove);
                
                // Remove corresponding meshes
                for (let i = 0; i < segmentsToRemove; i++) {
                    const mesh = playerSnakeMeshes.pop();
                    if (mesh && gameState.scene) {
                        gameState.scene.remove(mesh);
                    }
                }
                
                // No need to set activePowerUp since this is an immediate effect
                updatePowerUpInfoDisplay(gameState, `Shrunk by ${segmentsToRemove} segments!`);
            }
            break;
    }
}

// Helper function to start camera shake effect
function startCameraShake(gameState) {
    const { camera, cameraEffects, clock } = gameState;
    if (!camera || !clock || !cameraEffects || !cameraEffects.shake) return;
    
    // Store original camera position
    cameraEffects.shake.originalPosition.copy(camera.position);
    
    // Set shake parameters
    cameraEffects.shake.active = true;
    cameraEffects.shake.startTime = clock.getElapsedTime();
    cameraEffects.shake.duration = CONFIG.CAMERA_SHAKE_DURATION;
    cameraEffects.shake.intensity = CONFIG.CAMERA_SHAKE_INTENSITY;
}

function clearPowerUpEffects(gameState, clearUIDisplay = true) {
    const { playerSnake } = gameState;
    
    // Reset all power-up effects
    playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
    playerSnake.scoreMultiplier = 1;
    
    if (playerSnake.ghostModeActive) {
        playerSnake.ghostModeActive = false;
        updatePlayerSnakeTextures(gameState); // Update visuals immediately
    }

    // Clear UI display only if requested (e.g., when powerup expires)
    if (clearUIDisplay) {
        playerSnake.activePowerUps = []; // Clear all power-ups
        UI.updatePowerUpInfo('');
    }
}

function updatePowerUpState(currentTime, gameState) {
    const { playerSnake } = gameState;
    if (!playerSnake?.activePowerUps) return;

    let powerUpsChanged = false;
    let i = playerSnake.activePowerUps.length;
    
    // Check each power-up from end to start (to safely remove items)
    while (i--) {
        const powerUp = playerSnake.activePowerUps[i];
        
        // If power-up has expired
        if (currentTime >= powerUp.endTime) {
            // Power-up expired
            Logger.gameplay.info(`Power-up expired: ${powerUp.type}`);
            
            // Handle specific power-up expiration
            switch (powerUp.type) {
                case 'speed':
                    playerSnake.speed = CONFIG.BASE_SNAKE_SPEED; // Reset speed
                    UI.showPowerUpTextEffect("Speed boost ended");
                    break;
                    
                case 'ghost':
                    playerSnake.ghostModeActive = false;
                    updatePlayerSnakeTextures(gameState); // Update visuals
                    UI.showPowerUpTextEffect("Ghost mode ended");
                    break;
                    
                case 'score_x2':
                    playerSnake.scoreMultiplier = 1; // Reset multiplier
                    UI.showPowerUpTextEffect("Score multiplier ended");
                    break;
            }
            
            // Remove expired power-up from array
            playerSnake.activePowerUps.splice(i, 1);
            powerUpsChanged = true;
        }
    }
    
    // Update the power-up info display if any changes occurred
    if (powerUpsChanged) {
        updatePowerUpInfoDisplay(gameState);
    } else {
        // Even if no power-ups expired, we should update the display to show the countdown
        updatePowerUpInfoDisplay(gameState);
    }
}

function updatePowerUpInfoDisplay(gameState, message = '') {
    const { playerSnake, clock } = gameState;
    if (!playerSnake?.activePowerUps || !clock) return;

    const currentTime = gameState.flags?.useCoreSimulation ? gameState.simulation.time : clock.getElapsedTime();

    if (message) {
        UI.updatePowerUpInfo(message);
        return;
    }
    
    // If we have active power-ups, display them
    if (playerSnake.activePowerUps.length > 0) {
        // Create a combined message of all active power-ups
        const powerUpMessages = playerSnake.activePowerUps.map(powerUp => {
            // Calculate remaining time and round to 1 decimal place
            const remainingSeconds = Math.max(0, powerUp.endTime - currentTime);
            // Format to show only one decimal place
            const remainingTime = remainingSeconds.toFixed(1);
            
            // Get the power-up description
            const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === powerUp.type);
            const description = foodTypeInfo ? foodTypeInfo.description : powerUp.type;
            
            return `${description}: ${remainingTime}s`;
        });
        
        // Join the messages with a separator
        UI.updatePowerUpInfo(powerUpMessages.join(' | '));
    } else {
        // No active power-ups
        UI.updatePowerUpInfo('');
    }
}

// Function to check and update active power-ups
export function updatePowerUps(gameState) {
    const { playerSnake, clock } = gameState;
    if (!playerSnake?.activePowerUps || !clock) return;

    const currentTime = gameState.flags?.useCoreSimulation ? gameState.simulation.time : clock.getElapsedTime();
    let powerUpStateChanged = false;
    
    // Check each active power-up
    for (let i = playerSnake.activePowerUps.length - 1; i >= 0; i--) {
        const powerUp = playerSnake.activePowerUps[i];
        
        // If power-up has expired
        if (currentTime >= powerUp.endTime) {
            // Power-up expired
            Logger.gameplay.info(`Power-up expired: ${powerUp.type}`);
            
            // Handle specific power-up expiration
            switch (powerUp.type) {
                case 'speed':
                    playerSnake.speed = CONFIG.BASE_SNAKE_SPEED; // Reset speed
                    UI.showPowerUpTextEffect("Speed boost ended");
                    break;
                    
                case 'ghost':
                    playerSnake.ghostModeActive = false;
                    updatePlayerSnakeTextures(gameState); // Update visuals
                    UI.showPowerUpTextEffect("Ghost mode ended");
                    break;
                    
                case 'score_x2':
                    playerSnake.scoreMultiplier = 1; // Reset multiplier
                    UI.showPowerUpTextEffect("Score multiplier ended");
                    break;
            }
            
            // Remove expired power-up from array
            playerSnake.activePowerUps.splice(i, 1);
            powerUpStateChanged = true;
        }
    }
    
    // Update the power-up info display if any changes occurred
    if (powerUpStateChanged) {
        updatePowerUpInfoDisplay(gameState);
    } else {
        // Even if no power-ups expired, we should update the display to show the countdown
        updatePowerUpInfoDisplay(gameState);
    }
}

// Cached material for player edible tail segments — created once, reused
let playerEdibleTailMaterial = null;

function getPlayerEdibleTailMaterial() {
    if (!playerEdibleTailMaterial) {
        playerEdibleTailMaterial = new THREE.MeshToonMaterial({
            color: PALETTE.players[0].accent,
            side: THREE.FrontSide,
        });
    }
    return playerEdibleTailMaterial;
}

// Updates textures for the entire snake based on animation frame and ghost mode
export function updatePlayerSnakeTextures(gameState, forceUpdate = false) {
    const { playerSnake, materials } = gameState;
    if (!materials?.snake || playerSnakeMeshes.length === 0) return;

    // Only update if animation frame changed or forced update
    if (!forceUpdate && playerSnake.lastTextureUpdateFrame === playerSnake.animationFrame) return;

    // Store current frame to avoid unnecessary updates
    playerSnake.lastTextureUpdateFrame = playerSnake.animationFrame;

    // Determine which materials to use based on state
    let headMaterial, bodyMaterial;

    if (playerSnake.alphaMode.active) {
        // In Alpha Mode, use purple-tinted materials
        headMaterial = playerSnake.animationFrame === 0 ? materials.snake.head1.clone() : materials.snake.head2.clone();
        bodyMaterial = playerSnake.animationFrame === 0 ? materials.snake.body1.clone() : materials.snake.body2.clone();

        // Apply Alpha Mode color (purple)
        headMaterial.color.setHex(PALETTE.alpha.primary);
        bodyMaterial.color.setHex(PALETTE.alpha.primary);
    } else if (playerSnake.ghostModeActive) {
        // In Ghost Mode, use standard materials but make them transparent
        headMaterial = playerSnake.animationFrame === 0 ? materials.snake.head1.clone() : materials.snake.head2.clone();
        bodyMaterial = playerSnake.animationFrame === 0 ? materials.snake.body1.clone() : materials.snake.body2.clone();

        // Make materials transparent
        headMaterial.transparent = true;
        headMaterial.opacity = 0.6;
        bodyMaterial.transparent = true;
        bodyMaterial.opacity = 0.6;
    } else {
        // Normal state
        headMaterial = playerSnake.animationFrame === 0 ? materials.snake.head1 : materials.snake.head2;
        bodyMaterial = playerSnake.animationFrame === 0 ? materials.snake.body1 : materials.snake.body2;
    }

    const tailSegments = CONFIG.PLAYER_TAIL_EDIBLE_SEGMENTS;
    const tailMat = getPlayerEdibleTailMaterial();

    // Apply materials to meshes
    playerSnakeMeshes.forEach((mesh, index) => {
        if (!mesh) return; // Skip if mesh is undefined

        if (index === 0) {
            // Head
            mesh.material = headMaterial;
        } else if (playerSnakeMeshes.length >= tailSegments && index >= playerSnakeMeshes.length - tailSegments) {
            // Edible tail segment — use lighter color
            mesh.material = tailMat;
        } else {
            // Body
            mesh.material = bodyMaterial;
        }
    });
}

// Function to update player materials after movement
function updatePlayerMaterialsAfterMove(gameState) {
    const { playerSnake, materials } = gameState;
    if (playerSnakeMeshes.length === 0 || !materials?.snake) return;

    let headMaterial, bodyMaterial;

    if (playerSnake.alphaMode.active) {
        // In Alpha Mode, use purple-tinted materials
        headMaterial = playerSnake.animationFrame === 0 ? materials.snake.head1.clone() : materials.snake.head2.clone();
        bodyMaterial = playerSnake.animationFrame === 0 ? materials.snake.body1.clone() : materials.snake.body2.clone();

        // Apply Alpha Mode color (purple)
        headMaterial.color.setHex(PALETTE.alpha.primary);
        bodyMaterial.color.setHex(PALETTE.alpha.primary);
    } else if (playerSnake.ghostModeActive) {
        // In Ghost Mode, use standard materials but make them transparent
        headMaterial = playerSnake.animationFrame === 0 ? materials.snake.head1.clone() : materials.snake.head2.clone();
        bodyMaterial = playerSnake.animationFrame === 0 ? materials.snake.body1.clone() : materials.snake.body2.clone();

        // Make materials transparent
        headMaterial.transparent = true;
        headMaterial.opacity = 0.6;
        bodyMaterial.transparent = true;
        bodyMaterial.opacity = 0.6;
    } else {
        // Normal state
        headMaterial = playerSnake.animationFrame === 0 ? materials.snake.head1 : materials.snake.head2;
        bodyMaterial = playerSnake.animationFrame === 0 ? materials.snake.body1 : materials.snake.body2;
    }

    const tailSegments = CONFIG.PLAYER_TAIL_EDIBLE_SEGMENTS;
    const tailMat = getPlayerEdibleTailMaterial();

    // Update head mesh
    playerSnakeMeshes[0].material = headMaterial;

    // Update the segment that was previously the head (now the first body segment)
    if (playerSnakeMeshes.length > 1 && playerSnakeMeshes[1]) {
        // Check if this segment is now an edible tail segment
        if (playerSnakeMeshes.length >= tailSegments && 1 >= playerSnakeMeshes.length - tailSegments) {
            playerSnakeMeshes[1].material = tailMat;
        } else {
            playerSnakeMeshes[1].material = bodyMaterial;
        }
    }

    // Update tail segments that may have shifted due to movement
    for (let i = Math.max(2, playerSnakeMeshes.length - tailSegments); i < playerSnakeMeshes.length; i++) {
        if (playerSnakeMeshes[i]) {
            playerSnakeMeshes[i].material = tailMat;
        }
    }
}

// --- Alpha Mode ---

/**
 * Resets the Alpha Mode cooldown state
 * This function can be called to force-reset the cooldown
 */
export function resetAlphaModeCooldown(gameState) {
    const { playerSnake } = gameState;
    
    // Reset cooldown state
    playerSnake.alphaMode.cooldownActive = false;
    playerSnake.alphaMode.consecutiveActivations = 0;
    
    // Reset the lastScoreThreshold to allow activation at the current threshold
    const currentScore = gameState.score.current;
    const scoreThreshold = CONFIG.ALPHA_MODE_SCORE_THRESHOLD;
    const currentThreshold = Math.floor(currentScore / scoreThreshold) - 1;
    playerSnake.alphaMode.lastScoreThreshold = currentThreshold;
    
    Logger.gameplay.info("Alpha Mode cooldown reset. lastScoreThreshold set to:", currentThreshold);
}

/**
 * Add alpha points to the player
 * @param {number} points - Number of alpha points to add
 * @param {object} gameState - Game state object
 */
export function addAlphaPoints(points, gameState) {
    const { playerSnake } = gameState;
    
    // Don't add alpha points if Alpha Mode is active
    if (playerSnake.alphaMode.active) return;
    
    // Add the points
    playerSnake.alphaMode.alphaPoints += points;
    
    // Update the UI with new alpha points progress
    updateAlphaModeProgressPoints(gameState);
}

/**
 * Checks if Alpha Mode should be activated based on alpha points
 * @param {number} currentTime - Current game time
 * @param {object} gameState - Game state object
 * @returns {boolean} - Whether Alpha Mode should be activated
 */
export function checkAlphaModeActivationPoints(currentTime, gameState) {
    const { playerSnake } = gameState;
    
    // Don't activate if already active
    if (playerSnake.alphaMode.active) return false;
    
    // Get the adjusted threshold based on game mode
    const pointsThreshold = getAdjustedSetting('ALPHA_POINTS_THRESHOLD') || 
                           CONFIG.ALPHA_POINTS_THRESHOLD;
    
    // Check if we have enough alpha points
    if (playerSnake.alphaMode.alphaPoints >= pointsThreshold) {
        Logger.gameplay.info(`Alpha Mode triggered by points (${playerSnake.alphaMode.alphaPoints}/${pointsThreshold})`);
        
        // Reset alpha points
        playerSnake.alphaMode.alphaPoints = 0;
        
        // Activate Alpha Mode
        activateAlphaMode(currentTime, gameState);
        return true;
    }
    
    return false;
}

/**
 * Checks if Alpha Mode should be activated based on score
 */
function checkAlphaModeActivation(score, currentTime, gameState) {
    const { playerSnake } = gameState;
    const scoreThreshold = CONFIG.ALPHA_MODE_SCORE_THRESHOLD;
    
    // Calculate which threshold we're at
    const currentThreshold = Math.floor(score / scoreThreshold);
    
    // Debug logging to understand the current state
    Logger.gameplay.debug(`Alpha Mode Check - Current Threshold: ${currentThreshold}, Last Threshold: ${playerSnake.alphaMode.lastScoreThreshold}`);
    Logger.gameplay.debug(`Alpha Mode Active: ${playerSnake.alphaMode.active}, Cooldown Active: ${playerSnake.alphaMode.cooldownActive}`);
    
    // If we've reached a new threshold and we're not already in Alpha Mode
    if (currentThreshold > playerSnake.alphaMode.lastScoreThreshold && !playerSnake.alphaMode.active) {
        // Update the last threshold score
        playerSnake.alphaMode.lastScoreThreshold = currentThreshold;
        
        // Activate Alpha Mode
        activateAlphaMode(currentTime, gameState);
        
        // Log the activation
        Logger.gameplay.info("Alpha Mode activated via score threshold! Threshold:", currentThreshold);
    } else {
        // Debug why Alpha Mode is not activating
        if (currentThreshold <= playerSnake.alphaMode.lastScoreThreshold) {
            Logger.gameplay.debug("Alpha Mode not activated: Current threshold not greater than last threshold");
        }
        if (playerSnake.alphaMode.active) {
            Logger.gameplay.debug("Alpha Mode not activated: Alpha Mode is already active");
        }
    }
}

/**
 * Activates Alpha Mode
 * @param {number} currentTime - Current game time
 * @param {object} gameState - Game state object
 */
export function activateAlphaMode(currentTime, gameState) {
    const { playerSnake } = gameState;
    
    // Get the duration adjusted for game mode (longer in Casual mode)
    const alphaDuration = getAdjustedSetting('ALPHA_MODE_DURATION') || CONFIG.ALPHA_MODE_DURATION;
    
    // Set up Alpha Mode parameters
    playerSnake.alphaMode.active = true;
    playerSnake.alphaMode.progress = 1.0;  // Start at full progress
    playerSnake.alphaMode.startTime = currentTime;
    playerSnake.alphaMode.endTime = currentTime + alphaDuration;
    
    // Set base score multiplier
    playerSnake.alphaMode.scoreMultiplier = CONFIG.ALPHA_MODE_SCORE_MULTIPLIER;
    
    // Add a new score multiplier to the stack
    addScoreMultiplier(currentTime, gameState);
    
    // Track consecutive activations
    playerSnake.alphaMode.consecutiveActivations++;
    
    // Show UI effect
    UI.showAlphaModeActivation();
    
    // Play activation sound
    Audio.playAlphaModeActivation();
    
    // Update the UI to show Alpha Mode is active
    UI.updateAlphaModeUI(1.0, alphaDuration, playerSnake.alphaMode.scoreMultiplier);
    
    Logger.gameplay.info(`Alpha Mode activated for ${alphaDuration} seconds, multiplier: ${playerSnake.alphaMode.scoreMultiplier}`);

    // Force texture update to apply alpha mode color immediately
    updatePlayerSnakeTextures(gameState, true);
}

/**
 * Updates Alpha Mode state
 */
export function updateAlphaMode(currentTime, gameState) {
    const { playerSnake } = gameState;
    
    // If Alpha Mode is not active, just return
    if (!playerSnake.alphaMode.active) return;
    
    // Check if Alpha Mode has expired
    if (currentTime >= playerSnake.alphaMode.endTime) {
        // Deactivate Alpha Mode
        playerSnake.alphaMode.active = false;
        playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
        
        // Reset score multiplier when Alpha Mode ends
        playerSnake.alphaMode.scoreMultiplier = 1.0;
        playerSnake.alphaMode.scoreMultiplierStack = [];
        
        // Update UI
        UI.updateAlphaModeUI(0, 0);
        UI.showPowerUpTextEffect("Alpha Mode ended");
        
        // Update player appearance
        updatePlayerSnakeTextures(gameState);
        
        // Always update the progress meter after Alpha Mode ends
        const currentScore = gameState.score.current;
        updateAlphaModeProgress(currentScore, gameState);
        
        Logger.gameplay.info("Alpha Mode deactivated");
        return;
    }
    
    // Calculate and update remaining time
    const remainingTime = playerSnake.alphaMode.endTime - currentTime;
    const totalDuration = Math.max(0.001, playerSnake.alphaMode.endTime - playerSnake.alphaMode.startTime);
    const progress = Math.max(0, Math.min(1, remainingTime / totalDuration));
    
    // Update score multiplier stack
    updateScoreMultiplierStack(currentTime, playerSnake);
    
    // Update UI with remaining time and current score multiplier
    UI.updateAlphaModeUI(progress, remainingTime, playerSnake.alphaMode.scoreMultiplier);
}

// Helper function to update the score multiplier stack
function updateScoreMultiplierStack(currentTime, playerSnake) {
    // Remove expired multipliers from the stack
    playerSnake.alphaMode.scoreMultiplierStack = playerSnake.alphaMode.scoreMultiplierStack.filter(
        multiplier => multiplier.endTime > currentTime
    );
    
    // Calculate the current total multiplier
    if (playerSnake.alphaMode.scoreMultiplierStack.length > 0) {
        // Start with base multiplier of 1.0
        let totalMultiplier = 1.0;
        
        // Apply each stacked multiplier
        playerSnake.alphaMode.scoreMultiplierStack.forEach(multiplier => {
            totalMultiplier *= multiplier.value;
        });
        
        // Cap at maximum allowed multiplier
        totalMultiplier = Math.min(totalMultiplier, CONFIG.ALPHA_MODE_MAX_SCORE_MULTIPLIER);
        
        // Update the current multiplier
        playerSnake.alphaMode.scoreMultiplier = totalMultiplier;
    } else {
        // No active multipliers, reset to 1.0
        playerSnake.alphaMode.scoreMultiplier = 1.0;
    }
}

// Add a new score multiplier to the stack
export function addScoreMultiplier(currentTime, gameState) {
    const { playerSnake } = gameState;
    
    if (!playerSnake.alphaMode.active) return;
    
    // Create a new multiplier object
    const newMultiplier = {
        value: CONFIG.ALPHA_MODE_SCORE_MULTIPLIER,
        endTime: currentTime + CONFIG.ALPHA_MODE_SCORE_MULTIPLIER_DURATION
    };
    
    // Add to the stack
    playerSnake.alphaMode.scoreMultiplierStack.push(newMultiplier);
    
    // Update the multiplier stack
    updateScoreMultiplierStack(currentTime, playerSnake);
    
    // Show notification with current multiplier
    UI.showPowerUpTextEffect(`Score x${playerSnake.alphaMode.scoreMultiplier.toFixed(1)}!`);
    
    Logger.gameplay.info(`Added score multiplier. Current total: x${playerSnake.alphaMode.scoreMultiplier}`);
}

// Global counter to track which alpha kill message to display next
let alphaKillMessageIndex = 0;

/**
 * Get the next alpha kill message in sequence
 * @returns {string} The next message in the cycle
 */
function getNextAlphaKillMessage() {
    const messages = CONFIG.GAME_TEXT.ALPHA_MODE.ALPHA_KILL_MESSAGES;
    if (!messages || messages.length === 0) {
        return CONFIG.GAME_TEXT.ALPHA_MODE.KILL_MESSAGE || "ALPHA KILL!";
    }
    
    // Get the current message
    const message = messages[alphaKillMessageIndex];
    
    // Increment the counter for next time, wrapping around if needed
    alphaKillMessageIndex = (alphaKillMessageIndex + 1) % messages.length;
    
    return message;
}

/**
 * Handles collision with enemy snakes based on Alpha Mode status
 * @param {object} collision - Collision data from checkEnemyCollision
 * @param {object} gameState - Game state object
 * @param {number} currentTime - Current game time
 * @returns {boolean} - True if player survived, false if player died
 */
function handleEnemyCollision(collision, gameState, currentTime) {
    const { playerSnake } = gameState;
    
    // If in Alpha Mode or hit the tail (which is always edible), kill the enemy
    if (playerSnake.alphaMode.active) {
        // In Alpha Mode, always kill the enemy snake regardless of collision point
        console.log("Alpha Mode active - killing enemy snake regardless of collision point");
        killEnemySnake(collision.enemyId, gameState);
        
        // Play explosion sound effect for Alpha Mode kill
        Audio.playSoundEffect('alphaKillExplode1');
        
        // Play the next alpha kill voice line in sequence
        Audio.playAlphaKillVoice();
        
        // Show the next message in the sequence for Alpha Mode kills
        UI.showPowerUpTextEffect(getNextAlphaKillMessage(), PALETTE.alpha.primary);
        
        return true;
    } else if (collision.isTail) {
        // Not in Alpha Mode but hit the tail (which is always edible)
        console.log("Hit enemy tail - killing enemy snake");
        killEnemySnake(collision.enemyId, gameState);
        
        // Award alpha points for killing an enemy snake by eating its tail
        // This encourages strategic play, targeting enemy tails for more alpha points
        addAlphaPoints(CONFIG.ALPHA_POINTS_ENEMY, gameState);
        
        return true;
    }
    
    // If not in Alpha Mode and hit the body/head, player dies
    if (!playerSnake.ghostModeActive) {
        console.log("Hit enemy body/head without Alpha Mode or Ghost Mode - player dies");
        triggerPlayerDeath(gameState, 'ENEMY_COLLISION');
        return false;
    }
    
    // Ghost mode active but not Alpha Mode, just pass through
    console.log("Ghost Mode active - passing through enemy");
    return true;
}

// --- Death ---
function triggerPlayerDeath(gameState, reason) {
     // *** Destructure camera here ***
     const { scene, playerSnake, camera } = gameState;
     if (!scene || !playerSnake || !camera) return; // Check camera

     playPlayerDeathEffects(gameState);
     // Call the main game over handler
     setGameOver(gameState, reason);
}

export function playPlayerDeathEffects(gameState) {
    const { scene, playerSnake, camera } = gameState;
    if (!scene || !playerSnake || !camera) return;

    Audio.playSoundEffect('playerDeath');

    const head = playerSnakeMeshes[0];
    if (!head) return;

    // Particle explosion at head position
    createExplosion(
        scene,
        camera,
        head.position.clone(),
        CONFIG.PARTICLE_COUNT_DEATH,
        PALETTE.particles.death
    );

    // Scatter each segment outward from head
    const count = playerSnakeMeshes.length;
    playerSnakeMeshes.forEach((mesh, i) => {
        if (!mesh) return;
        // Cancel any in-flight tweens on this segment
        cancelTween(mesh);

        // Scatter direction: evenly spread around a circle with slight randomness
        const angle = (i / Math.max(count, 1)) * Math.PI * 2 + Math.random() * 0.5;
        const distance = 2 + Math.random() * 3;
        const targetX = mesh.position.x + Math.cos(angle) * distance;
        const targetZ = mesh.position.z + Math.sin(angle) * distance;
        const peakY = 1.5 + Math.random() * 2;

        // Horizontal scatter
        tween(mesh, 'position', 'x', mesh.position.x, targetX, 0.4, ease.outQuad);
        tween(mesh, 'position', 'z', mesh.position.z, targetZ, 0.4, ease.outQuad);

        // Arc up then fall down, then shrink away
        tween(mesh, 'position', 'y', mesh.position.y, peakY, 0.2, ease.outQuad, () => {
            tween(mesh, 'position', 'y', peakY, -0.5, 0.3, ease.inOutCubic, () => {
                tweenUniform(mesh, 'scale', 1.0, 0, 0.2, ease.linear, () => {
                    scene.remove(mesh);
                });
            });
        });

        // Spin during scatter
        const spinDir = Math.random() > 0.5 ? 1 : -1;
        tween(mesh, 'rotation', 'x', 0, Math.PI * 2 * spinDir, 0.7, ease.outQuad);
        tween(mesh, 'rotation', 'z', 0, Math.PI * (Math.random() > 0.5 ? 1 : -1), 0.7, ease.outQuad);
    });
}

// Update Alpha Mode progress based on score
function updateAlphaModeProgress(score, gameState) {
    const { playerSnake } = gameState;
    const scoreThreshold = CONFIG.ALPHA_MODE_SCORE_THRESHOLD;
    
    // If Alpha Mode is active, don't update the progress here
    // (it's handled by updateAlphaMode function)
    if (playerSnake.alphaMode.active) return;
    
    // Safety check - ensure lastScoreThreshold is a valid number
    if (typeof playerSnake.alphaMode.lastScoreThreshold !== 'number' || 
        isNaN(playerSnake.alphaMode.lastScoreThreshold)) {
        Logger.gameplay.info("Fixing invalid lastScoreThreshold value:", playerSnake.alphaMode.lastScoreThreshold);
        playerSnake.alphaMode.lastScoreThreshold = Math.max(0, Math.floor(score / scoreThreshold) - 1);
    }
    
    // Calculate the next threshold score needed for Alpha Mode activation
    const nextThreshold = (playerSnake.alphaMode.lastScoreThreshold + 1) * scoreThreshold;
    
    // Calculate progress toward the next threshold
    const scoreProgress = score - (playerSnake.alphaMode.lastScoreThreshold * scoreThreshold);
    const progressNeeded = scoreThreshold; // Always need to gain THRESHOLD points for next activation
    
    // Safety check - ensure we don't divide by zero
    let percentage = 0;
    if (progressNeeded > 0) {
        percentage = Math.min(100, Math.floor((scoreProgress / progressNeeded) * 100));
    }
    
    // Store the progress internally, but DON'T update the UI
    // This allows the score-based system to continue working internally
    // while the alpha points system handles the UI display
    playerSnake.alphaMode.scoreProgress = percentage;
    
    // Debug logging
    Logger.gameplay.info(`Alpha Mode Progress: ${percentage}% (Score: ${score}, Next Threshold: ${nextThreshold})`);
    
    // If we've reached 100% progress but Alpha Mode isn't activating, check why
    if (percentage >= 100 && !playerSnake.alphaMode.cooldownActive) {
        Logger.gameplay.info("Alpha Mode at 100% - Checking activation state:", {
            lastScoreThreshold: playerSnake.alphaMode.lastScoreThreshold,
            currentThreshold: Math.floor(score / scoreThreshold),
            cooldownActive: playerSnake.alphaMode.cooldownActive
        });
        
        // Force the activation by directly calling checkAlphaModeActivation
        // This ensures Alpha Mode will activate when the meter is full
        const currentTime = gameState.clock.getElapsedTime();
        checkAlphaModeActivation(score, currentTime, gameState);
    }
}

/**
 * Update the alpha mode progress meter based on alpha points
 * @param {object} gameState - The game state object
 */
function updateAlphaModeProgressPoints(gameState) {
    const { playerSnake } = gameState;
    
    // If Alpha Mode is active, don't update the progress bar here
    // (it's handled by updateAlphaMode function)
    if (playerSnake.alphaMode.active) return;
    
    // Calculate progress as a percentage of the alpha points threshold
    const pointsProgress = playerSnake.alphaMode.alphaPoints;
    const pointsNeeded = getAdjustedSetting('ALPHA_POINTS_THRESHOLD') || CONFIG.ALPHA_POINTS_THRESHOLD;
    
    // Calculate percentage (0-100)
    const safePointsNeeded = pointsNeeded > 0 ? pointsNeeded : 1;
    const percentage = Math.min(100, Math.floor((pointsProgress / safePointsNeeded) * 100));
    
    // Only update the UI if the percentage has changed or every 10 frames
    // This saves performance by reducing DOM updates
    if (!playerSnake.alphaMode.lastDisplayedPercentage || 
        playerSnake.alphaMode.lastDisplayedPercentage !== percentage ||
        (gameState.frameCount % 10 === 0)) {
        
        // Update the UI to show alpha points progress
        UI.updateAlphaModeProgress(percentage, pointsProgress, safePointsNeeded);
        
        // Store the last displayed percentage to avoid redundant updates
        playerSnake.alphaMode.lastDisplayedPercentage = percentage;
    }
    
    // If we reach 100%, trigger Alpha Mode activation if not in cooldown
    if (percentage >= 100 && !playerSnake.alphaMode.cooldownActive) {
        const currentTime = gameState.clock.getElapsedTime();
        checkAlphaModeActivationPoints(currentTime, gameState);
    }
}

/**
 * Decay alpha points over time
 * @param {number} currentTime - Current game time
 * @param {object} gameState - Game state object
 */
function decayAlphaPoints(currentTime, gameState) {
    const { playerSnake } = gameState;
    
    // Only decay once every 5 frames to improve performance
    if (gameState.frameCount % 5 !== 0) return;
    
    // If this is the first time we're calculating decay or lastDecayTime is invalid,
    // just set the time and don't decay yet
    if (!playerSnake.alphaMode.lastDecayTime || 
        playerSnake.alphaMode.lastDecayTime === 0 || 
        isNaN(playerSnake.alphaMode.lastDecayTime)) {
        playerSnake.alphaMode.lastDecayTime = currentTime;
        return;
    }
    
    // Calculate time passed since last decay (in seconds)
    const deltaTime = currentTime - playerSnake.alphaMode.lastDecayTime;
    
    // Only decay if a reasonable amount of time has passed
    // (prevents weird behavior if time jumps, like when pausing)
    if (deltaTime > 0 && deltaTime < 1.0) {
        // Only decay if we have points to decay
        if (playerSnake.alphaMode.alphaPoints > 0) {
            // Decay alpha points over time
            const decayRate = CONFIG.ALPHA_POINTS_DECAY_RATE;
            const decayAmount = decayRate * deltaTime;
            
            // Apply decay
            playerSnake.alphaMode.alphaPoints -= decayAmount;
            
            // Ensure alpha points don't go below 0
            playerSnake.alphaMode.alphaPoints = Math.max(0, playerSnake.alphaMode.alphaPoints);
        }
    }
    
    // Update the last decay time
    playerSnake.alphaMode.lastDecayTime = currentTime;
}

function calculateActualSpeed(gameState) {
    const { playerSnake } = gameState;
    let actualSpeed = playerSnake.speed;
    let speedMultiplier = 1.0; // Base multiplier
    
    // Apply speed boost if active - this stacks with other speed effects
    if (playerSnake.speedBoostUntil > 0) {
        // Multiply the speed multiplier by the food speed boost multiplier
        speedMultiplier *= CONFIG.FOOD_SPEED_BOOST_MULTIPLIER;
    }
    
    // Apply Alpha Mode speed boost if active - this stacks with the food speed boost
    if (playerSnake.alphaMode.active) {
        // Multiply the speed multiplier by the alpha mode speed multiplier
        speedMultiplier *= CONFIG.ALPHA_MODE_SPEED_MULTIPLIER;
    }

    // Apply bush slow if active
    if (playerSnake.bushSlowUntil && playerSnake.bushSlowUntil > gameState.simulation?.time) {
        speedMultiplier *= CONFIG.BUSH_SLOW_MULTIPLIER;
    }

    // Apply the combined speed multiplier
    // Lower actualSpeed value = faster movement (since it's the time between moves)
    // So we divide by the multiplier to make the snake faster
    actualSpeed /= speedMultiplier;
    
    return actualSpeed;
}

// Function to check for collision with position
function checkPositionCollision(pos1, pos2, forgiveness = 0) {
    // Apply collision forgiveness if specified (casual mode)
    if (forgiveness > 0) {
        // If the positions are within the forgiveness range, don't count as collision
        return Math.abs(pos1.x - pos2.x) < (1 - forgiveness) && 
               Math.abs(pos1.z - pos2.z) < (1 - forgiveness);
    } else {
        // Standard collision check (exact position match)
        return pos1.x === pos2.x && pos1.z === pos2.z;
    }
}

/** Return all visible player meshes (local + remote) for outline pass. */
export function getAllPlayerMeshes() {
    const meshes = [];
    for (const m of playerSnakeMeshes) {
        if (m && m.visible) meshes.push(m);
    }
    for (const id of Object.keys(remotePlayerMeshes)) {
        const arr = remotePlayerMeshes[id];
        if (!arr) continue;
        for (const m of arr) {
            if (m && m.visible) meshes.push(m);
        }
    }
    return meshes;
}
