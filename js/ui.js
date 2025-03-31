// --- DOM Element References ---
import * as CONFIG from './config.js';

// Get DOM elements
const scoreElement = document.getElementById('info');
const killsElement = document.getElementById('kills');
const powerUpInfoElement = document.getElementById('powerUpInfo');
const powerUpTextElement = document.getElementById('powerUpTextEffect');
const gameOverElement = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
const deathReasonElement = document.getElementById('deathReason');
const restartButton = document.getElementById('restartButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const alphaModeContainer = document.getElementById('alphaModeContainer');
const alphaModeLabel = document.getElementById('alphaModeLabel');
const alphaModeProgress = document.getElementById('alphaModeProgress');

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
        alphaModeLabel.textContent = CONFIG.GAME_TEXT.ALPHA_MODE.PROGRESS_LABEL;
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
    
    // Help button
    if (helpButton) {
        helpButton.addEventListener('click', showHelpScreen);
    }
}

// Call setup event listeners
setupEventListeners();

// Function to start the game
export function startGame() {
    if (introScreen) {
        introScreen.style.display = 'none';
    }
    gameStarted = true;
    firstTimeUser = false; // User has now played at least once
    
    // Dispatch a custom event to notify that the game has started
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
export function showHelpScreen() {
    if (introScreen) {
        introScreen.style.display = 'flex';
    }
    
    // Dispatch an event to pause the game
    window.dispatchEvent(new CustomEvent('gamePaused'));
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
            alphaModeProgress.style.width = '0%';
        }
        // No flashing animation until Alpha Mode is active
        if (alphaModeLabel) {
            alphaModeLabel.classList.remove('alpha-mode-active');
        }
    }
}

// Initialize UI elements on page load
initAlphaModeUI();

export const elements = {
    scoreElement,
    killsElement,
    powerUpInfoElement,
    gameOverElement,
    finalScoreElement,
    powerUpTextElement,
    leftButton,
    rightButton,
    restartButton,
    alphaModeContainer,
    alphaModeLabel,
    alphaModeProgress,
    deathReasonElement,
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
 * Shows the game over screen with death reason and score
 * @param {number} score - The final score
 * @param {string} deathReason - The reason for death (wall, self, obstacle, enemy)
 */
export function showGameOver(score, deathReason = 'DEFAULT') {
    if (gameOverElement && finalScoreElement) {
        // Set the final score
        finalScoreElement.textContent = score;
        
        // Set the death reason message based on the provided reason
        if (deathReasonElement) {
            // Get the appropriate message from config based on the death reason
            const deathMessages = CONFIG.GAME_TEXT.UI.GAME_OVER.DEATH_REASONS;
            const message = deathMessages[deathReason] || deathMessages.DEFAULT;
            deathReasonElement.textContent = message;
        }
        
        // Show the game over screen using the active class
        gameOverElement.classList.add('active');
    }
    
    // Hide mobile buttons on game over
    if (leftButton) leftButton.style.display = 'none';
    if (rightButton) rightButton.style.display = 'none';
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
        powerUpInfoElement.textContent = text;
        powerUpInfoElement.style.display = text ? 'block' : 'none';
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

export function resetUI(initialScore = 0) {
    updateScore(initialScore);
    updateKills(0);
    updatePowerUpInfo('');
    hideGameOver();
    hidePowerUpTextEffect();
    
    // Reset Alpha Mode UI to initial state (visible but empty)
    if (alphaModeContainer) {
        alphaModeContainer.style.display = 'flex';
        if (alphaModeProgress) {
            alphaModeProgress.style.width = '0%';
        }
        if (alphaModeLabel) {
            alphaModeLabel.classList.remove('alpha-mode-active');
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
 * Shows the Alpha Mode progress bar with active animation
 */
export function showAlphaModeBar() {
    if (alphaModeContainer) {
        // Make sure the container is visible
        alphaModeContainer.style.display = 'flex';
        
        // Change label text to indicate active mode
        if (alphaModeLabel) {
            alphaModeLabel.textContent = CONFIG.GAME_TEXT.ALPHA_MODE.ACTIVE_LABEL;
            alphaModeLabel.classList.add('alpha-mode-active');
        }
        
        // Make sure the progress bar is visible and fully filled
        if (alphaModeProgress) {
            alphaModeProgress.style.width = '100%';
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
            // Reset label text
            alphaModeLabel.textContent = CONFIG.GAME_TEXT.ALPHA_MODE.PROGRESS_LABEL;
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
        alphaModeProgress.style.width = `${clampedPercentage}%`;
        
        // If we're showing progress toward Alpha Mode (not during active Alpha Mode)
        // make sure the container is visible
        if (alphaModeContainer && alphaModeContainer.style.display !== 'flex') {
            alphaModeContainer.style.display = 'flex';
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