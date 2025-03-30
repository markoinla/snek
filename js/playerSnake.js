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
//     activePowerUp: null, // { type, endTime }
//     enlargedHeadUntil: 0 // New property for enlarged head effect
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
    playerSnake.activePowerUp = null;
    playerSnake.enlargedHeadUntil = 0; // Initialize enlarged head timer

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
    const { playerSnake, flags, clock, scene, materials } = gameState;
    if (flags.gameOver || !playerSnake || !clock) return;

    // Update Power-up Timer
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
    if (playerSnake.animationTimer > 0.2) { // Animation speed
        playerSnake.animationFrame = (playerSnake.animationFrame + 1) % 2;
        playerSnake.animationTimer = 0;
        updatePlayerSnakeTextures(gameState);
    }

    // Update Movement
    playerSnake.moveTimer += deltaTime;
    if (playerSnake.moveTimer >= playerSnake.speed) {
        playerSnake.moveTimer = 0; // Reset timer accurately

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
            triggerPlayerDeath(gameState);
            return;
        }

        // 2. Self Collision (Ignore if ghost mode)
        if (!playerSnake.ghostModeActive) {
            // Check against segments *excluding* the tail tip that will move
            for (let i = 0; i < playerSnake.segments.length - 1; i++) {
                if (playerSnake.segments[i].x === newHeadPos.x && playerSnake.segments[i].z === newHeadPos.z) {
                    console.log("Collision: Self");
                    triggerPlayerDeath(gameState);
                    return;
                }
            }
        }

         // 3. Obstacle Collision (Ignore if ghost mode)
         if (!playerSnake.ghostModeActive) {
            if (checkObstacleCollision(newHeadPos, gameState)) {
                console.log("Collision: Obstacle");
                triggerPlayerDeath(gameState);
                return;
            }
         }

         // 4. Enemy Collision - Check if it's an edible tail
         const enemyCollision = checkEnemyCollision(newHeadPos, gameState, true);
         if (enemyCollision.collided) {
             if (enemyCollision.isEdibleTail) {
                 // Player ate an enemy's tail - kill the enemy
                 console.log("Ate enemy tail! Killing enemy:", enemyCollision.enemyId);
                 
                 // Kill the enemy snake
                 if (killEnemySnake(enemyCollision.enemyId, gameState)) {
                     // Increase score
                     gameState.score += CONFIG.ENEMY_KILL_SCORE;
                     gameState.enemies.kills += 1;
                     
                     // Update UI
                     UI.updateScore(gameState.score);
                     UI.updateKills(gameState.enemies.kills);
                     
                     // Show kill message with particle effect color
                     UI.showPowerUpTextEffect("SNAKE KILL!", CONFIG.PARTICLE_COLOR_KILL);
                     
                     // Trigger camera shake
                     startCameraShake(gameState);
                     
                     // Enlarge player's head for a duration
                     enlargePlayerHead(gameState, currentTime);
                 }
             } else {
                 // Regular enemy collision - player dies
                 console.log("Collision: Enemy");
                 triggerPlayerDeath(gameState);
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
function killEnemySnake(enemyId, gameState) {
    // Use the imported killEnemy function
    return killEnemy(enemyId, gameState);
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

    // Clear any existing power-up first
    clearPowerUpEffects(gameState);

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
            playerSnake.activePowerUp = {
                type: type,
                endTime: currentTime + foodTypeInfo.powerUpDuration
            };
            UI.updatePowerUpInfo(`Speed Boost! (${Math.round(foodTypeInfo.powerUpDuration)}s)`);
            break;
        
        case 'ghost':
            playerSnake.ghostModeActive = true;
            playerSnake.activePowerUp = {
                type: type,
                endTime: currentTime + foodTypeInfo.powerUpDuration
            };
            updatePlayerSnakeTextures(gameState); // Update visuals immediately
            UI.updatePowerUpInfo(`Ghost Mode! (${Math.round(foodTypeInfo.powerUpDuration)}s)`);
            break;
        
        case 'score_x2':
            playerSnake.scoreMultiplier = 2;
            playerSnake.activePowerUp = {
                type: type,
                endTime: currentTime + foodTypeInfo.powerUpDuration
            };
            UI.updatePowerUpInfo(`Score x2! (${Math.round(foodTypeInfo.powerUpDuration)}s)`);
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
                UI.updatePowerUpInfo(`Shrunk by ${segmentsToRemove} segments!`);
                
                // Clear info after a few seconds
                setTimeout(() => {
                    if (playerSnake.activePowerUp === null) { // Only clear if no other power-up is active
                        UI.updatePowerUpInfo('');
                    }
                }, 3000);
            }
            break;
            
        case 'normal':
        default:
            // Regular food has no special effect
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

    // Reset effects to default values
    playerSnake.speed = CONFIG.BASE_SNAKE_SPEED;
    playerSnake.scoreMultiplier = 1;
    const wasGhost = playerSnake.ghostModeActive;
    playerSnake.ghostModeActive = false;

     // If ghost mode was active, update textures to remove transparency
     if (wasGhost) {
         updatePlayerSnakeTextures(gameState);
     }

     // Clear UI display only if requested (e.g., when powerup expires)
     if (clearUIDisplay) {
         playerSnake.activePowerUp = null; // Clear the timer state
         UI.updatePowerUpInfo('');
     }
}

function updatePowerUpState(currentTime, gameState) {
    const { playerSnake } = gameState;
    if (!playerSnake?.activePowerUp) return;

    if (currentTime >= playerSnake.activePowerUp.endTime) {
        // Power-up expired
        console.log(`Power-up expired: ${playerSnake.activePowerUp.type}`);
        clearPowerUpEffects(gameState, true); // Clear effects AND UI display
        // No need to set activePowerUp = null here, clearPowerUpEffects does it
    } else {
        // Update UI timer display
        const remainingTime = playerSnake.activePowerUp.endTime - currentTime;
        const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === playerSnake.activePowerUp.type);
        const description = foodTypeInfo ? foodTypeInfo.description : playerSnake.activePowerUp.type;
        UI.updatePowerUpInfo(`${description}: ${remainingTime.toFixed(1)}s`);
    }
}


// --- Death ---
function triggerPlayerDeath(gameState) {
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
     setGameOver(gameState);
}