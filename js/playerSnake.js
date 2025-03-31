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
//         startTime: 0,
//         endTime: 0,
//         lastScoreThreshold: 0
//     }
// };

export function initPlayerSnake(gameState) {
    const { playerSnake } = gameState;
    const startOffset = 2; // Start slightly offset from center
    playerSnake.segments = [
        { x: startOffset, y: 0, z: 0 },
        { x: startOffset - 1, y: 0, z: 0 },
        { x: startOffset - 2, y: 0, z: 0 }
    ];
    playerSnake.direction = { x: 1, y: 0, z: 0 };
    playerSnake.nextDirection = { x: 1, y: 0, z: 0 };
    playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
    playerSnake.moveTimer = 0;
    playerSnake.animationFrame = 0;
    playerSnake.animationTimer = 0;
    playerSnake.scoreMultiplier = 1;
    playerSnake.ghostModeActive = false;
    playerSnake.activePowerUps = []; // Initialize activePowerUps array
    playerSnake.enlargedHeadUntil = 0; // Initialize enlarged head timer
    playerSnake.alphaMode = {
        active: false,
        startTime: 0,
        endTime: 0,
        lastScoreThreshold: 0
    };
    playerSnake.lastTextureUpdateFrame = 0; // Initialize last texture update frame

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
     UI.resetUI(0); // Reset score display etc.
     console.log("Player reset complete.");
}


// --- Movement and Input ---

export function turnLeft(gameState) {
    const { playerSnake, flags } = gameState;
    if (flags.gameOver) return;
    // Prevent turning 180 degrees
    const currentDirX = playerSnake.direction.x;
    const currentDirZ = playerSnake.direction.z;
    const nextDir = { x: currentDirZ, y: 0, z: -currentDirX };
    // Ensure the next direction isn't the direct opposite of the *current* head segment direction
     if (playerSnake.segments.length <= 1 || (nextDir.x === 0 && nextDir.z === 0) || (nextDir.x !== -currentDirX || nextDir.z !== -currentDirZ)) {
        playerSnake.nextDirection = nextDir;
     }
}

