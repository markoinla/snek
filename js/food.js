import * as THREE from 'three';
import * as CONFIG from './config.js';
import { FOOD_TYPES, GEOMETRIES, PATHS } from './constants.js';
import { generateUniquePosition } from './utils.js';
import { createExplosion, createNormalFoodEffect, createFrogEffect } from './particleSystem.js';
import { applyPowerUp, addScoreMultiplier, addAlphaPoints } from './playerSnake.js'; // Import specific functions
import * as UI from './ui.js';
import * as Audio from './audioSystem.js'; // Import audio system for sound effects
import { Logger, isLoggingEnabled } from './debugLogger.js';

/**
 * Creates a blocky apple model made of a few cubes
 * @param {THREE.Material} material - The material to use for the apple (not used, we create our own)
 * @returns {THREE.Group} - A group containing the blocky apple model
 */
function createAppleModel(material) {
    // Create a group to hold all apple parts
    const appleGroup = new THREE.Group();
    const unitSize = CONFIG.UNIT_SIZE * 0.4; // Larger blocks for simpler design
    
    // Apple body material - solid red color
    const appleBodyMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xDD2C00, // Bright red color for the apple
        roughness: 0.7,
        metalness: 0.1
    });
    
    // Create the main apple body (center block)
    const mainBody = new THREE.Mesh(GEOMETRIES.cube, appleBodyMaterial);
    mainBody.scale.set(unitSize * 1.8, unitSize * 1.8, unitSize * 1.8);
    // Position the bottom of the apple directly on the ground
    mainBody.position.set(0, unitSize * 0.9, 0); // Half the height to sit on ground
    mainBody.castShadow = true;
    appleGroup.add(mainBody);
    
    // Create a small indentation at the top (darker red block)
    const indentMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x8B0000, // Darker red color for the indentation
        roughness: 0.8,
        metalness: 0.1
    });
    const indent = new THREE.Mesh(GEOMETRIES.cube, indentMaterial);
    indent.scale.set(unitSize * 0.6, unitSize * 0.3, unitSize * 0.6);
    indent.position.set(0, unitSize * 1.9, 0); // Positioned on top of the main body
    indent.castShadow = true;
    appleGroup.add(indent);
    
    // Create the stem (brown block)
    const stemMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x654321, // Dark brown color for the stem
        roughness: 0.9,
        metalness: 0.1
    });
    
    // Stem block
    const stem = new THREE.Mesh(GEOMETRIES.cube, stemMaterial);
    stem.scale.set(unitSize * 0.5, unitSize, unitSize * 0.5);
    stem.position.set(0, unitSize * 2.4, 0); // Positioned directly on top of the main body
    stem.castShadow = true;
    appleGroup.add(stem);
    
    // Create the leaf (green block)
    const leafMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x228B22, // Forest green color for the leaf
        roughness: 0.7,
        metalness: 0.1
    });
    
    // Leaf block
    const leaf = new THREE.Mesh(GEOMETRIES.cube, leafMaterial);
    leaf.scale.set(unitSize, unitSize * 0.4, unitSize * 0.6);
    leaf.position.set(unitSize * 0.8, unitSize * 2.4, 0); // Adjusted to match stem height
    leaf.rotation.z = Math.PI * 0.15; // Slight tilt
    leaf.castShadow = true;
    appleGroup.add(leaf);
    
    // Add subtle rotation animation
    appleGroup.userData.rotationSpeed = (Math.random() * 0.01) + 0.005;
    appleGroup.userData.rotationDirection = Math.random() > 0.5 ? 1 : -1;
    
    return appleGroup;
}

