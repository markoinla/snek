import * as THREE from 'three';
import CONFIG from './config';
import { FOOD_TYPES, GEOMETRIES, PATHS } from './constants';
import { generateUniquePosition } from './utils.js';
import { createExplosion, createNormalFoodEffect, createFrogEffect } from './particleSystem.js';
import { applyPowerUp, addScoreMultiplier, addAlphaPoints } from './playerSnake.js'; // Import specific functions
import { checkAndEatFoodCore } from './core/food.ts';
import * as UI from './ui.js';
import * as Audio from './audioSystem.js'; // Import audio system for sound effects
import { Logger, isLoggingEnabled } from './debugLogger.js';
import { getAdjustedSetting } from './gameState'; // Import for mode-adjusted settings

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
        Logger.system.error(`Food material missing for type: ${type}`);
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
            // Start position for current hop (world coords)
            startPosition: {
                x: pos.x * CONFIG.UNIT_SIZE,
                z: pos.z * CONFIG.UNIT_SIZE
            },
            // Target position (for interpolation)
            targetPosition: {
                x: pos.x * CONFIG.UNIT_SIZE,
                z: pos.z * CONFIG.UNIT_SIZE
            }
        };
    }
    
    return group;
}

function clearFoodMeshes(gameState) {
    const { scene, food } = gameState;
    if (!scene || !food?.meshes) return;

    for (const mesh of food.meshes) {
        if (!mesh) continue;
        if (mesh.isGroup) {
            mesh.traverse((child) => {
                if (child.isMesh) {
                    if (child.geometry && child.geometry !== GEOMETRIES.cube && child.geometry !== GEOMETRIES.particle) {
                        child.geometry.dispose();
                    }
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
            if (mesh.geometry && mesh.geometry !== GEOMETRIES.cube && mesh.geometry !== GEOMETRIES.particle) {
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
        scene.remove(mesh);
    }
    food.meshes = [];
}

export function syncFoodMeshes(gameState) {
    const { scene, materials, food } = gameState;
    if (!scene || !materials?.food || !food?.positions) return;

    const needsRebuild =
        !food.meshes ||
        food.meshes.length !== food.positions.length ||
        food.meshes.some(m => !m) ||
        food.meshes.some((mesh, index) => mesh?.userData?.foodType !== food.positions[index]?.type);

    if (needsRebuild) {
        clearFoodMeshes(gameState);
        food.positions.forEach(pos => {
            const mesh = createFoodMeshInstance(pos, pos.type, materials);
            if (mesh) {
                food.meshes.push(mesh);
                scene.add(mesh);
            }
        });
    }

    // Update positions for existing meshes (only normal food; frogs are positioned by updateFoodAnimations)
    for (let i = 0; i < food.positions.length; i++) {
        const pos = food.positions[i];
        const mesh = food.meshes[i];
        if (!mesh) continue;
        if (pos.type !== 'normal' && mesh.userData.movementProperties) continue;
        mesh.position.set(
            pos.x * CONFIG.UNIT_SIZE,
            0,
            pos.z * CONFIG.UNIT_SIZE
        );
    }
}

// Function to create a blocky frog made of multiple cubes
function createBlockyFrog(group, material, type) {
    const unitSize = CONFIG.UNIT_SIZE * 0.22; // Compact frog

    const cloneMaterialWithTint = (source, scalar) => {
        const mat = source.clone();
        if (mat.color) {
            mat.color = mat.color.clone().multiplyScalar(scalar);
        }
        return mat;
    };

    const darkMat = cloneMaterialWithTint(material, 0.65);
    const spotMat = cloneMaterialWithTint(material, 0.5);
    const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const eyeBlackMat = new THREE.MeshStandardMaterial({ color: 0x111111 });

    // --- Body: wide, flat, toad-like ---
    const body = new THREE.Mesh(GEOMETRIES.cube, material);
    body.scale.set(unitSize * 2.6, unitSize * 0.9, unitSize * 2.2);
    body.position.set(0, unitSize * 0.45, 0);
    body.castShadow = true;
    group.add(body);

    // Top ridge for slight roundness
    const ridge = new THREE.Mesh(GEOMETRIES.cube, material);
    ridge.scale.set(unitSize * 1.8, unitSize * 0.35, unitSize * 1.6);
    ridge.position.set(0, unitSize * 1.05, 0);
    ridge.castShadow = true;
    group.add(ridge);

    // --- Head: wide, flat, at front ---
    const head = new THREE.Mesh(GEOMETRIES.cube, material);
    head.scale.set(unitSize * 2.2, unitSize * 0.7, unitSize * 1.2);
    head.position.set(0, unitSize * 0.4, -unitSize * 1.6);
    head.castShadow = true;
    group.add(head);

    // --- Eyes: big, bulging, protruding upward ---
    const leftEye = new THREE.Mesh(GEOMETRIES.cube, eyeWhiteMat);
    leftEye.scale.set(unitSize * 0.65, unitSize * 0.7, unitSize * 0.65);
    leftEye.position.set(-unitSize * 0.7, unitSize * 1.1, -unitSize * 1.8);
    leftEye.castShadow = true;
    group.add(leftEye);

    const rightEye = new THREE.Mesh(GEOMETRIES.cube, eyeWhiteMat);
    rightEye.scale.set(unitSize * 0.65, unitSize * 0.7, unitSize * 0.65);
    rightEye.position.set(unitSize * 0.7, unitSize * 1.1, -unitSize * 1.8);
    rightEye.castShadow = true;
    group.add(rightEye);

    const leftPupil = new THREE.Mesh(GEOMETRIES.cube, eyeBlackMat);
    leftPupil.scale.set(unitSize * 0.3, unitSize * 0.35, unitSize * 0.15);
    leftPupil.position.set(-unitSize * 0.7, unitSize * 1.15, -unitSize * 2.12);
    group.add(leftPupil);

    const rightPupil = new THREE.Mesh(GEOMETRIES.cube, eyeBlackMat);
    rightPupil.scale.set(unitSize * 0.3, unitSize * 0.35, unitSize * 0.15);
    rightPupil.position.set(unitSize * 0.7, unitSize * 1.15, -unitSize * 2.12);
    group.add(rightPupil);

    // --- Spots: darker cubes on the back for skin texture ---
    const spotPositions = [
        { x: -unitSize * 0.5, z: unitSize * 0.3 },
        { x: unitSize * 0.6, z: -unitSize * 0.2 },
        { x: 0, z: unitSize * 0.6 },
        { x: -unitSize * 0.3, z: -unitSize * 0.5 },
    ];
    for (const sp of spotPositions) {
        const spot = new THREE.Mesh(GEOMETRIES.cube, spotMat);
        spot.scale.set(unitSize * 0.45, unitSize * 0.15, unitSize * 0.45);
        spot.position.set(sp.x, unitSize * 1.0, sp.z);
        group.add(spot);
    }

    // --- Front legs: stubby ---
    const frontLeftLeg = new THREE.Mesh(GEOMETRIES.cube, material);
    frontLeftLeg.scale.set(unitSize * 0.45, unitSize * 0.45, unitSize * 0.6);
    frontLeftLeg.position.set(-unitSize * 1.3, unitSize * 0.22, -unitSize * 1.0);
    frontLeftLeg.castShadow = true;
    group.add(frontLeftLeg);

    const frontRightLeg = new THREE.Mesh(GEOMETRIES.cube, material);
    frontRightLeg.scale.set(unitSize * 0.45, unitSize * 0.45, unitSize * 0.6);
    frontRightLeg.position.set(unitSize * 1.3, unitSize * 0.22, -unitSize * 1.0);
    frontRightLeg.castShadow = true;
    group.add(frontRightLeg);

    // Front feet
    const frontLeftFoot = new THREE.Mesh(GEOMETRIES.cube, darkMat);
    frontLeftFoot.scale.set(unitSize * 0.55, unitSize * 0.15, unitSize * 0.5);
    frontLeftFoot.position.set(-unitSize * 1.35, unitSize * 0.05, -unitSize * 1.3);
    group.add(frontLeftFoot);

    const frontRightFoot = new THREE.Mesh(GEOMETRIES.cube, darkMat);
    frontRightFoot.scale.set(unitSize * 0.55, unitSize * 0.15, unitSize * 0.5);
    frontRightFoot.position.set(unitSize * 1.35, unitSize * 0.05, -unitSize * 1.3);
    group.add(frontRightFoot);

    // --- Back legs: bigger, folded ---
    const backLeftThigh = new THREE.Mesh(GEOMETRIES.cube, material);
    backLeftThigh.scale.set(unitSize * 0.7, unitSize * 0.6, unitSize * 1.0);
    backLeftThigh.position.set(-unitSize * 1.3, unitSize * 0.35, unitSize * 0.8);
    backLeftThigh.castShadow = true;
    group.add(backLeftThigh);

    const backRightThigh = new THREE.Mesh(GEOMETRIES.cube, material);
    backRightThigh.scale.set(unitSize * 0.7, unitSize * 0.6, unitSize * 1.0);
    backRightThigh.position.set(unitSize * 1.3, unitSize * 0.35, unitSize * 0.8);
    backRightThigh.castShadow = true;
    group.add(backRightThigh);

    // Back shins (angled outward)
    const backLeftShin = new THREE.Mesh(GEOMETRIES.cube, material);
    backLeftShin.scale.set(unitSize * 0.5, unitSize * 0.5, unitSize * 0.8);
    backLeftShin.position.set(-unitSize * 1.5, unitSize * 0.25, unitSize * 1.5);
    group.add(backLeftShin);

    const backRightShin = new THREE.Mesh(GEOMETRIES.cube, material);
    backRightShin.scale.set(unitSize * 0.5, unitSize * 0.5, unitSize * 0.8);
    backRightShin.position.set(unitSize * 1.5, unitSize * 0.25, unitSize * 1.5);
    group.add(backRightShin);

    // Back feet (webbed-looking, wider)
    const backLeftFoot = new THREE.Mesh(GEOMETRIES.cube, darkMat);
    backLeftFoot.scale.set(unitSize * 0.9, unitSize * 0.15, unitSize * 0.7);
    backLeftFoot.position.set(-unitSize * 1.5, unitSize * 0.05, unitSize * 1.9);
    group.add(backLeftFoot);

    const backRightFoot = new THREE.Mesh(GEOMETRIES.cube, darkMat);
    backRightFoot.scale.set(unitSize * 0.9, unitSize * 0.15, unitSize * 0.7);
    backRightFoot.position.set(unitSize * 1.5, unitSize * 0.05, unitSize * 1.9);
    group.add(backRightFoot);

    // For ghost frogs, make them semi-transparent
    if (type === 'ghost') {
        group.traverse(child => {
            if (child.isMesh && child.material !== eyeBlackMat) {
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
    // Get the adjusted food count based on game mode (50% more in casual mode)
    const foodCount = getAdjustedSetting('NUM_INITIAL_FOOD') || CONFIG.NUM_INITIAL_FOOD;
    
    // Clear any existing food
    resetFood(gameState);
    
    // Spawn new food
    for (let i = 0; i < foodCount; i++) {
        addNewFoodItem(gameState);
    }
}

export function addNewFoodItem(gameState) {
    const { scene, materials, food } = gameState;
     if (!scene || !materials?.food || !food) return;

    const newPos = generateUniquePosition(gameState, true, true, true, true); // Check all collisions
    if (!newPos) {
        Logger.system.error("Failed to find a position for new food!");
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
        Logger.system.error(`Failed to create mesh for food type ${type}`);
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

    const coreResult = checkAndEatFoodCore({
        food: { positions: food.positions },
        player: { alphaMode: { active: playerSnake.alphaMode?.active || false } }
    }, { x: position.x, z: position.z });
    if (coreResult) {
        eatenFoodIndex = coreResult.index;
        eatenFoodType = coreResult.type;
    } else {
        // For frogs, use world position-based collision detection with a threshold
        // since they can move around their original grid position
        for (let i = 0; i < food.positions.length; i++) {
            const foodItem = food.meshes[i];
            const foodPos = food.positions[i];
            if (foodPos.type === 'normal') continue;
            
            const distanceThreshold = CONFIG.UNIT_SIZE * 0.8; // Collision threshold
            const foodWorldX = foodItem.position.x;
            const foodWorldZ = foodItem.position.z;
            const distance = Math.sqrt(
                Math.pow(snakeWorldX - foodWorldX, 2) + 
                Math.pow(snakeWorldZ - foodWorldZ, 2)
            );
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
                const currentTime = gameState.clock.getElapsedTime();
                gameState.playerSnake.speedBoostUntil = currentTime + coreResult.effects.speedBoostDuration;
                
                // Show a speed boost text effect
                UI.showPowerUpTextEffect("Speed Boost!", 0x00BFFF); // Light blue color for speed boost
                
                // Add alpha points
                addAlphaPoints(coreResult.effects.alphaPoints, gameState);
                
                // If in Alpha Mode, extend its duration and add score multiplier
                if (gameState.playerSnake.alphaMode && gameState.playerSnake.alphaMode.active) {
                    // Extend Alpha Mode by the configured amount
                    gameState.playerSnake.alphaMode.endTime += coreResult.effects.alphaModeExtension;
                    
                    // Show a message about the extension
                    UI.showPowerUpTextEffect(`Alpha Mode +${coreResult.effects.alphaModeExtension}s!`, 0xFF5722); // Orange color
                    
                    // Add a score multiplier to the stack
                    if (coreResult.effects.addScoreMultiplier) {
                        addScoreMultiplier(currentTime, gameState);
                    }
                    
                    Logger.gameplay.info(`Alpha Mode extended by ${CONFIG.ALPHA_MODE_EXTENSION_PER_FOOD} seconds! New end time:`, 
                                gameState.playerSnake.alphaMode.endTime);
                }
            }
        } else {
            // Increment frogs eaten count
            gameState.stats.frogsEaten++;
            
            // Play frog eating sound
            Audio.playSoundEffect('eatFrog');
            
            // Add alpha points (core handles alpha-mode multiplier)
            addAlphaPoints(coreResult.effects.alphaPoints, gameState);
            if (gameState.playerSnake.alphaMode.active) {
                UI.showPowerUpTextEffect(`+${coreResult.effects.alphaPoints.toFixed(0)} ALPHA PTS!`, CONFIG.ALPHA_MODE_COLOR);
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

        // Spawn is handled by core when core simulation is enabled
        if (!gameState.flags.useCoreSimulation) {
            addNewFoodItem(gameState);
        }

        return { type: eatenFoodType, scoreValue: coreResult.scoreValue, grow: coreResult.grow };
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

    // Reset arrays (preserve references for core sync)
    if (food.meshes) {
        food.meshes.length = 0;
    } else {
        food.meshes = [];
    }
    if (food.positions) {
        food.positions.length = 0;
    } else {
        food.positions = [];
    }
    
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
            if (gameState.flags.useCoreSimulation) {
                // Keep power-ups static in X/Z while core simulation is authoritative,
                // but still allow hopping for visual feedback.
                const props = foodMesh.userData.movementProperties;
                const time = gameState.simulation?.time ?? gameState.clock.getElapsedTime();
                const baseHop = Math.abs(
                    Math.sin((time + props.phaseOffset1) * props.hopFrequency * 2)
                );
                const secondaryBounce = Math.abs(
                    Math.sin((time + props.phaseOffset2) * props.hopFrequency * 4)
                ) * 0.2;
                const hopHeight =
                    (baseHop + secondaryBounce) *
                    CONFIG.FROG_MOVEMENT.HOP_HEIGHT *
                    CONFIG.UNIT_SIZE;
                foodMesh.position.y = hopHeight;
                continue;
            }
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

                    // Store current position as the start of the new hop
                    props.startPosition = {
                        x: foodMesh.position.x,
                        z: foodMesh.position.z
                    };

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

                // Calculate progress through current hop (0 to 1)
                const t = Math.min(props.timer / props.moveInterval, 1.0);
                const easedT = t * t * (3 - 2 * t); // Smooth step for X/Z

                if (props.targetPosition && props.startPosition) {
                    // Interpolate from stored start to target (not from current position)
                    foodMesh.position.x = THREE.MathUtils.lerp(
                        props.startPosition.x,
                        props.targetPosition.x,
                        easedT
                    );

                    foodMesh.position.z = THREE.MathUtils.lerp(
                        props.startPosition.z,
                        props.targetPosition.z,
                        easedT
                    );
                }

                // Hop arc: sin(0 to PI) gives a smooth 0 -> peak -> 0 parabolic arc
                const hopHeight = Math.sin(t * Math.PI) * CONFIG.FROG_MOVEMENT.HOP_HEIGHT * CONFIG.UNIT_SIZE;
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
