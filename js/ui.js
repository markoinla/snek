// --- DOM Element References ---
import * as CONFIG from './config.js';
import { gameState } from './gameState.js';
import * as Audio from './audioSystem.js';

// Get DOM elements
const scoreElement = document.getElementById('info');
const killsElement = document.getElementById('kills');
const highScoreInfoElement = document.getElementById('highScoreInfo');
const powerUpInfoElement = document.getElementById('powerUpInfo');
const powerUpTextElement = document.getElementById('powerUpTextEffect');
const gameOverElement = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
const highScoreElement = document.getElementById('highScore');
const deathReasonElement = document.getElementById('deathReason');
const restartButton = document.getElementById('restartButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const alphaModeContainer = document.getElementById('alphaModeContainer');
const alphaModeLabel = document.getElementById('alphaModeLabel');
const alphaModeProgress = document.getElementById('alphaModeProgress');
const applesEatenElement = document.getElementById('applesEaten');
const frogsEatenElement = document.getElementById('frogsEaten');
const snakesEatenElement = document.getElementById('snakesEaten');

// Settings button
const settingsButton = document.getElementById('settingsButton');
// Music toggle button in header
const musicToggleButton = document.getElementById('musicToggleButton');

// Settings menu elements
const settingsMenu = document.getElementById('settingsMenu');
const closeSettingsButton = document.getElementById('closeSettings');
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');
const musicToggle = document.getElementById('musicToggle');
const soundToggle = document.getElementById('soundToggle');
const musicVolumeSlider = document.getElementById('musicVolume');
const soundVolumeSlider = document.getElementById('soundVolume');

// Intro screen elements
const introScreen = document.getElementById('introScreen');
const startButton = document.getElementById('startButton');
const controlsText = document.getElementById('controlsText');
const objectiveText = document.getElementById('objectiveText');
const alphaModeText = document.getElementById('alphaModeText');

// Help button
const helpButton = document.getElementById('helpButton');

// Game state variables
let gameStarted = false;
let firstTimeUser = true; // Track if this is the first time playing

// Initialize UI elements with text from config - wrapped in a function to ensure DOM is ready
function initializeUIText() {
    // High Score label
    if (highScoreInfoElement) {
        const highScoreLabel = document.createElement('span');
        highScoreLabel.classList.add('label');
        highScoreLabel.textContent = 'High Score: ';
        highScoreInfoElement.innerHTML = '';
        highScoreInfoElement.appendChild(highScoreLabel);
        highScoreInfoElement.appendChild(document.createTextNode('0'));
    }

    // Score label
    if (scoreElement) {
        const scoreLabel = document.createElement('span');
        scoreLabel.classList.add('label');
        scoreLabel.textContent = CONFIG.GAME_TEXT.UI.SCORE_LABEL + ': ';
        scoreElement.innerHTML = '';
        scoreElement.appendChild(scoreLabel);
        scoreElement.appendChild(document.createTextNode('0'));
    }

    // Kills label
    if (killsElement) {
        const killsLabel = document.createElement('span');
        killsLabel.classList.add('label');
        killsLabel.textContent = CONFIG.GAME_TEXT.UI.KILLS_LABEL + ': ';
        killsElement.innerHTML = '';
        killsElement.appendChild(killsLabel);
        killsElement.appendChild(document.createTextNode('0'));
    }

    // Alpha mode label
    if (alphaModeLabel) {
        alphaModeLabel.textContent = 'ALPHA MODE';
    }
    
    // Intro screen text
    if (controlsText) {
        controlsText.textContent = isMobileDevice() ? 
            CONFIG.GAME_TEXT.TUTORIAL.MOBILE_CONTROLS : 
            CONFIG.GAME_TEXT.TUTORIAL.CONTROLS;
    }
    
    if (objectiveText) {
        objectiveText.textContent = CONFIG.GAME_TEXT.TUTORIAL.OBJECTIVE;
    }
    
    if (alphaModeText) {
        alphaModeText.textContent = CONFIG.GAME_TEXT.TUTORIAL.ALPHA_MODE_HINT;
    }
}

// Function to check if the user is on a mobile device
function isMobileDevice() {
    return (window.innerWidth <= 768) || 
           ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0) || 
           (navigator.msMaxTouchPoints > 0);
}

