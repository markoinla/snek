import * as THREE from 'three';
import * as CONFIG from './config.js';
import { GEOMETRIES, FOOD_TYPES } from './constants.js'; // Import FOOD_TYPES for power-ups
import { createSnakeSegmentMesh } from './utils.js';
import { createExplosion } from './particleSystem.js';
import { setGameOver } from './main.js'; // To trigger game over
import { checkObstacleCollision } from './obstacles.js';
import { checkEnemyCollision } from './enemySnake.js';
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
//     activePowerUp: null // { type, endTime }
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

         // 4. Enemy Collision (Always deadly?)
         if (checkEnemyCollision(newHeadPos, gameState)) {
             console.log("Collision: Enemy");
             triggerPlayerDeath(gameState);
             return;
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
                 if (eatenFood.type !== 'shrink') {
                     growSnake = true;
                 }
            } else {
                growSnake = true; // Grow for normal food or unknown type
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


function updatePlayerMaterialsAfterMove(gameState) {
    const { playerSnake, materials } = gameState;
    if (playerSnakeMeshes.length === 0 || !materials?.snake) return;

    const headMaterial = (playerSnake.animationFrame === 0 ? materials.snake.head1 : materials.snake.head2);
    const bodyMaterial = (playerSnake.animationFrame === 0 ? materials.snake.body1 : materials.snake.body2);

    // Update head mesh
    playerSnakeMeshes[0].material = headMaterial;
     // Update opacity/transparency based on ghost mode for head
    playerSnakeMeshes[0].material.transparent = playerSnake.ghostModeActive;
    playerSnakeMeshes[0].material.opacity = playerSnake.ghostModeActive ? 0.6 : 1.0;
    playerSnakeMeshes[0].material.needsUpdate = true; // Important if changing transparency


    // Update the segment that was previously the head (now the first body segment)
    if (playerSnakeMeshes.length > 1) {
        playerSnakeMeshes[1].material = bodyMaterial;
        // Update opacity/transparency based on ghost mode for body
        playerSnakeMeshes[1].material.transparent = playerSnake.ghostModeActive;
        playerSnakeMeshes[1].material.opacity = playerSnake.ghostModeActive ? 0.6 : 1.0;
         playerSnakeMeshes[1].material.needsUpdate = true;
    }
}

// Updates textures for the entire snake based on animation frame and ghost mode
export function updatePlayerSnakeTextures(gameState) {
    const { playerSnake, materials } = gameState;
    if (!materials?.snake) return;

    const headMaterial = (playerSnake.animationFrame === 0 ? materials.snake.head1 : materials.snake.head2);
    const bodyMaterial = (playerSnake.animationFrame === 0 ? materials.snake.body1 : materials.snake.body2);

    playerSnakeMeshes.forEach((mesh, index) => {
        if (!mesh) return;
        const targetMaterial = (index === 0) ? headMaterial : bodyMaterial;
        mesh.material = targetMaterial;
        // Apply ghost effect
        mesh.material.transparent = playerSnake.ghostModeActive;
        mesh.material.opacity = playerSnake.ghostModeActive ? 0.6 : 1.0;
        mesh.material.needsUpdate = true; // Ensure changes apply
    });
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
    const { playerSnake, clock, scene, materials } = gameState;
    if (!playerSnake || !clock) return;

    const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === type);
    if (!foodTypeInfo) return;

    const currentTime = clock.getElapsedTime();
    const duration = foodTypeInfo.powerUpDuration;

     // --- UI Effect Text ---
     // Show the text effect regardless of clearing previous powerups
     if (foodTypeInfo.effectText) {
         UI.showPowerUpTextEffect(foodTypeInfo.effectText, foodTypeInfo.colorHint.getHex());
     }

    // --- Clear existing effects before applying new ones ---
    // Clear visual/speed effects only, keep timer running if applicable until new one starts
    clearPowerUpEffects(gameState, false); // false = don't clear timer display yet

    // If there's an active powerup timer, clear it (new powerup overrides)
    if (playerSnake.activePowerUp) {
         // No need to explicitly clear here, setting new one below overrides
         // console.log(`Overriding powerup ${playerSnake.activePowerUp.type} with ${type}`);
    }

    // --- Apply new effects ---
    if (duration > 0) {
        playerSnake.activePowerUp = { type: type, endTime: currentTime + duration };
        // Update UI timer display immediately
        UI.updatePowerUpInfo(`${foodTypeInfo.description}: ${duration.toFixed(1)}s`);
    } else {
        playerSnake.activePowerUp = null; // No duration (e.g., shrink)
        UI.updatePowerUpInfo(''); // Clear timer display
    }

    switch (type) {
        case 'speed':
            playerSnake.speed = CONFIG.BASE_SNAKE_SPEED * 0.6; // Faster (lower interval)
            break;
        case 'shrink':
            const amountToShrink = Math.max(0, playerSnake.segments.length - CONFIG.MIN_SNAKE_LENGTH);
            if (amountToShrink > 0) {
                for (let i = 0; i < amountToShrink; i++) {
                    playerSnake.segments.pop(); // Remove from state
                    const removedMesh = playerSnakeMeshes.pop(); // Remove from mesh array
                    if (removedMesh) {
                        scene.remove(removedMesh); // Remove from scene
                    }
                }
                 // Need to update textures if the segment becoming the tail changes
                 if (playerSnakeMeshes.length > 0) {
                    updatePlayerSnakeTextures(gameState);
                 }
            }
            break;
        case 'score_x2':
            playerSnake.scoreMultiplier = 2;
            break;
        case 'ghost':
            playerSnake.ghostModeActive = true;
            updatePlayerSnakeTextures(gameState); // Apply transparency/opacity
            break;
        case 'normal': // Normal food has no timed effect, only grow handled elsewhere
             break;
    }
}

// Added clearUIDisplay flag
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