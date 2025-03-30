import * as THREE from 'three';
import * as CONFIG from './config.js';
import { GEOMETRIES } from './constants.js';
import { createSnakeSegmentMesh, generateUniquePosition, isPositionOccupied } from './utils.js';
import { findClosestFood, addNewFoodItem } from './food.js';
import { createExplosion } from './particleSystem.js';
import { checkObstacleCollision } from './obstacles.js'; // Make sure this import exists

let enemyMeshes = {}; // Store meshes keyed by enemy ID: { id: [mesh1, mesh2,...] }

// --- Enemy State (Managed within gameState.enemies) ---
// gameState.enemies = {
//     list: [] // Array of enemy objects
// };
// Enemy Object Structure:
// {
//     id: number,
//     snake: [], // Array of {x, y, z} segments
//     direction: {x, y, z},
//     nextDirection: {x, y, z},
//     targetFoodIndex: null | number, // Index in gameState.food.positions
//     state: 'seeking' | 'idle' | 'avoiding',
//     lastMoveTime: 0,
//     animationFrame: 0,
//     animationTimer: 0,
//     speed: ENEMY_SNAKE_SPEED // Could vary per enemy
// }

export function spawnInitialEnemies(gameState) {
    const { enemies } = gameState;
    if (!enemies) return;

    // Clear existing first
    resetEnemies(gameState);

    console.log(`Creating ${CONFIG.NUM_ENEMIES} enemies...`);
    for (let i = 0; i < CONFIG.NUM_ENEMIES; i++) {
        initializeEnemy(i, gameState);
    }
}

function initializeEnemy(id, gameState) {
    const { scene, materials, enemies, clock } = gameState;
    if (!scene || !materials?.enemy || !enemies || !clock) return;

    // Find a starting position far from player start and other occupied cells
    const startPos = generateUniquePosition(
        gameState,
        false, // Don't worry about food proximity
        true,  // Avoid obstacles
        true,  // Avoid player snake
        true,  // Avoid other enemies
        CONFIG.ENEMY_START_SAFE_ZONE // Minimum distance from center
    );

    if (!startPos) {
        console.warn(`Could not find start position for enemy ${id}. Skipping.`);
        return;
    }

    // Random initial direction
    const startDirX = Math.random() < 0.5 ? (Math.random() < 0.5 ? 1 : -1) : 0;
    const startDirZ = startDirX === 0 ? (Math.random() < 0.5 ? 1 : -1) : 0;
    const initialDirection = { x: startDirX, y: 0, z: startDirZ };

    // Create segments
    let enemySnakeSegments = [];
    let currentPos = { ...startPos };
    for (let i = 0; i < CONFIG.ENEMY_START_LENGTH; i++) {
        enemySnakeSegments.push({ ...currentPos });
        // Add segments behind the head based on initial direction
        currentPos.x -= initialDirection.x;
        currentPos.z -= initialDirection.z;
    }

    // Create meshes
    let currentEnemyMeshes = [];
    enemySnakeSegments.forEach((pos, index) => {
        const isHead = index === 0;
        const mesh = createSnakeSegmentMesh(pos, isHead, materials, false); // false for isPlayer
        if (mesh) {
            currentEnemyMeshes.push(mesh);
            scene.add(mesh);
        }
    });
    enemyMeshes[id] = currentEnemyMeshes; // Store meshes associated with this ID

    // Create enemy state object
    const newEnemy = {
        id: id,
        snake: enemySnakeSegments,
        direction: { ...initialDirection },
        nextDirection: { ...initialDirection },
        targetFoodIndex: null,
        state: 'seeking', // Start seeking food
        lastMoveTime: clock.getElapsedTime() + Math.random() * CONFIG.ENEMY_SNAKE_SPEED, // Stagger start times
        animationFrame: 0,
        animationTimer: clock.getElapsedTime(),
        speed: CONFIG.ENEMY_SNAKE_SPEED // Constant speed for now
    };

    enemies.list.push(newEnemy);
    updateEnemySnakeTextures(newEnemy, gameState); // Set initial textures
    console.log(`Enemy ${id} initialized.`);
}

export function resetEnemies(gameState) {
    const { scene, enemies } = gameState;
    if (scene && enemies?.list) {
        enemies.list.forEach(enemy => {
            const meshes = enemyMeshes[enemy.id];
            if (meshes) {
                meshes.forEach(mesh => scene.remove(mesh));
            }
        });
    }
    if (enemies) {
        enemies.list = []; // Clear the list of enemy data
    }
    enemyMeshes = {}; // Clear the mesh cache
    console.log("Enemies reset.");
}