// Call the initialization function after the document is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeUIText);
} else {
    // Document already loaded, run the function
    initializeUIText();
}

// Set up event listeners
function setupEventListeners() {
    // Start button
    if (startButton) {
        startButton.addEventListener('click', function() {
            // If this is the first time, start the game
            // If this is from the help screen, resume the game
            // No need to check display style since the button is only visible when intro screen is shown
            if (gameStarted) {
                // This is the help screen, resume the game
                resumeGameFromHelp();
            } else {
                // This is the first-time intro screen, start the game
                startGame();
            }
        });
    }
    
    // Restart button
    if (restartButton) {
        restartButton.addEventListener('click', function() {
            // Hide game over screen
            if (gameOverElement) {
                gameOverElement.classList.remove('active');
            }
            // Skip intro screen on restart
            startGame();
        });
    }
    
    // Help button now opens settings menu
    if (helpButton) {
        helpButton.addEventListener('click', showSettingsMenu);
    }
    
    // Settings button
    if (settingsButton) {
        settingsButton.addEventListener('click', showSettingsMenu);
    }
    
    // Music toggle button in header
    if (musicToggleButton) {
        musicToggleButton.addEventListener('click', toggleBackgroundMusic);
    }
    
    // Settings menu close button
    if (closeSettingsButton) {
        closeSettingsButton.addEventListener('click', hideSettingsMenu);
    }
    
    // Tab switching in settings menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Settings menu audio controls
    if (musicToggle) {
        musicToggle.addEventListener('click', () => {
            const isMusicEnabled = Audio.toggleMusic();
            musicToggle.classList.toggle('muted', !isMusicEnabled);
            musicToggle.querySelector('.toggle-status').textContent = isMusicEnabled ? 'ON' : 'OFF';
        });
    }
    
    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            const isSoundEnabled = Audio.toggleSound();
            soundToggle.classList.toggle('muted', !isSoundEnabled);
            soundToggle.querySelector('.toggle-status').textContent = isSoundEnabled ? 'ON' : 'OFF';
        });
    }
    
    // Volume sliders
    if (musicVolumeSlider) {
        musicVolumeSlider.addEventListener('input', () => {
            const volume = musicVolumeSlider.value / 100;
            Audio.setMusicVolume(volume);
        });
    }
    
    if (soundVolumeSlider) {
        soundVolumeSlider.addEventListener('input', () => {
            const volume = soundVolumeSlider.value / 100;
            Audio.setSoundVolume(volume);
        });
    }
}

// Initialize UI elements and set up event listeners
export function initUI() {
    setupEventListeners();
    initAudioControls();
}

// Initialize audio controls with current audio system state
function initAudioControls() {
    // Set initial states for audio controls based on audio system
    if (musicToggle) {
        musicToggle.classList.toggle('muted', !Audio.isMusicOn());
        const musicStatus = musicToggle.querySelector('.toggle-status');
        if (musicStatus) {
            musicStatus.textContent = Audio.isMusicOn() ? 'ON' : 'OFF';
        }
    }
    
    if (soundToggle) {
        soundToggle.classList.toggle('muted', !Audio.isSoundOn());
        const soundStatus = soundToggle.querySelector('.toggle-status');
        if (soundStatus) {
            soundStatus.textContent = Audio.isSoundOn() ? 'ON' : 'OFF';
        }
    }
    
    // Set volume sliders to match audio system values
    if (musicVolumeSlider) {
        musicVolumeSlider.value = Math.round(Audio.getMusicVolume() * 100);
    }
    
    if (soundVolumeSlider) {
        soundVolumeSlider.value = Math.round(Audio.getSoundVolume() * 100);
    }
    
    // Initialize music toggle button in header
    if (musicToggleButton) {
        musicToggleButton.classList.toggle('muted', !Audio.isMusicOn());
    }
}

// Call initUI
initUI();

// Function to start the game
export function startGame() {
    // Hide intro screen if visible
    if (introScreen) {
        introScreen.style.display = 'none';
    }
    
    // Hide game over screen if visible
    if (gameOverElement) {
        gameOverElement.style.display = 'none';
    }
    
    // Don't automatically play background music - let user control it with the toggle button
    // Audio.playBackgroundMusic();
    
    gameStarted = true;
    firstTimeUser = false; // User has now played at least once
    
    // Dispatch game started event
    window.dispatchEvent(new CustomEvent('gameStarted'));
}