function createFoodMeshInstance(pos, type, materials) {
    const material = materials.food[type];
    if (!material) {
        Logger.error(`Food material missing for type: ${type}`);
        return null;
    }
    
    // Create a group to hold all the parts of our food item
    const group = new THREE.Group();
    
    // Set the position of the entire group
    group.position.set(
        pos.x * CONFIG.UNIT_SIZE,
        0, // We'll position the parts relative to ground level
        pos.z * CONFIG.UNIT_SIZE
    );
    
    // Store food type in userData
    group.userData.foodType = type;
    
    if (type === 'normal') {
        // For normal food, create a blocky apple model instead of a simple cube
        const appleModel = createAppleModel(material);
        group.add(appleModel);
    } else {
        // For powerups, create a blocky frog
        createBlockyFrog(group, material, type);
        
        // Generate random direction vector
        let dirX = Math.random() * 2 - 1;
        let dirZ = Math.random() * 2 - 1;
        
        // Normalize the direction vector for consistent speed
        const length = Math.sqrt(dirX * dirX + dirZ * dirZ);
        if (length > 0) {
            dirX /= length;
            dirZ /= length;
        }
        
        // For snake-like movement, we want to use cardinal directions
        if (CONFIG.FROG_MOVEMENT.MOVEMENT_STYLE === 'crawl') {
            // Choose one of four cardinal directions
            const cardinalDirections = [
                { x: 1, z: 0 },  // Right
                { x: -1, z: 0 }, // Left
                { x: 0, z: 1 },  // Down
                { x: 0, z: -1 }  // Up
            ];
            
            const randomDir = cardinalDirections[Math.floor(Math.random() * cardinalDirections.length)];
            dirX = randomDir.x;
            dirZ = randomDir.z;
        }
        
        // Add movement properties for frogs using config values
        group.userData.movementProperties = {
            // Normalized random movement direction
            directionX: dirX,
            directionZ: dirZ,
            // Random hop frequency based on config
            hopFrequency: CONFIG.FROG_MOVEMENT.HOP_FREQUENCY + 
                         (Math.random() * 2 - 1) * CONFIG.FROG_MOVEMENT.HOP_FREQUENCY_VARIATION,
            // Random movement speed based on config
            speed: CONFIG.FROG_MOVEMENT.BASE_SPEED + 
                  (Math.random() * 2 - 1) * CONFIG.FROG_MOVEMENT.SPEED_VARIATION,
            // Keep track of original grid position
            originalGridPos: { ...pos },
            // Current grid position (for snake-like movement)
            currentGridPos: { ...pos },
            // Movement timer with random starting phase to prevent synchronized animations
            timer: Math.random() * Math.PI * 2,
            // Maximum distance from original position (in grid units)
            maxDistance: CONFIG.FROG_MOVEMENT.MAX_DISTANCE + 
                        (Math.random() * 2 - 1) * CONFIG.FROG_MOVEMENT.DISTANCE_VARIATION,
            // Add phase offsets for secondary movement patterns
            phaseOffset1: Math.random() * Math.PI * 2,
            phaseOffset2: Math.random() * Math.PI * 2,
            // Time between movement steps (in seconds)
            moveInterval: CONFIG.FROG_MOVEMENT.MOVE_INTERVAL * (0.8 + Math.random() * 0.4),
            // Target position (for interpolation)
            targetPosition: null
        };
    }
    
    return group;
}