// --- Update Logic ---

export function updateEnemies(deltaTime, currentTime, gameState) {
    const { enemies, clock } = gameState;
    if (!enemies?.list || !clock) return;

    enemies.list.forEach(enemy => {
        // Update Animation
        enemy.animationTimer += deltaTime;
        if (enemy.animationTimer > 0.25) { // Slower animation than player?
            enemy.animationFrame = (enemy.animationFrame + 1) % 2;
            enemy.animationTimer = 0;
            updateEnemySnakeTextures(enemy, gameState);
        }

        // Determine next move (AI) - Decouple from movement timing
        updateEnemyAI(enemy, gameState);

        // Execute Movement
        if (currentTime - enemy.lastMoveTime >= enemy.speed) {
            moveEnemy(enemy, gameState); // Pass gameState here
            enemy.lastMoveTime = currentTime; // Reset move timer AFTER moving
        }
    });
}

function updateEnemyAI(enemy, gameState) {
    const headPos = enemy.snake[0];
    const currentDir = enemy.direction;

    // Simple State Machine AI
    if (enemy.state === 'seeking') {
        const { index: targetIndex, position: targetPos } = findClosestFood(headPos, gameState);
        enemy.targetFoodIndex = targetIndex;

        if (targetPos) {
            const dx = targetPos.x - headPos.x;
            const dz = targetPos.z - headPos.z;

            let desiredDir = { x: 0, y: 0, z: 0 };
            // Prefer moving along the axis with greater distance
            if (Math.abs(dx) > Math.abs(dz)) {
                desiredDir.x = Math.sign(dx);
            } else if (Math.abs(dz) > 0) { // Check dz > 0 to handle dx=0, dz=0 case
                desiredDir.z = Math.sign(dz);
            } else {
                 // On top of food? Should be handled by moveEnemy. Idle briefly.
                 enemy.state = 'idle';
                 enemy.nextDirection = currentDir; // Keep going straight for now
                 return;
            }

            // --- Avoid Obstacles and Self/Other Snakes ---
            let potentialNextDir = desiredDir;
            let potentialHeadPos = { x: headPos.x + potentialNextDir.x, y: 0, z: headPos.z + potentialNextDir.z };

            // Check if the desired move is valid
            if (isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                // Try turning Left/Right relative to desired direction
                const possibleTurns = getPossibleTurns(desiredDir);
                let foundValidTurn = false;
                for (const turnDir of possibleTurns) {
                    potentialHeadPos = { x: headPos.x + turnDir.x, y: 0, z: headPos.z + turnDir.z };
                    if (!isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                        potentialNextDir = turnDir;
                        foundValidTurn = true;
                        break;
                    }
                }

                // If no turn is valid, try continuing straight (if possible)
                if (!foundValidTurn) {
                    potentialHeadPos = { x: headPos.x + currentDir.x, y: 0, z: headPos.z + currentDir.z };
                     if (!isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                         potentialNextDir = currentDir;
                     } else {
                         // Truly stuck? Try turning opposite to current direction (if possible)
                          const oppositeDir = { x: -currentDir.x, y: 0, z: -currentDir.z };
                           potentialHeadPos = { x: headPos.x + oppositeDir.x, y: 0, z: headPos.z + oppositeDir.z };
                           if (!isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                               potentialNextDir = oppositeDir;
                           } else {
                               // Last resort: maybe just pick a random valid turn from current direction?
                               const randomTurns = getPossibleTurns(currentDir);
                               for (const turnDir of randomTurns) {
                                    potentialHeadPos = { x: headPos.x + turnDir.x, y: 0, z: headPos.z + turnDir.z };
                                    if (!isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                                        potentialNextDir = turnDir;
                                        break;
                                    }
                                }
                                // If still stuck, maybe just stay idle? potentialNextDir remains unchanged (previous desired)
                                enemy.state = 'idle'; // Give up seeking for a moment
                           }
                     }
                }
            }
             // Prevent 180 turns unless absolutely necessary (handled above)
             if (enemy.snake.length > 1 && potentialNextDir.x === -currentDir.x && potentialNextDir.z === -currentDir.z) {
                 // Don't allow 180 if a better option was potentially missed
                 // Re-evaluate or stick with previous logic's outcome
                 // For simplicity, let previous logic stand for now.
             }

            enemy.nextDirection = potentialNextDir;

        } else {
            // No food found, switch to idle
            enemy.state = 'idle';
            enemy.nextDirection = currentDir; // Keep going straight initially
        }

    } else if (enemy.state === 'idle') {
        // Wander randomly, maybe turn occasionally
         if (Math.random() < 0.15) { // Chance to turn
            const possibleTurns = getPossibleTurns(currentDir);
            const randomTurnIndex = Math.floor(Math.random() * possibleTurns.length);
            let potentialNextDir = possibleTurns[randomTurnIndex];
            let potentialHeadPos = { x: headPos.x + potentialNextDir.x, y: 0, z: headPos.z + potentialNextDir.z };

             // Ensure the random turn is valid
             if (isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                 // Try the other turn direction
                 potentialNextDir = possibleTurns[(randomTurnIndex + 1) % possibleTurns.length];
                  potentialHeadPos = { x: headPos.x + potentialNextDir.x, y: 0, z: headPos.z + potentialNextDir.z };
                  if (isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                       // If both turns fail, try going straight
                       potentialNextDir = currentDir;
                        potentialHeadPos = { x: headPos.x + currentDir.x, y: 0, z: headPos.z + currentDir.z };
                        if (isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                           // Stuck, stay put (effectively keep currentDir)
                            potentialNextDir = currentDir; // No change
                        }
                  }
             }
             enemy.nextDirection = potentialNextDir;

         } else {
             // Default: try to continue straight
             let potentialNextDir = currentDir;
             let potentialHeadPos = { x: headPos.x + currentDir.x, y: 0, z: headPos.z + currentDir.z };
             if (isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                 // If straight is blocked, force a turn decision now
                 const possibleTurns = getPossibleTurns(currentDir);
                 let foundValidTurn = false;
                 for (const turnDir of possibleTurns) {
                    potentialHeadPos = { x: headPos.x + turnDir.x, y: 0, z: headPos.z + turnDir.z };
                    if (!isMoveInvalid(potentialHeadPos, enemy, gameState)) {
                        potentialNextDir = turnDir;
                        foundValidTurn = true;
                        break;
                    }
                 }
                  if (!foundValidTurn) {
                      // Truly stuck, maybe reverse?
                      potentialNextDir = { x: -currentDir.x, y:0, z:-currentDir.z };
                      potentialHeadPos = { x: headPos.x + potentialNextDir.x, y: 0, z: headPos.z + potentialNextDir.z };
                      if (isMoveInvalid(potentialHeadPos, enemy, gameState)){
                           potentialNextDir = currentDir; // Give up
                      }
                  }
             }
             enemy.nextDirection = potentialNextDir;
         }

        // Small chance to start seeking again
        if (Math.random() < 0.05) {
            enemy.state = 'seeking';
        }
    }
    // Add other states like 'avoiding' player if desired
}


