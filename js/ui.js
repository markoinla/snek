// --- DOM Element References ---
const scoreElement = document.getElementById('info');
const killsElement = document.getElementById('kills');
const powerUpInfoElement = document.getElementById('powerUpInfo');
const gameOverElement = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
const powerUpTextElement = document.getElementById('powerUpTextEffect');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const restartButton = document.getElementById('restartButton');

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
};

export function updateScore(score) {
    if (scoreElement) {
        scoreElement.textContent = `Score: ${score}`;
    }
}

export function updateKills(kills) {
    if (killsElement) {
        killsElement.textContent = `Kills: ${kills}`;
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
    updateKills(0); // Reset kills counter
    hideGameOver();
    updatePowerUpInfo(''); // Clear power-up text
    hidePowerUpTextEffect();
}