// Function to check if the game has started
export function hasGameStarted() {
    return gameStarted;
}

// Function to show the intro screen
export function showIntroScreen() {
    // Only show intro screen for first-time users
    if (firstTimeUser) {
        if (introScreen) {
            introScreen.style.display = 'flex';
        }
        gameStarted = false;
    } else {
        // For returning players, just start the game directly
        startGame();
    }
}

// Function to show the help screen (reuses the intro screen)
export function showHelp() {
    showSettingsMenu();
    
    // Activate the How to Play tab
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    const howToPlayButton = document.querySelector('[data-tab="howToPlay"]');
    if (howToPlayButton) {
        howToPlayButton.classList.add('active');
    }
    
    const howToPlayPane = document.getElementById('howToPlay');
    if (howToPlayPane) {
        howToPlayPane.classList.add('active');
    }
}

// Function to resume the game after help screen is closed
export function resumeGameFromHelp() {
    if (introScreen) {
        introScreen.style.display = 'none';
    }
    
    // Dispatch an event to resume the game
    window.dispatchEvent(new CustomEvent('gameResumed'));
}

let powerUpTextAnimationHandler = null;

// Add resize event listener to handle mobile buttons visibility
window.addEventListener('resize', updateMobileControlsVisibility);

// Function to update mobile controls visibility based on screen width
function updateMobileControlsVisibility() {
    if (!leftButton || !rightButton || gameOverElement?.classList.contains('active')) return;
    
    if (window.innerWidth <= 767) {
        leftButton.style.display = 'flex';
        rightButton.style.display = 'flex';
    } else {
        leftButton.style.display = 'none';
        rightButton.style.display = 'none';
    }
}

// Initialize mobile controls on page load
updateMobileControlsVisibility();

// Initialize Alpha Mode progress bar (empty but visible)
function initAlphaModeUI() {
    if (alphaModeContainer) {
        // Show the container but with 0% progress
        alphaModeContainer.style.display = 'flex';
        if (alphaModeProgress) {
            alphaModeProgress.style.height = '0%';
        }
        // No flashing animation until Alpha Mode is active
        if (alphaModeLabel) {
            alphaModeLabel.style.display = 'block';
        }
    }
}

// Initialize UI elements on page load
initAlphaModeUI();

export const elements = {
    scoreElement,
    killsElement,
    highScoreInfoElement,
    powerUpInfoElement,
    gameOverElement,
    finalScoreElement,
    highScoreElement,
    powerUpTextElement,
    leftButton,
    rightButton,
    restartButton,
    alphaModeContainer,
    alphaModeLabel,
    alphaModeProgress,
    deathReasonElement,
    applesEatenElement,
    frogsEatenElement,
    snakesEatenElement,
    settingsButton,
    musicToggleButton,
};

export function updateScore(score) {
    if (scoreElement) {
        // Find the label span if it exists
        const labelSpan = scoreElement.querySelector('.label');
        if (labelSpan) {
            // Update only the text content after the label
            const scoreText = document.createTextNode(score.toString());
            
            // Remove any existing text nodes (non-label content)
            Array.from(scoreElement.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE || 
                    (node !== labelSpan && node.nodeType === Node.ELEMENT_NODE)) {
                    scoreElement.removeChild(node);
                }
            });
            
            // Append the new score text
            scoreElement.appendChild(scoreText);
        } else {
            // Fallback if label doesn't exist
            scoreElement.textContent = `${CONFIG.GAME_TEXT.UI.SCORE_LABEL}: ${score}`;
        }
    }
}

export function updateKills(kills) {
    if (killsElement) {
        // Find the label span if it exists
        const labelSpan = killsElement.querySelector('.label');
        if (labelSpan) {
            // Update only the text content after the label
            const killsText = document.createTextNode(kills.toString());
            
            // Remove any existing text nodes (non-label content)
            Array.from(killsElement.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE || 
                    (node !== labelSpan && node.nodeType === Node.ELEMENT_NODE)) {
                    killsElement.removeChild(node);
                }
            });
            
            // Append the new kills text
            killsElement.appendChild(killsText);
        } else {
            // Fallback if label doesn't exist
            killsElement.textContent = `${CONFIG.GAME_TEXT.UI.KILLS_LABEL}: ${kills}`;
        }
    }
}