// Checks if a potential move position is invalid for an enemy
function isMoveInvalid(pos, enemy, gameState) {
    const halfGrid = CONFIG.GRID_SIZE / 2;

    // 1. Wall collision
    if (pos.x >= halfGrid || pos.x < -halfGrid || pos.z >= halfGrid || pos.z < -halfGrid) {
        return true;
    }

    // 2. Self collision (excluding tail tip)
    for (let i = 0; i < enemy.snake.length - 1; i++) {
        if (enemy.snake[i].x === pos.x && enemy.snake[i].z === pos.z) {
            return true;
        }
    }

    // 3. Obstacle collision
    if (checkObstacleCollision(pos, gameState)) { // Use the imported function
        return true;
    }

    // 4. Other enemy collision (head or body)
    for (const otherEnemy of gameState.enemies.list) {
        if (otherEnemy.id === enemy.id) continue; // Don't check against self
        if (otherEnemy.snake.some(segment => segment.x === pos.x && segment.z === pos.z)) {
            return true;
        }
    }

     // 5. Player collision (optional - AI might ignore player)
     // if (gameState.playerSnake.segments.some(segment => segment.x === pos.x && segment.z === pos.z)) {
     //    return true; // Uncomment to make AI avoid player
     // }

    return false; // Move is valid
}

