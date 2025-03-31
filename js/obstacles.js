import * as THREE from 'three';
import * as CONFIG from './config.js';
import { OBSTACLE_TYPES, GEOMETRIES } from './constants.js';
import { generateUniquePosition } from './utils.js';

function createObstacleMeshInstance(pos, type, materials, obstacleGroup) {
    const trunkMat = materials.obstacle?.tree_trunk;
    const leavesMat = materials.obstacle?.tree_leaves;
    const bushMat = materials.obstacle?.bush;
    const flowerBushMat = materials.obstacle?.flower_bush;
    const pinkFlowerMat = materials.obstacle?.pink_flower;
    const whiteDaisyMat = materials.obstacle?.white_daisy;
    const whiteTulipMat = materials.obstacle?.white_tulip;
    const yellowFlowerMat = materials.obstacle?.yellow_flower;

    if (!trunkMat || !leavesMat || !bushMat || !flowerBushMat || 
        !pinkFlowerMat || !whiteDaisyMat || !whiteTulipMat || !yellowFlowerMat) {
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

        // Revert back to using blocks for the tree trunk as requested
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
        const leafCount = 35 + Math.random() * 20; // Increased leaf count for fuller trees

        for (let i = 0; i < leafCount; i++) {
            // Create a leaf plane that always faces the camera instead of a cube
            const leafPlane = new THREE.PlaneGeometry(CONFIG.UNIT_SIZE * 1.2, CONFIG.UNIT_SIZE * 1.2);
            const leafMesh = new THREE.Mesh(leafPlane, leavesMat);
            
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * canopyRadius;
            const yOff = Math.random() * canopyRadius * 0.8; // Vertical spread

            // Randomize the leaf size a bit
            const leafScale = (0.8 + Math.random() * 0.6) * CONFIG.UNIT_SIZE;
            leafMesh.scale.set(leafScale, leafScale, leafScale);
            
            leafMesh.position.set(
                Math.cos(angle) * radius,
                canopyBaseHeight + yOff + blockOffset, // Position relative to group base
                Math.sin(angle) * radius
            );
            
            // Randomly rotate the leaf for variety
            leafMesh.rotation.x = Math.random() * Math.PI / 4;
            leafMesh.rotation.y = Math.random() * Math.PI * 2;
            leafMesh.rotation.z = Math.random() * Math.PI / 4;
            
            leafMesh.castShadow = true;
            leafMesh.receiveShadow = false; // Leaves less likely to receive shadows
            
            // Add the leaf to the group
            group.add(leafMesh);
        }

    } else if (type === 'bush') {
        collisionCells.push({ x: pos.x, z: pos.z }); // Bush occupies the base cell
        
        // Create a more natural-looking bush with the flower texture
        const bushCount = 8 + Math.floor(Math.random() * 8);
        
        for (let i = 0; i < bushCount; i++) {
            // Create a plane for each part of the bush
            const bushPlane = new THREE.PlaneGeometry(CONFIG.UNIT_SIZE * 1.2, CONFIG.UNIT_SIZE * 1.2);
            const bushMesh = new THREE.Mesh(bushPlane, flowerBushMat);
            
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 1.0 * CONFIG.UNIT_SIZE; // Slightly smaller radius for a more compact bush
            const yOff = Math.random() * 0.6 * CONFIG.UNIT_SIZE; // Lower height for bushes
            
            // Randomize the bush size
            const bushScale = (0.7 + Math.random() * 0.5) * CONFIG.UNIT_SIZE;
            bushMesh.scale.set(bushScale, bushScale, bushScale);
            
            bushMesh.position.set(
                Math.cos(angle) * radius,
                yOff + blockOffset, // Position relative to group base
                Math.sin(angle) * radius
            );
            
            // Randomly rotate the bush parts
            bushMesh.rotation.x = Math.random() * Math.PI / 6;
            bushMesh.rotation.y = Math.random() * Math.PI * 2;
            bushMesh.rotation.z = Math.random() * Math.PI / 6;
            
            bushMesh.castShadow = true;
            bushMesh.receiveShadow = true;
            
            // Add the bush part to the group
            group.add(bushMesh);
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

    // Initialize obstacles list if needed
    if (!obstacles.list) {
        obstacles.list = [];
    }

    console.log(`Creating ${CONFIG.NUM_OBSTACLES} obstacles...`);
    for (let i = 0; i < CONFIG.NUM_OBSTACLES; i++) {
        // Generate position, avoiding player start area and other obstacles closely
        const newPos = generateUniquePosition(gameState, false, true, false, false, CONFIG.START_SAFE_ZONE);
        if (!newPos) {
            console.warn("Could not find space for new obstacle!");
            continue;
        }

        const randomTypeIndex = Math.floor(Math.random() * OBSTACLE_TYPES.length);
        const type = OBSTACLE_TYPES[randomTypeIndex].type;

        addNewObstacle(gameState, type, newPos);
    }
    
    // Add various flowers throughout the world to make the garden richer
    // We'll add 30 random flowers of different types
    for (let i = 0; i < 30; i++) {
        // Generate a position anywhere in the world (flowers don't block movement)
        const pos = {
            x: Math.floor((Math.random() - 0.5) * (CONFIG.GRID_SIZE - 4)),
            z: Math.floor((Math.random() - 0.5) * (CONFIG.GRID_SIZE - 4))
        };
        
        // Make sure flowers aren't placed in the very center (player start area)
        if (Math.abs(pos.x) < 3 && Math.abs(pos.z) < 3) {
            pos.x += (pos.x >= 0) ? 3 : -3;
            pos.z += (pos.z >= 0) ? 3 : -3;
        }
        
        // Add a random flower
        addFlower(gameState, pos);
    }
}

// Function to add a random flower at the specified position
function addFlower(gameState, pos) {
    const { obstacles, materials } = gameState;
    
    // Create a group for the flower
    const group = new THREE.Group();
    group.position.set(
        pos.x * CONFIG.UNIT_SIZE,
        0, // Base at Y=0
        pos.z * CONFIG.UNIT_SIZE
    );
    
    // Choose a random flower type
    const flowerTypes = ['pink_flower', 'white_daisy', 'white_tulip', 'yellow_flower'];
    const randomType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    
    // Get the corresponding material
    let flowerMaterial;
    switch (randomType) {
        case 'pink_flower':
            flowerMaterial = materials.obstacle.pink_flower;
            break;
        case 'white_daisy':
            flowerMaterial = materials.obstacle.white_daisy;
            break;
        case 'white_tulip':
            flowerMaterial = materials.obstacle.white_tulip;
            break;
        case 'yellow_flower':
            flowerMaterial = materials.obstacle.yellow_flower;
            break;
        default:
            flowerMaterial = materials.obstacle.yellow_flower;
    }
    
    // Create a plane for the flower
    const flowerPlane = new THREE.PlaneGeometry(CONFIG.UNIT_SIZE * 0.8, CONFIG.UNIT_SIZE * 0.8);
    const flowerMesh = new THREE.Mesh(flowerPlane, flowerMaterial);
    
    // Randomize the flower size slightly
    const flowerScale = (0.5 + Math.random() * 0.3) * CONFIG.UNIT_SIZE;
    flowerMesh.scale.set(flowerScale, flowerScale, flowerScale);
    
    // Position the flower slightly above ground
    flowerMesh.position.y = CONFIG.UNIT_SIZE * 0.4;
    
    // Randomly rotate the flower to face different directions
    flowerMesh.rotation.y = Math.random() * Math.PI * 2;
    
    // Add slight random tilt
    flowerMesh.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.2;
    
    // Add shadow effects
    flowerMesh.castShadow = true;
    flowerMesh.receiveShadow = true;
    
    // Add the flower to the group
    group.add(flowerMesh);
    
    // Add the group to the obstacles group
    obstacles.group.add(group);
    
    // We don't add flowers to the obstacles.list array since they don't block movement
    // This way they're just decorative elements
}

export function addNewObstacle(gameState, type, pos) {
    const { materials, obstacles } = gameState;
    if (!materials?.obstacle || !obstacles?.group) return;

    const obstacleData = createObstacleMeshInstance(pos, type, materials, obstacles.group);

    if (obstacleData && obstacleData.meshGroup && obstacleData.cells) {
        obstacles.list.push({
            ...pos, // Grid position
            type: type,
            mesh: obstacleData.meshGroup,
            occupiedCells: obstacleData.cells // Grid cells it blocks
        });
    }
}

export function checkObstacleCollision(position, gameState) {
     const { obstacles } = gameState;
     if (!obstacles?.list) return false;

     for (const obs of obstacles.list) {
         if (obs.occupiedCells.some(cell => cell.x === position.x && cell.z === position.z)) {
             // Return the type of obstacle that was hit
             return obs.type || 'obstacle';
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