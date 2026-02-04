// gameModes.js - Handles game mode functionality for ALPHA SNEK

import CONFIG from './config.js';
import { gameState, saveGameMode, getCurrentModeSettings } from './gameState.js';
import { Logger } from './debugLogger.js';

// Initialize game mode system
export function initGameModeSystem() {
    Logger.system.info("Initializing game mode system...");
    
    // Get current game mode from gameState
    const currentMode = gameState.gameMode;
    Logger.system.info(`Current game mode: ${currentMode}`);
    
    // Set up event listeners for mode toggle buttons on intro screen
    const normalModeBtn = document.getElementById('normalModeBtn');
    const casualModeBtn = document.getElementById('casualModeBtn');
    
    // Set up event listeners for mode toggle buttons in settings
    const normalModeBtnSettings = document.getElementById('normalModeBtnSettings');
    const casualModeBtnSettings = document.getElementById('casualModeBtnSettings');
    
    if (normalModeBtn && casualModeBtn) {
        // Set initial active state based on current mode
        updateButtonState(normalModeBtn, casualModeBtn, currentMode);
        
        // Add click event listeners
        normalModeBtn.addEventListener('click', () => {
            setGameMode(CONFIG.GAME_MODES.NORMAL);
            updateButtonState(normalModeBtn, casualModeBtn, CONFIG.GAME_MODES.NORMAL);
            // Also update settings buttons if they exist
            if (normalModeBtnSettings && casualModeBtnSettings) {
                updateButtonState(normalModeBtnSettings, casualModeBtnSettings, CONFIG.GAME_MODES.NORMAL);
            }
        });
        
        casualModeBtn.addEventListener('click', () => {
            setGameMode(CONFIG.GAME_MODES.CASUAL);
            updateButtonState(normalModeBtn, casualModeBtn, CONFIG.GAME_MODES.CASUAL);
            // Also update settings buttons if they exist
            if (normalModeBtnSettings && casualModeBtnSettings) {
                updateButtonState(normalModeBtnSettings, casualModeBtnSettings, CONFIG.GAME_MODES.CASUAL);
            }
        });
    }
    
    if (normalModeBtnSettings && casualModeBtnSettings) {
        // Set initial active state based on current mode
        updateButtonState(normalModeBtnSettings, casualModeBtnSettings, currentMode);
        
        // Add click event listeners
        normalModeBtnSettings.addEventListener('click', () => {
            setGameMode(CONFIG.GAME_MODES.NORMAL);
            updateButtonState(normalModeBtnSettings, casualModeBtnSettings, CONFIG.GAME_MODES.NORMAL);
            // Also update intro screen buttons if they exist
            if (normalModeBtn && casualModeBtn) {
                updateButtonState(normalModeBtn, casualModeBtn, CONFIG.GAME_MODES.NORMAL);
            }
        });
        
        casualModeBtnSettings.addEventListener('click', () => {
            setGameMode(CONFIG.GAME_MODES.CASUAL);
            updateButtonState(normalModeBtnSettings, casualModeBtnSettings, CONFIG.GAME_MODES.CASUAL);
            // Also update intro screen buttons if they exist
            if (normalModeBtn && casualModeBtn) {
                updateButtonState(normalModeBtn, casualModeBtn, CONFIG.GAME_MODES.CASUAL);
            }
        });
    }
    
    // Log the current mode settings for debugging
    const modeSettings = getCurrentModeSettings();
    Logger.system.info("Current mode settings:", modeSettings);
}

// Helper function to update the active/inactive state of mode buttons
function updateButtonState(normalBtn, casualBtn, mode) {
    if (mode === CONFIG.GAME_MODES.CASUAL) {
        normalBtn.classList.remove('active');
        casualBtn.classList.add('active');
    } else {
        normalBtn.classList.add('active');
        casualBtn.classList.remove('active');
    }
}

// Function to set the game mode
function setGameMode(mode) {
    // Only proceed if it's a valid mode
    if (mode === CONFIG.GAME_MODES.NORMAL || mode === CONFIG.GAME_MODES.CASUAL) {
        Logger.system.info(`Setting game mode to: ${mode}`);
        
        // Save the mode to localStorage and update gameState
        saveGameMode(mode);
        
        // Log confirmation and current mode settings
        const modeSettings = getCurrentModeSettings();
        Logger.system.info(`Game mode set to ${mode}. Settings:`, modeSettings);
    } else {
        Logger.system.warn(`Invalid game mode: ${mode}`);
    }
}
