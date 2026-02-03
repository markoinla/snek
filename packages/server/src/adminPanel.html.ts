export function renderAdminHTML(apiKey: string): string {
  const escapedKey = apiKey.replace(/[&"'<>]/g, c => ({
    '&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;'
  }[c]!));

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Snek Server Admin</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #1a1a2e;
    color: #e0e0e0;
    font-family: 'Segoe UI', system-ui, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #header {
    width: 100%;
    padding: 16px 24px;
    background: #16213e;
    border-bottom: 2px solid #0f3460;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #header h1 {
    font-size: 20px;
    color: #4dd0e1;
    letter-spacing: 2px;
  }
  #status {
    font-size: 13px;
    color: #888;
  }
  #status .count { color: #4dd0e1; font-weight: bold; }
  #gui-container {
    padding: 24px;
    width: 100%;
    max-width: 400px;
  }
  .lil-gui { --background-color: #16213e; --widget-color: #0f3460; --focus-color: #4dd0e1; }
</style>
</head>
<body>
<div id="header">
  <h1>SNEK ADMIN</h1>
  <div id="status">Loading...</div>
</div>
<div id="gui-container"></div>

<script type="module">
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.21/dist/lil-gui.esm.min.js';

const API_KEY = '${escapedKey}';
const headers = { 'x-api-key': API_KEY, 'Content-Type': 'application/json' };

async function fetchConfig() {
  const res = await fetch('/admin/api/config', { headers });
  return res.json();
}

async function patchConfig(patch) {
  const res = await fetch('/admin/api/config', {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ patch }),
  });
  const data = await res.json();
  if (data.ok) updateStatus(data.overrides);
  return data;
}

async function resetAll() {
  await fetch('/admin/api/config/reset', { method: 'POST', headers });
}

function updateStatus(overrides) {
  const count = Object.keys(overrides || {}).length;
  document.getElementById('status').innerHTML =
    count > 0
      ? '<span class="count">' + count + '</span> override(s) active'
      : 'Using defaults';
}

