# Admin Panel Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a lil-gui admin panel (gated behind `?admin=1`) that lets the developer tweak all game config values at runtime, with localStorage persistence.

**Architecture:** Refactor `config.js` from individual `export const` declarations to a single mutable `export default` object. All 25 consumer files change `import * as CONFIG` to `import CONFIG` (same access pattern, zero logic changes). A new `adminPanel.js` creates a lil-gui panel that binds directly to the config object. A `saveOverrides`/`resetAllConfig` pair handles localStorage.

**Tech Stack:** lil-gui (GUI library), localStorage (persistence), Vite dynamic import (code splitting)

---

### Task 1: Install lil-gui

**Files:**
- Modify: `packages/client/package.json`

**Step 1: Install the dependency**

Run:
```bash
pnpm -C packages/client add lil-gui
```

**Step 2: Commit**

```bash
git add packages/client/package.json pnpm-lock.yaml
git commit -m "chore: add lil-gui dependency for admin panel"
```

---

### Task 2: Refactor config.js to mutable default export

**Files:**
- Modify: `packages/client/src/config.js`

**Step 1: Rewrite config.js**

Replace the entire file with a single mutable object as the default export, plus persistence helpers. The key changes:
- All `export const X = value` become properties of a `CONFIG` object
- `export default CONFIG` replaces individual exports
- `DEFAULTS` frozen copy for reset
- `saveOverrides()`, `resetAllConfig()`, `getDefaults()` as named exports
- Auto-load localStorage overrides on module init