/**
 * Updates the high score display in the game UI
 * @param {number} highScore - The high score to display
 */
export function updateHighScore(highScore) {
    if (highScoreInfoElement) {
        // Keep the label, update only the score value
        const label = highScoreInfoElement.querySelector('.label');
        if (label) {
            highScoreInfoElement.innerHTML = '';
            highScoreInfoElement.appendChild(label);
            highScoreInfoElement.appendChild(document.createTextNode(highScore));
        } else {
            // Fallback if label not found
            highScoreInfoElement.textContent = 'High Score: ' + highScore;
        }
    }
}

/**
 * Shows the game over screen with the final score and death reason
 * @param {number} score - The final score to display
 * @param {number} highScore - The current high score
 * @param {string} deathReason - The reason for death (used to look up message in config)
 * @param {Object} stats - The game statistics
 */
export function showGameOver(score, highScore, deathReason, stats = {}) {
    if (gameOverElement) {
        gameOverElement.style.display = 'flex';
        
        // Set final score - ensure it's a number
        if (finalScoreElement) {
            // Convert to number if it's an object
            const finalScore = typeof score === 'object' ? (score.current || 0) : score;
            finalScoreElement.textContent = finalScore;
            console.log("Setting final score:", finalScore);
        }
        
        // Set high score
        if (highScoreElement) {
            highScoreElement.textContent = highScore;
        }
        
        // Set death reason message from config
        if (deathReasonElement) {
            // Get the death reason message from config
            let deathMessage = 'You died!'; // Default message
            
            // Check if GAME_TEXT exists in CONFIG
            if (CONFIG.GAME_TEXT) {
                if (deathReason && CONFIG.GAME_TEXT.UI?.GAME_OVER?.DEATH_REASONS?.[deathReason]) {
                    // Use the message from config if available
                    deathMessage = CONFIG.GAME_TEXT.UI.GAME_OVER.DEATH_REASONS[deathReason];
                }
            } else {
                console.warn("CONFIG.GAME_TEXT not found, using default death message");
            }
            
            // Set the death reason message
            deathReasonElement.textContent = deathMessage;
            
            console.log(`Game over: ${deathMessage} (reason code: ${deathReason})`);
        }
        
        // Set stats if provided
        if (stats) {
            if (applesEatenElement && stats.applesEaten !== undefined) {
                applesEatenElement.textContent = stats.applesEaten;
            }
            
            if (frogsEatenElement && stats.frogsEaten !== undefined) {
                frogsEatenElement.textContent = stats.frogsEaten;
            }
            
            if (snakesEatenElement && stats.snakesEaten !== undefined) {
                snakesEatenElement.textContent = stats.snakesEaten;
            }
        }
        
        // Dispatch game over event
        window.dispatchEvent(new CustomEvent('gameOver'));
    }
}

export function hideGameOver() {
    if (gameOverElement) {
        // Hide the game over screen by removing the active class
        gameOverElement.classList.remove('active');
    }
    
    // Use the helper function to update mobile controls visibility
    updateMobileControlsVisibility();
}

export function updatePowerUpInfo(text) {
    if (powerUpInfoElement) {
        // Clear previous content
        powerUpInfoElement.innerHTML = '';
        
        // If there's no text, hide the element
        if (!text) {
            powerUpInfoElement.style.display = 'none';
            return;
        }
        
        // Check if the text contains multiple power-ups (separated by |)
        if (text.includes('|')) {
            // Split the text into individual power-ups
            const powerUps = text.split('|').map(item => item.trim());
            
            // Create a div for each power-up
            powerUps.forEach(powerUp => {
                const powerUpDiv = document.createElement('div');
                powerUpDiv.className = 'power-up-item';
                powerUpDiv.textContent = powerUp;
                powerUpInfoElement.appendChild(powerUpDiv);
            });
        } else {
            // Single power-up, create one div
            const powerUpDiv = document.createElement('div');
            powerUpDiv.className = 'power-up-item';
            powerUpDiv.textContent = text;
            powerUpInfoElement.appendChild(powerUpDiv);
        }
        
        // Show the container
        powerUpInfoElement.style.display = 'flex';
    }
}

