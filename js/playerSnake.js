import * as THREE from 'three';
import * as CONFIG from './config.js';
import { GEOMETRIES, FOOD_TYPES } from './constants.js'; // Import FOOD_TYPES for power-ups
import { createSnakeSegmentMesh } from './utils.js';
import { createExplosion } from './particleSystem.js';
import { setGameOver } from './main.js'; // To trigger game over
import { checkObstacleCollision } from './obstacles.js';
import { checkEnemyCollision, killEnemySnake as killEnemy } from './enemySnake.js';
import { checkAndEatFood } from './food.js';
import * as UI from './ui.js'; // For power-up UI updates
import * as Audio from './audioSystem.js'; // Import audio system for sound effects

let playerSnakeMeshes = []; // Keep track of meshes separately for easy removal/update

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
//     alphaMode: {
//         active: false,
//         progress: 0,
//         startTime: 0,
//         endTime: 0,
//         lastScoreThreshold: 0,
//         scoreMultiplier: 1.0,         // Current score multiplier (starts at 1.0)
//         scoreMultiplierUntil: 0,      // When the current multiplier expires
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
    const { playerSnake } = gameState;
    
    if (!playerSnake) return;
    
    // Reset all snake properties
    playerSnake.segments = [];
    playerSnake.direction = { x: 1, z: 0 };
    playerSnake.lastDirection = { x: 1, z: 0 };
    playerSnake.pendingTurns = [];
    playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
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
    playerSnake.alphaMode = {
        active: false,
        progress: 0,
        startTime: 0,
        endTime: 0,
        lastScoreThreshold: 0,
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
    console.log("Player snake initialized.");
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
        playerSnakeMeshes.forEach(mesh => scene.remove(mesh));
    }
    playerSnakeMeshes = [];
}

export function resetPlayer(gameState) {
     resetPlayerMeshes(gameState); // Remove meshes
     initPlayerSnake(gameState); // Reinitialize state and meshes
     UI.resetUI(0, gameState); // Reset score display etc.
     console.log("Player reset complete.");
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
        
        playerSnake.immediateDirectionChange = true;
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
        
        playerSnake.immediateDirectionChange = true;
    }
}


// --- Update Functions ---

