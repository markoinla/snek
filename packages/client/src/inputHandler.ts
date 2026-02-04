import { turnLeft as playerTurnLeft, turnRight as playerTurnRight } from './playerSnake.js';
import { INPUT_SCHEMA_VERSION } from 'snek-shared';
import type { TurnInput } from 'snek-shared';
import { requestRestart } from './main.ts'; // Assuming main exports a restart function
import type { GameState } from './gameState';

export function setupInputListeners(gameState: GameState, uiElements: { leftButton: HTMLElement | null; rightButton: HTMLElement | null }): () => void {
    // Track how many inputs we've sent since the last snapshot so each one
    // targets a unique future server tick.  Reset when a snapshot arrives
    // (the snapshot handler sets network.lastSnapshotTick).
    let inputSequence = 0;
    let lastSeenSnapshotTick = 0;

    const enqueueInput = (turn: TurnInput): void => {
        const baseTick = gameState.core!.tick;

        if (gameState.network?.enabled) {
            // Reset sequence counter when a new snapshot arrives
            const snTick = gameState.network.lastSnapshotTick || 0;
            if (snTick !== lastSeenSnapshotTick) {
                lastSeenSnapshotTick = snTick;
                inputSequence = 0;
            }
            inputSequence++;
        }

        const targetTick = gameState.network?.enabled
            ? baseTick + inputSequence   // each input gets a unique future tick
            : baseTick + 1;             // single-player: always next tick

        const input = { playerId: gameState.localPlayerId || 'local', tick: targetTick, turn, version: INPUT_SCHEMA_VERSION };
        if (gameState.network?.enabled && typeof gameState.network.sendInput === 'function') {
            gameState.network.sendInput(input);
            return;
        }
        gameState.inputQueue.push(input);
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (gameState.flags.gameOver) {
            if (event.key.toLowerCase() === 'r') {
                requestRestart(); // Request restart via main module
            }
            return;
        }

        // Prevent default browser behavior for arrow keys to improve responsiveness
        if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown'].includes(event.key.toLowerCase())) {
            event.preventDefault();
        }

        switch (event.key.toLowerCase()) {
            case 'arrowleft':
                if (gameState.flags.useCoreSimulation) {
                    enqueueInput('left');
                } else {
                    playerTurnLeft(gameState); // Pass gameState
                    // Set flag for immediate direction change
                    gameState.playerSnake.immediateDirectionChange = true;
                }
                break;
            case 'arrowright':
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

    const handleTouchLeft = (e: TouchEvent): void => {
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

    const handleTouchRight = (e: TouchEvent): void => {
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
        uiElements.leftButton.addEventListener('touchstart', handleTouchLeft as EventListener, { passive: false });
        // Optional: Add touchend/touchcancel if needed, but touchstart is usually sufficient for discrete actions
    }
    if (uiElements.rightButton) {
        uiElements.rightButton.addEventListener('touchstart', handleTouchRight as EventListener, { passive: false });
    }

    // Return a cleanup function
    return () => {
        console.log("Removing input listeners");
        window.removeEventListener('keydown', handleKeyDown);
        if (uiElements.leftButton) {
            uiElements.leftButton.removeEventListener('touchstart', handleTouchLeft as EventListener);
        }
        if (uiElements.rightButton) {
            uiElements.rightButton.removeEventListener('touchstart', handleTouchRight as EventListener);
        }
    };
}