// Gets possible orthogonal turns (left/right) relative to a direction
function getPossibleTurns(direction) {
     if (direction.x !== 0) { // Moving horizontally
         return [
             { x: 0, y: 0, z: 1 * direction.x }, // Turn relative right
             { x: 0, y: 0, z: -1 * direction.x } // Turn relative left
         ];
     } else if (direction.z !== 0) { // Moving vertically
          return [
              { x: -1 * direction.z, y: 0, z: 0 }, // Turn relative right
              { x: 1 * direction.z, y: 0, z: 0 }  // Turn relative left
          ];
     } else {
         // Not moving, return all 4 directions? Or base on last valid move?
         // For now, assume it has a direction. If not, AI needs fix.
         return [ {x:1, y:0, z:0}, {x:-1, y:0, z:0} ]; // Default fallback
     }
}


function moveEnemy(enemy, gameState) {
    // *** Destructure camera here ***
    const { scene, materials, food, camera } = gameState;
    if (!scene || !materials?.enemy || !food || !camera ) return; // Add camera check

    enemy.direction = enemy.nextDirection; // Commit to the calculated direction
    const head = enemy.snake[0];
    const newHeadPos = {
        x: head.x + enemy.direction.x,
        y: 0,
        z: head.z + enemy.direction.z
    };

    // Double-check for invalid move before executing (AI might have lagged)
    if (isMoveInvalid(newHeadPos, enemy, gameState)) {
         // AI decided on an invalid move, maybe recalculate or idle?
         console.warn(`Enemy ${enemy.id} attempted invalid move to`, newHeadPos);
         enemy.state = 'idle'; // Force idle to re-evaluate next frame
         // Don't move this frame
         return;
     }

    // Check for food at the new head position
    let ateFood = false;
    let eatenFoodIndex = -1;
    for (let i = 0; i < food.positions.length; i++) {
        if (newHeadPos.x === food.positions[i].x && newHeadPos.z === food.positions[i].z) {
            ateFood = true;
            eatenFoodIndex = i;
            break;
        }
    }

    const meshes = enemyMeshes[enemy.id];
    if (!meshes) {
        console.error(`Meshes not found for enemy ${enemy.id}`);
        return; // Cannot proceed without meshes
    }

    let growEnemy = false;
    if (ateFood) {
        growEnemy = true;
        const eatenFoodMesh = food.meshes[eatenFoodIndex];
        const eatenFoodType = food.positions[eatenFoodIndex]?.type;

        if (eatenFoodMesh) {
            // Basic particle effect for enemy eating
            // *** UPDATED CALL ***
            createExplosion(
                scene,
                camera, // Pass camera
                eatenFoodMesh.position,
                CONFIG.PARTICLE_COUNT_EAT / 2,
                0x00aaaa
            );
            scene.remove(eatenFoodMesh);
        }
         // Remove food from global state
        food.meshes.splice(eatenFoodIndex, 1);
        food.positions.splice(eatenFoodIndex, 1);

        // Spawn a replacement food item
        addNewFoodItem(gameState);

         // Enemy ate food, ensure it keeps seeking
         enemy.state = 'seeking';

         // Did enemy eat a power-up? AI doesn't benefit yet, but remove it.
         console.log(`Enemy ${enemy.id} ate ${eatenFoodType}`);

    }

    // Update snake segments
    enemy.snake.unshift(newHeadPos);

    if (!growEnemy) {
        enemy.snake.pop(); // Remove tail segment
        // Reuse tail mesh for new head
        const tailMesh = meshes.pop();
        if (tailMesh) {
            tailMesh.position.set(
                newHeadPos.x * CONFIG.UNIT_SIZE,
                CONFIG.UNIT_SIZE / 2,
                newHeadPos.z * CONFIG.UNIT_SIZE
            );
            meshes.unshift(tailMesh);
        } else {
             console.error(`Enemy ${enemy.id} missing tail mesh!`);
              const newMesh = createSnakeSegmentMesh(newHeadPos, true, materials, false);
              if (newMesh) {
                  scene.add(newMesh);
                  meshes.unshift(newMesh);
              }
        }
    } else {
        // Create new mesh for the head
        const newMesh = createSnakeSegmentMesh(newHeadPos, true, materials, false);
        if (newMesh) {
            scene.add(newMesh);
            meshes.unshift(newMesh);
        }
    }

    // Update materials for the head and segment behind it
    updateEnemyMaterialsAfterMove(enemy, gameState);
}