export function updatePlayer(deltaTime, currentTime, gameState) {
    const { playerSnake, score, flags, scene, materials } = gameState;
    
    // Exit early if game is over
    if (flags.gameOver || !playerSnake) return;
    
    // Update progress toward Alpha Mode
    updateAlphaModeProgress(score, gameState);
    
    // Check if we should enter Alpha Mode based on score
    checkAlphaModeActivation(score, currentTime, gameState);
    
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
    let actualSpeed = playerSnake.speed;
    let speedMultiplier = 1.0; // Base multiplier
    
    // Apply speed boost if active - this stacks with other speed effects
    if (playerSnake.speedBoostUntil > 0 && currentTime < playerSnake.speedBoostUntil) {
        // Multiply the speed multiplier by the food speed boost multiplier
        speedMultiplier *= CONFIG.FOOD_SPEED_BOOST_MULTIPLIER;
    } else if (playerSnake.speedBoostUntil > 0 && currentTime >= playerSnake.speedBoostUntil) {
        // Reset speed boost timer when it expires
        playerSnake.speedBoostUntil = 0;
    }
    
    // Apply Alpha Mode speed boost if active - this stacks with the food speed boost
    if (playerSnake.alphaMode.active) {
        // Multiply the speed multiplier by the alpha mode speed multiplier
        speedMultiplier *= CONFIG.ALPHA_MODE_SPEED_MULTIPLIER;
    }
    
    // Apply the combined speed multiplier
    // Lower actualSpeed value = faster movement (since it's the time between moves)
    // So we divide by the multiplier to make the snake faster
    actualSpeed /= speedMultiplier;
    
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
            console.warn("Player direction became zero. Reverting to previous.");
            // Attempt to revert - requires storing previous direction or guessing
             // For now, just stop moving this frame to prevent errors
             return;
        }

        const head = playerSnake.segments[0];
        const newHeadPos = {
            x: head.x + playerSnake.direction.x,
            y: 0, // Keep snake on the ground plane
            z: head.z + playerSnake.direction.z
        };

        // --- Collision Checks ---
        // 1. Wall Collision
        const halfGrid = CONFIG.GRID_SIZE / 2;
        if (newHeadPos.x >= halfGrid || newHeadPos.x < -halfGrid ||
            newHeadPos.z >= halfGrid || newHeadPos.z < -halfGrid) {
            console.log("Collision: Wall");
            triggerPlayerDeath(gameState, 'WALL_COLLISION');
            return;
        }

        // 2. Self Collision (Ignore if ghost mode)
        if (!playerSnake.ghostModeActive) {
            // Check against segments *excluding* the tail tip that will move
            for (let i = 0; i < playerSnake.segments.length - 1; i++) {
                if (playerSnake.segments[i].x === newHeadPos.x && playerSnake.segments[i].z === newHeadPos.z) {
                    console.log("Collision: Self");
                    triggerPlayerDeath(gameState, 'SELF_COLLISION');
                    return;
                }
            }
        }

         // 3. Obstacle Collision (Ignore if ghost mode)
         if (!playerSnake.ghostModeActive) {
            const obstacleCollision = checkObstacleCollision(newHeadPos, gameState);
            if (obstacleCollision) {
                console.log("Collision: Obstacle type:", obstacleCollision);
                
                // Use specific death message based on obstacle type
                let deathReason = 'OBSTACLE_COLLISION';
                if (obstacleCollision === 'tree') {
                    deathReason = 'TREE_COLLISION';
                } else if (obstacleCollision === 'bush') {
                    deathReason = 'BUSH_COLLISION';
                }
                
                triggerPlayerDeath(gameState, deathReason);
                return;
            }
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
            console.log("Food eaten in playerSnake.js:", eatenFood.type, "Alpha Mode active:", playerSnake.alphaMode?.active);
            
            // Calculate score with multiplier
            let scoreMultiplier = 1.0; // Default multiplier
            
            // Apply Alpha Mode score multiplier if active
            if (playerSnake.alphaMode && playerSnake.alphaMode.active) {
                scoreMultiplier = playerSnake.alphaMode.scoreMultiplier;
                console.log(`Applying Alpha Mode score multiplier: x${scoreMultiplier}`);
            }
            
            // Apply the multiplier to the base score value
            const baseScore = eatenFood.scoreValue;
            const multipliedScore = Math.round(baseScore * scoreMultiplier);
            
            // Add the score and update UI
            gameState.score += multipliedScore;
            
            // Show score popup if multiplier is active
            if (scoreMultiplier > 1.0) {
                UI.showPowerUpTextEffect(`+${multipliedScore} pts!`, 0xFFD700); // Gold color for score
            }
            
            UI.updateScore(gameState.score);
            
            // Now apply power-up effect AFTER score update and food removal
            const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === eatenFood.type);
            if(foodTypeInfo){
                applyPowerUp(foodTypeInfo.type, gameState); // Apply effects (speed, ghost, shrink etc.)
                // Grow unless it was a shrink powerup
                growSnake = foodTypeInfo.type !== 'shrink';
            } else {
                // Regular food always grows
                growSnake = true;
            }
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
                console.error("Tail mesh missing during move!");
                 // Attempt recovery: Create a new mesh for the head
                 const newMesh = createSnakeSegmentMesh(newHeadPos, true, materials, true); // Fix: Set isPlayer to true
                 if (newMesh) {
                     scene.add(newMesh);
                     playerSnakeMeshes.unshift(newMesh);
                 }
            }
        } else {
             // Create a new mesh for the new head segment
             const newMesh = createSnakeSegmentMesh(newHeadPos, true, materials, true); // Fix: Set isPlayer to true
             if (newMesh) {
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
    
    console.log(`Player head enlarged for ${CONFIG.ENLARGED_HEAD_DURATION} seconds`);
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
            
            console.log(`Applied Alpha Mode score multiplier: x${scoreMultiplier} and added new multiplier`);
        }
        
        // Apply the multiplier to the base score value
        const baseScore = CONFIG.ENEMY_KILL_SCORE;
        const multipliedScore = Math.round(baseScore * scoreMultiplier);
        
        // Add the score and update UI
        gameState.score += multipliedScore;
        gameState.enemies.kills += 1;
        
        // Show score popup if multiplier is active
        if (scoreMultiplier > 1.0) {
            UI.showPowerUpTextEffect(`+${multipliedScore} pts!`, 0xFFD700); // Gold color for score
        }
        
        // Play snake eating sound
        Audio.playSoundEffect('eatSnake');
        
        // Update UI
        UI.updateScore(gameState.score);
        UI.updateKills(gameState.enemies.kills);
        
        // Show kill message with particle effect color
        UI.showPowerUpTextEffect(UI.getRandomEnemyKillMessage(), CONFIG.PARTICLE_COLOR_KILL);
        
        // Trigger camera shake
        startCameraShake(gameState);
        
        // Enlarge player's head for a duration
        enlargePlayerHead(gameState, currentTime);
        
        // Make the snake grow by 3 segments when eating an enemy
        growSnakeSegments(gameState, 3);
        
        // If in alpha mode, extend the alpha mode duration by 1 second
        if (playerSnake.alphaMode.active) {
            // Extend alpha mode duration by 1 second
            playerSnake.alphaMode.endTime += 1;
            
            // Show a message indicating the alpha mode extension
            UI.showPowerUpTextEffect("+1s ALPHA TIME", CONFIG.ALPHA_MODE_COLOR);
            
            console.log("Alpha mode extended by 1 second! New end time:", playerSnake.alphaMode.endTime);
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
        
        // Create a mesh for the new segment
        const newMesh = createSnakeSegmentMesh(newSegment, false, materials, true); // Fix: Set isPlayer to true
        if (newMesh) {
            scene.add(newMesh);
            playerSnakeMeshes.push(newMesh);
        }
    }
    
    // Update the snake's appearance
    updatePlayerMaterialsAfterMove(gameState);
}

