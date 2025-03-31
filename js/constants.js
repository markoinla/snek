import * as THREE from 'three';
import * as CONFIG from './config.js';

// Asset Paths
export const PATHS = {
    snakeSheet: 'assets/svg/snake_spritesheet_improved.svg', // Using the improved spritesheet
    particle: 'assets/svg/particle.svg',
    skybox: 'assets/svg/skybox_blocky.svg',
    groundTile: 'assets/svg/grass.svg', // Changed to use the grass.svg file
    wallStone: 'assets/svg/wall_stone.svg',
    foodNormal: 'assets/svg/food_normal.svg',
    frogSpeed: 'assets/textures/frogs/frog_speed.svg',
    frogShrink: 'assets/textures/frogs/frog_shrink.svg',
    frogScore: 'assets/textures/frogs/frog_score.svg',
    frogGhost: 'assets/textures/frogs/frog_ghost.svg',
    treeLeaves: 'assets/svg/leaves.png', // Added path for the semi-transparent leaves texture
    treeTrunk: 'assets/textures/tree.png', // Added path for the tree trunk texture
    flowerBush: 'assets/textures/flower_bush.png', // Added path for the flower bush texture
    pinkFlower: 'assets/textures/pink_flow.png', // Pink flower texture
    whiteDaisy: 'assets/textures/white_daisy.png', // White daisy texture
    whiteTulip: 'assets/textures/white_tulip.png', // White tulip texture
    yellowFlower: 'assets/textures/yellow_flower.png', // Yellow flower texture
};

// Food Types Definition
export const FOOD_TYPES = [
    { type: 'normal', svgPath: PATHS.foodNormal, colorHint: new THREE.Color(0xDD2C00), powerUpDuration: 0, description: "Normal Food", effectText: "+1" },
    { type: 'speed', svgPath: PATHS.frogSpeed, colorHint: new THREE.Color(0x8BC34A), powerUpDuration: 8, description: "Speed Boost Frog", effectText: CONFIG.GAME_TEXT.POWERUPS.SPEED_BOOST },
    { type: 'shrink', svgPath: PATHS.frogShrink, colorHint: new THREE.Color(0x9C27B0), powerUpDuration: 0, description: "Shrink Frog", effectText: CONFIG.GAME_TEXT.POWERUPS.SHRINK },
    { type: 'score_x2', svgPath: PATHS.frogScore, colorHint: new THREE.Color(0xFFD700), powerUpDuration: 10, description: "Score Multiplier Frog", effectText: CONFIG.GAME_TEXT.POWERUPS.SCORE_MULTIPLIER },
    { type: 'ghost', svgPath: PATHS.frogGhost, colorHint: new THREE.Color(0xBDBDBD), powerUpDuration: 6, description: "Ghost Mode Frog", effectText: CONFIG.GAME_TEXT.POWERUPS.GHOST_MODE }
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