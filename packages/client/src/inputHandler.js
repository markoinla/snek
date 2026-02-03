import { turnLeft as playerTurnLeft, turnRight as playerTurnRight } from './playerSnake.js';
import { INPUT_SCHEMA_VERSION } from 'snek-shared';
import { requestRestart } from './main.ts'; // Assuming main exports a restart function

export function setupInputListeners(gameState, uiElements) {
    const enqueueInput = (turn) => {
        const input = { playerId: 'local', tick: gameState.core.tick + 1, turn, version: INPUT_SCHEMA_VERSION };
        if (gameState.network?.enabled && typeof gameState.network.sendInput === 'function') {
            gameState.network.sendInput(input);
            return;
        }
        gameState.inputQueue.push(input);
    };

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
                if (gameState.flags.useCoreSimulation) {
                    enqueueInput('left');
                } else {
                    playerTurnLeft(gameState); // Pass gameState
                    // Set flag for immediate direction change
                    gameState.playerSnake.immediateDirectionChange = true;
                }
                break;
            case 'arrowright':
            case 'd':
                if (gameState.flags.useCoreSimulation) {
                    enqueueInput('right');
                } else {
                    playerTurnRight(gameState); // Pass gameState
                    // Set flag for immediate direction change
                    gameState.playerSnake.immediateDirectionChange = true;
                }
                break;
            case 'p': // Debug log
                console.log("Debug Game State:", gameState);
                break;
        }
    };

    const handleTouchLeft = (e) => {
        if (gameState.flags.gameOver) return;
        e.preventDefault(); // Prevent scrolling/zooming
        if (gameState.flags.useCoreSimulation) {
            enqueueInput('left');
        } else {
            playerTurnLeft(gameState);
            // Set flag for immediate direction change
            gameState.playerSnake.immediateDirectionChange = true;
        }
    };

    const handleTouchRight = (e) => {
         if (gameState.flags.gameOver) return;
         e.preventDefault(); // Prevent scrolling/zooming
        if (gameState.flags.useCoreSimulation) {
            enqueueInput('right');
        } else {
            playerTurnRight(gameState);
            // Set flag for immediate direction change
            gameState.playerSnake.immediateDirectionChange = true;
        }
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
    };
}
