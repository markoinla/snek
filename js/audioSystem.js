import * as THREE from 'three';
import * as CONFIG from './config.js';
import { Logger } from './debugLogger.js';

// Detection for mobile devices
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                      (window.innerWidth <= 800 && window.innerHeight <= 600);

// Core audio system variables
let audioListener = null;
let audioLoader = null;
let audioContext = null;
let backgroundMusic = null;
let musicLoaded = false;
let audioSystemReady = false;

// Hack to fix audio in Chrome
let audioContextStarted = false;

// Sound pooling - use a limited pool of audio objects to prevent too many sounds
const MAX_CONCURRENT_SOUNDS = isMobileDevice ? 5 : 12; 
const soundPool = [];
const soundBuffers = {}; 

// Sound categories for priority handling
const SOUND_CATEGORIES = {
    MOVEMENT: 'movement',
    EFFECT: 'effect',
    VOICE: 'voice',
    EXPLOSION: 'explosion',
    UI: 'ui'
};

// Track number of sounds playing per category
const activeSoundCounts = {
    [SOUND_CATEGORIES.MOVEMENT]: 0,
    [SOUND_CATEGORIES.EFFECT]: 0,
    [SOUND_CATEGORIES.VOICE]: 0,
    [SOUND_CATEGORIES.EXPLOSION]: 0,
    [SOUND_CATEGORIES.UI]: 0
};

// Max sounds per category
const maxSoundsPerCategory = {
    [SOUND_CATEGORIES.MOVEMENT]: isMobileDevice ? 1 : 2,
    [SOUND_CATEGORIES.EFFECT]: isMobileDevice ? 2 : 4,
    [SOUND_CATEGORIES.VOICE]: 1,
    [SOUND_CATEGORIES.EXPLOSION]: isMobileDevice ? 1 : 2,
    [SOUND_CATEGORIES.UI]: 1
};