// Function to create a blocky frog made of multiple cubes
function createBlockyFrog(group, material, type) {
    const unitSize = CONFIG.UNIT_SIZE * 0.5; // Half unit size for frog blocks
    
    // Create the body (main block)
    const body = new THREE.Mesh(GEOMETRIES.cube, material);
    body.scale.set(unitSize * 2, unitSize, unitSize * 2);
    body.position.set(0, unitSize / 2, 0);
    body.castShadow = true;
    group.add(body);
    
    // Create the head - position it at the front of the body
    const head = new THREE.Mesh(GEOMETRIES.cube, material);
    head.scale.set(unitSize * 1.6, unitSize * 0.8, unitSize);
    // Position the head at the front (negative Z is forward in Three.js)
    head.position.set(0, unitSize / 2, -unitSize * 1.5);
    head.castShadow = true;
    group.add(head);
    
    // Create eyes (black cubes)
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    
    const leftEye = new THREE.Mesh(GEOMETRIES.cube, eyeMaterial);
    leftEye.scale.set(unitSize * 0.4, unitSize * 0.4, unitSize * 0.4);
    leftEye.position.set(-unitSize * 0.5, unitSize, -unitSize * 1.8);
    leftEye.castShadow = true;
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(GEOMETRIES.cube, eyeMaterial);
    rightEye.scale.set(unitSize * 0.4, unitSize * 0.4, unitSize * 0.4);
    rightEye.position.set(unitSize * 0.5, unitSize, -unitSize * 1.8);
    rightEye.castShadow = true;
    group.add(rightEye);
    
    // Create legs
    // Front legs positioned toward the head
    const frontLeftLeg = new THREE.Mesh(GEOMETRIES.cube, material);
    frontLeftLeg.scale.set(unitSize * 0.6, unitSize * 0.6, unitSize * 0.8);
    frontLeftLeg.position.set(-unitSize, unitSize * 0.3, -unitSize);
    frontLeftLeg.castShadow = true;
    group.add(frontLeftLeg);
    
    const frontRightLeg = new THREE.Mesh(GEOMETRIES.cube, material);
    frontRightLeg.scale.set(unitSize * 0.6, unitSize * 0.6, unitSize * 0.8);
    frontRightLeg.position.set(unitSize, unitSize * 0.3, -unitSize);
    frontRightLeg.castShadow = true;
    group.add(frontRightLeg);
    
    // Back legs positioned toward the rear
    const backLeftLeg = new THREE.Mesh(GEOMETRIES.cube, material);
    backLeftLeg.scale.set(unitSize * 0.6, unitSize * 0.6, unitSize * 0.8);
    backLeftLeg.position.set(-unitSize, unitSize * 0.3, unitSize);
    backLeftLeg.castShadow = true;
    group.add(backLeftLeg);
    
    const backRightLeg = new THREE.Mesh(GEOMETRIES.cube, material);
    backRightLeg.scale.set(unitSize * 0.6, unitSize * 0.6, unitSize * 0.8);
    backRightLeg.position.set(unitSize, unitSize * 0.3, unitSize);
    backRightLeg.castShadow = true;
    group.add(backRightLeg);
    
    // For ghost frogs, make them semi-transparent
    if (type === 'ghost') {
        group.traverse(child => {
            if (child.isMesh && child.material !== eyeMaterial) {
                child.material = child.material.clone();
                child.material.transparent = true;
                child.material.opacity = 0.7;
            }
        });
    }
    
    // Set initial random rotation so frogs don't all face the same direction
    group.rotation.y = Math.random() * Math.PI * 2;
}

export function spawnInitialFood(gameState) {
    const { scene, materials } = gameState;
    if (!scene || !materials?.food) return;

    // Clear existing food first
    resetFood(gameState);

    Logger.gameplay.info(`Creating ${CONFIG.NUM_INITIAL_FOOD} initial food...`);
    for (let i = 0; i < CONFIG.NUM_INITIAL_FOOD; i++) {
        addNewFoodItem(gameState);
    }
}

export function addNewFoodItem(gameState) {
    const { scene, materials, food } = gameState;
     if (!scene || !materials?.food || !food) return;

    const newPos = generateUniquePosition(gameState, true, true, true, true); // Check all collisions
    if (!newPos) {
        Logger.error("Failed to find a position for new food!");
        return;
    }

    // Use the configured food spawn ratios to determine food type
    const type = selectFoodTypeByRatio();

    const newMesh = createFoodMeshInstance(newPos, type, materials);
    if (newMesh) {
        food.positions.push({ ...newPos, type: type });
        food.meshes.push(newMesh);
        scene.add(newMesh);
    } else {
        Logger.error(`Failed to create mesh for food type ${type}`);
    }
}