function buildPanel(config, defaults) {
  const gui = new GUI({ container: document.getElementById('gui-container'), title: 'Server Config' });

  function save(key) {
    return () => patchConfig({ [key]: config[key] });
  }
  function saveTop(key) {
    return () => patchConfig({ [key]: config[key] });
  }

  // -- World --
  const world = gui.addFolder('World');
  world.add(config, 'GRID_SIZE', 20, 200, 1).name('Grid Size').onFinishChange(save('GRID_SIZE'));
  world.add(config, 'NUM_OBSTACLES', 0, 100, 1).name('Obstacles').onFinishChange(save('NUM_OBSTACLES'));
  world.add(config, 'NUM_INITIAL_FOOD', 10, 500, 1).name('Initial Food').onFinishChange(save('NUM_INITIAL_FOOD'));
  world.add(config, 'WALL_HEIGHT', 1, 10, 0.5).name('Wall Height').onFinishChange(save('WALL_HEIGHT'));
  world.add(config, 'WALL_THICKNESS', 0.5, 5, 0.5).name('Wall Thickness').onFinishChange(save('WALL_THICKNESS'));
  world.addColor(config, 'GROUND_COLOR').name('Ground Color').onFinishChange(save('GROUND_COLOR'));
  world.addColor(config, 'FOG_COLOR').name('Fog Color').onFinishChange(save('FOG_COLOR'));
  world.add(config, 'FOG_DENSITY', 0, 0.1, 0.005).name('Fog Density').onFinishChange(save('FOG_DENSITY'));
  world.add(config, 'START_SAFE_ZONE', 1, 20, 1).name('Start Safe Zone').onFinishChange(save('START_SAFE_ZONE'));
  world.close();

  // -- Player --
  const player = gui.addFolder('Player');
  player.add(config, 'BASE_SNAKE_SPEED', 0.05, 1.0, 0.01).name('Base Speed').onFinishChange(save('BASE_SNAKE_SPEED'));
  player.add(config, 'MIN_SNAKE_LENGTH', 1, 10, 1).name('Min Length').onFinishChange(save('MIN_SNAKE_LENGTH'));
  player.add(config, 'ENLARGED_HEAD_DURATION', 0, 10, 0.5).name('Enlarged Head Duration').onFinishChange(save('ENLARGED_HEAD_DURATION'));
  player.add(config, 'ENLARGED_HEAD_SCALE', 1, 5, 0.1).name('Enlarged Head Scale').onFinishChange(save('ENLARGED_HEAD_SCALE'));
  player.close();

  // -- Camera --
  const camera = gui.addFolder('Camera');
  camera.add(config, 'CAMERA_DISTANCE', 3, 30, 0.5).name('Distance').onFinishChange(save('CAMERA_DISTANCE'));
  camera.add(config, 'CAMERA_HEIGHT', 3, 30, 0.5).name('Height').onFinishChange(save('CAMERA_HEIGHT'));
  camera.add(config, 'CAMERA_LAG', 0, 1, 0.05).name('Lag').onFinishChange(save('CAMERA_LAG'));
  camera.add(config, 'CAMERA_POSITION_SMOOTHNESS', 0.001, 0.1, 0.001).name('Pos Smoothness').onFinishChange(save('CAMERA_POSITION_SMOOTHNESS'));
  camera.add(config, 'CAMERA_ROTATION_SMOOTHNESS', 0.001, 0.2, 0.001).name('Rot Smoothness').onFinishChange(save('CAMERA_ROTATION_SMOOTHNESS'));
  camera.add(config, 'CAMERA_SHAKE_ENABLED').name('Shake Enabled').onFinishChange(save('CAMERA_SHAKE_ENABLED'));
  camera.add(config, 'CAMERA_SHAKE_DURATION', 0, 2, 0.05).name('Shake Duration').onFinishChange(save('CAMERA_SHAKE_DURATION'));
  camera.add(config, 'CAMERA_SHAKE_INTENSITY', 0, 20, 0.5).name('Shake Intensity').onFinishChange(save('CAMERA_SHAKE_INTENSITY'));
  camera.close();

  // -- Food --
  const food = gui.addFolder('Food');
  food.add(config, 'FOOD_SPEED_BOOST_DURATION', 1, 30, 0.5).name('Speed Boost Duration').onFinishChange(save('FOOD_SPEED_BOOST_DURATION'));
  food.add(config, 'FOOD_SPEED_BOOST_MULTIPLIER', 1, 5, 0.1).name('Speed Boost Multi').onFinishChange(save('FOOD_SPEED_BOOST_MULTIPLIER'));
  food.add(config, 'ALPHA_MODE_EXTENSION_PER_FOOD', 0, 5, 0.1).name('Alpha Ext/Food').onFinishChange(save('ALPHA_MODE_EXTENSION_PER_FOOD'));
  const foodRatios = food.addFolder('Spawn Ratios');
  foodRatios.add(config.FOOD_SPAWN_RATIOS, 'normal', 0, 100, 1).name('Normal').onFinishChange(() => patchConfig({ FOOD_SPAWN_RATIOS: config.FOOD_SPAWN_RATIOS }));
  foodRatios.add(config.FOOD_SPAWN_RATIOS, 'speed', 0, 100, 1).name('Speed').onFinishChange(() => patchConfig({ FOOD_SPAWN_RATIOS: config.FOOD_SPAWN_RATIOS }));
  foodRatios.add(config.FOOD_SPAWN_RATIOS, 'shrink', 0, 100, 1).name('Shrink').onFinishChange(() => patchConfig({ FOOD_SPAWN_RATIOS: config.FOOD_SPAWN_RATIOS }));
  foodRatios.add(config.FOOD_SPAWN_RATIOS, 'score_x2', 0, 100, 1).name('Score x2').onFinishChange(() => patchConfig({ FOOD_SPAWN_RATIOS: config.FOOD_SPAWN_RATIOS }));
  foodRatios.add(config.FOOD_SPAWN_RATIOS, 'ghost', 0, 100, 1).name('Ghost').onFinishChange(() => patchConfig({ FOOD_SPAWN_RATIOS: config.FOOD_SPAWN_RATIOS }));
  food.close();

  // -- Enemies --
  const enemies = gui.addFolder('Enemies');
  enemies.add(config, 'NUM_ENEMIES', 0, 30, 1).name('Count').onFinishChange(save('NUM_ENEMIES'));
  enemies.add(config, 'ENEMY_START_LENGTH', 2, 20, 1).name('Start Length').onFinishChange(save('ENEMY_START_LENGTH'));
  enemies.add(config, 'ENEMY_SNAKE_SPEED', 0.05, 2, 0.01).name('Speed').onFinishChange(save('ENEMY_SNAKE_SPEED'));
  enemies.add(config, 'ENEMY_START_SAFE_ZONE', 1, 40, 1).name('Safe Zone').onFinishChange(save('ENEMY_START_SAFE_ZONE'));
  enemies.add(config, 'ENEMY_TAIL_EDIBLE_SEGMENTS', 1, 10, 1).name('Edible Tail Segs').onFinishChange(save('ENEMY_TAIL_EDIBLE_SEGMENTS'));
  enemies.addColor(config, 'ENEMY_TAIL_COLOR').name('Tail Color').onFinishChange(save('ENEMY_TAIL_COLOR'));
  enemies.add(config, 'ENEMY_KILL_SCORE', 1, 100, 1).name('Kill Score').onFinishChange(save('ENEMY_KILL_SCORE'));
  enemies.add(config, 'ENEMY_RESPAWN_TIME', 1, 30, 0.5).name('Respawn Time').onFinishChange(save('ENEMY_RESPAWN_TIME'));
  enemies.add(config, 'ENEMY_KILL_SEGMENTS', 1, 20, 1).name('Kill Segments').onFinishChange(save('ENEMY_KILL_SEGMENTS'));
  enemies.close();

  // -- Power-ups --
  const powerups = gui.addFolder('Power-ups');
  powerups.add(config, 'POWERUP_SPEED_DURATION', 1, 60, 1).name('Speed Duration').onFinishChange(save('POWERUP_SPEED_DURATION'));
  powerups.add(config, 'POWERUP_SPEED_MULTIPLIER', 1, 5, 0.1).name('Speed Multi').onFinishChange(save('POWERUP_SPEED_MULTIPLIER'));
  powerups.add(config, 'POWERUP_SHRINK_AMOUNT', 1, 20, 1).name('Shrink Amount').onFinishChange(save('POWERUP_SHRINK_AMOUNT'));
  powerups.add(config, 'POWERUP_SCORE_MULTIPLIER', 1, 10, 0.5).name('Score Multi').onFinishChange(save('POWERUP_SCORE_MULTIPLIER'));
  powerups.add(config, 'POWERUP_SCORE_MULTIPLIER_DURATION', 1, 60, 1).name('Score Multi Duration').onFinishChange(save('POWERUP_SCORE_MULTIPLIER_DURATION'));
  powerups.add(config, 'POWERUP_GHOST_DURATION', 1, 30, 0.5).name('Ghost Duration').onFinishChange(save('POWERUP_GHOST_DURATION'));
  powerups.close();

  // -- Alpha Mode --
  const alpha = gui.addFolder('Alpha Mode');
  alpha.add(config, 'ALPHA_POINTS_THRESHOLD', 5, 100, 1).name('Points Threshold').onFinishChange(save('ALPHA_POINTS_THRESHOLD'));
  alpha.add(config, 'ALPHA_POINTS_FOOD', 1, 20, 1).name('Points/Food').onFinishChange(save('ALPHA_POINTS_FOOD'));
  alpha.add(config, 'ALPHA_POINTS_FROG', 1, 30, 1).name('Points/Frog').onFinishChange(save('ALPHA_POINTS_FROG'));
  alpha.add(config, 'ALPHA_POINTS_ENEMY', 1, 50, 1).name('Points/Enemy Kill').onFinishChange(save('ALPHA_POINTS_ENEMY'));
  alpha.add(config, 'ALPHA_POINTS_DECAY_RATE', 0, 5, 0.1).name('Points Decay').onFinishChange(save('ALPHA_POINTS_DECAY_RATE'));
  alpha.add(config, 'ALPHA_POINTS_FROG_MULTIPLIER', 1, 5, 0.1).name('Frog Pts Multi').onFinishChange(save('ALPHA_POINTS_FROG_MULTIPLIER'));
  alpha.add(config, 'ALPHA_MODE_SCORE_THRESHOLD', 100, 5000, 100).name('Score Threshold').onFinishChange(save('ALPHA_MODE_SCORE_THRESHOLD'));
  alpha.add(config, 'ALPHA_MODE_DURATION', 1, 30, 0.5).name('Duration').onFinishChange(save('ALPHA_MODE_DURATION'));
  alpha.add(config, 'ALPHA_MODE_SPEED_MULTIPLIER', 1, 5, 0.1).name('Speed Multi').onFinishChange(save('ALPHA_MODE_SPEED_MULTIPLIER'));
  alpha.addColor(config, 'ALPHA_MODE_COLOR').name('Color').onFinishChange(save('ALPHA_MODE_COLOR'));
  alpha.add(config, 'ALPHA_MODE_EXTENSION_PER_ENEMY', 0, 10, 0.5).name('Ext/Enemy Kill').onFinishChange(save('ALPHA_MODE_EXTENSION_PER_ENEMY'));
  alpha.add(config, 'ALPHA_MODE_SCORE_MULTIPLIER', 1, 10, 0.1).name('Score Multi').onFinishChange(save('ALPHA_MODE_SCORE_MULTIPLIER'));
  alpha.add(config, 'ALPHA_MODE_SCORE_MULTIPLIER_DURATION', 1, 30, 0.5).name('Score Multi Dur').onFinishChange(save('ALPHA_MODE_SCORE_MULTIPLIER_DURATION'));
  alpha.add(config, 'ALPHA_MODE_MAX_SCORE_MULTIPLIER', 1, 50, 1).name('Max Score Multi').onFinishChange(save('ALPHA_MODE_MAX_SCORE_MULTIPLIER'));
  alpha.close();

  // -- Audio --
  const audio = gui.addFolder('Audio');
  audio.add(config.AUDIO_VOLUME, 'MUSIC', 0, 1, 0.05).name('Music Volume').onFinishChange(() => patchConfig({ AUDIO_VOLUME: config.AUDIO_VOLUME }));
  audio.add(config.AUDIO_VOLUME, 'MOVEMENT_SOUNDS', 0, 1, 0.05).name('Movement Vol').onFinishChange(() => patchConfig({ AUDIO_VOLUME: config.AUDIO_VOLUME }));
  audio.add(config.AUDIO_VOLUME, 'EATING_SOUNDS', 0, 1, 0.05).name('Eating Vol').onFinishChange(() => patchConfig({ AUDIO_VOLUME: config.AUDIO_VOLUME }));
  audio.add(config.AUDIO_VOLUME, 'ALPHA_MODE_SOUNDS', 0, 1, 0.05).name('Alpha Sound Vol').onFinishChange(() => patchConfig({ AUDIO_VOLUME: config.AUDIO_VOLUME }));
  audio.add(config.AUDIO_VOLUME, 'DEATH_SOUND', 0, 1, 0.05).name('Death Sound Vol').onFinishChange(() => patchConfig({ AUDIO_VOLUME: config.AUDIO_VOLUME }));
  audio.add(config.AUDIO_ENABLED, 'MUSIC').name('Music On').onFinishChange(() => patchConfig({ AUDIO_ENABLED: config.AUDIO_ENABLED }));
  audio.add(config.AUDIO_ENABLED, 'SOUND_EFFECTS').name('SFX On').onFinishChange(() => patchConfig({ AUDIO_ENABLED: config.AUDIO_ENABLED }));
  audio.close();

  // -- Particles --
  const particles = gui.addFolder('Particles');
  particles.add(config, 'PARTICLE_COUNT_KILL', 0, 50, 1).name('Kill Count').onFinishChange(save('PARTICLE_COUNT_KILL'));
  particles.addColor(config, 'PARTICLE_COLOR_KILL').name('Kill Color').onFinishChange(save('PARTICLE_COLOR_KILL'));
  particles.add(config, 'PARTICLE_COUNT_NORMAL_FOOD', 0, 20, 1).name('Food Count').onFinishChange(save('PARTICLE_COUNT_NORMAL_FOOD'));
  particles.addColor(config, 'PARTICLE_COLOR_NORMAL_FOOD').name('Food Color').onFinishChange(save('PARTICLE_COLOR_NORMAL_FOOD'));
  particles.add(config, 'PARTICLE_COUNT_DEATH', 0, 50, 1).name('Death Count').onFinishChange(save('PARTICLE_COUNT_DEATH'));
  particles.add(config, 'PARTICLE_SIZE', 0.5, 10, 0.5).name('Size').onFinishChange(save('PARTICLE_SIZE'));
  particles.add(config, 'PARTICLE_LIFESPAN', 0.05, 2, 0.05).name('Lifespan').onFinishChange(save('PARTICLE_LIFESPAN'));
  particles.add(config, 'PARTICLE_SPEED', 0.5, 20, 0.5).name('Speed').onFinishChange(save('PARTICLE_SPEED'));
  particles.close();

  // -- Frog Movement --
  const frogs = gui.addFolder('Frog Movement');
  frogs.add(config.FROG_MOVEMENT, 'BASE_SPEED', 0.5, 10, 0.5).name('Base Speed').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'SPEED_VARIATION', 0, 5, 0.1).name('Speed Var').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'HOP_HEIGHT', 0, 2, 0.1).name('Hop Height').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'HOP_FREQUENCY', 0.1, 5, 0.1).name('Hop Freq').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'HOP_FREQUENCY_VARIATION', 0, 3, 0.1).name('Hop Freq Var').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'MAX_DISTANCE', 1, 20, 1).name('Max Distance').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'DISTANCE_VARIATION', 0, 10, 0.5).name('Dist Var').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'DIRECTION_CHANGE_PROBABILITY', 0, 0.05, 0.001).name('Dir Change Prob').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'MOVEMENT_STYLE', ['hop', 'crawl']).name('Style').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.add(config.FROG_MOVEMENT, 'MOVE_INTERVAL', 0.1, 3, 0.1).name('Move Interval').onFinishChange(() => patchConfig({ FROG_MOVEMENT: config.FROG_MOVEMENT }));
  frogs.close();

  // -- Actions --
  const actions = gui.addFolder('Actions');
  actions.add({
    reset: async () => {
      await resetAll();
      location.reload();
    }
  }, 'reset').name('Reset All to Defaults');
  actions.add({
    refresh: () => location.reload()
  }, 'refresh').name('Refresh Panel');

  return gui;
}

async function init() {
  try {
    const data = await fetchConfig();
    updateStatus(data.overrides);
    buildPanel(data.config, data.defaults);
  } catch (e) {
    document.getElementById('status').textContent = 'Error: ' + e.message;
  }
}

init();
</script>
</body>
</html>`;
}
