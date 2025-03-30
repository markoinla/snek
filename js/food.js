import * as THREE from 'three';
import * as CONFIG from './config.js';
import { FOOD_TYPES, GEOMETRIES } from './constants.js';
import { generateUniquePosition } from './utils.js';
import { createExplosion, createNormalFoodEffect } from './particleSystem.js';
import { applyPowerUp } from './playerSnake.js'; // Import power-up logic
import { showPowerUpTextEffect } from './ui.js';

function createFoodMeshInstance(pos, type, materials) {
    const material = materials.food[type];
    if (!material) {
        console.error(`Food material missing for type: ${type}`);
        return null;
    }
    const mesh = new THREE.Mesh(GEOMETRIES.cube, material); // Use shared cube geometry
    mesh.scale.setScalar(CONFIG.UNIT_SIZE * 0.9); // Slightly smaller than snake blocks
    mesh.position.set(
        pos.x * CONFIG.UNIT_SIZE,
        CONFIG.UNIT_SIZE / 2, // Position center at half unit size above ground
        pos.z * CONFIG.UNIT_SIZE
    );
    mesh.castShadow = true;
    mesh.userData.foodType = type; // Store type info
    return mesh;
}

export function spawnInitialFood(gameState) {
    const { scene, materials } = gameState;
    if (!scene || !materials?.food) return;

    // Clear existing food first
    resetFood(gameState);

    console.log(`Creating ${CONFIG.NUM_INITIAL_FOOD} initial food...`);
    for (let i = 0; i < CONFIG.NUM_INITIAL_FOOD; i++) {
        addNewFoodItem(gameState);
    }
}

export function addNewFoodItem(gameState) {
    const { scene, materials, food } = gameState;
     if (!scene || !materials?.food || !food) return;

    const newPos = generateUniquePosition(gameState, true, true, true, true); // Check all collisions
    if (!newPos) {
        console.error("Failed to find a position for new food!");
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
        console.error(`Failed to create mesh for food type ${type}`);
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
    console.warn("Food selection fallback - check that FOOD_SPAWN_RATIOS adds up to 100");
    return 'normal';
}

// Returns the type of food eaten, or null if no food at position
export function checkAndEatFood(position, gameState) {
     // *** Destructure camera here ***
     const { scene, food, materials, camera } = gameState;
     if (!scene || !food?.positions || !food?.meshes || !camera) return null; // Add camera check

    let eatenFoodIndex = -1;
    let eatenFoodType = null;

    for (let i = 0; i < food.positions.length; i++) {
        if (position.x === food.positions[i].x && position.z === food.positions[i].z) {
            eatenFoodIndex = i;
            eatenFoodType = food.positions[i].type;
            break;
        }
    }

    if (eatenFoodIndex !== -1) {
        const eatenFoodMesh = food.meshes[eatenFoodIndex];
        const foodTypeInfo = FOOD_TYPES.find(ft => ft.type === eatenFoodType);

        // Trigger effects (particles, sound?, UI text)
        if (eatenFoodMesh) {
            // Different particle effects based on food type
            if (eatenFoodType === 'normal') {
                // Small green particles for regular food
                console.log("Creating normal food particle effect");
                createNormalFoodEffect(
                    scene,
                    camera,
                    eatenFoodMesh.position
                );
            } else {
                // Colorful explosion for power-ups
                console.log("Creating power-up explosion effect for:", eatenFoodType);
                createExplosion(
                    scene,
                    camera,
                    eatenFoodMesh.position,
                    CONFIG.PARTICLE_COUNT_EAT,
                    foodTypeInfo?.colorHint.getHex() || 0xffffff
                );
            }
            scene.remove(eatenFoodMesh); // Remove mesh from scene
        }
        if (foodTypeInfo?.effectText) {
             showPowerUpTextEffect(foodTypeInfo.effectText, foodTypeInfo.colorHint.getHex());
        }

        // Remove from state arrays
        food.meshes.splice(eatenFoodIndex, 1);
        food.positions.splice(eatenFoodIndex, 1);

        // Spawn a new food item to replace the eaten one
        addNewFoodItem(gameState);

        // Apply power-up effect if applicable (handled by playerSnake now)
        // applyPowerUp(foodTypeInfo.type, gameState); // This line is moved to playerSnake update

        return { type: eatenFoodType, scoreValue: 1 }; // Return type and base score value
    }

    return null; // No food eaten
}

export function resetFood(gameState) {
    const { scene, food } = gameState;
    if (scene && food?.meshes) {
        food.meshes.forEach(mesh => scene.remove(mesh));
    }
    if (food) {
         food.meshes = [];
         food.positions = [];
    }
     console.log("Food reset.");
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