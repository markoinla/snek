import * as THREE from 'three';
import * as CONFIG from './config.js';

// Asset Paths
export const PATHS = {
    snakeSheet: 'assets/svg/snake_spritesheet_improved.svg', // Using the improved spritesheet
    particle: 'assets/svg/particle.svg',
    skybox: 'assets/svg/skybox_blocky.svg',
    groundTile: 'assets/svg/ground_tile_grass_dirt.svg',
    wallStone: 'assets/svg/wall_stone.svg',
    foodNormal: 'assets/svg/food_normal.svg',
    foodSpeed: 'assets/svg/food_speed.svg',
    foodShrink: 'assets/svg/food_shrink.svg',
    foodScore: 'assets/svg/food_score.svg',
    foodGhost: 'assets/svg/food_ghost.svg',
};

// Food Types Definition
export const FOOD_TYPES = [
    { type: 'normal', svgPath: PATHS.foodNormal, colorHint: new THREE.Color(0xDD2C00), powerUpDuration: 0, description: "Normal Food", effectText: "+1" },
    { type: 'speed', svgPath: PATHS.foodSpeed, colorHint: new THREE.Color(0xFFEB3B), powerUpDuration: 8, description: "Speed Boost", effectText: CONFIG.GAME_TEXT.POWERUPS.SPEED_BOOST },
    { type: 'shrink', svgPath: PATHS.foodShrink, colorHint: new THREE.Color(0xAB47BC), powerUpDuration: 0, description: "Shrink", effectText: CONFIG.GAME_TEXT.POWERUPS.SHRINK },
    { type: 'score_x2', svgPath: PATHS.foodScore, colorHint: new THREE.Color(0xFFEE58), powerUpDuration: 10, description: "Score Multiplier", effectText: CONFIG.GAME_TEXT.POWERUPS.SCORE_MULTIPLIER },
    { type: 'ghost', svgPath: PATHS.foodGhost, colorHint: new THREE.Color(0xE0E0E0), powerUpDuration: 6, description: "Ghost Mode", effectText: CONFIG.GAME_TEXT.POWERUPS.GHOST_MODE }
];

// Obstacle Types Definition
export const OBSTACLE_TYPES = [
    { type: 'tree' },
    { type: 'bush' }
];

// Predefined Geometries (to avoid recreation)
export const GEOMETRIES = {
    cube: new THREE.BoxGeometry(1, 1, 1), // Use UNIT_SIZE scaling on mesh instead
    particle: new THREE.PlaneGeometry(1, 1), // Scaled later
    groundPlane: null, // Created dynamically based on GRID_SIZE
    grassBlade: new THREE.PlaneGeometry(0.1, 0.6), // Scaled by UNIT_SIZE later
};
GEOMETRIES.grassBlade.translate(0, 0.3, 0); // Center pivot at base