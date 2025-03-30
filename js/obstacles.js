import * as THREE from 'three';
import * as CONFIG from './config.js';
import { OBSTACLE_TYPES, GEOMETRIES } from './constants.js';
import { generateUniquePosition } from './utils.js';

function createObstacleMeshInstance(pos, type, materials, obstacleGroup) {
    const trunkMat = materials.obstacle?.tree_trunk;
    const leavesMat = materials.obstacle?.tree_leaves;
    const bushMat = materials.obstacle?.bush;

    if (!trunkMat || !leavesMat || !bushMat) {
        console.error("Obstacle materials missing!");
        return null;
    }

    const group = new THREE.Group();
    // Position group center at the base grid cell
    group.position.set(
        pos.x * CONFIG.UNIT_SIZE,
        0, // Base at Y=0
        pos.z * CONFIG.UNIT_SIZE
    );

    let collisionCells = [];
    const blockOffset = CONFIG.UNIT_SIZE / 2; // Offset blocks to sit on ground

    if (type === 'tree') {
        const trunkHeightUnits = Math.floor(3 + Math.random() * 2);
        const trunkHeightWorld = trunkHeightUnits * CONFIG.UNIT_SIZE;

        // Trunk
        for (let y = 0; y < trunkHeightUnits; y++) {
            const trunkBlock = new THREE.Mesh(GEOMETRIES.cube, trunkMat);
            trunkBlock.scale.setScalar(CONFIG.UNIT_SIZE);
            trunkBlock.position.y = y * CONFIG.UNIT_SIZE + blockOffset; // Stack upwards
            trunkBlock.castShadow = true;
            trunkBlock.receiveShadow = true; // Trunk can receive shadow from leaves
            group.add(trunkBlock);
        }
        collisionCells.push({ x: pos.x, z: pos.z }); // Tree trunk occupies the base cell

        // Canopy
        const canopyRadius = (1.5 + Math.random()) * CONFIG.UNIT_SIZE; // Canopy radius in world units
        const canopyBaseHeight = trunkHeightWorld; // Leaves start above trunk
        const leafCount = 25 + Math.random() * 15;

        for (let i = 0; i < leafCount; i++) {
            const leafBlock = new THREE.Mesh(GEOMETRIES.cube, leavesMat);
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * canopyRadius;
            const yOff = Math.random() * canopyRadius * 0.8; // Vertical spread

            leafBlock.scale.setScalar((0.8 + Math.random() * 0.4) * CONFIG.UNIT_SIZE);
            leafBlock.position.set(
                Math.cos(angle) * radius,
                canopyBaseHeight + yOff + blockOffset, // Position relative to group base
                Math.sin(angle) * radius
            );
            leafBlock.rotation.y = Math.random() * Math.PI;
            leafBlock.castShadow = true;
            leafBlock.receiveShadow = false; // Leaves less likely to receive shadows
            group.add(leafBlock);

            // Add collision cells for canopy? Optional, makes game harder.
            // Trees currently only block the base trunk cell.
        }

    } else if (type === 'bush') {
        collisionCells.push({ x: pos.x, z: pos.z }); // Bush occupies the base cell
        const bushBlockCount = 8 + Math.floor(Math.random() * 8);
        for (let i = 0; i < bushBlockCount; i++) {
            const bushBlock = new THREE.Mesh(GEOMETRIES.cube, bushMat);
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 1.2 * CONFIG.UNIT_SIZE; // Spread within ~1 unit radius
            const yOff = Math.random() * 0.8 * CONFIG.UNIT_SIZE; // Low height

            bushBlock.scale.setScalar((0.6 + Math.random() * 0.4) * CONFIG.UNIT_SIZE);
            bushBlock.position.set(
                Math.cos(angle) * radius,
                yOff + blockOffset, // Position relative to group base
                Math.sin(angle) * radius
            );
            bushBlock.rotation.y = Math.random() * Math.PI;
            bushBlock.castShadow = true;
             bushBlock.receiveShadow = true; // Bushes can receive shadows
            group.add(bushBlock);
        }
    } else {
        return null; // Unknown type
    }

    obstacleGroup.add(group); // Add the whole group to the main obstacle group
    return { meshGroup: group, cells: collisionCells };
}

export function spawnInitialObstacles(gameState) {
    const { scene, materials, obstacles } = gameState;
    if (!scene || !materials?.obstacle || !obstacles) return;

    // Clear existing first
    resetObstacles(gameState);

    // Create the main group container if it doesn't exist
    if (!obstacles.group) {
        obstacles.group = new THREE.Group();
        scene.add(obstacles.group);
    }

    console.log(`Creating ${CONFIG.NUM_OBSTACLES} obstacles...`);
    for (let i = 0; i < CONFIG.NUM_OBSTACLES; i++) {
        addNewObstacle(gameState);
    }
}

export function addNewObstacle(gameState) {
    const { materials, obstacles } = gameState;
    if (!materials?.obstacle || !obstacles?.group) return;

    // Generate position, avoiding player start area and other obstacles closely
    const newPos = generateUniquePosition(gameState, false, true, false, false, CONFIG.START_SAFE_ZONE);
    if (!newPos) {
        console.warn("Could not find space for new obstacle!");
        return;
    }

    const randomTypeIndex = Math.floor(Math.random() * OBSTACLE_TYPES.length);
    const type = OBSTACLE_TYPES[randomTypeIndex].type;

    const obstacleData = createObstacleMeshInstance(newPos, type, materials, obstacles.group);

    if (obstacleData && obstacleData.meshGroup && obstacleData.cells) {
        obstacles.list.push({
            ...newPos, // Grid position
            type: type,
            mesh: obstacleData.meshGroup,
            occupiedCells: obstacleData.cells // Grid cells it blocks
        });
    } else {
        console.error(`Failed to create obstacle of type ${type}`);
    }
}

export function checkObstacleCollision(position, gameState) {
     const { obstacles } = gameState;
     if (!obstacles?.list) return false;

     for (const obs of obstacles.list) {
         if (obs.occupiedCells.some(cell => cell.x === position.x && cell.z === position.z)) {
             return true;
         }
     }
     return false;
}


export function resetObstacles(gameState) {
    const { scene, obstacles } = gameState;
    if (obstacles?.group) {
        // Remove all children from the group and the group itself
        while (obstacles.group.children.length > 0) {
            obstacles.group.remove(obstacles.group.children[0]);
        }
        if (scene) {
            scene.remove(obstacles.group); // Remove group from scene if it exists
        }
    }
     if (obstacles) {
        obstacles.list = []; // Clear the list of obstacle data
        obstacles.group = null; // Reset the group reference
     }
    console.log("Obstacles reset.");
}