// Sound effect definitions with categories
const effectsToLoad = [
    { name: 'movePlayerSnake1', path: 'assets/sounds/move_player_snake_1.ogg', critical: true, category: SOUND_CATEGORIES.MOVEMENT },
    { name: 'movePlayerSnake2', path: 'assets/sounds/move_player_snake_2.ogg', critical: false, category: SOUND_CATEGORIES.MOVEMENT },
    { name: 'eatApple', path: 'assets/sounds/eat_apple.ogg', critical: true, category: SOUND_CATEGORIES.EFFECT },
    { name: 'eatFrog', path: 'assets/sounds/eat_frog.ogg', critical: true, category: SOUND_CATEGORIES.EFFECT },
    { name: 'eatSnake', path: 'assets/sounds/eat_snake.ogg', critical: true, category: SOUND_CATEGORIES.EFFECT },
    { name: 'playerDeath', path: 'assets/sounds/died_player.ogg', critical: true, category: SOUND_CATEGORIES.EFFECT },
    { name: 'alphaKillExplode1', path: 'assets/sounds/alpha_kill_explode_1.ogg', critical: true, category: SOUND_CATEGORIES.EXPLOSION },
    { name: 'alphaKillExplode2', path: 'assets/sounds/alpha_kill_explode_2.ogg', critical: !isMobileDevice, category: SOUND_CATEGORIES.EXPLOSION },
    { name: 'alphaKill1', path: 'assets/sounds/alpha_kill_1_firstblood.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill2', path: 'assets/sounds/alpha_kill_2_Double_Kill.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill3', path: 'assets/sounds/alpha_kill_3triple_kill.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill4Monster', path: 'assets/sounds/alpha_kill_4_MonsterKill.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill4Unstoppable', path: 'assets/sounds/alpha_kill_4_Unstoppable.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill5', path: 'assets/sounds/alpha_kill_5_GodLike.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill6', path: 'assets/sounds/alpha_kill_6_Ownage.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill7', path: 'assets/sounds/alpha_kill_7_Killing_Spree.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill8', path: 'assets/sounds/alpha_kill_8_UltraKill.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill9', path: 'assets/sounds/alpha_kill_9_Rampage.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill10', path: 'assets/sounds/alpha_kill_10_MegaKill.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE },
    { name: 'alphaKill11', path: 'assets/sounds/alpha_kill_11_HolyShit.mp3', critical: !isMobileDevice, category: SOUND_CATEGORIES.VOICE }
];

// Audio state
let isMusicEnabled = CONFIG.AUDIO_ENABLED.MUSIC;
let isSoundEnabled = CONFIG.AUDIO_ENABLED.SOUND_EFFECTS;
let musicVolume = CONFIG.AUDIO_VOLUME.MUSIC;
let soundVolume = CONFIG.AUDIO_VOLUME.SOUND;

// Debug mode - set to true to see detailed audio logs
const DEBUG_AUDIO = true;

// Special tracking for player movement sounds
let playerMoveSoundCounter = 0;
let alphaKillVoiceIndex = 0;

// Path to background music
const MUSIC_PATH = 'assets/music/Darkman007 - Sad song.mp3';

/**
 * Initialize the audio system
 * @param {THREE.Camera} camera - The main camera to attach the audio listener to
 */
export function initAudioSystem(camera) {
    Logger.audio.info("Initializing audio system...");
    
    try {
        // Create an AudioListener and add it to the camera
        audioListener = new THREE.AudioListener();
        camera.add(audioListener);
        
        // Store reference to the audio context
        audioContext = audioListener.context;
        
        if (DEBUG_AUDIO) {
            console.log("Audio context state at init:", audioContext ? audioContext.state : "No context");
            console.log("AudioListener created:", !!audioListener);
        }
        
        // CRITICAL: Add a special handler for Safari/iOS
        // This is required because Safari handles audio context resume differently
        if (/iPhone|iPad|iPod|Safari/i.test(navigator.userAgent) && !navigator.userAgent.includes('Chrome')) {
            console.log("Safari/iOS detected, adding special audio handling");
            document.addEventListener('click', function safariAudioUnlock() {
                if (audioContextStarted) return;
                
                // Create and play a silent buffer to unlock audio
                const silentBuffer = audioContext.createBuffer(1, 1, 22050);
                const source = audioContext.createBufferSource();
                source.buffer = silentBuffer;
                source.connect(audioContext.destination);
                source.start(0);
                console.log("Safari audio unlock attempt");
                
                // Mark as unlocked
                audioContextStarted = true;
                
                // Remove this listener
                document.removeEventListener('click', safariAudioUnlock);
            }, {once: true});
        }
        
        // Create the audio loader
        audioLoader = new THREE.AudioLoader();
        
        // Initialize sound pool with a fixed number of audio objects
        initSoundPool();
        
        // Initialize background music
        backgroundMusic = new THREE.Audio(audioListener);
        
        // Load background music
        loadBackgroundMusic();
        
        // Initialize sound effects
        initSoundEffects();
        
        Logger.audio.info("Audio system initialized");
        
        // Add interaction listeners with multiple options to ensure audio starts
        setupAudioInteractionHandlers();
        
        // Forcibly try to start audio after a delay (for browsers that don't require interaction)
        setTimeout(() => {
            if (audioContext && audioContext.state !== 'running') {
                tryStartAudio();
            }
        }, 1000);
        
        // Try again later to catch any misses
        setTimeout(() => {
            if (audioContext && audioContext.state !== 'running') {
                tryStartAudio();
            }
        }, 5000);
        
        // Expose a test function globally for debugging
        window.testAudio = testAudioSystem;
        window.fixAudio = tryStartAudio; 
        window.playTestSound = playTestSound; 
        
        if (DEBUG_AUDIO) {
            console.log("Audio debug functions available in console:");
            console.log("- window.testAudio() - Test the audio system");
            console.log("- window.fixAudio() - Try to resume audio context");
            console.log("- window.playTestSound() - Force play a test sound");
        }
    } catch (error) {
        Logger.audio.error("Error initializing audio system:", error);
        console.error("Audio init error:", error);
    }
}

/**
 * Initialize sound effects - loads the sound effects that are marked as critical
 */
function initSoundEffects() {
    try {
        Logger.audio.info("Initializing sound effects...");
        
        if (!audioLoader) {
            console.error("Audio loader not initialized");
            return;
        }
        
        // Load all critical sounds immediately
        effectsToLoad.forEach(effect => {
            if (effect.critical) {
                loadSoundEffect(effect);
            }
        });
        
        // Start preloading non-critical sounds in the background
        if (CONFIG.AUDIO_PRELOAD_ALL) {
            setTimeout(() => {
                preloadAllSounds();
            }, 2000); // Start preloading after 2 seconds to not interfere with game startup
        }
    } catch (error) {
        Logger.audio.error("Error initializing sound effects:", error);
        console.error("Error initializing sound effects:", error);
    }
}

/**
 * Preload all non-critical sound effects in the background
 */
function preloadAllSounds() {
    console.log("Preloading all sound effects in background...");
    
    try {
        // Get list of sounds that aren't loaded yet
        const unloadedSounds = effectsToLoad.filter(effect => 
            !effect.critical && !soundBuffers[effect.name]);
            
        if (unloadedSounds.length === 0) {
            console.log("All sounds already loaded!");
            return;
        }
        
        // Create a queue to load sounds sequentially
        let currentIndex = 0;
        
        function loadNextSound() {
            if (currentIndex >= unloadedSounds.length) {
                console.log("Background preloading complete!");
                return;
            }
            
            const effect = unloadedSounds[currentIndex];
            currentIndex++;
            
            // Load the sound
            audioLoader.load(
                effect.path,
                function(buffer) {
                    soundBuffers[effect.name] = buffer;
                    console.log(`Preloaded sound: ${effect.name}`);
                    
                    // Load the next sound after a short delay
                    setTimeout(loadNextSound, 100);
                },
                function(xhr) {
                    // Progress callback (not used)
                },
                function(error) {
                    console.error(`Error preloading sound ${effect.name}:`, error);
                    // Continue with next sound even if one fails
                    setTimeout(loadNextSound, 100);
                }
            );
        }
        
        // Start loading
        loadNextSound();
    } catch (error) {
        console.error("Error in preloadAllSounds:", error);
    }
}

/**
 * Setup all audio interaction handlers to ensure audio works
 * after user interaction across different browsers
 */
function setupAudioInteractionHandlers() {
    // Create an array of all possible interaction events
    const interactionEvents = [
        'click', 'touchstart', 'touchend', 'mousedown', 'keydown'
    ];
    
    // Add all event listeners
    interactionEvents.forEach(eventType => {
        document.addEventListener(eventType, handleFirstUserInteraction, { once: true });
        // Also add to document body and window to be extra sure
        document.body.addEventListener(eventType, handleFirstUserInteraction, { once: true });
        window.addEventListener(eventType, handleFirstUserInteraction, { once: true });
    });
    
    if (DEBUG_AUDIO) {
        console.log("Set up multiple interaction handlers for audio");
    }
}

/**
 * Aggressive approach to try and start audio
 * Handles resuming contexts and initiating audio playback
 */
function tryStartAudio() {
    if (DEBUG_AUDIO) {
        console.log("Attempting to forcibly start audio...");
    }
    
    // Try to resume the audio context
    if (audioContext) {
        if (audioContext.state !== 'running') {
            console.log("Resuming audio context from state:", audioContext.state);
            
            // Use promise with both then and catch
            audioContext.resume().then(() => {
                console.log("Successfully resumed audio context, new state:", audioContext.state);
                
                // If music is enabled but not playing, start it
                if (isMusicEnabled && musicLoaded && backgroundMusic && !backgroundMusic.isPlaying) {
                    // Force enable music
                    isMusicEnabled = true;
                    
                    // Directly play background music
                    try {
                        backgroundMusic.play();
                        console.log("Started background music");
                    } catch (e) {
                        console.error("Error playing background music:", e);
                    }
                }
                
                // Try to play a test sound to confirm everything works
                setTimeout(() => {
                    if (isSoundEnabled) {
                        // Force enable sound
                        isSoundEnabled = true;
                        
                        // Try to play a test sound
                        playMovePlayerSound();
                    }
                }, 300);
                
                // Mark the system as ready
                audioSystemReady = true;
                audioContextStarted = true;
                
            }).catch(err => {
                console.error("Failed to resume audio context:", err);
            });
        } else {
            console.log("Audio context already running");
            
            // Still try to play music if applicable
            if (isMusicEnabled && musicLoaded && backgroundMusic && !backgroundMusic.isPlaying) {
                try {
                    backgroundMusic.play();
                    console.log("Started background music (context already running)");
                } catch (e) {
                    console.error("Error playing background music:", e);
                }
            }
        }
    } else {
        console.error("No audio context available");
    }
}

/**
 * Handle first user interaction to start audio
 * This is needed to work around browser autoplay restrictions
 */
export function handleFirstUserInteraction() {
    Logger.audio.info("Handling user interaction for audio...");
    
    try {
        // Try our aggressive audio start approach
        tryStartAudio();
        
        // Remove all event listeners since we only need one interaction
        const interactionEvents = [
            'click', 'touchstart', 'touchend', 'mousedown', 'keydown'
        ];
        
        interactionEvents.forEach(eventType => {
            document.removeEventListener(eventType, handleFirstUserInteraction);
            document.body.removeEventListener(eventType, handleFirstUserInteraction);
            window.removeEventListener(eventType, handleFirstUserInteraction);
        });
        
        Logger.audio.info("Audio system fully initialized by user interaction");
    } catch (error) {
        Logger.audio.error("Error in handleFirstUserInteraction:", error);
        console.error("First interaction error:", error);
    }
}

/**
 * Initialize a pool of audio objects for sound effects
 * This prevents creation of too many audio objects which can cause performance issues
 */
function initSoundPool() {
    Logger.audio.info(`Initializing sound pool with ${MAX_CONCURRENT_SOUNDS} slots`);
    
    try {
        // Create a fixed pool of audio objects
        for (let i = 0; i < MAX_CONCURRENT_SOUNDS; i++) {
            const audio = new THREE.Audio(audioListener);
            
            // Set a safe volume (avoid non-finite values)
            try {
                audio.setVolume(soundVolume || 0.5);
            } catch (e) {
                console.error("Error setting audio volume:", e);
                audio.gain.gain.value = soundVolume || 0.5;
            }
            
            soundPool.push({
                audio: audio,
                inUse: false,
                name: null,
                category: null,  
                startTime: 0     
            });
        }
        
        if (DEBUG_AUDIO) {
            console.log(`Created sound pool with ${soundPool.length} audio objects`);
        }
    } catch (error) {
        Logger.audio.error("Error initializing sound pool:", error);
        console.error("Sound pool init error:", error);
    }
}

/**
 * Load a sound effect into the buffer cache
 * @param {Object} soundDef - Definition object with name and path
 */
function loadSoundEffect(soundDef) {
    if (!audioLoader) {
        Logger.audio.error("Cannot load sound effect - audio loader not initialized");
        return;
    }
    
    if (DEBUG_AUDIO) {
        console.log(`Loading sound effect: ${soundDef.name} from ${soundDef.path}`);
    }
    
    try {
        audioLoader.load(
            soundDef.path,
            (buffer) => {
                // Store just the buffer
                soundBuffers[soundDef.name] = buffer;
                
                if (DEBUG_AUDIO) {
                    console.log(`Successfully loaded sound effect: ${soundDef.name}`);
                }
            },
            (progress) => {
                // Loading progress
                Logger.audio.debug(`Sound effect ${soundDef.name} loading: ${(progress.loaded / progress.total * 100).toFixed(0)}%`);
            },
            (error) => {
                Logger.audio.error(`Error loading sound effect ${soundDef.name}:`, error);
                console.error(`Failed to load sound ${soundDef.name} from ${soundDef.path}:`, error);
            }
        );
    } catch (error) {
        Logger.audio.error(`Critical error loading sound effect ${soundDef.name}:`, error);
        console.error(`Critical error loading sound ${soundDef.name}:`, error);
    }
}

/**
 * Load background music
 */
function loadBackgroundMusic() {
    if (!audioLoader || !audioListener) {
        Logger.audio.error("Cannot load background music - audio system not initialized");
        return;
    }

    Logger.audio.info("Loading background music...");
    
    try {
        audioLoader.load(
            MUSIC_PATH,
            (buffer) => {
                if (backgroundMusic) {
                    backgroundMusic.setBuffer(buffer);
                    backgroundMusic.setLoop(true);
                    backgroundMusic.setVolume(musicVolume);
                    musicLoaded = true;
                    
                    Logger.audio.info("Background music loaded successfully");
                    
                    // Auto-play music if already enabled
                    if (isMusicEnabled && audioSystemReady) {
                        playBackgroundMusic();
                    }
                }
            },
            (progress) => {
                Logger.audio.debug(`Music loading: ${(progress.loaded / progress.total * 100).toFixed(0)}%`);
            },
            (error) => {
                Logger.audio.error("Error loading background music:", error);
            }
        );
    } catch (error) {
        Logger.audio.error("Critical error loading background music:", error);
    }
}

/**
 * Get an available sound from the pool based on category priority
 * @param {string} category - The sound category 
 * @returns {THREE.Audio|null} An available audio object or null if audio system not ready
 */
function getAvailableSound(category) {
    try {
        // Make sure we have a valid audio system
        if (!audioListener || !soundPool || soundPool.length === 0) {
            console.error("Cannot get sound - invalid audio system state");
            return null;
        }
        
        // Check if we've reached the limit for this category
        if (activeSoundCounts[category] >= maxSoundsPerCategory[category]) {
            // Find oldest sound in this category to recycle
            let oldestSound = null;
            let oldestTime = Infinity;
            
            for (let i = 0; i < soundPool.length; i++) {
                const sound = soundPool[i];
                if (sound.category === category && sound.inUse && 
                    sound.audio.startTime && sound.audio.startTime < oldestTime) {
                    oldestTime = sound.audio.startTime;
                    oldestSound = sound;
                }
            }
            
            // If we found an older sound in the same category, reuse it
            if (oldestSound) {
                const audio = oldestSound.audio;
                if (audio.isPlaying) {
                    try {
                        // Stop properly to avoid the "already playing" warning later
                        audio.stop();
                        // Small delay to ensure stop completes
                        audio.source.onended = null;
                        audio.source = null;
                        audio.buffer = null;
                    } catch (e) {
                        console.warn("Non-critical error stopping sound:", e);
                    }
                }
                return audio;
            }
        }
        
        // Otherwise, find any unused sound
        for (let i = 0; i < soundPool.length; i++) {
            const sound = soundPool[i];
            if (!sound.inUse || !sound.audio.isPlaying) {
                sound.inUse = true;
                sound.category = category; 
                activeSoundCounts[category]++; 
                
                // Make sure the sound is properly stopped first
                if (sound.audio.isPlaying) {
                    try {
                        sound.audio.stop();
                        sound.audio.source.onended = null;
                        sound.audio.source = null;
                        sound.audio.buffer = null;
                    } catch (e) {
                        console.warn("Non-critical error resetting sound:", e);
                    }
                }
                
                return sound.audio;
            }
        }
        
        // If all sounds are in use, find the oldest one from any low-priority category
        // Order of priority (highest to lowest): VOICE > EXPLOSION > EFFECT > MOVEMENT
        const categoryPriority = [
            SOUND_CATEGORIES.MOVEMENT, 
            SOUND_CATEGORIES.EFFECT,
            SOUND_CATEGORIES.EXPLOSION,
            SOUND_CATEGORIES.VOICE
        ];
        
        // Only steal from categories with lower priority
        const categoryIndex = categoryPriority.indexOf(category);
        const stealableCategories = categoryPriority.slice(0, categoryIndex);
        
        let oldestSound = null;
        let oldestTime = Infinity;
        
        // Find the oldest sound from a stealable category
        for (let i = 0; i < soundPool.length; i++) {
            const sound = soundPool[i];
            if (stealableCategories.includes(sound.category) && sound.inUse && 
                sound.audio.startTime && sound.audio.startTime < oldestTime) {
                oldestTime = sound.audio.startTime;
                oldestSound = sound;
            }
        }
        
        // If we found a sound to steal, use it
        if (oldestSound) {
            const audio = oldestSound.audio;
            if (audio.isPlaying) {
                try {
                    // Properly stop and reset
                    audio.stop();
                    audio.source.onended = null;
                    audio.source = null;
                    audio.buffer = null;
                } catch (e) {
                    console.warn("Non-critical error stopping stolen sound:", e);
                }
            }
            
            // Decrement the count for the old category
            activeSoundCounts[oldestSound.category]--;
            
            // Update to the new category
            oldestSound.category = category;
            activeSoundCounts[category]++;
            
            return audio;
        }
        
        // Last resort - get the first available sound regardless of category
        const fallbackSound = soundPool[0];
        if (fallbackSound) {
            const audio = fallbackSound.audio;
            if (audio.isPlaying) {
                try {
                    // Properly stop and reset
                    audio.stop();
                    audio.source.onended = null;
                    audio.source = null;
                    audio.buffer = null;
                } catch (e) {
                    console.warn("Non-critical error stopping fallback sound:", e);
                }
            }
            
            // Update counts
            if (fallbackSound.category) {
                activeSoundCounts[fallbackSound.category]--;
            }
            
            fallbackSound.inUse = true;
            fallbackSound.category = category;
            activeSoundCounts[category]++;
            
            return audio;
        }
        
        return null; 
    } catch (error) {
        console.error("Error in getAvailableSound:", error);
        return null;
    }
}

/**
 * Play a sound effect if sound is enabled
 * @param {string} name - Name of the sound effect to play
 * @param {number} [volume] - Optional volume override
 * @param {boolean} [forcePlay] - Force play even if category limits are reached
 * @returns {boolean} True if sound was played, false otherwise
 */
export function playSoundEffect(name, volume, forcePlay = false) {
    if (!isSoundEnabled) return false;
    
    try {
        // Try to find the sound definition
        const effectDef = effectsToLoad.find(effect => effect.name === name);
        if (!effectDef) {
            Logger.audio.error(`Sound effect not found: ${name}`);
            return false;
        }
        
        // Get the category for this sound
        const category = effectDef.category || SOUND_CATEGORIES.EFFECT;
        
        // Check if we've reached the limit for this category and aren't forcing
        if (!forcePlay && activeSoundCounts[category] >= maxSoundsPerCategory[category]) {
            // Skip this sound, we're already playing enough of this category
            //console.log(`Skipping sound ${name}, category ${category} at limit (${activeSoundCounts[category]}/${maxSoundsPerCategory[category]})`);
            return false;
        }
        
        // Lazy-load the sound buffer if needed
        if (!soundBuffers[name]) {
            loadSoundEffect(effectDef);
            console.log(`Loading sound effect: ${name} from ${effectDef.path}`);
            // We'll try to play it next time since the buffer isn't loaded yet
            return false;
        }
        
        // Get an available sound object from the pool for this category
        const sound = getAvailableSound(category);
        if (!sound) {
            console.error("Cannot play sound - no available sound objects");
            return false;
        }
        
        // Set the buffer and play the sound
        sound.setBuffer(soundBuffers[name]);
        
        // Set the volume - ENSURE IT'S A VALID NUMBER
        const finalVolume = (volume !== undefined && !isNaN(volume) && isFinite(volume)) 
            ? Math.min(Math.max(volume, 0), 1) 
            : (soundVolume || 0.5); 
            
        try {
            // Use a safe method to set volume
            if (sound.gain && sound.gain.gain) {
                // Direct method
                sound.gain.gain.value = finalVolume;
            } else {
                // THREE.js method
                sound.setVolume(finalVolume);
            }
        } catch (e) {
            console.error("Error setting volume:", e);
            // Last resort fallback
            try {
                sound.gain.gain.setValueAtTime(finalVolume, audioContext.currentTime);
            } catch (e2) {
                console.error("Critical error setting volume, using fixed value:", e2);
                // Absolute last resort
                if (sound.gain && sound.gain.gain) {
                    sound.gain.gain.value = 0.3; 
                }
            }
        }
        
        // Record start time for prioritization
        sound.startTime = audioContext.currentTime;
        
        // Play the sound
        sound.play();
        //console.log(`Playing sound: ${name} (${category}) with volume ${finalVolume}, count: ${activeSoundCounts[category]}/${maxSoundsPerCategory[category]}`);
        
        // Set up a callback for when the sound finishes
        sound.onEnded = () => {
            const poolIndex = soundPool.findIndex(poolSound => poolSound.audio === sound);
            if (poolIndex !== -1) {
                // Decrement the count for this category
                const category = soundPool[poolIndex].category;
                if (category) {
                    activeSoundCounts[category]--;
                }
                
                // Mark as not in use
                soundPool[poolIndex].inUse = false;
                soundPool[poolIndex].name = null;
                soundPool[poolIndex].category = null;
            }
        };
        
        return true;
    } catch (error) {
        Logger.audio.error(`Error playing sound effect ${name}:`, error);
        console.error(`Error playing ${name}:`, error);
        return false;
    }
}

/**
 * Play a player snake movement sound based on Alpha Mode status
 * Uses move_player_snake_1.ogg for regular movement
 * Uses move_player_snake_2.ogg for Alpha Mode movement
 * Only plays a sound every other move to reduce sound frequency
 * @param {boolean} isAlphaMode - Whether the player is currently in Alpha Mode
 */
export function playPlayerMovementSound() {
    if (!isSoundEnabled) return;
    
    try {
        // Only play movement sound on every fourth call to avoid too many sounds
        playerMoveSoundCounter = (playerMoveSoundCounter + 1) % 4;
        if (playerMoveSoundCounter !== 0) {
            return; 
        }
        
        // Choose sound based on Alpha Mode status
        const soundName = window.isAlphaMode ? 'movePlayerSnake2' : 'movePlayerSnake1';
        
        // Always use a fixed volume for movement sounds
        // This is important to avoid volume-related audio issues
        const success = playSoundEffect(soundName, 0.4);
        
        if (!success && !soundBuffers[soundName]) {
            // If the sound failed because it's not loaded yet, try to load it now
            const soundDef = effectsToLoad.find(effect => effect.name === soundName);
            if (soundDef) {
                loadSoundEffect(soundDef);
                Logger.audio.debug(`Attempted to load missing movement sound: ${soundName}`);
            }
        }
        
        // Reset sound counter periodically to ensure we don't get stuck in a bad state
        // where sounds don't play due to sound effect pool issues
        if (Math.random() < 0.1) { // 10% chance on each move
            resetSoundPool();
        }
    } catch (error) {
        console.error("Error playing player movement sound:", error);
    }
}

/**
 * Reset the sound pool state to ensure sounds can still play
 * This helps recover from potential stalled states
 */
function resetSoundPool() {
    try {
        // Find sounds that are marked as in-use but aren't actually playing
        for (let i = 0; i < soundPool.length; i++) {
            const sound = soundPool[i];
            if (sound.inUse && !sound.audio.isPlaying) {
                // Reset this sound slot
                sound.inUse = false;
                sound.name = null;
                
                // Update category counts if needed
                if (sound.category) {
                    activeSoundCounts[sound.category]--;
                    sound.category = null;
                }
                
                Logger.audio.debug("Reset stalled sound in pool");
            }
        }
    } catch (error) {
        console.error("Error resetting sound pool:", error);
    }
}

/**
 * Play a test sound directly (bypassing normal checks)
 * This is useful for debugging audio issues
 */
function playTestSound() {
    console.log("Attempting to force-play a test sound...");
    
    try {
        // First try to resume the context
        if (audioContext && audioContext.state !== 'running') {
            console.log("Audio context not running, attempting to resume...");
            audioContext.resume().then(() => {
                console.log("Audio context resumed, now trying to play sound");
                forcePlaySound();
            }).catch(err => {
                console.error("Failed to resume audio context:", err);
                // Try anyway
                forcePlaySound();
            });
        } else {
            forcePlaySound();
        }
    } catch (error) {
        console.error("Error in playTestSound:", error);
    }
    
    function forcePlaySound() {
        try {
            // Try creating a simple oscillator
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            gain.gain.value = 0.1; 
            osc.connect(gain);
            gain.connect(audioContext.destination);
            
            osc.frequency.value = 440; 
            osc.start(0);
            console.log("Test tone started");
            
            // Stop after 1 second
            setTimeout(() => {
                osc.stop();
                console.log("Test tone stopped");
                
                // Now try to play a sound effect
                console.log("Attempting to play movePlayerSnake1 sound...");
                const success = playSoundEffect('movePlayerSnake1');
                console.log("Sound effect play result:", success);
            }, 1000);
        } catch (e) {
            console.error("Failed to play oscillator:", e);
        }
    }
}

/**
 * Play the background music
 */
export function playBackgroundMusic() {
    if (!musicLoaded || !isMusicEnabled || !backgroundMusic) {
        return false;
    }
    
    try {
        // Don't restart if already playing
        if (backgroundMusic.isPlaying) {
            return true;
        }
        
        Logger.audio.info("Playing background music...");
        
        // Make sure music is set to loop and has correct volume
        backgroundMusic.setLoop(true);
        backgroundMusic.setVolume(musicVolume);
        backgroundMusic.play();
        
        return true;
    } catch (error) {
        Logger.audio.error("Error playing background music:", error);
        
        // Try to recover by restarting the audio context
        if (audioContext && audioContext.state !== 'running') {
            audioContext.resume().catch(e => {
                Logger.audio.warn("Could not resume audio context:", e);
            });
        }
        
        return false;
    }
}

/**
 * Toggle background music on/off
 * @param {boolean} forceState - Optional, force a specific state (on/off)
 * @returns {boolean} - The new music state (true = on, false = off)
 */
export function toggleMusic(forceState) {
    // If a state is forced, use that value
    if (forceState !== undefined) {
        isMusicEnabled = forceState;
    } else {
        // Otherwise toggle the current state
        isMusicEnabled = !isMusicEnabled;
    }
    
    if (DEBUG_AUDIO) {
        console.log(`Music toggled to: ${isMusicEnabled ? 'ON' : 'OFF'}`);
    }
    
    // Apply the new state
    if (isMusicEnabled) {
        if (musicLoaded && backgroundMusic) {
            playBackgroundMusic();
        }
    } else {
        if (backgroundMusic && backgroundMusic.isPlaying) {
            pauseBackgroundMusic();
        }
    }
    
    // Try to restore audio context if needed
    if (isMusicEnabled && audioContext && audioContext.state !== 'running') {
        audioContext.resume().catch(e => console.error("Error resuming audio context:", e));
    }
    
    return isMusicEnabled;
}

/**
 * Toggle sound effects on/off
 * @param {boolean} forceState - Optional, force a specific state (on/off)
 * @returns {boolean} - The new sound state (true = on, false = off)
 */
export function toggleSound(forceState) {
    // If a state is forced, use that value
    if (forceState !== undefined) {
        isSoundEnabled = forceState;
    } else {
        // Otherwise toggle the current state
        isSoundEnabled = !isSoundEnabled;
    }
    
    if (DEBUG_AUDIO) {
        console.log(`Sound effects toggled to: ${isSoundEnabled ? 'ON' : 'OFF'}`);
    }
    
    // Stop all playing sound effects if disabling sound
    if (!isSoundEnabled) {
        soundPool.forEach(sound => {
            if (sound && sound.audio && sound.audio.isPlaying) {
                sound.audio.stop();
                sound.inUse = false;
            }
        });
    }
    
    // Try to restore audio context if needed
    if (isSoundEnabled && audioContext && audioContext.state !== 'running') {
        audioContext.resume().catch(e => console.error("Error resuming audio context:", e));
    }
    
    return isSoundEnabled;
}

/**
 * Check if background music is enabled
 * @returns {boolean} - True if music is on, false if off
 */
export function isMusicOn() {
    return isMusicEnabled;
}

/**
 * Check if sound effects are enabled
 * @returns {boolean} - True if sound effects are on, false if off
 */
export function isSoundOn() {
    return isSoundEnabled;
}

/**
 * Get the current background music volume
 * @returns {number} - Volume level (0.0 to 1.0)
 */
export function getMusicVolume() {
    return musicVolume;
}

/**
 * Get the current sound effects volume
 * @returns {number} - Volume level (0.0 to 1.0)
 */
export function getSoundVolume() {
    return soundVolume;
}

/**
 * Set the music volume
 * @param {number} volume - Volume level (0.0 to 1.0)
 */
export function setMusicVolume(volume) {
    if (volume < 0 || volume > 1) {
        Logger.audio.warn(`Invalid music volume: ${volume}. Must be between 0 and 1.`);
        return;
    }
    
    musicVolume = volume;
    
    // Update the volume of the background music if it's loaded
    if (backgroundMusic) {
        backgroundMusic.setVolume(musicVolume);
        Logger.audio.info(`Music volume set to: ${musicVolume}`);
    }
}

/**
 * Set the sound effects volume
 * @param {number} volume - Volume level (0.0 to 1.0)
 */
export function setSoundVolume(volume) {
    if (volume < 0 || volume > 1) {
        Logger.audio.warn(`Invalid sound volume: ${volume}. Must be between 0 and 1.`);
        return;
    }
    
    soundVolume = volume;
    
    // Update volume for all sound pool objects
    soundPool.forEach(sound => {
        if (sound && sound.audio.isObject3D) {
            sound.audio.setVolume(soundVolume);
        }
    });
    
    Logger.audio.info(`Sound effects volume set to: ${soundVolume}`);
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
    
    // Also play an explosion sound effect - only use explosion1 as requested
    setTimeout(() => playSoundEffect('alphaKillExplode1'), 100);
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
 * Clean up audio resources
 * This function should be called when changing scenes or closing the game
 * to properly release audio resources and prevent memory leaks
 * @returns {boolean} Whether music was playing before cleanup
 */
export function cleanupAudio() {
    Logger.audio.info("Cleaning up audio resources...");
    
    // Remember if music was playing before cleanup
    const wasMusicPlaying = backgroundMusic && backgroundMusic.isPlaying;
    
    // Don't stop background music - preserve it playing continuously
    // This way the music won't restart after player death
    
    try {
        // Stop all sound effects in the pool
        soundPool.forEach(sound => {
            if (sound && sound.audio.isPlaying) {
                try {
                    sound.audio.stop();
                    sound.inUse = false;
                    sound.name = null;
                } catch (e) {
                    // Ignore errors when stopping sounds
                }
            }
        });
        
        // Check the audio context health
        if (audioContext && audioContext.state !== 'running') {
            Logger.audio.warn(`Audio context is in state: ${audioContext.state}, attempting recovery`);
            
            try {
                // Try to resume the audio context
                audioContext.resume().catch(e => {
                    Logger.audio.warn("Could not resume audio context:", e);
                });
            } catch (e) {
                // Ignore errors in the recovery process
            }
        }
    } catch (error) {
        Logger.audio.error("Error during audio cleanup:", error);
    }
    
    Logger.audio.info("Sound effects stopped and cleaned up (music preserved)");
    
    // Return whether music was playing, so caller can decide to restart it if needed
    return wasMusicPlaying;
}

/**
 * Restore music playback if it was previously enabled
 * Call this after cleaning up audio resources if you want to resume music
 */
export function restoreMusicIfEnabled() {
    // Only attempt to restore music if it's enabled in settings and not already playing
    if (isMusicEnabled && musicLoaded && backgroundMusic && !backgroundMusic.isPlaying) {
        Logger.audio.info("Attempting to restore background music playback");
        // Small delay to ensure audio context has time to reset
        setTimeout(() => {
            playBackgroundMusic();
        }, 100);
    }
}

/**
 * Perform a health check on the audio system and try to recover if issues are detected
 * Call this periodically to ensure the audio system remains stable
 */
export function performAudioHealthCheck() {
    if (!audioListener || !audioContext) return;
    
    try {
        // Check audio context state
        if (audioContext.state !== 'running') {
            Logger.audio.warn(`Audio health check: context is ${audioContext.state}, attempting recovery`);
            audioContext.resume().catch(e => {
                Logger.audio.error("Failed to resume audio context:", e);
            });
        }
        
        // Check for leaked audio resources
        let playingSounds = 0;
        soundPool.forEach(sound => {
            if (sound.audio.isPlaying) {
                playingSounds++;
            }
        });
        
        // If too many sounds are playing, do a cleanup
        if (playingSounds > MAX_CONCURRENT_SOUNDS - 1) {
            Logger.audio.warn(`Audio health check: ${playingSounds} sounds playing, cleaning up`);
            
            // Find the oldest playing sound and stop it
            let oldestSound = null;
            let oldestTime = Infinity;
            
            soundPool.forEach(sound => {
                if (sound.audio.isPlaying && sound.audio.startTime && sound.audio.startTime < oldestTime) {
                    oldestTime = sound.audio.startTime;
                    oldestSound = sound;
                }
            });
            
            if (oldestSound) {
                oldestSound.audio.stop();
                oldestSound.inUse = false;
                Logger.audio.info(`Stopped oldest sound: ${oldestSound.name || 'unknown'}`);
            }
        }
    } catch (error) {
        Logger.audio.error("Error in audio health check:", error);
    }
}

/**
 * Test the audio system by trying to play a test sound
 * This is helpful for debugging audio issues
 */
function testAudioSystem() {
    console.log("======= AUDIO SYSTEM TEST =======");
    console.log("AudioListener exists:", !!audioListener);
    console.log("AudioContext exists:", !!audioContext);
    console.log("AudioContext state:", audioContext ? audioContext.state : "N/A");
    console.log("Sound enabled:", isSoundEnabled);
    console.log("Music enabled:", isMusicEnabled);
    console.log("Sound pool size:", soundPool.length);
    console.log("Loaded sound buffers:", Object.keys(soundBuffers));
    
    // Try to resume the audio context
    if (audioContext && audioContext.state === "suspended") {
        console.log("Attempting to resume suspended audio context...");
        audioContext.resume().then(() => {
            console.log("Audio context resumed successfully");
        }).catch(err => {
            console.error("Failed to resume audio context:", err);
        });
    }
    
    // Try to create a simple test sound
    try {
        const testOscillator = audioContext.createOscillator();
        testOscillator.type = 'sine';
        testOscillator.frequency.setValueAtTime(440, audioContext.currentTime); 
        
        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime); 
        
        testOscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        testOscillator.start();
        console.log("Test tone started");
        
        // Stop after 1 second
        setTimeout(() => {
            testOscillator.stop();
            console.log("Test tone stopped");
            
            // Now try to play a sound effect
            console.log("Attempting to play movePlayerSnake1 sound...");
            const success = playSoundEffect('movePlayerSnake1');
            console.log("Sound effect play result:", success);
        }, 1000);
    } catch (error) {
        console.error("Error playing test sound:", error);
    }
    
    console.log("================================");
}

/**
 * Backward compatibility function that forwards to playPlayerMovementSound
 * @param {boolean} isAlphaMode - Whether the player is in Alpha Mode (not used anymore)
 */
export function playPlayerMoveSound(isAlphaMode = false) {
    // Set the global Alpha Mode state for the sound function to use
    window.isAlphaMode = isAlphaMode;
    
    // Call the new implementation
    playPlayerMovementSound();
}

/**
 * Reset the alpha kill voice counter to start from the first voice line
 */
export function resetAlphaKillVoiceCounter() {
    alphaKillVoiceIndex = 0;
    Logger.audio.info("Alpha kill voice counter reset");
}

/**
 * Play the player snake movement sound directly, without checks
 * Useful for testing the audio system
 */
function playMovePlayerSound() {
    console.log("Attempting to play player movement sound (direct method)...");
    
    try {
        // Load the sound if needed
        if (!soundBuffers['movePlayerSnake1']) {
            console.log("Sound buffer not loaded, attempting to load...");
            
            // Find the sound definition
            const soundDef = effectsToLoad.find(effect => effect.name === 'movePlayerSnake1');
            if (!soundDef) {
                console.error("Sound definition not found");
                return;
            }
            
            // Load it immediately and synchronously
            const request = new XMLHttpRequest();
            request.open('GET', soundDef.path, false); 
            request.responseType = 'arraybuffer';
            
            request.onload = function() {
                audioContext.decodeAudioData(request.response, function(buffer) {
                    soundBuffers['movePlayerSnake1'] = buffer;
                    console.log("Successfully loaded sound buffer synchronously");
                    
                    // Now play it
                    playWithBuffer(buffer);
                }, function(error) {
                    console.error("Error decoding audio data:", error);
                });
            };
            
            request.onerror = function() {
                console.error("Error loading sound file");
            };
            
            request.send();
        } else {
            // We already have the buffer, play it
            playWithBuffer(soundBuffers['movePlayerSnake1']);
        }
    } catch (error) {
        console.error("Error in playMovePlayerSound:", error);
    }
    
    function playWithBuffer(buffer) {
        try {
            // Get a sound from the pool
            const sound = getAvailableSound();
            if (!sound) {
                console.error("No available sound object in pool");
                return;
            }
            
            // Set the buffer
            sound.setBuffer(buffer);
            
            // Set volume and play - use fixed value to avoid any issues
            try {
                // Use the direct gain method which is more reliable
                if (sound.gain && sound.gain.gain) {
                    sound.gain.gain.value = 0.5;
                } else {
                    sound.setVolume(0.5);
                }
            } catch (e) {
                console.error("Error setting volume:", e);
                // Last resort fallback
                try {
                    sound.gain.gain.setValueAtTime(0.5, audioContext.currentTime);
                } catch (e2) {
                    console.error("Critical volume error:", e2);
                }
            }
            
            // Play the sound
            sound.play();
            console.log("Successfully played movement sound!");
            
            // Set cleanup callback
            sound.onEnded = () => {
                const poolIndex = soundPool.findIndex(poolSound => poolSound.audio === sound);
                if (poolIndex !== -1) {
                    soundPool[poolIndex].inUse = false;
                }
                console.log("Sound playback completed");
            };
        } catch (e) {
            console.error("Error playing sound with buffer:", e);
        }
    }
}
