import * as THREE from 'three';
import * as CONFIG from './config.js';
import { Logger, isLoggingEnabled } from './debugLogger.js';

// Audio variables
let audioListener;
let backgroundMusic;
let soundEffects = {};
let soundBuffers = {}; // Store buffers separately from audio instances
let audioLoader;

// Audio state
let isMusicEnabled = CONFIG.AUDIO_ENABLED.MUSIC; // Use config setting for music enabled state
let isSoundEnabled = CONFIG.AUDIO_ENABLED.SOUND_EFFECTS; // Use config setting for sound effects enabled state
let musicVolume = CONFIG.AUDIO_VOLUME.MUSIC; // Use config setting for music volume
let soundVolume = 0.8; // General sound volume (will be modified per sound type)
let musicLoaded = false;

// Mobile detection
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Define sound effects to preload - we'll keep the full list but mark which ones are
// critical vs optional for performance optimization
const effectsToLoad = [
    // Player snake movement sounds - critical
    { name: 'movePlayerSnake1', path: 'assets/sounds/move_player_snake_1.ogg', critical: true },
    { name: 'movePlayerSnake2', path: 'assets/sounds/move_player_snake_2.ogg', critical: true },
    
    // Eating sounds - critical
    { name: 'eatApple', path: 'assets/sounds/eat_apple.ogg', critical: true },
    { name: 'eatFrog', path: 'assets/sounds/eat_frog.ogg', critical: true },
    { name: 'eatSnake', path: 'assets/sounds/eat_snake.ogg', critical: true },
    
    // Enemy snake movement sounds - less critical
    { name: 'moveEnemySnake1', path: 'assets/sounds/move_enemy_snake_1.ogg', critical: true },
    { name: 'moveEnemySnake2', path: 'assets/sounds/move_enemy_snake_2.ogg', critical: true },
    
    // Player death sound - critical
    { name: 'playerDeath', path: 'assets/sounds/died_player.ogg', critical: true },
    
    // Alpha kill sounds (explosion effects) - less critical
    { name: 'alphaKillExplode1', path: 'assets/sounds/alpha_kill_explode_1.ogg', critical: true },
    { name: 'alphaKillExplode2', path: 'assets/sounds/alpha_kill_explode_2.ogg', critical: true },
    
    // Alpha kill voice lines - less critical for mobile devices
    { name: 'alphaKill1', path: 'assets/sounds/alpha_kill_1_firstblood.mp3', critical: true },
    { name: 'alphaKill2', path: 'assets/sounds/alpha_kill_2_Double_Kill.mp3', critical: !isMobileDevice },
    { name: 'alphaKill3', path: 'assets/sounds/alpha_kill_3triple_kill.mp3', critical: !isMobileDevice },
    { name: 'alphaKill4Monster', path: 'assets/sounds/alpha_kill_4_MonsterKill.mp3', critical: !isMobileDevice },
    { name: 'alphaKill4Unstoppable', path: 'assets/sounds/alpha_kill_4_Unstoppable.mp3', critical: !isMobileDevice },
    { name: 'alphaKill5', path: 'assets/sounds/alpha_kill_5_GodLike.mp3', critical: !isMobileDevice },
    { name: 'alphaKill6', path: 'assets/sounds/alpha_kill_6_Ownage.mp3', critical: !isMobileDevice },
    { name: 'alphaKill7', path: 'assets/sounds/alpha_kill_7_Killing_Spree.mp3', critical: !isMobileDevice },
    { name: 'alphaKill8', path: 'assets/sounds/alpha_kill_8_UltraKill.mp3', critical: !isMobileDevice },
    { name: 'alphaKill9', path: 'assets/sounds/alpha_kill_9_Rampage.mp3', critical: !isMobileDevice },
    { name: 'alphaKill10', path: 'assets/sounds/alpha_kill_10_MegaKill.mp3', critical: !isMobileDevice },
    { name: 'alphaKill11', path: 'assets/sounds/alpha_kill_11_HolyShit.mp3', critical: !isMobileDevice }
];

// Counter for player movement sounds
let playerMoveSoundCounter = 0;

// Counter for alpha kill voice lines
let alphaKillVoiceIndex = 0;

/**
 * Initialize the audio system
 * @param {THREE.Camera} camera - The main camera to attach the audio listener to
 */