export function showPowerUpTextEffect(text, color = 0xffffff) {
    if (!powerUpTextElement) return;

    const handleAnimationEnd = () => {
        powerUpTextElement.style.display = 'none';
        powerUpTextElement.classList.remove('powerup-text-animate');
        powerUpTextAnimationHandler = null;
    };

    // Clear previous animation/listener if it exists
    if (powerUpTextAnimationHandler) {
        powerUpTextElement.removeEventListener('animationend', powerUpTextAnimationHandler);
        powerUpTextElement.classList.remove('powerup-text-animate');
        // Ensure display is none before restarting
        powerUpTextElement.style.display = 'none';
        // Force reflow to restart animation if called rapidly
        void powerUpTextElement.offsetWidth;
    }

    powerUpTextElement.textContent = text;
    powerUpTextElement.style.color = `#${color.toString(16).padStart(6, '0')}`;
    powerUpTextElement.style.display = 'block'; // Make visible *before* adding class

    powerUpTextAnimationHandler = handleAnimationEnd;
    // Listen for animation end
    powerUpTextElement.addEventListener('animationend', powerUpTextAnimationHandler, { once: true });
    // Add class to trigger animation
    powerUpTextElement.classList.add('powerup-text-animate');
}

export function hidePowerUpTextEffect() {
     if (!powerUpTextElement) return;
     if (powerUpTextAnimationHandler) {
        powerUpTextElement.removeEventListener('animationend', powerUpTextAnimationHandler);
        powerUpTextAnimationHandler = null;
     }
     powerUpTextElement.style.display = 'none';
     powerUpTextElement.classList.remove('powerup-text-animate');
}

export function resetUI(initialScore = 0, gameState) {
    updateScore(initialScore);
    updateKills(0);
    updatePowerUpInfo('');
    hideGameOver();
    hidePowerUpTextEffect();
    
    // Update high score display (don't reset the actual high score value)
    if (gameState && gameState.highScore !== undefined) {
        updateHighScore(gameState.highScore);
    } else {
        updateHighScore(0);
    }
    
    // Reset Alpha Mode UI to initial state (visible but empty)
    if (alphaModeContainer) {
        alphaModeContainer.style.display = 'flex';
        if (alphaModeProgress) {
            alphaModeProgress.style.height = '0%';
        }
        if (alphaModeLabel) {
            alphaModeLabel.style.display = 'block';
            alphaModeLabel.classList.remove('alpha-mode-active');
            // Reset label text
            alphaModeLabel.textContent = 'ALPHA MODE';
        }
    }
}

// Function to get a random enemy kill message from the config array
export function getRandomEnemyKillMessage() {
    // Get the array of possible messages
    const messages = CONFIG.GAME_TEXT.POWERUPS.ENEMY_KILLED_MESSAGES;
    
    // If the array is empty or doesn't exist, return a default message
    if (!messages || messages.length === 0) {
        return "ENEMY KILLED!";
    }
    
    // Select a random index from the array
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Return the message at that index
    return messages[randomIndex];
}

// --- Alpha Mode UI Functions ---

/**
 * Shows the Alpha Mode progress bar
 */
export function showAlphaModeBar() {
    if (alphaModeContainer) {
        alphaModeContainer.style.display = 'flex';
        if (alphaModeLabel) {
            alphaModeLabel.style.display = 'block';
        }
    }
}

/**
 * Hides the Alpha Mode progress bar
 */
export function hideAlphaModeBar() {
    if (alphaModeContainer) {
        alphaModeContainer.style.display = 'none';
        if (alphaModeLabel) {
            alphaModeLabel.classList.remove('alpha-mode-active');
            alphaModeLabel.style.display = 'none';
            // Reset label text
            alphaModeLabel.textContent = 'ALPHA MODE';
        }
    }
}

/**
 * Updates the Alpha Mode progress bar
 * @param {number} percentage - Progress percentage (0-100)
 */