```js
// --- Configuration Constants ---
// All game settings in a single mutable object.
// Tweak at runtime via admin panel (?admin=1). Overrides persist in localStorage.

const CONFIG = {
    GRID_SIZE: 80,
    UNIT_SIZE: 1,
    BASE_SNAKE_SPEED: 0.25,
    CAMERA_DISTANCE: 9,
    CAMERA_HEIGHT: 12,
    CAMERA_LAG: 0.2,
    CAMERA_POSITION_SMOOTHNESS: 0.01,
    CAMERA_ROTATION_SMOOTHNESS: 0.06,
    SPRITE_SHEET_DIM: 2,
    NUM_INITIAL_FOOD: 100,
    MIN_SNAKE_LENGTH: 3,
    NUM_OBSTACLES: 30,
    POWERUP_TEXT_ANIMATION_DURATION: 1500,

    // Multiplayer settings
    MULTIPLAYER_DEFAULT_ENABLED: false,
    MULTIPLAYER_SERVER_URL: 'ws://localhost:2567',
    MULTIPLAYER_TICK_RATE: 30,

    // Food speed boost settings
    FOOD_SPEED_BOOST_DURATION: 7.0,
    FOOD_SPEED_BOOST_MULTIPLIER: 1.5,
    ALPHA_MODE_EXTENSION_PER_FOOD: 0.5,

    // Power-up settings
    POWERUP_SPEED_DURATION: 20.0,
    POWERUP_SPEED_MULTIPLIER: 1.3,
    POWERUP_SHRINK_AMOUNT: 3,
    POWERUP_SCORE_MULTIPLIER: 3.0,
    POWERUP_SCORE_MULTIPLIER_DURATION: 10.0,
    POWERUP_GHOST_DURATION: 8.0,

    // Alpha Mode score multiplier settings
    ALPHA_MODE_SCORE_MULTIPLIER: 1.8,
    ALPHA_MODE_SCORE_MULTIPLIER_DURATION: 5.0,
    ALPHA_MODE_MAX_SCORE_MULTIPLIER: 16.0,

    // Alpha Mode activation limits - DISABLED
    ALPHA_MODE_MAX_CONSECUTIVE_ACTIVATIONS: 999,
    ALPHA_MODE_COOLDOWN_DURATION: 0.1,

    // Alpha Points System
    ALPHA_POINTS_THRESHOLD: 30,
    ALPHA_POINTS_FOOD: 3,
    ALPHA_POINTS_FROG: 6,
    ALPHA_POINTS_ENEMY: 10,
    ALPHA_POINTS_DECAY_RATE: 0.8,
    ALPHA_POINTS_FROG_MULTIPLIER: 1.5,

    // Alpha Mode settings
    ALPHA_MODE_SCORE_THRESHOLD: 1000,
    ALPHA_MODE_DURATION: 6,
    ALPHA_MODE_SPEED_MULTIPLIER: 1.5,
    ALPHA_MODE_COLOR: 0x9C27B0,
    ALPHA_MODE_EXTENSION_PER_ENEMY: 1.5,

    // Audio settings
    AUDIO_VOLUME: {
        MUSIC: 0.3,
        MOVEMENT_SOUNDS: 0.4,
        EATING_SOUNDS: 0.5,
        ALPHA_MODE_SOUNDS: 0.6,
        DEATH_SOUND: 0.6
    },
    AUDIO_ENABLED: {
        MUSIC: false,
        SOUND_EFFECTS: true
    },
    AUDIO_PRELOAD_ALL: true,

    // Enemy snake settings
    NUM_ENEMIES: 8,
    ENEMY_START_LENGTH: 5,
    ENEMY_SNAKE_SPEED: 0.3,
    ENEMY_START_SAFE_ZONE: 10,
    ENEMY_TAIL_EDIBLE_SEGMENTS: 3,
    ENEMY_TAIL_COLOR: 0x4DD0E1,
    ENEMY_KILL_SCORE: 10,
    ENEMY_RESPAWN_TIME: 5,
    ENEMY_KILL_SEGMENTS: 5,

    // Player powerup settings
    ENLARGED_HEAD_DURATION: 0,
    ENLARGED_HEAD_SCALE: 1,

    // Particle effects
    PARTICLE_COUNT_KILL: 10,
    PARTICLE_COLOR_KILL: 0xFF5722,
    PARTICLE_COUNT_NORMAL_FOOD: 2,
    PARTICLE_COLOR_NORMAL_FOOD: 0x4CAF50,
    PARTICLE_COUNT_DEATH: 10,
    PARTICLE_SIZE: 2,
    PARTICLE_LIFESPAN: 0.2,
    PARTICLE_SPEED: 3.0,

    WALL_HEIGHT: 3,
    WALL_THICKNESS: 1,
    FOG_COLOR: 0xFFFFFF,
    FOG_DENSITY: 0.03,
    START_SAFE_ZONE: 5,
    GROUND_COLOR: 0x4682B4,

    // Camera shake settings
    CAMERA_SHAKE_ENABLED: true,
    CAMERA_SHAKE_DURATION: 0.2,
    CAMERA_SHAKE_INTENSITY: 3,

    // Food type spawn ratios (must add up to 100)
    FOOD_SPAWN_RATIOS: {
        normal: 89,
        speed: 5,
        shrink: 1,
        score_x2: 3,
        ghost: 2
    },

    // Game Modes Configuration
    GAME_MODES: {
        NORMAL: "normal",
        CASUAL: "casual"
    },
    DEFAULT_GAME_MODE: "normal",
    MODE_SETTINGS: {
        "normal": {
            SNAKE_SPEED_MULTIPLIER: 1.0,
            OBSTACLE_COUNT_MULTIPLIER: 1.0,
            FOOD_COUNT_MULTIPLIER: 1.0,
            ALPHA_POINTS_THRESHOLD_MULTIPLIER: 1.0,
            ALPHA_MODE_DURATION_MULTIPLIER: 1.0,
            COLLISION_FORGIVENESS: 0.2
        },
        "casual": {
            SNAKE_SPEED_MULTIPLIER: 0.7,
            OBSTACLE_COUNT_MULTIPLIER: 0.7,
            FOOD_COUNT_MULTIPLIER: 1.5,
            ALPHA_POINTS_THRESHOLD_MULTIPLIER: 0.7,
            ALPHA_MODE_DURATION_MULTIPLIER: 1.5,
            COLLISION_FORGIVENESS: 0.5
        }
    },

    // Game Text Configuration
    GAME_TEXT: {
        UI: {
            SCORE_LABEL: "SCORE",
            KILLS_LABEL: "KILLS",
            GAME_OVER: {
                TITLE: "GAME OVER!",
                SCORE_PREFIX: "FINAL SCORE: ",
                RESTART_BUTTON: "RESTART",
                HIGH_SCORE: "HIGH SCORE",
                DEATH_REASONS: {
                    WALL_COLLISION: "You crashed into a wall",
                    SELF_COLLISION: "You ate yourself",
                    ENEMY_COLLISION: "You choked on a snek",
                    OBSTACLE_COLLISION: "You crashed into an obstacle",
                    TREE_COLLISION: "You tried to eat a tree",
                    BUSH_COLLISION: "You got tangled in a bush"
                }
            },
        },
        ALPHA_MODE: {
            PROGRESS_LABEL: "",
            ACTIVE_LABEL: "Alpha SNEK!",
            ACTIVATED_MESSAGE: "ALPHA SNEK ACTIVATED!",
            DEACTIVATED_MESSAGE: "ALPHA SNEK DEACTIVATED",
            KILL_MESSAGE: "ALPHA KILL!",
            ALPHA_KILL_MESSAGES: [
                "ALPHA KILL",
                "DOUBLE KILL",
                "TRIPLE KILL",
                "M-M-M-MONSTER KILL",
                "UNSTOPPABLE",
                "GODLIKE",
                "SNEK KING",
                "SNEK EMPORER",
                "SNEK GOD",
                "THE ONE SNEK TO RULE THEM ALL",
                "YOU ARE OMEGA SNEK"
            ]
        },
        POWERUPS: {
            SPEED_BOOST: "Speed boost!",
            GHOST_MODE: "Ghost mode!",
            SHRINK: "Shrinkaaage!",
            SCORE_MULTIPLIER: "3x rewards!",
            ENEMY_KILLED_MESSAGES: [
                "MILOS SMELLS",
                "MILOS IS THE BEST",
                "MILOS IS A GOOD SNEK",
                "MILOS IS THE BEST SNEK",
                "MILOS IS BETTER THAN EVERYONE",
                "YOU ATE FILIP!",
                "YOU ATE MILOS!"
            ]
        },
        TUTORIAL: {
            CONTROLS: "Left/Right keys to turn your Snek",
            MOBILE_CONTROLS: "Press left/right buttons to turn your Snek",
            OBJECTIVE: "Eat food and other sneks to grow your anaconda. Eat a Snek by eating its tail.",
            ALPHA_MODE_HINT: "Fill up the alpha meter to become the ALPHA SNEK!"
        }
    },

    // Frog Movement Settings
    FROG_MOVEMENT: {
        BASE_SPEED: 2,
        SPEED_VARIATION: 0.5,
        HOP_HEIGHT: 0.2,
        HOP_FREQUENCY: 1.0,
        HOP_FREQUENCY_VARIATION: 0.5,
        MAX_DISTANCE: 3,
        DISTANCE_VARIATION: 1.0,
        DIRECTION_CHANGE_PROBABILITY: 0.005,
        MOVEMENT_STYLE: 'crawl',
        MOVE_INTERVAL: 0.5
    },
};

// --- Defaults (frozen deep copy for reset) ---
function deepFreeze(obj) {
    Object.freeze(obj);
    for (const val of Object.values(obj)) {
        if (val && typeof val === 'object') deepFreeze(val);
    }
    return obj;
}

const DEFAULTS = deepFreeze(JSON.parse(JSON.stringify(CONFIG)));

// --- Persistence ---
const STORAGE_KEY = 'snek_adminConfig';

function deepAssign(target, source) {
    for (const key of Object.keys(source)) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) &&
            target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
            deepAssign(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
}

export function saveOverrides() {
    try {
        const diff = {};
        for (const key of Object.keys(DEFAULTS)) {
            if (JSON.stringify(CONFIG[key]) !== JSON.stringify(DEFAULTS[key])) {
                diff[key] = CONFIG[key];
            }
        }
        if (Object.keys(diff).length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(diff));
        } else {
            localStorage.removeItem(STORAGE_KEY);
        }
    } catch (e) {
        console.warn('Failed to save config overrides:', e);
    }
}

export function resetAllConfig() {
    deepAssign(CONFIG, DEFAULTS);
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
}

export function getDefaults() {
    return DEFAULTS;
}

// Load saved overrides on module init
try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        deepAssign(CONFIG, JSON.parse(saved));
    }
} catch (e) {
    console.warn('Failed to load config overrides:', e);
}

export default CONFIG;
```