export function initAudioSystem(camera) {
    Logger.audio.info("Initializing audio system...");
    
    // Create an AudioListener and add it to the camera
    audioListener = new THREE.AudioListener();
    camera.add(audioListener);
    
    // Create the audio loader
    audioLoader = new THREE.AudioLoader();
    
    // Initialize background music
    backgroundMusic = new THREE.Audio(audioListener);
    
    // Load background music
    loadBackgroundMusic();
    
    // Initialize sound effects
    initSoundEffects();
    
    // Setup iOS-specific audio unlock (handles silent mode issues)
    setupIOSAudioUnlock();
    
    Logger.audio.info("Audio system initialized");
    
    // Add a click event listener to the document to enable audio
    document.addEventListener('click', handleFirstUserInteraction, { once: true });
    document.addEventListener('keydown', handleFirstUserInteraction, { once: true });
}

/**
 * Setup special handling for iOS audio unlock
 * This helps with the silent switch issue on iPhones
 * Uses minimal resources to avoid performance impact
 */
function setupIOSAudioUnlock() {
    // Only apply this for iOS devices
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isIOS) return;
    
    Logger.audio.info("Setting up iOS-specific audio handling");
    
    // Use a one-time touch listener that tries to unlock audio
    // This is very lightweight and won't impact performance
    document.addEventListener('touchstart', function unlockIOSAudio() {
        // Remove this listener after first touch to prevent unnecessary processing
        document.removeEventListener('touchstart', unlockIOSAudio);
        
        // Try to wake up the audio context - this is the key for iOS
        if (audioListener && audioListener.context && 
            audioListener.context.state !== 'running') {
            audioListener.context.resume().catch(e => {
                Logger.audio.warn("Could not resume audio context:", e);
            });
        }
        
        // If music is enabled, try playing it
        if (musicLoaded && isMusicEnabled && backgroundMusic) {
            // Small delay to let the context wake up
            setTimeout(() => {
                playBackgroundMusic();
            }, 100);
        }
        
        Logger.audio.info("iOS audio unlock attempt complete");
    }, {passive: true}); // Using passive listener for better touch performance
}

/**
 * Handle first user interaction to start audio
 * This is needed to work around browser autoplay restrictions
 */
function handleFirstUserInteraction() {
    Logger.audio.info("First user interaction detected, enabling audio");
    if (musicLoaded && isMusicEnabled) {
        playBackgroundMusic();
    }
}

/**
 * Load the background music
 */