// --- Camera ---
export function updateCamera(gameState) {
    const { camera, playerSnake, scene } = gameState; // Assuming directionalLight is in scene's scope or passed in gameState
    // Access lights from gameState
    const directionalLight = gameState.lights?.directionalLight;

    if (!camera || !playerSnake || playerSnake.segments.length === 0 || playerSnakeMeshes.length === 0 || !directionalLight) return;

    const headMesh = playerSnakeMeshes[0];
    const headPos = headMesh.position; // Use the mesh position for smoother camera

    // Target for camera to look at (slightly ahead of the snake)
    const lookAheadFactor = Math.max(2, CONFIG.CAMERA_DISTANCE * 0.2);
    const lookDirection = new THREE.Vector3(playerSnake.direction.x, 0, playerSnake.direction.z).normalize();
    const targetLookAt = headPos.clone().addScaledVector(lookDirection, lookAheadFactor);

    // Target for directional light (follows the head more closely)
    if (directionalLight.target) { // Ensure target exists
        // Smoothly move the light's target towards the snake head
        directionalLight.target.position.lerp(headPos, CONFIG.CAMERA_LAG * 1.5); // Light target leads slightly less than camera
        // Ensure the light source itself also updates if needed, although its position is usually fixed relative to the world
    }

    // Target position for the camera (behind the snake)
    const cameraOffsetDirection = lookDirection.clone().multiplyScalar(-1); // Opposite direction
    const targetCamPos = headPos.clone().addScaledVector(cameraOffsetDirection, CONFIG.CAMERA_DISTANCE);
    targetCamPos.y = CONFIG.CAMERA_HEIGHT; // Maintain fixed height

    // Smoothly interpolate camera position using the new position smoothness setting
    // Lower value = smoother movement
    camera.position.lerp(targetCamPos, CONFIG.CAMERA_POSITION_SMOOTHNESS);

    // Smooth LookAt using Quaternion slerp for nicer rotation
    const tempCam = camera.clone(); // Clone current camera state
    tempCam.lookAt(targetLookAt);   // Point the clone at the target
    
    // Slerp the actual camera's quaternion towards the clone's quaternion
    // Using the new rotation smoothness setting - lower value = smoother rotation
    camera.quaternion.slerp(tempCam.quaternion, CONFIG.CAMERA_ROTATION_SMOOTHNESS);
}