**Step 2: Commit**

```bash
git add packages/client/src/config.js
git commit -m "refactor: convert config to mutable default export with localStorage persistence"
```

---

### Task 3: Update all import statements

**Files (25 files):**

`packages/client/src/`:
- `particleSystem.js`, `playerSnake.js`, `modeTest.js`, `constants.js`, `gameModes.js`,
  `obstacles.js`, `enemySnake.js`, `utils.js`, `audioSystem.js`, `gameState.js`,
  `food.js`, `main.ts`, `sceneSetup.js`, `ui.js`, `materials.js`

`packages/client/src/core/`:
- `powerups.ts`, `combat.ts`, `spawn.ts`, `player.ts`, `alpha.ts`, `food.ts`, `enemy.ts`, `step.ts`

`packages/client/src/network/`:
- `colyseusClient.ts`

`packages/server/src/`:
- `index.ts`

**Step 1: Find-and-replace all imports**

Every file uses `import * as CONFIG from '...'`. Change to `import CONFIG from '...'`.
The access pattern (`CONFIG.GRID_SIZE`) does not change at all.

Run this sed command to do all 25 files at once:

```bash
# Client src/ files
sed -i '' 's/import \* as CONFIG from/import CONFIG from/g' \
  packages/client/src/particleSystem.js \
  packages/client/src/playerSnake.js \
  packages/client/src/modeTest.js \
  packages/client/src/constants.js \
  packages/client/src/gameModes.js \
  packages/client/src/obstacles.js \
  packages/client/src/enemySnake.js \
  packages/client/src/utils.js \
  packages/client/src/audioSystem.js \
  packages/client/src/gameState.js \
  packages/client/src/food.js \
  packages/client/src/main.ts \
  packages/client/src/sceneSetup.js \
  packages/client/src/ui.js \
  packages/client/src/materials.js

# Client core/ files
sed -i '' 's/import \* as CONFIG from/import CONFIG from/g' \
  packages/client/src/core/powerups.ts \
  packages/client/src/core/combat.ts \
  packages/client/src/core/spawn.ts \
  packages/client/src/core/player.ts \
  packages/client/src/core/alpha.ts \
  packages/client/src/core/food.ts \
  packages/client/src/core/enemy.ts \
  packages/client/src/core/step.ts

# Client network/ file
sed -i '' 's/import \* as CONFIG from/import CONFIG from/g' \
  packages/client/src/network/colyseusClient.ts

# Server file
sed -i '' 's/import \* as CONFIG from/import CONFIG from/g' \
  packages/server/src/index.ts
```