export function turnRight(gameState) {
    const { playerSnake, flags } = gameState;
    if (flags.gameOver) return;
     const currentDirX = playerSnake.direction.x;
     const currentDirZ = playerSnake.direction.z;
     const nextDir = { x: -currentDirZ, y: 0, z: currentDirX };
      if (playerSnake.segments.length <= 1 || (nextDir.x === 0 && nextDir.z === 0) || (nextDir.x !== -currentDirX || nextDir.z !== -currentDirZ)) {
        playerSnake.nextDirection = nextDir;
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
    
    // Calculate actual speed based on power-ups and Alpha Mode
    let actualSpeed = playerSnake.speed;
    
    // Apply Alpha Mode speed boost if active
    if (playerSnake.alphaMode.active) {
        // FIXED: Lower speed value = faster movement (since it's the time between moves)
        // We need to divide by the multiplier, not multiply
        actualSpeed /= CONFIG.ALPHA_MODE_SPEED_MULTIPLIER; // Faster in Alpha Mode
    }
    
    if (playerSnake.moveTimer >= actualSpeed) {
        playerSnake.moveTimer = 0;
        
        // Update direction based on queued input
        playerSnake.direction = playerSnake.nextDirection;

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
        const eatenFood = checkAndEatFood(newHeadPos, gameState); // checkAndEatFood handles particles/sound/UI text
        let growSnake = false;

        if (eatenFood) {
            gameState.score += (eatenFood.scoreValue * playerSnake.scoreMultiplier);
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
                 const newMesh = createSnakeSegmentMesh(newHeadPos, true, materials, true);
                 if (newMesh) {
                     scene.add(newMesh);
                     playerSnakeMeshes.unshift(newMesh);
                 }
            }
        } else {
             // Create a new mesh for the new head segment
             const newMesh = createSnakeSegmentMesh(newHeadPos, true, materials, true);
             if (newMesh) {
                 scene.add(newMesh);
                 playerSnakeMeshes.unshift(newMesh);
             }
        }

        // Update materials/textures for the new head and the segment behind it
        updatePlayerMaterialsAfterMove(gameState);
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
        // Increase score
        gameState.score += CONFIG.ENEMY_KILL_SCORE;
        gameState.enemies.kills += 1;
        
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
        const newMesh = createSnakeSegmentMesh(newSegment, false, materials, false);
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

    // Smoothly interpolate camera position and rotation (lookAt)
    camera.position.lerp(targetCamPos, CONFIG.CAMERA_LAG);

    // Smooth LookAt using Quaternion slerp for nicer rotation
    const tempCam = camera.clone(); // Clone current camera state
    tempCam.lookAt(targetLookAt);   // Point the clone at the target
    // Slerp the actual camera's quaternion towards the clone's quaternion
    camera.quaternion.slerp(tempCam.quaternion, CONFIG.CAMERA_LAG * 0.8); // Adjust slerp speed as needed
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
            playerSnake.speed = CONFIG.BASE_SNAKE_SPEED * 0.6; // 40% faster
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
            playerSnake.scoreMultiplier = 2;
            // Add to active power-ups array
            playerSnake.activePowerUps.push({
                type: type,
                endTime: currentTime + foodTypeInfo.powerUpDuration
            });
            updatePowerUpInfoDisplay(gameState);
            break;
        
        case 'shrink':
            // Shrink the snake by removing tail segments (to a minimum length)
            const currentLength = playerSnake.segments.length;
            const targetLength = Math.max(CONFIG.MIN_SNAKE_LENGTH, Math.floor(currentLength * 0.6)); // Shrink by 40%
            const segmentsToRemove = currentLength - targetLength;
            
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
    if (!playerSnake) return;

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
        if (currentTime >= powerUp.endTime) {
            // Power-up expired
            console.log(`Power-up expired: ${powerUp.type}`);
            
            // Handle specific power-up expiration
            switch (powerUp.type) {
                case 'speed':
                    playerSnake.speed = CONFIG.BASE_SNAKE_SPEED; // Reset speed
                    break;
                case 'ghost':
                    playerSnake.ghostModeActive = false;
                    updatePlayerSnakeTextures(gameState); // Update visuals
                    break;
                case 'score_x2':
                    playerSnake.scoreMultiplier = 1; // Reset multiplier
                    break;
            }
            
            // Remove expired power-up from array
            playerSnake.activePowerUps.splice(i, 1);
            powerUpsChanged = true;
        }
    }
    
    // Update the UI if any power-ups changed
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
            // Remove from active power-ups
            playerSnake.activePowerUps.splice(i, 1);
            powerUpStateChanged = true;
            
            // Reset effects based on type
            switch (powerUp.type) {
                case 'speed':
                    // Reset speed to normal (or alpha mode speed if active)
                    if (playerSnake.alphaMode && playerSnake.alphaMode.active) {
                        playerSnake.speed = CONFIG.BASE_SNAKE_SPEED / CONFIG.ALPHA_MODE_SPEED_MULTIPLIER;
                    } else {
                        playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
                    }
                    UI.showPowerUpTextEffect("Speed boost ended");
                    break;
                    
                case 'ghost':
                    playerSnake.ghostModeActive = false;
                    updatePlayerSnakeTextures(gameState); // Update visuals immediately
                    UI.showPowerUpTextEffect("Ghost mode ended");
                    break;
                    
                case 'score_x2':
                    playerSnake.scoreMultiplier = 1;
                    UI.showPowerUpTextEffect("Score multiplier ended");
                    break;
            }
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
 * Checks if Alpha Mode should be activated based on score
 */
function checkAlphaModeActivation(score, currentTime, gameState) {
    const { playerSnake } = gameState;
    const scoreThreshold = CONFIG.ALPHA_MODE_SCORE_THRESHOLD;
    
    // Calculate which threshold we're at
    const currentThreshold = Math.floor(score / scoreThreshold);
    
    // If we've reached a new threshold and we're not already in Alpha Mode
    if (currentThreshold > playerSnake.alphaMode.lastScoreThreshold && !playerSnake.alphaMode.active) {
        // Activate Alpha Mode
        playerSnake.alphaMode.active = true;
        playerSnake.alphaMode.startTime = currentTime;
        playerSnake.alphaMode.endTime = currentTime + CONFIG.ALPHA_MODE_DURATION;
        playerSnake.alphaMode.lastScoreThreshold = currentThreshold;
        
        // Reset the alpha kill message counter to start from the first message
        alphaKillMessageIndex = 0;
        
        // Update the UI
        UI.showAlphaModeBar();
        UI.showPowerUpTextEffect(CONFIG.GAME_TEXT.ALPHA_MODE.ACTIVATED_MESSAGE);
        
        // Update player speed for Alpha Mode
        // NOTE: In our game, speed is the time between moves, so a lower value means faster movement
        // BASE_SNAKE_SPEED is 0.10, and with multiplier of 1.5, we should set it to 0.10 / 1.5 = 0.067
        // This makes the snake move every 0.067 seconds instead of every 0.10 seconds
        playerSnake.speed = CONFIG.BASE_SNAKE_SPEED / CONFIG.ALPHA_MODE_SPEED_MULTIPLIER;
        
        console.log("Alpha Mode activated! Threshold:", currentThreshold);
    }
}

/**
 * Updates Alpha Mode state
 */
function updateAlphaMode(currentTime, gameState) {
    const { playerSnake } = gameState;
    
    // Check if Alpha Mode has expired
    if (currentTime >= playerSnake.alphaMode.endTime) {
        // Deactivate Alpha Mode
        playerSnake.alphaMode.active = false;
        
        // Reset player speed to normal
        playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
        
        // Show deactivation message
        UI.showPowerUpTextEffect(CONFIG.GAME_TEXT.ALPHA_MODE.DEACTIVATED_MESSAGE);
        
        // Reset the label but keep the progress bar visible with 0% progress
        if (document.getElementById('alphaModeLabel')) {
            document.getElementById('alphaModeLabel').textContent = CONFIG.GAME_TEXT.ALPHA_MODE.PROGRESS_LABEL;
            document.getElementById('alphaModeLabel').classList.remove('alpha-mode-active');
        }
        
        // Reset progress bar to 0%
        UI.updateAlphaModeProgress(0);
        
        console.log("Alpha Mode deactivated");
        return;
    }
    
    // Calculate remaining time percentage
    const totalDuration = CONFIG.ALPHA_MODE_DURATION;
    const remaining = playerSnake.alphaMode.endTime - currentTime;
    const percentage = (remaining / totalDuration) * 100;
    
    // Update the UI
    UI.updateAlphaModeProgress(percentage);
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
    if (playerSnake.alphaMode && playerSnake.alphaMode.active) {
        // In Alpha Mode, always kill the enemy snake regardless of collision point
        console.log("Alpha Mode active - killing enemy snake regardless of collision point");
        killEnemySnake(collision.enemyId, gameState);
        
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
    
    // After Alpha Mode deactivates, we want to start from 0 and build up again
    // to the next threshold, so we'll calculate progress differently
    const nextThreshold = (playerSnake.alphaMode.lastScoreThreshold + 1) * scoreThreshold;
    const scoreProgress = score - (playerSnake.alphaMode.lastScoreThreshold * scoreThreshold);
    const progressNeeded = scoreThreshold; // Always need to gain THRESHOLD points for next activation
    
    // Calculate percentage (0-100)
    const percentage = Math.min(100, Math.floor((scoreProgress / progressNeeded) * 100));
    
    // Update the UI
    UI.updateAlphaModeProgress(percentage);
}