export function updateAlphaModeProgress(percentage) {
    if (alphaModeProgress) {
        // Ensure percentage is between 0-100
        const clampedPercentage = Math.max(0, Math.min(100, percentage));
        // For vertical progress bar, we update height instead of width
        alphaModeProgress.style.height = `${clampedPercentage}%`;
        
        // If we're showing progress toward Alpha Mode (not during active Alpha Mode)
        // make sure the container is visible
        if (alphaModeContainer && alphaModeContainer.style.display !== 'flex') {
            alphaModeContainer.style.display = 'flex';
            
            // Make sure the label is visible
            if (alphaModeLabel) {
                alphaModeLabel.style.display = 'block';
            }
        }
    }
}

/**
 * Updates the Alpha Mode UI with the current score multiplier
 * @param {number} progress - Progress toward Alpha Mode (0-1)
 * @param {number} remainingTime - Remaining time in Alpha Mode
 * @param {number} scoreMultiplier - Current score multiplier
 */
export function updateAlphaModeUI(progress, remainingTime, scoreMultiplier = 1.0) {
    // Update the progress bar
    if (alphaModeProgress) {
        const percentage = progress * 100;
        alphaModeProgress.style.height = `${percentage}%`;
    }
    
    // Update the label with remaining time and multiplier if active
    if (alphaModeLabel) {
        if (progress > 0) {
            // Alpha Mode is active
            alphaModeLabel.classList.add('alpha-mode-active');
            
            // Format the remaining time to one decimal place
            const timeText = remainingTime.toFixed(1);
            
            // Add multiplier info if greater than 1
            let multiplierText = '';
            if (scoreMultiplier > 1.0) {
                multiplierText = ` x${scoreMultiplier.toFixed(1)}`;
            }
            
            // Update the label text
            alphaModeLabel.textContent = `ALPHA ${timeText}s${multiplierText}`;
        } else {
            // Alpha Mode is not active
            alphaModeLabel.classList.remove('alpha-mode-active');
            alphaModeLabel.textContent = 'ALPHA MODE';
        }
    }
}

/**
 * Handles the Alpha Mode activation visual effect
 */
export function showAlphaModeActivation() {
    // Use the same power-up text effect as requested
    showPowerUpTextEffect(CONFIG.GAME_TEXT.ALPHA_MODE.ACTIVATED_MESSAGE, 0x9C27B0); // Purple color
}

/**
 * Shows the Alpha Mode cooldown status in the UI
 */
export function showAlphaModeCooldown(cooldownEndTime, currentTime) {
    // Function kept for compatibility but does nothing now since cooldown is disabled
    console.log("Alpha Mode cooldown disabled");
}

/**
 * Hides the Alpha Mode cooldown UI
 */
export function hideAlphaModeCooldown() {
    // Function kept for compatibility but does nothing now since cooldown is disabled
    console.log("Alpha Mode cooldown disabled");
}

/**
 * Toggle background music on/off
 * This function toggles the music and updates the UI to reflect the current state
 */
function toggleBackgroundMusic() {
    // Toggle music using the Audio system
    const isMusicEnabled = Audio.toggleMusic();
    
    // Update the music toggle button in the header
    if (musicToggleButton) {
        musicToggleButton.classList.toggle('muted', !isMusicEnabled);
    }
    
    // Update the music toggle in the settings menu
    if (musicToggle) {
        musicToggle.classList.toggle('muted', !isMusicEnabled);
        const musicStatus = musicToggle.querySelector('.toggle-status');
        if (musicStatus) {
            musicStatus.textContent = isMusicEnabled ? 'ON' : 'OFF';
        }
    }
    
    console.log(`Background music ${isMusicEnabled ? 'enabled' : 'disabled'}`);
}

/**
 * Show the settings menu
 */
export function showSettingsMenu() {
    // Pause the game when settings menu is shown
    window.dispatchEvent(new Event('gamePaused'));
    
    if (settingsMenu) {
        settingsMenu.classList.add('active');
    }
}

/**
 * Hide the settings menu
 */
export function hideSettingsMenu() {
    if (settingsMenu) {
        settingsMenu.classList.remove('active');
    }
    
    // Resume the game when settings menu is closed
    window.dispatchEvent(new Event('gameResumed'));
}