// --- Power-ups ---
export function applyPowerUp(type, gameState) {
    const { playerSnake, clock } = gameState;
    if (!playerSnake || !clock) return;

    // Initialize activePowerUps array if it doesn't exist
    if (!playerSnake.activePowerUps) {
        playerSnake.activePowerUps = [];
    }

    const currentTime = clock.getElapsedTime();
    const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === type);
    
    if (!foodTypeInfo) {
        console.error(`Unknown power-up type: ${type}`);
        return;
    }

    console.log(`Applying power-up: ${foodTypeInfo.description}`);

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
            console.log(`Power-up expired: ${powerUp.type}`);
            
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
    
    const currentTime = clock.getElapsedTime();

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
    
    const currentTime = clock.getElapsedTime();
    let powerUpStateChanged = false;
    
    // Check each active power-up
    for (let i = playerSnake.activePowerUps.length - 1; i >= 0; i--) {
        const powerUp = playerSnake.activePowerUps[i];
        
        // If power-up has expired
        if (currentTime >= powerUp.endTime) {
            // Power-up expired
            console.log(`Power-up expired: ${powerUp.type}`);
            
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
        headMaterial.color.setHex(CONFIG.ALPHA_MODE_COLOR);
        bodyMaterial.color.setHex(CONFIG.ALPHA_MODE_COLOR);
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

    // Apply materials to meshes
    playerSnakeMeshes.forEach((mesh, index) => {
        if (!mesh) return; // Skip if mesh is undefined
        
        if (index === 0) {
            // Head
            mesh.material = headMaterial;
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

    // Skip if no head mesh
    if (!playerSnakeMeshes[0]) return;

    let headMaterial, bodyMaterial;
    
    if (playerSnake.alphaMode.active) {
        // In Alpha Mode, use purple-tinted materials
        headMaterial = playerSnake.animationFrame === 0 ? materials.snake.head1.clone() : materials.snake.head2.clone();
        bodyMaterial = playerSnake.animationFrame === 0 ? materials.snake.body1.clone() : materials.snake.body2.clone();
        
        // Apply Alpha Mode color (purple)
        headMaterial.color.setHex(CONFIG.ALPHA_MODE_COLOR);
        bodyMaterial.color.setHex(CONFIG.ALPHA_MODE_COLOR);
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

    // Update head mesh
    playerSnakeMeshes[0].material = headMaterial;

    // Update the segment that was previously the head (now the first body segment)
    if (playerSnakeMeshes.length > 1 && playerSnakeMeshes[1]) {
        playerSnakeMeshes[1].material = bodyMaterial;
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
    
    console.log("Alpha Mode cooldown reset. lastScoreThreshold set to:", currentThreshold);
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
    console.log(`Alpha Mode Check - Current Threshold: ${currentThreshold}, Last Threshold: ${playerSnake.alphaMode.lastScoreThreshold}`);
    console.log(`Alpha Mode Active: ${playerSnake.alphaMode.active}, Cooldown Active: ${playerSnake.alphaMode.cooldownActive}`);
    
    // If we've reached a new threshold and we're not already in Alpha Mode
    if (currentThreshold > playerSnake.alphaMode.lastScoreThreshold && !playerSnake.alphaMode.active) {
        // Activate Alpha Mode
        playerSnake.alphaMode.active = true;
        playerSnake.alphaMode.startTime = currentTime;
        playerSnake.alphaMode.endTime = currentTime + CONFIG.ALPHA_MODE_DURATION;
        playerSnake.alphaMode.lastScoreThreshold = currentThreshold;
        
        // Reset the alpha kill message counter to start from the first message
        alphaKillMessageIndex = 0;
        
        // Reset the alpha kill voice counter to start from the first voice line
        Audio.resetAlphaKillVoiceCounter();
        
        // Update the UI
        UI.showAlphaModeBar();
        UI.showPowerUpTextEffect(CONFIG.GAME_TEXT.ALPHA_MODE.ACTIVATED_MESSAGE);
        
        // Update player speed for Alpha Mode
        playerSnake.speed = CONFIG.BASE_SNAKE_SPEED / CONFIG.ALPHA_MODE_SPEED_MULTIPLIER;
        
        // Increment consecutive activations counter
        playerSnake.alphaMode.consecutiveActivations++;
        
        console.log("Alpha Mode activated! Threshold:", currentThreshold);
        console.log("Consecutive Alpha Mode activations:", playerSnake.alphaMode.consecutiveActivations, 
                   "Max allowed:", CONFIG.ALPHA_MODE_MAX_CONSECUTIVE_ACTIVATIONS);
    } else {
        // Debug why Alpha Mode is not activating
        if (currentThreshold <= playerSnake.alphaMode.lastScoreThreshold) {
            console.log("Alpha Mode not activated: Current threshold not greater than last threshold");
        }
        if (playerSnake.alphaMode.active) {
            console.log("Alpha Mode not activated: Alpha Mode is already active");
        }
    }
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
        
        console.log("Alpha Mode deactivated");
        return;
    }
    
    // Calculate and update remaining time
    const remainingTime = playerSnake.alphaMode.endTime - currentTime;
    const totalDuration = CONFIG.ALPHA_MODE_DURATION;
    const progress = remainingTime / totalDuration;
    
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
    
    console.log(`Added score multiplier. Current total: x${playerSnake.alphaMode.scoreMultiplier}`);
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
        UI.showPowerUpTextEffect(getNextAlphaKillMessage(), CONFIG.ALPHA_MODE_COLOR);
        
        return true;
    } else if (collision.isTail) {
        // Not in Alpha Mode but hit the tail (which is always edible)
        console.log("Hit enemy tail - killing enemy snake");
        killEnemySnake(collision.enemyId, gameState);
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

     // Play player death sound
     Audio.playSoundEffect('playerDeath');

     if (playerSnakeMeshes.length > 0) {
         // *** UPDATED CALL ***
         createExplosion(
             scene,
             camera, // Pass camera
             playerSnakeMeshes[0].position,
             CONFIG.PARTICLE_COUNT_DEATH,
             0xff4444
         );
     }
     // Call the main game over handler
     setGameOver(gameState, reason);
}

// Update Alpha Mode progress based on score
function updateAlphaModeProgress(score, gameState) {
    const { playerSnake } = gameState;
    const scoreThreshold = CONFIG.ALPHA_MODE_SCORE_THRESHOLD;
    
    // If Alpha Mode is active, don't update the progress bar here
    // (it's handled by updateAlphaMode function)
    if (playerSnake.alphaMode.active) return;
    
    // Safety check - ensure lastScoreThreshold is a valid number
    if (typeof playerSnake.alphaMode.lastScoreThreshold !== 'number' || 
        isNaN(playerSnake.alphaMode.lastScoreThreshold)) {
        console.log("Fixing invalid lastScoreThreshold value:", playerSnake.alphaMode.lastScoreThreshold);
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
    
    // Update the UI with the current progress percentage
    UI.updateAlphaModeProgress(percentage);
    
    // Show the Alpha Mode container if it's not already visible
    const alphaModeContainer = document.getElementById('alphaModeContainer');
    if (alphaModeContainer && alphaModeContainer.style.display !== 'flex') {
        alphaModeContainer.style.display = 'flex';
    }
    
    // Debug logging
    console.log(`Alpha Mode Progress: ${percentage}% (Score: ${score}, Next Threshold: ${nextThreshold})`);
    
    // If we've reached 100% progress but Alpha Mode isn't activating, check why
    if (percentage >= 100 && !playerSnake.alphaMode.cooldownActive) {
        console.log("Alpha Mode at 100% - Checking activation state:", {
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