// Helper function to select food type based on configured ratios
function selectFoodTypeByRatio() {
    // Generate a random number between 1 and 100
    const randomValue = Math.floor(Math.random() * 100) + 1;
    
    // Calculate cumulative probabilities
    let cumulativeProbability = 0;
    
    // Check each food type's probability range
    for (const foodType of FOOD_TYPES) {
        const ratio = CONFIG.FOOD_SPAWN_RATIOS[foodType.type] || 0;
        cumulativeProbability += ratio;
        
        // If our random value falls within this type's range, return it
        if (randomValue <= cumulativeProbability) {
            return foodType.type;
        }
    }
    
    // Fallback to normal food if something goes wrong
    Logger.warn("Food selection fallback - check that FOOD_SPAWN_RATIOS adds up to 100");
    return 'normal';
}

// Returns the type of food eaten, or null if no food at position
export function checkAndEatFood(position, gameState) {
     // *** Destructure camera here ***
     const { scene, food, materials, camera, playerSnake } = gameState;
     if (!scene || !food?.positions || !food?.meshes || !camera || !playerSnake) return null; // Add camera check

    // Debug logging for Alpha Mode
    if (isLoggingEnabled()) {
        Logger.gameplay.debug("checkAndEatFood called with position:", position, 
           "Alpha Mode:", playerSnake.alphaMode?.active,
           "Food positions count:", food.positions.length);
    }

    let eatenFoodIndex = -1;
    let eatenFoodType = null;

    // Convert snake position to world coordinates
    const snakeWorldX = position.x * CONFIG.UNIT_SIZE;
    const snakeWorldZ = position.z * CONFIG.UNIT_SIZE;

    for (let i = 0; i < food.positions.length; i++) {
        const foodItem = food.meshes[i];
        const foodPos = food.positions[i];
        
        if (foodPos.type === 'normal') {
            // For normal food, use grid-based collision detection
            if (isLoggingEnabled()) {
                Logger.gameplay.trace(`Checking food #${i} at (${foodPos.x}, ${foodPos.z}) against snake at (${position.x}, ${position.z})`);
            }
            
            if (position.x === foodPos.x && position.z === foodPos.z) {
                Logger.gameplay.info("FOOD COLLISION DETECTED!");
                eatenFoodIndex = i;
                eatenFoodType = foodPos.type;
                break;
            }
        } else {
            // For frogs, use world position-based collision detection with a threshold
            // since they can move around their original grid position
            const distanceThreshold = CONFIG.UNIT_SIZE * 0.8; // Collision threshold
            
            // Get the current world position of the frog
            const foodWorldX = foodItem.position.x;
            const foodWorldZ = foodItem.position.z;
            
            // Calculate distance between snake head and frog
            const distance = Math.sqrt(
                Math.pow(snakeWorldX - foodWorldX, 2) + 
                Math.pow(snakeWorldZ - foodWorldZ, 2)
            );
            
            // Check if snake is close enough to eat the frog
            if (distance < distanceThreshold) {
                eatenFoodIndex = i;
                eatenFoodType = foodPos.type;
                break;
            }
        }
    }

    if (eatenFoodIndex !== -1) {
        const eatenFoodMesh = food.meshes[eatenFoodIndex];
        const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === eatenFoodType);

        // Track stats based on food type
        if (eatenFoodType === 'normal') {
            // Increment apples eaten count
            gameState.stats.applesEaten++;
            
            // Play apple eating sound
            Audio.playSoundEffect('eatApple');
            
            // Apply temporary speed boost when eating an apple
            if (gameState.playerSnake) {
                // Set the speed boost end time
                const currentTime = gameState.clock.getElapsedTime();
                gameState.playerSnake.speedBoostUntil = currentTime + CONFIG.FOOD_SPEED_BOOST_DURATION;
                
                // Show a speed boost text effect
                UI.showPowerUpTextEffect("Speed Boost!", 0x00BFFF); // Light blue color for speed boost
                
                // Add alpha points
                addAlphaPoints(CONFIG.ALPHA_POINTS_FOOD, gameState);
                
                // If in Alpha Mode, extend its duration and add score multiplier
                if (gameState.playerSnake.alphaMode && gameState.playerSnake.alphaMode.active) {
                    // Extend Alpha Mode by the configured amount
                    gameState.playerSnake.alphaMode.endTime += CONFIG.ALPHA_MODE_EXTENSION_PER_FOOD;
                    
                    // Show a message about the extension
                    UI.showPowerUpTextEffect(`Alpha Mode +${CONFIG.ALPHA_MODE_EXTENSION_PER_FOOD}s!`, 0xFF5722); // Orange color
                    
                    // Add a score multiplier to the stack
                    addScoreMultiplier(currentTime, gameState);
                    
                    Logger.gameplay.info(`Alpha Mode extended by ${CONFIG.ALPHA_MODE_EXTENSION_PER_FOOD} seconds! New end time:`, 
                                gameState.playerSnake.alphaMode.endTime);
                }
            }
        } else {
            // Increment frogs eaten count
            gameState.stats.frogsEaten++;
            
            // Play frog eating sound
            Audio.playSoundEffect('eatFrog');
            
            // Check if in Alpha Mode to apply multiplier to frog alpha points
            if (gameState.playerSnake.alphaMode.active) {
                // Calculate bonus alpha points with multiplier
                const basePoints = CONFIG.ALPHA_POINTS_FROG;
                const multiplier = CONFIG.ALPHA_POINTS_FROG_MULTIPLIER;
                const bonusPoints = basePoints * multiplier;
                
                // Add the bonus alpha points
                addAlphaPoints(bonusPoints, gameState);
                
                // Show a message about the bonus
                UI.showPowerUpTextEffect(`+${bonusPoints.toFixed(0)} ALPHA PTS!`, CONFIG.ALPHA_MODE_COLOR);
            } else {
                // Add normal alpha points for eating a frog (not in Alpha Mode)
                addAlphaPoints(CONFIG.ALPHA_POINTS_FROG, gameState);
            }
        }

        // Trigger effects (particles, sound?, UI text)
        if (eatenFoodMesh) {
            // Different particle effects based on food type
            if (eatenFoodType === 'normal') {
                // Small green particles for regular food
                createNormalFoodEffect(
                    scene,
                    camera,
                    eatenFoodMesh.position
                );
            } else {
                // Special frog particle effect for power-ups
                createFrogEffect(
                    scene,
                    camera,
                    eatenFoodMesh.position,
                    foodTypeInfo?.colorHint.getHex() || 0x8BC34A
                );
            }
            
            // Properly dispose of food resources
            if (eatenFoodMesh.isGroup) {
                // Dispose resources for model made of multiple meshes (like apple or frog)
                eatenFoodMesh.traverse((child) => {
                    if (child.isMesh) {
                        // Dispose of geometry if it's not shared/reused
                        if (child.geometry && child.geometry !== GEOMETRIES.cube && 
                            child.geometry !== GEOMETRIES.particle) {
                            child.geometry.dispose();
                        }
                        
                        // Dispose of material if it's unique to this food (not shared)
                        if (child.material && !child.userData?.useSharedMaterial) {
                            if (Array.isArray(child.material)) {
                                child.material.forEach(mat => mat.dispose());
                            } else {
                                child.material.dispose();
                            }
                        }
                    }
                });
            } else if (eatenFoodMesh.isMesh) {
                // For single mesh food items
                if (eatenFoodMesh.geometry && eatenFoodMesh.geometry !== GEOMETRIES.cube && 
                    eatenFoodMesh.geometry !== GEOMETRIES.particle) {
                    eatenFoodMesh.geometry.dispose();
                }
                
                if (eatenFoodMesh.material && !eatenFoodMesh.userData?.useSharedMaterial) {
                    if (Array.isArray(eatenFoodMesh.material)) {
                        eatenFoodMesh.material.forEach(mat => mat.dispose());
                    } else {
                        eatenFoodMesh.material.dispose();
                    }
                }
            }
            
            // Remove the food mesh from the scene
            scene.remove(eatenFoodMesh);
            
            // Set to null to help garbage collection
            food.meshes[eatenFoodIndex] = null;
        }
        if (foodTypeInfo?.effectText) {
             UI.showPowerUpTextEffect(foodTypeInfo.effectText, foodTypeInfo.colorHint.getHex());
        }

        // Remove from state arrays
        food.meshes.splice(eatenFoodIndex, 1);
        food.positions.splice(eatenFoodIndex, 1);

        // Spawn a new food item to replace the eaten one
        addNewFoodItem(gameState);

        return { type: eatenFoodType, scoreValue: 1 }; // Return type and base score value
    }

    return null; // No food eaten
}

