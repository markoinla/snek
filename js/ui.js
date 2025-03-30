// --- DOM Element References ---
import * as CONFIG from './config.js';

// Get DOM elements
const scoreElement = document.getElementById('info');
const killsElement = document.getElementById('kills');
const powerUpInfoElement = document.getElementById('powerUpInfo');
const powerUpTextElement = document.getElementById('powerUpTextEffect');
const gameOverElement = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
const restartButton = document.getElementById('restartButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const alphaModeContainer = document.getElementById('alphaModeContainer');
const alphaModeLabel = document.getElementById('alphaModeLabel');
const alphaModeProgress = document.getElementById('alphaModeProgress');

// Initialize UI elements with text from config - wrapped in a function to ensure DOM is ready
function initializeUIText() {
    // Score label
    if (scoreElement) {
        // Check if we already have a label span
        let labelSpan = scoreElement.querySelector('.label');
        if (!labelSpan) {
            labelSpan = document.createElement('span');
            labelSpan.classList.add('label');
            scoreElement.prepend(labelSpan);
        }
        labelSpan.textContent = CONFIG.GAME_TEXT.UI.SCORE_LABEL + ': ';
    }

    // Kills label
    if (killsElement) {
        // Check if we already have a label span
        let labelSpan = killsElement.querySelector('.label');
        if (!labelSpan) {
            labelSpan = document.createElement('span');
            labelSpan.classList.add('label');
            killsElement.prepend(labelSpan);
        }
        labelSpan.textContent = CONFIG.GAME_TEXT.UI.KILLS_LABEL + ': ';
    }

    // Game over text
    if (gameOverElement) {
        const heading = gameOverElement.querySelector('h2');
        const button = gameOverElement.querySelector('button');
        if (heading) heading.textContent = CONFIG.GAME_TEXT.UI.GAME_OVER;
        if (button) button.textContent = CONFIG.GAME_TEXT.UI.RESTART_BUTTON;
    }

    // Alpha mode label
    if (alphaModeLabel) {
        alphaModeLabel.textContent = CONFIG.GAME_TEXT.ALPHA_MODE.PROGRESS_LABEL;
    }
}

// Call the initialization function after the document is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeUIText);
} else {
    // Document already loaded, run the function
    initializeUIText();
}

let powerUpTextAnimationHandler = null;

// Add resize event listener to handle mobile buttons visibility
window.addEventListener('resize', updateMobileControlsVisibility);

// Function to update mobile controls visibility based on screen width
function updateMobileControlsVisibility() {
    if (!leftButton || !rightButton || gameOverElement?.style.display === 'block') return;
    
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

export function showGameOver(score) {
    if (gameOverElement && finalScoreElement) {
        finalScoreElement.textContent = score;
        gameOverElement.style.display = 'block';
    }
     // Hide mobile buttons on game over
    if (leftButton) leftButton.style.display = 'none';
    if (rightButton) rightButton.style.display = 'none';
}

export function hideGameOver() {
    if (gameOverElement) {
        gameOverElement.style.display = 'none';
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