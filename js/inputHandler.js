import { turnLeft as playerTurnLeft, turnRight as playerTurnRight } from './playerSnake.js';
import { requestRestart } from './main.js'; // Assuming main exports a restart function

export function setupInputListeners(gameState, uiElements) {

    const handleKeyDown = (event) => {
        if (gameState.flags.gameOver) {
            if (event.key.toLowerCase() === 'r') {
                requestRestart(); // Request restart via main module
            }
            return;
        }

        // Prevent default browser behavior for arrow keys if needed
        // if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown'].includes(event.key.toLowerCase())) {
        //     event.preventDefault();
        // }

        switch (event.key.toLowerCase()) {
            case 'arrowleft':
            case 'a':
                playerTurnLeft(gameState); // Pass gameState
                break;
            case 'arrowright':
            case 'd':
                playerTurnRight(gameState); // Pass gameState
                break;
            case 'p': // Debug log
                console.log("Debug Game State:", gameState);
                break;
        }
    };

    const handleTouchLeft = (e) => {
        if (gameState.flags.gameOver) return;
        e.preventDefault(); // Prevent scrolling/zooming
        playerTurnLeft(gameState);
    };

    const handleTouchRight = (e) => {
         if (gameState.flags.gameOver) return;
         e.preventDefault(); // Prevent scrolling/zooming
        playerTurnRight(gameState);
    };
    
    // Restart button handler
    const handleRestartClick = () => {
        requestRestart();
    };

    window.addEventListener('keydown', handleKeyDown);

    // --- Touch Controls ---
    // Use touchstart for responsiveness
    if (uiElements.leftButton) {
        uiElements.leftButton.addEventListener('touchstart', handleTouchLeft, { passive: false });
        // Optional: Add touchend/touchcancel if needed, but touchstart is usually sufficient for discrete actions
    }
    if (uiElements.rightButton) {
        uiElements.rightButton.addEventListener('touchstart', handleTouchRight, { passive: false });
    }
    
    // Add restart button event listener
    if (uiElements.restartButton) {
        uiElements.restartButton.addEventListener('click', handleRestartClick);
    }

    // Return a cleanup function
    return () => {
        console.log("Removing input listeners");
        window.removeEventListener('keydown', handleKeyDown);
        if (uiElements.leftButton) {
            uiElements.leftButton.removeEventListener('touchstart', handleTouchLeft);
        }
        if (uiElements.rightButton) {
            uiElements.rightButton.removeEventListener('touchstart', handleTouchRight);
        }
        if (uiElements.restartButton) {
            uiElements.restartButton.removeEventListener('click', handleRestartClick);
        }
    };
}