export function updateEnemyMaterialsAfterMove(enemy, gameState) {
    const { materials } = gameState;
    if (!materials?.enemy) return;
    
    const meshes = enemyMeshes[enemy.id];
    if (!meshes) return;
    
    // Update textures based on animation frame
    updateEnemySnakeTextures(enemy, gameState);
    
    // Color the edible tail segments
    const tailSegments = CONFIG.ENEMY_TAIL_EDIBLE_SEGMENTS;
    if (meshes.length >= tailSegments) {
        // Apply edible tail color to the last N segments
        for (let i = Math.max(1, meshes.length - tailSegments); i < meshes.length; i++) {
            if (meshes[i] && meshes[i].material) {
                meshes[i].material.color.setHex(CONFIG.ENEMY_TAIL_COLOR);
            }
        }
    }
}

// --- Collision Check (External) ---
export function checkEnemyCollision(position, gameState, isPlayerHead = false) {
    const { enemies } = gameState;
    if (!enemies?.list) return { collided: false };
    
    for (let i = 0; i < enemies.list.length; i++) {
        const enemy = enemies.list[i];
        for (let j = 0; j < enemy.snake.length; j++) {
            const segment = enemy.snake[j];
            
            // Check if positions match
            if (segment.x === position.x && segment.z === position.z) {
                // If it's the player's head and this is one of the last N segments of the enemy
                if (isPlayerHead && j >= enemy.snake.length - CONFIG.ENEMY_TAIL_EDIBLE_SEGMENTS) {
                    return { 
                        collided: true, 
                        isEdibleTail: true,
                        enemyId: enemy.id,
                        segmentIndex: j
                    };
                }
                
                // Regular collision
                return { 
                    collided: true,
                    isEdibleTail: false
                };
            }
        }
    }
    
    return { collided: false };
}

// Function to kill an enemy snake
export function killEnemySnake(enemyId, gameState) {
    const { scene, enemies, clock } = gameState;
    if (!scene || !enemies?.list || !clock) return false;
    
    // Find the enemy by ID
    const enemyIndex = enemies.list.findIndex(e => e.id === enemyId);
    if (enemyIndex === -1) return false;
    
    const enemy = enemies.list[enemyIndex];
    const meshes = enemyMeshes[enemyId];
    
    // Create explosion effect at each segment
    if (meshes) {
        meshes.forEach((mesh, index) => {
            // Create explosion effect with the enemy's color
            createExplosion(
                scene, 
                gameState.camera, 
                mesh.position.clone(), 
                CONFIG.PARTICLE_COUNT_KILL / meshes.length, // Distribute particles among segments
                CONFIG.PARTICLE_COLOR_KILL
            );
            
            // Remove mesh from scene
            scene.remove(mesh);
        });
    }
    
    // Remove enemy from the list
    enemies.list.splice(enemyIndex, 1);
    delete enemyMeshes[enemyId];
    
    // Schedule respawn
    const respawnTime = clock.getElapsedTime() + CONFIG.ENEMY_RESPAWN_TIME;
    enemies.respawnQueue.push({ id: enemyId, respawnTime });
    
    console.log(`Enemy ${enemyId} killed. Scheduled to respawn in ${CONFIG.ENEMY_RESPAWN_TIME} seconds.`);
    return true;
}

// Function to check and handle enemy respawns
export function checkEnemyRespawns(gameState) {
    const { enemies, clock } = gameState;
    if (!enemies?.respawnQueue || !clock) return;
    
    const currentTime = clock.getElapsedTime();
    const stillWaiting = [];
    
    for (const item of enemies.respawnQueue) {
        if (currentTime >= item.respawnTime) {
            // Time to respawn this enemy
            initializeEnemy(item.id, gameState);
            console.log(`Enemy ${item.id} respawned.`);
        } else {
            // Not yet time to respawn
            stillWaiting.push(item);
        }
    }
    
    // Update the respawn queue
    enemies.respawnQueue = stillWaiting;
}

function updateEnemySnakeTextures(enemy, gameState) {
    const { materials } = gameState;
    const meshes = enemyMeshes[enemy.id];
     if (!meshes || !materials?.enemy) return;

    meshes.forEach((mesh, index) => {
        if (!mesh) return;
        if (index === 0) {
            mesh.material = (enemy.animationFrame === 0 ? materials.enemy.head1 : materials.enemy.head2);
        } else {
            mesh.material = (enemy.animationFrame === 0 ? materials.enemy.body1 : materials.enemy.body2);
        }
    });
}