import * as THREE from 'three';
import * as CONFIG from './config.js';

// Audio variables
let audioListener;
let backgroundMusic;
let soundEffects = {};
let audioLoader;

// Audio state
let isMusicEnabled = CONFIG.AUDIO_ENABLED.MUSIC; // Use config setting for music enabled state
let isSoundEnabled = CONFIG.AUDIO_ENABLED.SOUND_EFFECTS; // Use config setting for sound effects enabled state
let musicVolume = CONFIG.AUDIO_VOLUME.MUSIC; // Use config setting for music volume
let soundVolume = 0.8; // General sound volume (will be modified per sound type)
let musicLoaded = false;

// Counter for player movement sounds
let playerMoveSoundCounter = 0;

// Counter for alpha kill voice lines
let alphaKillVoiceIndex = 0;

/**
 * Initialize the audio system
 * @param {THREE.Camera} camera - The main camera to attach the audio listener to
 */
export function initAudioSystem(camera) {
    console.log("Initializing audio system...");
    
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
    
    console.log("Audio system initialized");
    
    // Add a click event listener to the document to enable audio
    document.addEventListener('click', handleFirstUserInteraction, { once: true });
    document.addEventListener('keydown', handleFirstUserInteraction, { once: true });
}

/**
 * Handle first user interaction to start audio
 * This is needed to work around browser autoplay restrictions
 */
function handleFirstUserInteraction() {
    console.log("First user interaction detected, enabling audio");
    if (musicLoaded && isMusicEnabled) {
        playBackgroundMusic();
    }
}

/**
 * Load the background music
 */
function loadBackgroundMusic() {
    console.log("Loading background music...");
    
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
            
            console.log("Background music loaded successfully");
        },
        (xhr) => {
            // Loading progress
            console.log(`Background music loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        },
        (error) => {
            // Error callback
            console.error("Error loading background music:", error);
        }
    );
}

/**
 * Initialize sound effects
 */
function initSoundEffects() {
    // Define sound effects to preload
    const effectsToLoad = [
        // Player snake movement sounds
        { name: 'movePlayerSnake1', path: 'assets/sounds/move_player_snake_1.ogg' },
        { name: 'movePlayerSnake2', path: 'assets/sounds/move_player_snake_2.ogg' },
        
        // Eating sounds
        { name: 'eatApple', path: 'assets/sounds/eat_apple.ogg' },
        { name: 'eatFrog', path: 'assets/sounds/eat_frog.ogg' },
        { name: 'eatSnake', path: 'assets/sounds/eat_snake.ogg' },
        
        // Enemy snake movement sounds
        { name: 'moveEnemySnake1', path: 'assets/sounds/move_enemy_snake_1.ogg' },
        { name: 'moveEnemySnake2', path: 'assets/sounds/move_enemy_snake_2.ogg' },
        
        // Player death sound
        { name: 'playerDeath', path: 'assets/sounds/died_player.ogg' },
        
        // Alpha kill sounds (explosion effects)
        { name: 'alphaKillExplode1', path: 'assets/sounds/alpha_kill_explode_1.ogg' },
        { name: 'alphaKillExplode2', path: 'assets/sounds/alpha_kill_explode_2.ogg' },
        
        // Alpha kill voice lines
        { name: 'alphaKill1', path: 'assets/sounds/alpha_kill_1_firstblood.mp3' },
        { name: 'alphaKill2', path: 'assets/sounds/alpha_kill_2_Double_Kill.mp3' },
        { name: 'alphaKill3', path: 'assets/sounds/alpha_kill_3triple_kill.mp3' },
        { name: 'alphaKill4Monster', path: 'assets/sounds/alpha_kill_4_MonsterKill.mp3' },
        { name: 'alphaKill4Unstoppable', path: 'assets/sounds/alpha_kill_4_Unstoppable.mp3' },
        { name: 'alphaKill5', path: 'assets/sounds/alpha_kill_5_GodLike.mp3' },
        { name: 'alphaKill6', path: 'assets/sounds/alpha_kill_6_Ownage.mp3' },
        { name: 'alphaKill7', path: 'assets/sounds/alpha_kill_7_Killing_Spree.mp3' },
        { name: 'alphaKill8', path: 'assets/sounds/alpha_kill_8_UltraKill.mp3' },
        { name: 'alphaKill9', path: 'assets/sounds/alpha_kill_9_Rampage.mp3' },
        { name: 'alphaKill10', path: 'assets/sounds/alpha_kill_10_MegaKill.mp3' },
        { name: 'alphaKill11', path: 'assets/sounds/alpha_kill_11_HolyShit.mp3' }
    ];
    
    // Load each sound effect
    effectsToLoad.forEach(effect => {
        loadSoundEffect(effect.name, effect.path);
    });
    
    console.log("Sound effects initialization started");
}

/**
 * Load a sound effect
 * @param {string} name - The name/key of the sound effect
 * @param {string} path - The file path to the sound effect
 */
function loadSoundEffect(name, path) {
    console.log(`Loading sound effect: ${name}`);
    
    // Create a new audio object for this sound effect
    const sound = new THREE.Audio(audioListener);
    
    // Load the sound file
    audioLoader.load(
        path,
        (buffer) => {
            // Set the audio buffer to the sound
            sound.setBuffer(buffer);
            sound.setVolume(soundVolume);
            
            // Store the sound in our soundEffects object
            soundEffects[name] = sound;
            
            console.log(`Sound effect loaded: ${name}`);
        },
        (xhr) => {
            // Loading progress
            console.log(`Sound effect loading (${name}): ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        },
        (error) => {
            // Error callback
            console.error(`Error loading sound effect (${name}):`, error);
        }
    );
}