// Reset all food in the game
export function resetFood(gameState) {
    const { scene, food } = gameState;
    if (!scene || !food) return;

    // Remove all existing food meshes from scene and dispose of resources
    if (food.meshes && food.meshes.length > 0) {
        for (const mesh of food.meshes) {
            if (mesh) {
                // Remove from scene
                if (scene.children.includes(mesh)) {
                    scene.remove(mesh);
                }
                
                // If the mesh is a Group (like our apple or frog models)
                if (mesh.isGroup) {
                    // Recursively dispose of all child meshes in the group
                    mesh.traverse((child) => {
                        if (child.isMesh) {
                            // Dispose of geometry
                            if (child.geometry && child.geometry !== GEOMETRIES.cube && 
                                child.geometry !== GEOMETRIES.particle) {
                                child.geometry.dispose();
                            }
                            
                            // Dispose of material if it's unique to this food item
                            // Don't dispose shared materials from materials.js
                            if (child.material && !child.userData?.useSharedMaterial) {
                                if (Array.isArray(child.material)) {
                                    child.material.forEach(mat => mat.dispose());
                                } else {
                                    child.material.dispose();
                                }
                            }
                        }
                    });
                } else if (mesh.isMesh) {
                    // Handle the case where food is a single mesh
                    if (mesh.geometry && mesh.geometry !== GEOMETRIES.cube && 
                        mesh.geometry !== GEOMETRIES.particle) {
                        mesh.geometry.dispose();
                    }
                    
                    if (mesh.material && !mesh.userData?.useSharedMaterial) {
                        if (Array.isArray(mesh.material)) {
                            mesh.material.forEach(mat => mat.dispose());
                        } else {
                            mesh.material.dispose();
                        }
                    }
                }
            }
        }
    }

    // Reset arrays
    food.meshes = [];
    food.positions = [];
    
    // Log cleanup for debugging
    Logger.system.info("Food system reset, all food items removed and resources disposed");
}

