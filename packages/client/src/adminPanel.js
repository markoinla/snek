import GUI from 'lil-gui';
import CONFIG, { saveOverrides, resetAllConfig } from './config';

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
