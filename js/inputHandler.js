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

        // Prevent default browser behavior for arrow keys to improve responsiveness
        if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'a', 'd', 'w', 's'].includes(event.key.toLowerCase())) {
            event.preventDefault();
        }

        switch (event.key.toLowerCase()) {
            case 'arrowleft':
            case 'a':
                playerTurnLeft(gameState); // Pass gameState
                // Set flag for immediate direction change
                gameState.playerSnake.immediateDirectionChange = true;
                break;
            case 'arrowright':
            case 'd':
                playerTurnRight(gameState); // Pass gameState
                // Set flag for immediate direction change
                gameState.playerSnake.immediateDirectionChange = true;
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
        // Set flag for immediate direction change
        gameState.playerSnake.immediateDirectionChange = true;
    };

    const handleTouchRight = (e) => {
         if (gameState.flags.gameOver) return;
         e.preventDefault(); // Prevent scrolling/zooming
        playerTurnRight(gameState);
        // Set flag for immediate direction change
        gameState.playerSnake.immediateDirectionChange = true;
    };
    
    // Restart button handler
    const handleRestartClick = (e) => {
        // Prevent default behavior for touch events
        if (e && e.preventDefault) {
            e.preventDefault();
        }
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
    
    // Add restart button event listeners - both click and touch for mobile
    if (uiElements.restartButton) {
        uiElements.restartButton.addEventListener('click', handleRestartClick);
        uiElements.restartButton.addEventListener('touchstart', handleRestartClick, { passive: false });
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
            uiElements.restartButton.removeEventListener('touchstart', handleRestartClick);
        }
    };
}