// Mode Test Helper
// Import this in the console to check if mode settings are being applied

import * as CONFIG from './config.js';
import { gameState, getAdjustedSetting, saveGameMode } from './gameState.js';

export function testGameModes() {
    console.log("%c===== GAME MODE TEST =====", "font-size: 14px; font-weight: bold; color: #4CAF50;");
    
    // Print current mode
    console.log(`%cCurrent Game Mode: ${gameState.gameMode}`, "font-weight: bold; color: #2196F3;");
    
    // Test Normal Mode
    console.log("\n%cNORMAL MODE SETTINGS:", "font-weight: bold; color: #FF5722;");
    saveGameMode(CONFIG.GAME_MODES.NORMAL);
    
    console.log(`Snake Speed: ${CONFIG.BASE_SNAKE_SPEED} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.NORMAL].SNAKE_SPEED_MULTIPLIER} = ${getAdjustedSetting('BASE_SNAKE_SPEED')}`);
    console.log(`Obstacle Count: ${CONFIG.NUM_OBSTACLES} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.NORMAL].OBSTACLE_COUNT_MULTIPLIER} = ${getAdjustedSetting('NUM_OBSTACLES')}`);
    console.log(`Food Count: ${CONFIG.NUM_INITIAL_FOOD} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.NORMAL].FOOD_COUNT_MULTIPLIER} = ${getAdjustedSetting('NUM_INITIAL_FOOD')}`);
    console.log(`Alpha Points Threshold: ${CONFIG.ALPHA_POINTS_THRESHOLD} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.NORMAL].ALPHA_POINTS_THRESHOLD_MULTIPLIER} = ${getAdjustedSetting('ALPHA_POINTS_THRESHOLD')}`);
    console.log(`Alpha Mode Duration: ${CONFIG.ALPHA_MODE_DURATION} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.NORMAL].ALPHA_MODE_DURATION_MULTIPLIER} = ${getAdjustedSetting('ALPHA_MODE_DURATION')}`);
    console.log(`Collision Forgiveness: ${getAdjustedSetting('COLLISION_FORGIVENESS')} grid units`);
    
    // Test Casual Mode
    console.log("\n%cCASUAL MODE SETTINGS:", "font-weight: bold; color: #9C27B0;");
    saveGameMode(CONFIG.GAME_MODES.CASUAL);
    
    console.log(`Snake Speed: ${CONFIG.BASE_SNAKE_SPEED} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.CASUAL].SNAKE_SPEED_MULTIPLIER} = ${getAdjustedSetting('BASE_SNAKE_SPEED')}`);
    console.log(`Obstacle Count: ${CONFIG.NUM_OBSTACLES} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.CASUAL].OBSTACLE_COUNT_MULTIPLIER} = ${getAdjustedSetting('NUM_OBSTACLES')}`);
    console.log(`Food Count: ${CONFIG.NUM_INITIAL_FOOD} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.CASUAL].FOOD_COUNT_MULTIPLIER} = ${getAdjustedSetting('NUM_INITIAL_FOOD')}`);
    console.log(`Alpha Points Threshold: ${CONFIG.ALPHA_POINTS_THRESHOLD} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.CASUAL].ALPHA_POINTS_THRESHOLD_MULTIPLIER} = ${getAdjustedSetting('ALPHA_POINTS_THRESHOLD')}`);
    console.log(`Alpha Mode Duration: ${CONFIG.ALPHA_MODE_DURATION} × ${CONFIG.MODE_SETTINGS[CONFIG.GAME_MODES.CASUAL].ALPHA_MODE_DURATION_MULTIPLIER} = ${getAdjustedSetting('ALPHA_MODE_DURATION')}`);
    console.log(`Collision Forgiveness: ${getAdjustedSetting('COLLISION_FORGIVENESS')} grid units`);
    
    // Restore original mode
    saveGameMode(gameState.gameMode);
    console.log(`\n%cMode reset to: ${gameState.gameMode}`, "font-weight: bold; color: #2196F3;");
    
    console.log("%c===== TEST COMPLETE =====", "font-size: 14px; font-weight: bold; color: #4CAF50;");
    
    return {
        instructions: "Add this line to the browser console to run test: import('./modeTest.js').then(m => m.testGameModes());"
    };
}