**Step 2: Verify no `import * as CONFIG` remains**

Run:
```bash
grep -r "import \* as CONFIG" packages/
```
Expected: no output (zero matches).

**Step 3: Verify build passes**

Run:
```bash
pnpm build
```
Expected: TypeScript check + Vite build both succeed.

**Step 4: Run smoke test**

Run:
```bash
pnpm test:core
```
Expected: core simulation smoke test passes.

**Step 5: Commit**

```bash
git add -A
git commit -m "refactor: update all config imports from namespace to default import"
```

---

### Task 4: Create the admin panel

**Files:**
- Create: `packages/client/src/adminPanel.js`

**Step 1: Create adminPanel.js**

```js
import GUI from 'lil-gui';
import CONFIG, { saveOverrides, resetAllConfig } from './config.js';

let gui = null;

export function initAdminPanel() {
    if (gui) gui.destroy();

    gui = new GUI({ title: 'Snek Admin' });
    gui.domElement.style.zIndex = '10000';

    // -- World --
    const world = gui.addFolder('World');
    world.add(CONFIG, 'GRID_SIZE', 20, 200, 1).name('Grid Size (restart)').onFinishChange(saveOverrides);
    world.add(CONFIG, 'NUM_OBSTACLES', 0, 100, 1).name('Obstacles (restart)').onFinishChange(saveOverrides);
    world.add(CONFIG, 'NUM_INITIAL_FOOD', 10, 500, 1).name('Initial Food (restart)').onFinishChange(saveOverrides);
    world.add(CONFIG, 'WALL_HEIGHT', 1, 10, 0.5).name('Wall Height').onFinishChange(saveOverrides);
    world.add(CONFIG, 'WALL_THICKNESS', 0.5, 5, 0.5).name('Wall Thickness').onFinishChange(saveOverrides);
    world.addColor(CONFIG, 'GROUND_COLOR').name('Ground Color').onFinishChange(saveOverrides);
    world.addColor(CONFIG, 'FOG_COLOR').name('Fog Color').onFinishChange(saveOverrides);
    world.add(CONFIG, 'FOG_DENSITY', 0, 0.1, 0.005).name('Fog Density').onFinishChange(saveOverrides);
    world.add(CONFIG, 'START_SAFE_ZONE', 1, 20, 1).name('Start Safe Zone (restart)').onFinishChange(saveOverrides);
    world.close();

    // -- Player --
    const player = gui.addFolder('Player');
    player.add(CONFIG, 'BASE_SNAKE_SPEED', 0.05, 1.0, 0.01).name('Base Speed').onFinishChange(saveOverrides);
    player.add(CONFIG, 'MIN_SNAKE_LENGTH', 1, 10, 1).name('Min Length').onFinishChange(saveOverrides);
    player.add(CONFIG, 'ENLARGED_HEAD_DURATION', 0, 10, 0.5).name('Enlarged Head Duration').onFinishChange(saveOverrides);
    player.add(CONFIG, 'ENLARGED_HEAD_SCALE', 1, 5, 0.1).name('Enlarged Head Scale').onFinishChange(saveOverrides);
    player.close();

    // -- Camera --
    const camera = gui.addFolder('Camera');
    camera.add(CONFIG, 'CAMERA_DISTANCE', 3, 30, 0.5).name('Distance').onFinishChange(saveOverrides);
    camera.add(CONFIG, 'CAMERA_HEIGHT', 3, 30, 0.5).name('Height').onFinishChange(saveOverrides);
    camera.add(CONFIG, 'CAMERA_LAG', 0, 1, 0.05).name('Lag').onFinishChange(saveOverrides);
    camera.add(CONFIG, 'CAMERA_POSITION_SMOOTHNESS', 0.001, 0.1, 0.001).name('Pos Smoothness').onFinishChange(saveOverrides);
    camera.add(CONFIG, 'CAMERA_ROTATION_SMOOTHNESS', 0.001, 0.2, 0.001).name('Rot Smoothness').onFinishChange(saveOverrides);
    camera.add(CONFIG, 'CAMERA_SHAKE_ENABLED').name('Shake Enabled').onFinishChange(saveOverrides);
    camera.add(CONFIG, 'CAMERA_SHAKE_DURATION', 0, 2, 0.05).name('Shake Duration').onFinishChange(saveOverrides);
    camera.add(CONFIG, 'CAMERA_SHAKE_INTENSITY', 0, 20, 0.5).name('Shake Intensity').onFinishChange(saveOverrides);
    camera.close();

    // -- Food --
    const food = gui.addFolder('Food');
    food.add(CONFIG, 'FOOD_SPEED_BOOST_DURATION', 1, 30, 0.5).name('Speed Boost Duration').onFinishChange(saveOverrides);
    food.add(CONFIG, 'FOOD_SPEED_BOOST_MULTIPLIER', 1, 5, 0.1).name('Speed Boost Multi').onFinishChange(saveOverrides);
    food.add(CONFIG, 'ALPHA_MODE_EXTENSION_PER_FOOD', 0, 5, 0.1).name('Alpha Ext/Food').onFinishChange(saveOverrides);
    const foodRatios = food.addFolder('Spawn Ratios');
    foodRatios.add(CONFIG.FOOD_SPAWN_RATIOS, 'normal', 0, 100, 1).name('Normal').onFinishChange(saveOverrides);
    foodRatios.add(CONFIG.FOOD_SPAWN_RATIOS, 'speed', 0, 100, 1).name('Speed').onFinishChange(saveOverrides);
    foodRatios.add(CONFIG.FOOD_SPAWN_RATIOS, 'shrink', 0, 100, 1).name('Shrink').onFinishChange(saveOverrides);
    foodRatios.add(CONFIG.FOOD_SPAWN_RATIOS, 'score_x2', 0, 100, 1).name('Score x2').onFinishChange(saveOverrides);
    foodRatios.add(CONFIG.FOOD_SPAWN_RATIOS, 'ghost', 0, 100, 1).name('Ghost').onFinishChange(saveOverrides);
    food.close();

    // -- Enemies --
    const enemies = gui.addFolder('Enemies');
    enemies.add(CONFIG, 'NUM_ENEMIES', 0, 30, 1).name('Count (restart)').onFinishChange(saveOverrides);
    enemies.add(CONFIG, 'ENEMY_START_LENGTH', 2, 20, 1).name('Start Length (restart)').onFinishChange(saveOverrides);
    enemies.add(CONFIG, 'ENEMY_SNAKE_SPEED', 0.05, 2, 0.01).name('Speed').onFinishChange(saveOverrides);
    enemies.add(CONFIG, 'ENEMY_START_SAFE_ZONE', 1, 40, 1).name('Safe Zone').onFinishChange(saveOverrides);
    enemies.add(CONFIG, 'ENEMY_TAIL_EDIBLE_SEGMENTS', 1, 10, 1).name('Edible Tail Segs').onFinishChange(saveOverrides);
    enemies.addColor(CONFIG, 'ENEMY_TAIL_COLOR').name('Tail Color').onFinishChange(saveOverrides);
    enemies.add(CONFIG, 'ENEMY_KILL_SCORE', 1, 100, 1).name('Kill Score').onFinishChange(saveOverrides);
    enemies.add(CONFIG, 'ENEMY_RESPAWN_TIME', 1, 30, 0.5).name('Respawn Time').onFinishChange(saveOverrides);
    enemies.add(CONFIG, 'ENEMY_KILL_SEGMENTS', 1, 20, 1).name('Kill Segments').onFinishChange(saveOverrides);
    enemies.close();

    // -- Power-ups --
    const powerups = gui.addFolder('Power-ups');
    powerups.add(CONFIG, 'POWERUP_SPEED_DURATION', 1, 60, 1).name('Speed Duration').onFinishChange(saveOverrides);
    powerups.add(CONFIG, 'POWERUP_SPEED_MULTIPLIER', 1, 5, 0.1).name('Speed Multi').onFinishChange(saveOverrides);
    powerups.add(CONFIG, 'POWERUP_SHRINK_AMOUNT', 1, 20, 1).name('Shrink Amount').onFinishChange(saveOverrides);
    powerups.add(CONFIG, 'POWERUP_SCORE_MULTIPLIER', 1, 10, 0.5).name('Score Multi').onFinishChange(saveOverrides);
    powerups.add(CONFIG, 'POWERUP_SCORE_MULTIPLIER_DURATION', 1, 60, 1).name('Score Multi Duration').onFinishChange(saveOverrides);
    powerups.add(CONFIG, 'POWERUP_GHOST_DURATION', 1, 30, 0.5).name('Ghost Duration').onFinishChange(saveOverrides);
    powerups.close();

    // -- Alpha Mode --
    const alpha = gui.addFolder('Alpha Mode');
    alpha.add(CONFIG, 'ALPHA_POINTS_THRESHOLD', 5, 100, 1).name('Points Threshold').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_POINTS_FOOD', 1, 20, 1).name('Points/Food').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_POINTS_FROG', 1, 30, 1).name('Points/Frog').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_POINTS_ENEMY', 1, 50, 1).name('Points/Enemy Kill').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_POINTS_DECAY_RATE', 0, 5, 0.1).name('Points Decay').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_POINTS_FROG_MULTIPLIER', 1, 5, 0.1).name('Frog Pts Multi').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_MODE_SCORE_THRESHOLD', 100, 5000, 100).name('Score Threshold').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_MODE_DURATION', 1, 30, 0.5).name('Duration').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_MODE_SPEED_MULTIPLIER', 1, 5, 0.1).name('Speed Multi').onFinishChange(saveOverrides);
    alpha.addColor(CONFIG, 'ALPHA_MODE_COLOR').name('Color').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_MODE_EXTENSION_PER_ENEMY', 0, 10, 0.5).name('Ext/Enemy Kill').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_MODE_SCORE_MULTIPLIER', 1, 10, 0.1).name('Score Multi').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_MODE_SCORE_MULTIPLIER_DURATION', 1, 30, 0.5).name('Score Multi Dur').onFinishChange(saveOverrides);
    alpha.add(CONFIG, 'ALPHA_MODE_MAX_SCORE_MULTIPLIER', 1, 50, 1).name('Max Score Multi').onFinishChange(saveOverrides);
    alpha.close();

    // -- Audio --
    const audio = gui.addFolder('Audio');
    audio.add(CONFIG.AUDIO_VOLUME, 'MUSIC', 0, 1, 0.05).name('Music Volume').onFinishChange(saveOverrides);
    audio.add(CONFIG.AUDIO_VOLUME, 'MOVEMENT_SOUNDS', 0, 1, 0.05).name('Movement Vol').onFinishChange(saveOverrides);
    audio.add(CONFIG.AUDIO_VOLUME, 'EATING_SOUNDS', 0, 1, 0.05).name('Eating Vol').onFinishChange(saveOverrides);
    audio.add(CONFIG.AUDIO_VOLUME, 'ALPHA_MODE_SOUNDS', 0, 1, 0.05).name('Alpha Sound Vol').onFinishChange(saveOverrides);
    audio.add(CONFIG.AUDIO_VOLUME, 'DEATH_SOUND', 0, 1, 0.05).name('Death Sound Vol').onFinishChange(saveOverrides);
    audio.add(CONFIG.AUDIO_ENABLED, 'MUSIC').name('Music On').onFinishChange(saveOverrides);
    audio.add(CONFIG.AUDIO_ENABLED, 'SOUND_EFFECTS').name('SFX On').onFinishChange(saveOverrides);
    audio.close();

    // -- Particles --
    const particles = gui.addFolder('Particles');
    particles.add(CONFIG, 'PARTICLE_COUNT_KILL', 0, 50, 1).name('Kill Count').onFinishChange(saveOverrides);
    particles.addColor(CONFIG, 'PARTICLE_COLOR_KILL').name('Kill Color').onFinishChange(saveOverrides);
    particles.add(CONFIG, 'PARTICLE_COUNT_NORMAL_FOOD', 0, 20, 1).name('Food Count').onFinishChange(saveOverrides);
    particles.addColor(CONFIG, 'PARTICLE_COLOR_NORMAL_FOOD').name('Food Color').onFinishChange(saveOverrides);
    particles.add(CONFIG, 'PARTICLE_COUNT_DEATH', 0, 50, 1).name('Death Count').onFinishChange(saveOverrides);
    particles.add(CONFIG, 'PARTICLE_SIZE', 0.5, 10, 0.5).name('Size').onFinishChange(saveOverrides);
    particles.add(CONFIG, 'PARTICLE_LIFESPAN', 0.05, 2, 0.05).name('Lifespan').onFinishChange(saveOverrides);
    particles.add(CONFIG, 'PARTICLE_SPEED', 0.5, 20, 0.5).name('Speed').onFinishChange(saveOverrides);
    particles.close();

    // -- Frog Movement --
    const frogs = gui.addFolder('Frog Movement');
    frogs.add(CONFIG.FROG_MOVEMENT, 'BASE_SPEED', 0.5, 10, 0.5).name('Base Speed').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'SPEED_VARIATION', 0, 5, 0.1).name('Speed Var').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'HOP_HEIGHT', 0, 2, 0.1).name('Hop Height').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'HOP_FREQUENCY', 0.1, 5, 0.1).name('Hop Freq').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'HOP_FREQUENCY_VARIATION', 0, 3, 0.1).name('Hop Freq Var').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'MAX_DISTANCE', 1, 20, 1).name('Max Distance').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'DISTANCE_VARIATION', 0, 10, 0.5).name('Dist Var').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'DIRECTION_CHANGE_PROBABILITY', 0, 0.05, 0.001).name('Dir Change Prob').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'MOVEMENT_STYLE', ['hop', 'crawl']).name('Style').onFinishChange(saveOverrides);
    frogs.add(CONFIG.FROG_MOVEMENT, 'MOVE_INTERVAL', 0.1, 3, 0.1).name('Move Interval').onFinishChange(saveOverrides);
    frogs.close();

    // -- Actions --
    const actions = gui.addFolder('Actions');
    actions.add({
        reset: () => {
            resetAllConfig();
            gui.destroy();
            initAdminPanel();
        }
    }, 'reset').name('Reset All to Defaults');
    actions.add({
        restart: () => { window.location.reload(); }
    }, 'restart').name('Restart Game');

    return gui;
}
```