/**
 * Play the background music
 * Only starts playing if it's not already playing and music is enabled
 */
export function playBackgroundMusic() {
    if (backgroundMusic && !backgroundMusic.isPlaying && isMusicEnabled) {
        console.log("Playing background music");
        backgroundMusic.play();
    }
}

/**
 * Pause the background music
 * Only pauses if it's currently playing
 */
export function pauseBackgroundMusic() {
    if (backgroundMusic && backgroundMusic.isPlaying) {
        console.log("Pausing background music");
        backgroundMusic.pause();
    }
}

/**
 * Stop the background music
 */
export function stopBackgroundMusic() {
    if (backgroundMusic && backgroundMusic.isPlaying) {
        console.log("Stopping background music");
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
    
    console.log(`Music ${isMusicEnabled ? 'enabled' : 'disabled'}`);
    return isMusicEnabled;
}

/**
 * Toggle sound effects on/off
 * @returns {boolean} The new state of the sound effects (true = enabled)
 */
export function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    console.log(`Sound effects ${isSoundEnabled ? 'enabled' : 'disabled'}`);
    return isSoundEnabled;
}

/**
 * Set the volume of the background music
 * @param {number} volume - Volume level (0.0 to 1.0)
 */
export function setMusicVolume(volume) {
    if (volume < 0 || volume > 1) {
        console.warn(`Invalid music volume: ${volume}. Must be between 0 and 1.`);
        return;
    }
    
    musicVolume = volume;
    
    if (backgroundMusic) {
        backgroundMusic.setVolume(musicVolume);
    }
    
    console.log(`Music volume set to: ${musicVolume}`);
}

/**
 * Set the volume of sound effects
 * @param {number} volume - Volume level (0.0 to 1.0)
 */
export function setSoundVolume(volume) {
    if (volume < 0 || volume > 1) {
        console.warn(`Invalid sound volume: ${volume}. Must be between 0 and 1.`);
        return;
    }
    
    soundVolume = volume;
    
    // Update volume for all loaded sound effects
    Object.values(soundEffects).forEach(sound => {
        if (sound && sound.setVolume) {
            sound.setVolume(soundVolume);
        }
    });
    
    console.log(`Sound effects volume set to: ${soundVolume}`);
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
 * Play a sound effect
 * @param {string} name - The name/key of the sound effect to play
 */
export function playSoundEffect(name) {
    // Only play sound if sound effects are enabled
    if (!isSoundEnabled) {
        return;
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
        }
        
        // Set the volume and play the sound
        sound.setVolume(volume);
        sound.play();
        
        console.log(`Playing sound effect: ${name} at volume ${volume}`);
    } else {
        console.warn(`Sound effect not found or not loaded: ${name}`);
    }
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
    
    // Increment counter and only play sound every other move
    playerMoveSoundCounter++;
    if (playerMoveSoundCounter % 2 !== 0) {
        return;
    }
    
    // Choose sound based on Alpha Mode status
    const soundName = isAlphaMode ? 'movePlayerSnake2' : 'movePlayerSnake1';
    
    // Get the sound effect
    const sound = soundEffects[soundName];
    if (sound && sound.buffer) {
        // If the sound is already playing, stop it first
        if (sound.isPlaying) {
            sound.stop();
        }
        
        // Set the volume using the movement sounds volume from config
        sound.setVolume(CONFIG.AUDIO_VOLUME.MOVEMENT_SOUNDS);
        sound.play();
        
        console.log(`Playing ${isAlphaMode ? 'Alpha Mode' : 'regular'} movement sound: ${soundName}`);
    } else {
        console.warn(`Sound effect not found or not loaded: ${soundName}`);
    }
}

/**
 * Reset the alpha kill voice counter to start from the first voice line
 */
export function resetAlphaKillVoiceCounter() {
    alphaKillVoiceIndex = 0;
    console.log("Alpha kill voice counter reset");
}

/**
 * Play the next alpha kill voice line in sequence
 * Cycles through all available voice lines
 */
export function playAlphaKillVoice() {
    // Only play sound if sound effects are enabled
    if (!isSoundEnabled) {
        return;
    }
    
    // Array of alpha kill voice sound names in order
    const alphaKillVoices = [
        'alphaKill1',
        'alphaKill2',
        'alphaKill3',
        'alphaKill4Monster',
        'alphaKill5',
        'alphaKill6',
        'alphaKill7',
        'alphaKill8',
        'alphaKill9',
        'alphaKill10',
        'alphaKill11'
    ];
    
    // Get the current voice line
    const voiceName = alphaKillVoices[alphaKillVoiceIndex];
    
    // Increment the counter for next time, wrapping around if needed
    alphaKillVoiceIndex = (alphaKillVoiceIndex + 1) % alphaKillVoices.length;
    
    // Play the voice line
    playSoundEffect(voiceName);
    
    console.log(`Playing alpha kill voice: ${voiceName} (index: ${alphaKillVoiceIndex})`);
}

/**
 * Clean up audio resources
 */
export function cleanupAudio() {
    // Stop background music
    if (backgroundMusic) {
        backgroundMusic.stop();
    }
    
    // Stop all sound effects
    Object.values(soundEffects).forEach(sound => {
        if (sound && sound.isPlaying) {
            sound.stop();
        }
    });
    
    console.log("Audio system cleaned up");
}
