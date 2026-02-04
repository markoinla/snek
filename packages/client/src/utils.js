// js/utils.js - Corrected
import * as THREE from 'three';
import CONFIG from './config.js';
import { GEOMETRIES } from './constants.js'; // <-- ADD THIS IMPORT

// Checks if a grid cell is occupied by various elements
export function isPositionOccupied(targetPos, gameState, checkFood = true, checkObstacles = true, checkPlayerSnake = true, checkEnemySnakes = true) {
    const { playerSnake, food, obstacles, enemies } = gameState;

    if (checkPlayerSnake && playerSnake.segments && playerSnake.segments.some(segment => segment.x === targetPos.x && segment.z === targetPos.z)) {
        return true;
    }
    if (checkFood && food.positions && food.positions.some(f => f.x === targetPos.x && f.z === targetPos.z)) {
        return true;
    }
    if (checkObstacles && obstacles.list) {
        for (const obs of obstacles.list) {
            if (obs.occupiedCells.some(cell => cell.x === targetPos.x && cell.z === targetPos.z)) {
                return true;
            }
        }
    }
    if (checkEnemySnakes && enemies.list) {
        for (const enemy of enemies.list) {
            if (enemy.snake.some(segment => segment.x === targetPos.x && segment.z === targetPos.z)) {
                return true;
            }
        }
    }
    return false;
}

// Generates a unique grid position not currently occupied
export function generateUniquePosition(gameState, checkFood = true, checkObstacles = true, checkPlayerSnake = true, checkEnemySnakes = true, safeZoneRadius = 0) {
    const halfGrid = Math.floor(CONFIG.GRID_SIZE / 2);
    let pos;
    let attempts = 0;
    const maxAttempts = CONFIG.GRID_SIZE * CONFIG.GRID_SIZE;

    while (attempts < maxAttempts) {
        pos = {
            x: Math.floor(Math.random() * CONFIG.GRID_SIZE) - halfGrid,
            y: 0, // Assuming ground level
            z: Math.floor(Math.random() * CONFIG.GRID_SIZE) - halfGrid
        };

        // Check safe zone around origin (0,0)
        if (Math.abs(pos.x) <= safeZoneRadius && Math.abs(pos.z) <= safeZoneRadius) {
             attempts++;
             continue;
        }

        // Check general occupation
        if (!isPositionOccupied(pos, gameState, checkFood, checkObstacles, checkPlayerSnake, checkEnemySnakes)) {
             // Additional check for neighbors if placing obstacles to avoid clustering
             if (checkObstacles) {
                 let neighborOccupied = false;
                 for (const dx of [-1, 0, 1]) {
                     for (const dz of [-1, 0, 1]) {
                         if (dx === 0 && dz === 0) continue;
                         if (isPositionOccupied({ x: pos.x + dx, y: 0, z: pos.z + dz }, gameState, false, true, false, false)) {
                             neighborOccupied = true;
                             break;
                         }
                     }
                     if (neighborOccupied) break;
                 }
                 if (!neighborOccupied) return pos; // Found a good spot
             } else {
                 return pos; // Found a good spot
             }
        }
        attempts++;
    }

    console.error(`Could not find unique position after ${maxAttempts} attempts.`);
    return { x: 0, y: 0, z: 0 }; // Fallback
}


// Creates a snake segment mesh (player or enemy)
export function createSnakeSegmentMesh(pos, isHead, materials, isPlayer, enemyId = null) {
    let headMat1, headMat2, bodyMat1, bodyMat2;

    if (isPlayer) {
        headMat1 = materials.snake.head1;
        headMat2 = materials.snake.head2;
        bodyMat1 = materials.snake.body1;
        bodyMat2 = materials.snake.body2;
    } else {
        headMat1 = materials.enemy.head1;
        headMat2 = materials.enemy.head2;
        bodyMat1 = materials.enemy.body1;
        bodyMat2 = materials.enemy.body2;
    }

    const initialMaterial = isHead ? headMat1 : bodyMat1;
    if (!initialMaterial) {
        console.error(`Snake material missing! Player: ${isPlayer}, Head: ${isHead}`);
        // Create a fallback bright pink material
        return new THREE.Mesh(
            GEOMETRIES.cube,
            new THREE.MeshBasicMaterial({ color: 0xff00ff })
        );
    }

    const mesh = new THREE.Mesh(GEOMETRIES.cube, initialMaterial.clone()); // Clone to allow individual opacity/texture changes if needed later
    mesh.scale.setScalar(CONFIG.UNIT_SIZE);
    mesh.position.set(
        pos.x * CONFIG.UNIT_SIZE,
        pos.y * CONFIG.UNIT_SIZE, // Keep Y position relative to grid 0
        pos.z * CONFIG.UNIT_SIZE
    );
    mesh.castShadow = true;
    mesh.receiveShadow = false; // Body segments don't need to receive shadows from themselves

    // Adjust position slightly upward so it sits exactly on the ground plane
    mesh.position.y += CONFIG.UNIT_SIZE / 2;
    
    // Add a name to the mesh for easier identification and cleanup
    if (isPlayer) {
        mesh.name = isHead ? 'playerSnakeHead' : 'playerSnakeBody';
    } else {
        // Include the enemy ID in the name if available
        const idStr = enemyId !== null ? `_${enemyId}` : '';
        mesh.name = isHead ? `enemySnakeHead${idStr}` : `enemySnakeBody${idStr}`;
    }

    return mesh;
}