**Step 2: Commit**

```bash
git add packages/client/src/adminPanel.js
git commit -m "feat: add lil-gui admin panel for runtime config tuning"
```

---

### Task 5: Integrate admin panel in main.ts

**Files:**
- Modify: `packages/client/src/main.ts:95-96` (after `urlParams` is created)

**Step 1: Add admin panel initialization**

After line 96 (`const urlParams = new URLSearchParams(window.location.search);`), add the admin panel init using a dynamic import (so it's tree-shaken when not used):

```ts
    // Admin panel (dev tool) - activate via ?admin=1
    if (urlParams.get('admin') === '1') {
        import('./adminPanel.js').then(({ initAdminPanel }) => {
            initAdminPanel();
        });
    }
```

Insert this block right after line 96 (before `const urlSeed = ...`).

**Step 2: Verify build passes**

Run:
```bash
pnpm build
```
Expected: success.

**Step 3: Verify with dev server**

Run:
```bash
pnpm dev
```
Then open `http://localhost:5173/?admin=1` in a browser.

Expected: lil-gui panel appears in the top-right corner with all config folders.

**Step 4: Commit**

```bash
git add packages/client/src/main.ts
git commit -m "feat: wire up admin panel behind ?admin=1 query param"
```

---

### Task 6: Final verification

**Step 1: Run all non-server tests**

```bash
pnpm test:core
pnpm -C packages/client test:serialize
pnpm -C packages/client test:determinism
```

Expected: all pass.

**Step 2: Manual smoke test**

Open `http://localhost:5173/?admin=1`:
1. Verify panel appears with all folders (World, Player, Camera, Food, Enemies, Power-ups, Alpha Mode, Audio, Particles, Frog Movement, Actions)
2. Change `BASE_SNAKE_SPEED` to 0.1, start a game, verify snake is slower
3. Refresh the page (with `?admin=1`), verify the speed slider still shows 0.1 (localStorage persistence)
4. Click "Reset All to Defaults", verify slider returns to 0.25
5. Open `http://localhost:5173/` (without `?admin=1`), verify no panel appears

**Step 3: Final commit with all files**

If any fixups were needed during verification, commit them:

```bash
git add -A
git commit -m "feat: admin panel complete - runtime config tuning with localStorage persistence"
```