export function updateFoodAnimations(gameState, deltaTime) {
    const { food } = gameState;
    if (!food || !food.meshes) return;
    
    // Update each food item that has movement properties
    for (const foodMesh of food.meshes) {
        if (foodMesh.userData.foodType === 'normal') {
            // Animate the apple rotation
            // Find the apple model (first child of the group)
            const appleModel = foodMesh.children[0];
            if (appleModel && appleModel.userData.rotationSpeed) {
                // Rotate the apple gently
                appleModel.rotation.y += appleModel.userData.rotationSpeed * 
                                        appleModel.userData.rotationDirection * 
                                        deltaTime;
                
                // Add a slight bobbing motion
                const time = gameState.clock.getElapsedTime();
                const bobHeight = Math.sin(time * 0.8) * 0.05;
                appleModel.position.y = CONFIG.UNIT_SIZE * 0.45 + bobHeight;
            }
        } else if (foodMesh.userData.foodType !== 'normal' && foodMesh.userData.movementProperties) {
            const props = foodMesh.userData.movementProperties;
            
            // Update timer for movement timing
            props.timer += deltaTime;
            
            // Get original grid position
            const originalX = props.originalGridPos.x * CONFIG.UNIT_SIZE;
            const originalZ = props.originalGridPos.z * CONFIG.UNIT_SIZE;
            
            // Store previous position for rotation calculation
            const prevX = foodMesh.position.x;
            const prevZ = foodMesh.position.z;
            
            if (CONFIG.FROG_MOVEMENT.MOVEMENT_STYLE === 'crawl') {
                // Snake-like movement with grid-based steps
                
                // Check if it's time for the next movement step
                if (props.timer >= props.moveInterval) {
                    props.timer = 0; // Reset timer
                    
                    // Calculate target position based on current direction
                    const targetX = props.currentGridPos.x + props.directionX;
                    const targetZ = props.currentGridPos.z + props.directionZ;
                    
                    // Check if we're too far from original position
                    const distanceFromOrigin = Math.sqrt(
                        Math.pow(targetX - props.originalGridPos.x, 2) + 
                        Math.pow(targetZ - props.originalGridPos.z, 2)
                    );
                    
                    // If we're too far or about to hit a boundary, change direction
                    if (distanceFromOrigin > props.maxDistance || 
                        Math.random() < CONFIG.FROG_MOVEMENT.DIRECTION_CHANGE_PROBABILITY) {
                        
                        // Choose a new direction that points back toward the original position
                        const dirToOrigin = {
                            x: props.originalGridPos.x - props.currentGridPos.x,
                            z: props.originalGridPos.z - props.currentGridPos.z
                        };
                        
                        // Normalize and add some randomness
                        const length = Math.sqrt(dirToOrigin.x * dirToOrigin.x + dirToOrigin.z * dirToOrigin.z);
                        if (length > 0) {
                            dirToOrigin.x /= length;
                            dirToOrigin.z /= length;
                        }
                        
                        // Choose one of four cardinal directions, with bias toward origin
                        const possibleDirections = [
                            { x: 1, z: 0 },  // Right
                            { x: -1, z: 0 }, // Left
                            { x: 0, z: 1 },  // Down
                            { x: 0, z: -1 }  // Up
                        ];
                        
                        // Find the direction closest to our desired direction
                        let bestDirection = possibleDirections[0];
                        let bestDot = -Infinity;
                        
                        for (const dir of possibleDirections) {
                            // Calculate dot product to find closest direction
                            const dot = dir.x * dirToOrigin.x + dir.z * dirToOrigin.z;
                            if (dot > bestDot) {
                                bestDot = dot;
                                bestDirection = dir;
                            }
                        }
                        
                        // 50% chance to choose the best direction, otherwise random
                        if (Math.random() < 0.5) {
                            props.directionX = bestDirection.x;
                            props.directionZ = bestDirection.z;
                        } else {
                            const randomDir = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
                            props.directionX = randomDir.x;
                            props.directionZ = randomDir.z;
                        }
                    }
                    
                    // Update current grid position
                    props.currentGridPos.x += props.directionX;
                    props.currentGridPos.z += props.directionZ;
                    
                    // Set target world position
                    props.targetPosition = {
                        x: props.currentGridPos.x * CONFIG.UNIT_SIZE,
                        z: props.currentGridPos.z * CONFIG.UNIT_SIZE
                    };
                }
                
                // Smoothly interpolate toward target position
                const t = Math.min(props.timer / props.moveInterval, 1.0);
                const easedT = t * t * (3 - 2 * t); // Smooth step interpolation
                
                if (props.targetPosition) {
                    foodMesh.position.x = THREE.MathUtils.lerp(
                        prevX, 
                        props.targetPosition.x, 
                        easedT * props.speed
                    );
                    
                    foodMesh.position.z = THREE.MathUtils.lerp(
                        prevZ, 
                        props.targetPosition.z, 
                        easedT * props.speed
                    );
                }
                
                // Create a hopping motion during movement
                const hopProgress = easedT;
                const hopHeight = Math.sin(hopProgress * Math.PI) * CONFIG.FROG_MOVEMENT.HOP_HEIGHT * CONFIG.UNIT_SIZE;
                foodMesh.position.y = hopHeight;
                
            } else {
                // Original hopping movement style
                
                // Update timer with scaled delta time for smoother animation
                props.timer += deltaTime * props.hopFrequency;
                
                // Calculate new position based on original position + bounded movement
                const time = props.timer;
                const maxOffset = props.maxDistance * CONFIG.UNIT_SIZE;
                
                // Primary movement pattern
                const xOffset = Math.sin(time) * maxOffset * props.directionX;
                const zOffset = Math.cos(time * 0.7) * maxOffset * props.directionZ;
                
                // Add secondary movement pattern for more complexity
                const secondaryScale = 0.3; // Scale of secondary movement
                const xOffset2 = Math.sin(time * 1.3 + props.phaseOffset1) * maxOffset * secondaryScale * props.directionX;
                const zOffset2 = Math.cos(time * 1.7 + props.phaseOffset2) * maxOffset * secondaryScale * props.directionZ;
                
                // Apply combined movement patterns
                foodMesh.position.x = originalX + xOffset + xOffset2;
                foodMesh.position.z = originalZ + zOffset + zOffset2;
                
                // Create a more natural hopping motion
                // Use absolute sine wave for basic up-down motion
                const baseHop = Math.abs(Math.sin(time * 2));
                // Add a small secondary bounce for more natural movement
                const secondaryBounce = Math.abs(Math.sin(time * 4)) * 0.2;
                // Combine the two hop components
                const hopHeight = (baseHop + secondaryBounce) * CONFIG.FROG_MOVEMENT.HOP_HEIGHT * CONFIG.UNIT_SIZE;
                
                // Apply the hop height
                foodMesh.position.y = hopHeight;
                
                // Every few seconds, change direction randomly based on config probability
                if (Math.random() < CONFIG.FROG_MOVEMENT.DIRECTION_CHANGE_PROBABILITY * deltaTime * 60) {
                    props.directionX = Math.random() * 2 - 1;
                    props.directionZ = Math.random() * 2 - 1;
                    
                    // Normalize the direction vector to ensure consistent speed
                    const length = Math.sqrt(props.directionX * props.directionX + props.directionZ * props.directionZ);
                    if (length > 0) {
                        props.directionX /= length;
                        props.directionZ /= length;
                    }
                }
            }
            
            // Calculate movement delta for this frame
            const deltaX = foodMesh.position.x - prevX;
            const deltaZ = foodMesh.position.z - prevZ;
            
            // Only rotate if there's significant movement
            if (Math.abs(deltaX) > 0.01 || Math.abs(deltaZ) > 0.01) {
                // Calculate angle based on movement direction
                // Add PI to flip the model 180 degrees since the frog model's front is negative Z
                const angle = Math.atan2(deltaX, deltaZ) + Math.PI;
                
                // Apply rotation to face movement direction with smooth interpolation
                const rotationSpeed = 10.0 * deltaTime; // Increased for smoother turning
                const targetY = angle;
                
                // Calculate the shortest angle difference
                let angleDiff = targetY - foodMesh.rotation.y;
                while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
                while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
                
                // Apply smooth rotation
                foodMesh.rotation.y += angleDiff * rotationSpeed;
            }
        }
    }
}

export function findClosestFood(position, gameState) {
    const { food } = gameState;
    if (!food || food.positions.length === 0) return { index: -1, position: null };

    let closestIndex = -1;
    let minDistanceSq = Infinity;

    food.positions.forEach((foodPos, index) => {
        const dx = foodPos.x - position.x;
        const dz = foodPos.z - position.z;
        const distSq = dx * dx + dz * dz;
        if (distSq < minDistanceSq) {
            minDistanceSq = distSq;
            closestIndex = index;
        }
    });

    return {
        index: closestIndex,
        position: closestIndex !== -1 ? food.positions[closestIndex] : null
    };
}