function loadBackgroundMusic() {
    Logger.audio.info("Loading background music...");
    
    // Load the background music file
    audioLoader.load(
        'assets/music/Darkman007 - Sad song.mp3',
        (buffer) => {
            // Set the audio buffer to the background music
            backgroundMusic.setBuffer(buffer);
            backgroundMusic.setLoop(true);
            backgroundMusic.setVolume(musicVolume);
            
            // Mark music as loaded
            musicLoaded = true;
            
            // Try to play music immediately
            // This might be blocked by browsers until user interaction
            if (isMusicEnabled) {
                playBackgroundMusic();
            }
            
            Logger.audio.info("Background music loaded successfully");
        },
        (xhr) => {
            // Loading progress
            Logger.audio.debug(`Background music loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        },
        (error) => {
            // Error callback
            Logger.audio.error("Error loading background music:", error);
        }
    );
}

/**
 * Initialize sound effects
 */
function initSoundEffects() {
    // Load each sound effect based on its critical status
    effectsToLoad.forEach(effect => {
        // Load all critical sounds, or everything on desktop
        if (effect.critical || !isMobileDevice) {
            loadSoundEffect(effect.name, effect.path);
        }
    });
    
    Logger.audio.info("Sound effects initialization started");
}

/**
 * Load a sound effect
 * @param {string} name - The name/key of the sound effect
 * @param {string} path - The file path to the sound effect
 */
function loadSoundEffect(name, path) {
    Logger.audio.info(`Loading sound effect: ${name}`);
    
    // Create a new audio object for this sound effect
    const sound = new THREE.Audio(audioListener);
    
    // Load the sound file
    audioLoader.load(
        path,
        (buffer) => {
            // Store the buffer for potential reuse
            soundBuffers[name] = buffer;
            
            // Set the audio buffer to the sound
            sound.setBuffer(buffer);
            sound.setVolume(soundVolume);
            
            // Store the sound in our soundEffects object
            soundEffects[name] = sound;
            
            Logger.audio.info(`Sound effect loaded: ${name}`);
        },
        (xhr) => {
            // Loading progress
            Logger.audio.debug(`Sound effect loading (${name}): ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        },
        (error) => {
            // Error callback
            Logger.audio.error(`Error loading sound effect (${name}):`, error);
        }
    );
}

/**
 * Play a sound effect
 * @param {string} name - The name/key of the sound effect to play
 */
export function playSoundEffect(name) {
    // Only play sound if sound effects are enabled
    if (!isSoundEnabled) {
        return;
    }
    
    // Find the effect definition to get the path if needed
    const effectDef = effectsToLoad.find(e => e.name === name);
    if (!effectDef) {
        Logger.audio.error(`Sound effect definition not found: ${name}`);
        return;
    }
    
    // Check if the sound is loaded
    if (!soundEffects[name]) {
        // If not loaded but we have the buffer, create a new audio instance
        if (soundBuffers[name]) {
            const sound = new THREE.Audio(audioListener);
            sound.setBuffer(soundBuffers[name]);
            sound.setVolume(soundVolume);
            soundEffects[name] = sound;
        } else {
            // Not loaded at all, load it now (for non-critical sounds)
            loadSoundEffect(name, effectDef.path);
            return; // Exit early as the sound is still loading
        }
    }
    
    const sound = soundEffects[name];
    if (sound && sound.buffer) {
        // If the sound is already playing, stop it first
        if (sound.isPlaying) {
            sound.stop();
        }
        
        // Set the volume based on the type of sound
        let volume = soundVolume; // Default volume
        
        // Determine the type of sound and set appropriate volume
        if (name.startsWith('eat')) {
            volume = CONFIG.AUDIO_VOLUME.EATING_SOUNDS;
        } else if (name.startsWith('alphaKill')) {
            volume = CONFIG.AUDIO_VOLUME.ALPHA_MODE_SOUNDS;
        } else if (name === 'playerDeath') {
            volume = CONFIG.AUDIO_VOLUME.DEATH_SOUND;
        } else if (name.startsWith('movePlayer')) {
            volume = CONFIG.AUDIO_VOLUME.MOVEMENT_SOUNDS;
        }
        
        // Set the volume and play the sound
        sound.setVolume(volume);
        sound.play();
        
        Logger.audio.info(`Playing sound effect: ${name} at volume ${volume}`);
    } else {
        Logger.audio.warn(`Sound effect not found or not loaded: ${name}`);
    }
}

/**
 * Play the background music
 * Only starts playing if it's not already playing and music is enabled
 */
export function playBackgroundMusic() {
    if (backgroundMusic && !backgroundMusic.isPlaying && isMusicEnabled) {
        Logger.audio.info("Playing background music");
        backgroundMusic.play();
    }
}

/**
 * Pause the background music
 * Only pauses if it's currently playing
 */
export function pauseBackgroundMusic() {
    if (backgroundMusic && backgroundMusic.isPlaying) {
        Logger.audio.info("Pausing background music");
        backgroundMusic.pause();
    }
}

/**
 * Stop the background music
 */
export function stopBackgroundMusic() {
    if (backgroundMusic && backgroundMusic.isPlaying) {
        Logger.audio.info("Stopping background music");
        backgroundMusic.stop();
    }
}

/**
 * Toggle background music on/off
 * @returns {boolean} The new state of the music (true = enabled)
 */
export function toggleMusic() {
    isMusicEnabled = !isMusicEnabled;
    
    if (isMusicEnabled) {
        playBackgroundMusic();
    } else {
        pauseBackgroundMusic();
    }
    
    Logger.audio.info(`Music ${isMusicEnabled ? 'enabled' : 'disabled'}`);
    return isMusicEnabled;
}

/**
 * Toggle sound effects on/off
 * @returns {boolean} The new state of the sound effects (true = enabled)
 */
export function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    Logger.audio.info(`Sound effects ${isSoundEnabled ? 'enabled' : 'disabled'}`);
    return isSoundEnabled;
}

/**
 * Set the volume of the background music
 * @param {number} volume - Volume level (0.0 to 1.0)
 */
export function setMusicVolume(volume) {
    if (volume < 0 || volume > 1) {
        Logger.audio.warn(`Invalid music volume: ${volume}. Must be between 0 and 1.`);
        return;
    }
    
    musicVolume = volume;
    
    if (backgroundMusic) {
        backgroundMusic.setVolume(musicVolume);
    }
    
    Logger.audio.info(`Music volume set to: ${musicVolume}`);
}

/**
 * Set the volume of sound effects
 * @param {number} volume - Volume level (0.0 to 1.0)
 */
export function setSoundVolume(volume) {
    if (volume < 0 || volume > 1) {
        Logger.audio.warn(`Invalid sound volume: ${volume}. Must be between 0 and 1.`);
        return;
    }
    
    soundVolume = volume;
    
    // Update volume for all loaded sound effects
    Object.values(soundEffects).forEach(sound => {
        if (sound && sound.setVolume) {
            sound.setVolume(soundVolume);
        }
    });
    
    Logger.audio.info(`Sound effects volume set to: ${soundVolume}`);
}

/**
 * Get the current music volume
 * @returns {number} Current music volume (0.0 to 1.0)
 */
export function getMusicVolume() {
    return musicVolume;
}

/**
 * Get the current sound effects volume
 * @returns {number} Current sound effects volume (0.0 to 1.0)
 */
export function getSoundVolume() {
    return soundVolume;
}

/**
 * Get the current music enabled state
 * @returns {boolean} True if music is enabled
 */
export function isMusicOn() {
    return isMusicEnabled;
}

/**
 * Get the current sound effects enabled state
 * @returns {boolean} True if sound effects are enabled
 */
export function isSoundOn() {
    return isSoundEnabled;
}

/**
 * Play a player snake movement sound based on Alpha Mode status
 * Uses move_player_snake_1.ogg for regular movement
 * Uses move_player_snake_2.ogg for Alpha Mode movement
 * Only plays a sound every other move to reduce sound frequency
 * @param {boolean} isAlphaMode - Whether the player is currently in Alpha Mode
 */
export function playPlayerMoveSound(isAlphaMode = false) {
    // Only play sound if sound effects are enabled
    if (!isSoundEnabled) {
        return;
    }
    
    // Only play movement sound on every other call to avoid too many sounds
    playerMoveSoundCounter++;
    if (playerMoveSoundCounter % 2 !== 0) {
        return; // Skip this sound
    }
    
    // Choose sound based on Alpha Mode status
    const soundName = isAlphaMode ? 'movePlayerSnake2' : 'movePlayerSnake1';
    
    // Play the sound effect with the correct volume
    playSoundEffect(soundName);
}

/**
 * Reset the alpha kill voice counter to start from the first voice line
 */
export function resetAlphaKillVoiceCounter() {
    alphaKillVoiceIndex = 0;
    Logger.audio.info("Alpha kill voice counter reset");
}

/**
 * Play the next alpha kill voice line in sequence
 * Cycles through all available voice lines
 */
export function playAlphaKillVoice() {
    // Skip if sound effects are disabled
    if (!isSoundEnabled) return;
    
    // Array of alpha kill sound names
    const alphaKillSounds = [
        'alphaKill1',
        'alphaKill2',
        'alphaKill3',
        'alphaKill4Monster',
        'alphaKill4Unstoppable',
        'alphaKill5',
        'alphaKill6',
        'alphaKill7',
        'alphaKill8',
        'alphaKill9',
        'alphaKill10',
        'alphaKill11'
    ];
    
    // Get the current sound index, wrapping around if we reach the end
    const soundIndex = alphaKillVoiceIndex % alphaKillSounds.length;
    
    // Get the sound name
    const soundName = alphaKillSounds[soundIndex];
    
    // Play the sound effect
    playSoundEffect(soundName);
    
    // Increment the counter for next time
    alphaKillVoiceIndex++;
    
    // Also play an explosion sound effect
    const explosionSound = Math.random() > 0.5 ? 'alphaKillExplode1' : 'alphaKillExplode2';
    setTimeout(() => playSoundEffect(explosionSound), 100);
}

/**
 * Clean up audio resources
 * This function should be called when changing scenes or closing the game
 * to properly release audio resources and prevent memory leaks
 */
export function cleanupAudio() {
    Logger.audio.info("Cleaning up audio resources...");
    
    // Stop background music
    if (backgroundMusic) {
        if (backgroundMusic.isPlaying) {
            backgroundMusic.stop();
        }
    }
    
    // Stop all sound effects and clean up
    Object.values(soundEffects).forEach(sound => {
        if (sound && sound.isPlaying) {
            sound.stop();
        }
    });
    
    // Don't clear the buffer references immediately, just note that we've cleaned up
    Logger.audio.info("Audio resources stopped and cleaned up");
}
