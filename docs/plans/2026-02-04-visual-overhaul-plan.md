# Visual Overhaul Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the game's visual presentation — lighting, materials, animations, effects, and UI — while keeping the blocky/voxel art style, to create a polished, cohesive look with satisfying game feel.

**Architecture:** Introduce a postprocessing pipeline (EffectComposer) as the rendering foundation, migrate all materials to MeshToonMaterial for unified cel-shading, centralize colors in a palette module, and add a lightweight tween-based animation system for game-feel effects. All changes are render-side only — core simulation is untouched.

**Tech Stack:** Three.js 0.160 (addons: EffectComposer, RenderPass, UnrealBloomPass, OutlinePass, SSAOPass, ShaderPass), existing Vite build, TypeScript for new modules.

---

## Task 1: Install postprocessing dependencies and create EffectComposer pipeline

Three.js 0.160 ships postprocessing in `three/addons/postprocessing/`. No npm install needed — just imports. This task sets up the pipeline that all subsequent visual work builds on.

**Files:**
- Create: `packages/client/src/postprocessing.ts`
- Modify: `packages/client/src/main.ts:69-243` (init function) and `packages/client/src/main.ts:593-707` (render function)

**Step 1: Create postprocessing module**

Create `packages/client/src/postprocessing.ts`:

```typescript
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import * as THREE from 'three';

let composer: EffectComposer | null = null;

export function initPostprocessing(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
): EffectComposer {
  composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.3,   // strength (subtle)
    0.4,   // radius
    0.85   // threshold — only bright things bloom
  );
  composer.addPass(bloomPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  return composer;
}

export function resizePostprocessing(width: number, height: number): void {
  if (composer) {
    composer.setSize(width, height);
  }
}

export function renderPostprocessing(): void {
  if (composer) {
    composer.render();
  }
}

export function getComposer(): EffectComposer | null {
  return composer;
}
```

**Step 2: Wire postprocessing into main.ts init**

In `packages/client/src/main.ts`, after the renderer is created (around line 119 after materials load), add:

```typescript
import { initPostprocessing, resizePostprocessing, renderPostprocessing } from './postprocessing';
```

After `setupBasicScene` call (around line 137), add:

```typescript
const composer = initPostprocessing(gameState.renderer, gameState.scene, gameState.camera);
gameState.composer = composer;
```

**Step 3: Replace renderer.render() with composer.render()**

In `packages/client/src/main.ts` render function (around line 701), replace:

```typescript
// OLD:
gameState.renderer.render(gameState.scene, gameState.camera);
// NEW:
renderPostprocessing();
```

**Step 4: Update window resize handler**

In `packages/client/src/main.ts` onWindowResize (around line 741), add after renderer setSize:

```typescript
resizePostprocessing(window.innerWidth, window.innerHeight);
```

**Step 5: Add composer to gameState**

In `packages/client/src/gameState.ts`, add to the GameState interface:

```typescript
composer: any | null;
```

And in the default gameState object:

```typescript
composer: null,
```

**Step 6: Run the game and verify it renders identically**

Run: `cd packages/client && pnpm dev`

Open `http://localhost:5173` in browser. The game should look identical to before (bloom threshold is high enough that nothing blooms yet). Verify no console errors.

**Step 7: Commit**

```bash
git add packages/client/src/postprocessing.ts packages/client/src/main.ts packages/client/src/gameState.ts
git commit -m "feat: add postprocessing pipeline with EffectComposer and subtle bloom"
```

---

## Task 2: Create centralized color palette module

All hex color values scattered across materials.js, config.ts, playerSnake.js, enemySnake.js, food.js, and obstacles.js will be replaced with palette references. This task creates the palette and migrates materials.js.

**Files:**
- Create: `packages/client/src/palette.ts`
- Modify: `packages/client/src/materials.js` (replace hardcoded hex values)
- Modify: `packages/client/src/config.ts` (replace color constants)

**Step 1: Create palette module**

Create `packages/client/src/palette.ts`:

```typescript
import * as THREE from 'three';

// Core game palette — all colors in one place
// Every material, particle, and UI element references these

export const PALETTE = {
  // Environment
  sky: {
    zenith: 0x87CEEB,    // light sky blue
    horizon: 0xFFF8E7,   // warm cream
    fog: 0xE8F0E8,       // soft green-white
  },

  ground: {
    base: 0x4A7C3F,      // natural grass green
    grid: 0x3D6B34,      // darker grid lines
  },

  lighting: {
    sun: 0xFFF4E0,       // warm sunlight
    fill: 0xB0C4DE,      // cool blue fill
    ambient: 0xD4C5A9,   // warm neutral ambient
  },

  // Snake player colors (primary / accent / glow)
  players: [
    { primary: 0x4CAF50, accent: 0x81C784, glow: 0xA5D6A7 }, // green
    { primary: 0x2196F3, accent: 0x64B5F6, glow: 0x90CAF9 }, // blue
    { primary: 0xF44336, accent: 0xEF5350, glow: 0xEF9A9A }, // red
    { primary: 0xFFEB3B, accent: 0xFFF176, glow: 0xFFF9C4 }, // yellow
  ],

  // Enemy
  enemy: {
    tail: 0x4DD0E1,      // cyan edible tail
    tailGlow: 0x80DEEA,
  },

  // Alpha mode
  alpha: {
    primary: 0x9C27B0,   // purple
    glow: 0xCE93D8,
    vignette: 0x4A148C,  // deep purple
  },

  // Food
  food: {
    apple: 0xDD2C00,     // deep red
    appleStem: 0x654321,
    appleLeaf: 0x228B22,
    appleIndent: 0x8B0000,
  },

  // Powerup color families (item -> particle -> UI -> aura)
  powerups: {
    speed:    { primary: 0x8BC34A, particle: 0xAED581, ui: '#8BC34A', glow: 0xC5E1A5 },
    shrink:   { primary: 0x9C27B0, particle: 0xBA68C8, ui: '#9C27B0', glow: 0xCE93D8 },
    score_x2: { primary: 0xFFD700, particle: 0xFFE082, ui: '#FFD700', glow: 0xFFF8E1 },
    ghost:    { primary: 0xBDBDBD, particle: 0xE0E0E0, ui: '#BDBDBD', glow: 0xF5F5F5 },
  },

  // Obstacles
  obstacle: {
    trunk: 0x966F33,
    leaves: 0x388E3C,
    bush: 0x8BC34A,
  },

  // Particles
  particles: {
    kill: 0xFF5722,
    normalFood: 0x4CAF50,
    death: 0xFF4444,
  },

  // UI
  ui: {
    text: '#E8E8E8',
    accent: '#4CAF50',
    danger: '#F44336',
    score: '#FFFFFF',
    background: 'rgba(0, 0, 0, 0.6)',
  },

  // Grass / decorative
  vegetation: {
    grass: 0x558B2F,
    darkGrass: 0x33691E,
  },

  // Walls
  wall: {
    base: 0xFFFFFF,
  },
} as const;

// Helper: convert hex to THREE.Color
export function color(hex: number): THREE.Color {
  return new THREE.Color(hex);
}
```

**Step 2: Migrate materials.js to use palette**

In `packages/client/src/materials.js`, add import:

```javascript
import { PALETTE } from './palette';
```

Replace hardcoded hex values throughout. Examples:

- Line ~204: `color: 0x966F33` → `color: PALETTE.obstacle.trunk`
- Line ~208: `color: 0x388E3C` → `color: PALETTE.obstacle.leaves`
- Line ~220: `color: 0x8BC34A` → `color: PALETTE.obstacle.bush`
- Line ~267: `color: CONFIG.GROUND_COLOR` → `color: PALETTE.ground.base`
- Line ~277: `color: 0xffffff` → `color: PALETTE.wall.base`
- Line ~282: `color: 0x558B2F` → `color: PALETTE.vegetation.grass`
- Food material emissive colors: reference `PALETTE.powerups[type].primary`

**Step 3: Migrate config.ts color constants**

In `packages/client/src/config.ts`, replace:

```typescript
ENEMY_TAIL_COLOR: 0x4DD0E1,      →  // Remove, use PALETTE.enemy.tail
PLAYER_TAIL_COLOR: 0x81C784,     →  // Remove, use PALETTE.players[0].accent
ALPHA_MODE_COLOR: 0x9C27B0,      →  // Remove, use PALETTE.alpha.primary
PARTICLE_COLOR_KILL: 0xFF5722,   →  // Remove, use PALETTE.particles.kill
PARTICLE_COLOR_NORMAL_FOOD: 0x4CAF50, → // Remove, use PALETTE.particles.normalFood
GROUND_COLOR: 0x4682B4,          →  // Remove, use PALETTE.ground.base
FOG_COLOR: 0xFFFFFF,             →  // Remove, use PALETTE.sky.fog
```

Then update all files that read these CONFIG values to import from PALETTE instead.

**Step 4: Run the game and verify colors are unchanged**

Run: `cd packages/client && pnpm dev`

Verify all colors match visually. No regressions.

**Step 5: Commit**

```bash
git add packages/client/src/palette.ts packages/client/src/materials.js packages/client/src/config.ts
git commit -m "feat: centralize all game colors in palette module"
```

---

## Task 3: Migrate materials to MeshToonMaterial

Replace the current mix of MeshLambertMaterial / MeshBasicMaterial / MeshStandardMaterial with MeshToonMaterial for a unified cel-shaded look.

**Files:**
- Modify: `packages/client/src/materials.js` (swap material types)
- Modify: `packages/client/src/food.js:18-84` (apple model materials)
- Modify: `packages/client/src/obstacles.js:35-146` (tree/bush materials)

**Step 1: Create a toon gradient texture helper**

Add to the top of `packages/client/src/materials.js`:

```javascript
function createToonGradient(steps = 4) {
  const colors = new Uint8Array(steps);
  for (let i = 0; i < steps; i++) {
    colors[i] = Math.round((i / (steps - 1)) * 255);
  }
  const texture = new THREE.DataTexture(colors, steps, 1, THREE.RedFormat);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.needsUpdate = true;
  return texture;
}
```

**Step 2: Replace MeshLambertMaterial with MeshToonMaterial throughout materials.js**

For each material currently using `MeshLambertMaterial`, change to `MeshToonMaterial` and add the gradient map:

```javascript
const gradientMap = createToonGradient(4);

// Example for obstacle trunk (was MeshLambertMaterial):
tree_trunk: new THREE.MeshToonMaterial({
  map: treeTrunkTexture,
  color: PALETTE.obstacle.trunk,
  gradientMap: gradientMap,
}),
```

Apply this pattern to: ground, wall, grass, tree_trunk, tree_leaves, bush, flower materials, and snake/enemy sprite materials.

**Keep MeshBasicMaterial** for: particle material (needs additive blending), skybox (no lighting).

**Step 3: Update apple model in food.js**

In `packages/client/src/food.js` function `createAppleModel` (line 18), replace `MeshStandardMaterial` with `MeshToonMaterial`:

```javascript
const appleMat = new THREE.MeshToonMaterial({
  color: PALETTE.food.apple,
  gradientMap: gameState.materials.gradientMap, // shared gradient
});
```

Do the same for stem, leaf, and indent materials.

**Step 4: Update obstacle models in obstacles.js**

In `packages/client/src/obstacles.js`, the tree and bush constructors use materials from `gameState.materials.obstacle.*` — these are already updated in Step 2. But verify any inline materials (like flower materials) also use ToonMaterial.

**Step 5: Export the shared gradient map from materials.js**

Add `gradientMap` to the returned object from `loadAndCreateMaterials()` so other files can reference it:

```javascript
return {
  snake, enemy, food, obstacle, particle, ground, wall, grass, skybox,
  gradientMap,
};
```

**Step 6: Run the game and verify the cel-shaded look**

Run: `cd packages/client && pnpm dev`

The game should now have crisp light/shadow boundaries on all objects instead of smooth gradients. Blocky geometry should read much better.

**Step 7: Commit**

```bash
git add packages/client/src/materials.js packages/client/src/food.js packages/client/src/obstacles.js
git commit -m "feat: migrate all materials to MeshToonMaterial for cel-shaded look"
```

---

## Task 4: Add outline postprocessing pass

Add thin dark outlines around all game objects to make blocky geometry pop.

**Files:**
- Modify: `packages/client/src/postprocessing.ts` (add OutlinePass or custom outline)

**Step 1: Add outline via custom shader pass**

Three.js OutlinePass is designed for selection highlighting, not global outlines. Instead, use a Sobel-edge shader on the depth buffer for a global outline effect.

Update `packages/client/src/postprocessing.ts`:

```typescript
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// Add after bloom pass, before output pass:

const outlineShader = {
  uniforms: {
    tDiffuse: { value: null },
    tDepth: { value: null },
    resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    outlineColor: { value: new THREE.Color(0x1a1a1a) },
    outlineStrength: { value: 1.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform vec3 outlineColor;
    uniform float outlineStrength;
    varying vec2 vUv;

    void main() {
      vec2 texel = 1.0 / resolution;
      vec4 center = texture2D(tDiffuse, vUv);

      // Sample neighbors for edge detection on color
      vec4 left   = texture2D(tDiffuse, vUv + vec2(-texel.x, 0.0));
      vec4 right  = texture2D(tDiffuse, vUv + vec2( texel.x, 0.0));
      vec4 top    = texture2D(tDiffuse, vUv + vec2(0.0,  texel.y));
      vec4 bottom = texture2D(tDiffuse, vUv + vec2(0.0, -texel.y));

      // Sobel-like edge detection
      float edge = length(left.rgb - right.rgb) + length(top.rgb - bottom.rgb);
      edge = smoothstep(0.1, 0.3, edge);

      vec3 finalColor = mix(center.rgb, outlineColor, edge * outlineStrength);
      gl_FragColor = vec4(finalColor, center.a);
    }
  `,
};

const outlinePass = new ShaderPass(outlineShader);
composer.addPass(outlinePass); // before outputPass
```

Also add a `setOutlineResolution` export to update on resize:

```typescript
let outlinePassRef: ShaderPass | null = null;

export function resizePostprocessing(width: number, height: number): void {
  if (composer) composer.setSize(width, height);
  if (outlinePassRef) {
    outlinePassRef.uniforms.resolution.value.set(width, height);
  }
}
```

**Step 2: Run the game and verify outlines appear**

Run: `cd packages/client && pnpm dev`

All blocky objects should have thin dark outlines at color boundaries. Adjust `outlineStrength` and `smoothstep` thresholds if too strong or too weak.

**Step 3: Commit**

```bash
git add packages/client/src/postprocessing.ts
git commit -m "feat: add edge-detection outline postprocessing pass"
```

---

## Task 5: Lighting overhaul — warm/cool split + fog gradient

Replace the single flat directional light with a warm sun + cool fill setup, and replace uniform fog with a ground-hugging gradient.

**Files:**
- Modify: `packages/client/src/sceneSetup.js:35-63` (createLights function)
- Modify: `packages/client/src/sceneSetup.js:6-10` (createScene — fog)
- Modify: `packages/client/src/palette.ts` (already has lighting colors)

**Step 1: Update createLights in sceneSetup.js**

Replace the current `createLights` function (lines 35-63):

```javascript
import { PALETTE } from './palette';

export function createLights(scene) {
  // Warm ambient (replaces flat grey)
  const ambientLight = new THREE.AmbientLight(PALETTE.lighting.ambient, 0.5);
  scene.add(ambientLight);

  // Warm sun from upper-right
  const sunLight = new THREE.DirectionalLight(PALETTE.lighting.sun, 0.9);
  sunLight.position.set(
    CONFIG.GRID_SIZE * 0.2,
    CONFIG.GRID_SIZE * 0.3,
    CONFIG.GRID_SIZE * 0.15
  );

  if (performanceSettings.shadows) {
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    const shadowCamSize = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 0.6;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 0.8;
    sunLight.shadow.camera.left = -shadowCamSize;
    sunLight.shadow.camera.right = shadowCamSize;
    sunLight.shadow.camera.top = shadowCamSize;
    sunLight.shadow.camera.bottom = -shadowCamSize;
    sunLight.shadow.bias = -0.001;
  }
  scene.add(sunLight);

  // Cool fill from below-left (no shadows)
  const fillLight = new THREE.DirectionalLight(PALETTE.lighting.fill, 0.3);
  fillLight.position.set(
    -CONFIG.GRID_SIZE * 0.1,
    -CONFIG.GRID_SIZE * 0.05,
    -CONFIG.GRID_SIZE * 0.1
  );
  scene.add(fillLight);

  return { ambientLight, directionalLight: sunLight, fillLight };
}
```

**Step 2: Update fog to use palette color**

In `createScene` (line 6-10), update fog color:

```javascript
import { PALETTE } from './palette';

export function createScene() {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(PALETTE.sky.fog, 0.025); // slightly less dense, warmer color
  return scene;
}
```

**Step 3: Update camera/light follow in playerSnake.js**

The directional light currently follows the player head. The `sunLight` reference is stored on `gameState.lights.directionalLight` — no change needed since we kept the same key name.

**Step 4: Run the game and verify warm/cool lighting**

Run: `cd packages/client && pnpm dev`

The scene should have warmer sunlit areas and cooler shadow tones. The fog should have a slight green tint instead of pure white.

**Step 5: Commit**

```bash
git add packages/client/src/sceneSetup.js
git commit -m "feat: warm/cool lighting split and improved fog color"
```

---

## Task 6: Procedural gradient sky + drifting clouds

Replace the SVG-texture skybox with a procedural gradient and add floating cloud sprites.

**Files:**
- Modify: `packages/client/src/sceneSetup.js:65-76` (createSkybox)
- Modify: `packages/client/src/sceneSetup.js:203-211` (setupBasicScene)

**Step 1: Replace skybox with gradient sky shader**

Replace `createSkybox` in `sceneSetup.js`:

```javascript
export function createSkybox(scene) {
  const skyGeo = new THREE.SphereGeometry(CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 3, 32, 15);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      topColor:    { value: new THREE.Color(PALETTE.sky.zenith) },
      bottomColor: { value: new THREE.Color(PALETTE.sky.horizon) },
      offset:      { value: 20 },
      exponent:    { value: 0.6 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  scene.add(sky);
  return sky;
}
```

**Step 2: Add cloud sprites**

Add a new function in `sceneSetup.js`:

```javascript
export function createClouds(scene) {
  const clouds = new THREE.Group();
  const cloudGeo = new THREE.PlaneGeometry(8, 4);

  for (let i = 0; i < 12; i++) {
    const cloudMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.3 + Math.random() * 0.3,
      side: THREE.DoubleSide,
      fog: false,
      depthWrite: false,
    });
    const cloud = new THREE.Mesh(cloudGeo, cloudMat);
    const spread = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 1.5;
    cloud.position.set(
      (Math.random() - 0.5) * spread,
      CONFIG.GRID_SIZE * 0.3 + Math.random() * CONFIG.GRID_SIZE * 0.2,
      (Math.random() - 0.5) * spread
    );
    cloud.rotation.x = -Math.PI / 2;
    cloud.scale.set(1 + Math.random() * 2, 1 + Math.random(), 1);
    cloud.userData.driftSpeed = 0.2 + Math.random() * 0.3;
    cloud.userData.driftDirection = Math.random() * Math.PI * 2;
    clouds.add(cloud);
  }
  scene.add(clouds);
  return clouds;
}
```

**Step 3: Add cloud update in render loop**

In `packages/client/src/main.ts`, store clouds on gameState and update each frame:

```typescript
// In init, after setupBasicScene:
gameState.environment.clouds = SceneSetup.createClouds(gameState.scene);

// In render(), after updateCamera:
if (gameState.environment.clouds) {
  gameState.environment.clouds.children.forEach((cloud: any) => {
    cloud.position.x += Math.cos(cloud.userData.driftDirection) * cloud.userData.driftSpeed * deltaTime;
    cloud.position.z += Math.sin(cloud.userData.driftDirection) * cloud.userData.driftSpeed * deltaTime;
  });
}
```

**Step 4: Remove old skybox texture from material loading**

In `materials.js`, the skybox texture load can be removed since the sky is now procedural. Remove the `skybox` material from `loadAndCreateMaterials` return value. Update `setupBasicScene` to not pass a texture to `createSkybox`.

**Step 5: Run and verify gradient sky with drifting clouds**

Run: `cd packages/client && pnpm dev`

Sky should be a warm-to-cool gradient. Clouds should drift slowly.

**Step 6: Commit**

```bash
git add packages/client/src/sceneSetup.js packages/client/src/main.ts packages/client/src/materials.js packages/client/src/gameState.ts
git commit -m "feat: procedural gradient sky and drifting cloud sprites"
```

---

## Task 7: Ground improvements — grid overlay + decorative props

Make the ground more readable and visually interesting.

**Files:**
- Modify: `packages/client/src/sceneSetup.js:78-96` (createGround)
- Modify: `packages/client/src/sceneSetup.js:161-194` (createGrass — add rocks)

**Step 1: Add subtle grid overlay to ground**

After the ground mesh is created in `createGround`, add a grid helper:

```javascript
export function createGround(scene, material) {
  // Existing ground plane...
  const groundGeometry = new THREE.PlaneGeometry(
    CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE,
    CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE
  );
  const ground = new THREE.Mesh(groundGeometry, material);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  if (performanceSettings.shadows) {
    ground.receiveShadow = true;
  }
  scene.add(ground);

  // Subtle grid overlay
  const gridHelper = new THREE.GridHelper(
    CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE,
    CONFIG.GRID_SIZE,
    PALETTE.ground.grid,
    PALETTE.ground.grid
  );
  gridHelper.position.y = 0.01; // slightly above ground to avoid z-fighting
  gridHelper.material.opacity = 0.08;
  gridHelper.material.transparent = true;
  scene.add(gridHelper);

  return { ground, gridHelper };
}
```

**Step 2: Add decorative rock props**

Add a function in `sceneSetup.js`:

```javascript
export function createDecorativeRocks(scene) {
  const rockGeo = new THREE.BoxGeometry(0.3, 0.2, 0.3);
  const rockMat = new THREE.MeshToonMaterial({
    color: 0x808080,
    gradientMap: null, // will be set from materials
  });
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, 60);

  const dummy = new THREE.Object3D();
  const halfGrid = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 0.5;

  for (let i = 0; i < 60; i++) {
    dummy.position.set(
      (Math.random() - 0.5) * CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE,
      0.1,
      (Math.random() - 0.5) * CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE
    );
    dummy.rotation.y = Math.random() * Math.PI * 2;
    dummy.scale.set(
      0.5 + Math.random() * 1.0,
      0.3 + Math.random() * 0.5,
      0.5 + Math.random() * 1.0
    );
    dummy.updateMatrix();
    rocks.setMatrixAt(i, dummy.matrix);
  }
  rocks.instanceMatrix.needsUpdate = true;
  scene.add(rocks);
  return rocks;
}
```

**Step 3: Wire into setupBasicScene**

Update `setupBasicScene` to call the new functions and return them in the result object.

**Step 4: Run and verify grid lines + rocks**

Run: `cd packages/client && pnpm dev`

Faint grid lines should be visible on the ground. Small rock props should be scattered throughout.

**Step 5: Commit**

```bash
git add packages/client/src/sceneSetup.js
git commit -m "feat: ground grid overlay and decorative rock props"
```

---

## Task 8: Create animation utility module

Before adding snake animations, create a lightweight tween system. No external library — just a simple list of active tweens updated each frame.

**Files:**
- Create: `packages/client/src/animations.ts`

**Step 1: Create the animations module**

Create `packages/client/src/animations.ts`:

```typescript
import * as THREE from 'three';

interface Tween {
  target: THREE.Object3D;
  property: 'scale' | 'position' | 'rotation';
  axis?: 'x' | 'y' | 'z';
  from: number;
  to: number;
  duration: number;
  elapsed: number;
  easing: (t: number) => number;
  onComplete?: () => void;
}

const activeTweens: Tween[] = [];

// Easing functions
export const ease = {
  linear: (t: number) => t,
  outQuad: (t: number) => t * (2 - t),
  outElastic: (t: number) => {
    const p = 0.3;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
  },
  outBounce: (t: number) => {
    if (t < 1 / 2.75) return 7.5625 * t * t;
    if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  inOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

export function tween(
  target: THREE.Object3D,
  property: 'scale' | 'position' | 'rotation',
  axis: 'x' | 'y' | 'z',
  from: number,
  to: number,
  duration: number,
  easing: (t: number) => number = ease.outQuad,
  onComplete?: () => void,
): void {
  // Cancel any existing tween on same target + property + axis
  cancelTween(target, property, axis);

  (target as any)[property][axis] = from;
  activeTweens.push({ target, property, axis, from, to, duration, elapsed: 0, easing, onComplete });
}

export function tweenUniform(
  target: THREE.Object3D,
  property: 'scale',
  from: number,
  to: number,
  duration: number,
  easing: (t: number) => number = ease.outQuad,
  onComplete?: () => void,
): void {
  cancelTween(target, property);
  target.scale.setScalar(from);
  activeTweens.push({ target, property, from, to, duration, elapsed: 0, easing, onComplete });
}

export function cancelTween(target: THREE.Object3D, property?: string, axis?: string): void {
  for (let i = activeTweens.length - 1; i >= 0; i--) {
    const tw = activeTweens[i];
    if (tw.target === target && (!property || tw.property === property) && (!axis || tw.axis === axis)) {
      activeTweens.splice(i, 1);
    }
  }
}

export function updateAnimations(deltaTime: number): void {
  for (let i = activeTweens.length - 1; i >= 0; i--) {
    const tw = activeTweens[i];
    tw.elapsed += deltaTime;
    const t = Math.min(tw.elapsed / tw.duration, 1);
    const value = tw.from + (tw.to - tw.from) * tw.easing(t);

    if (tw.axis) {
      (tw.target as any)[tw.property][tw.axis] = value;
    } else {
      // Uniform scale
      tw.target.scale.setScalar(value);
    }

    if (t >= 1) {
      activeTweens.splice(i, 1);
      tw.onComplete?.();
    }
  }
}

export function getActiveTweenCount(): number {
  return activeTweens.length;
}
```

**Step 2: Wire updateAnimations into main.ts render loop**

In `packages/client/src/main.ts`:

```typescript
import { updateAnimations } from './animations';

// In render(), after updateParticles:
updateAnimations(deltaTime);
```

**Step 3: Run the game and verify no errors**

No visible change yet — the animation system is idle until used.

Run: `cd packages/client && pnpm dev`

**Step 4: Commit**

```bash
git add packages/client/src/animations.ts packages/client/src/main.ts
git commit -m "feat: add lightweight tween animation system"
```

---

## Task 9: Snake body wave motion

Add a sine-wave vertical offset to each body segment so the snake appears to slither.

**Files:**
- Modify: `packages/client/src/playerSnake.js:214-260` (syncPlayerMeshes)
- Modify: `packages/client/src/enemySnake.js:193-270` (syncEnemyMeshes)

**Step 1: Add wave motion to player snake mesh sync**

In `packages/client/src/playerSnake.js`, inside `syncPlayerMeshes`, after positioning each segment mesh, add a vertical wave offset:

```javascript
// After setting mesh.position from segment data:
const waveAmplitude = 0.08;   // subtle vertical bob
const waveFrequency = 2.5;    // oscillations along body
const waveSpeed = 4.0;        // animation speed
const segmentIndex = i;
const time = gameState.clock.getElapsedTime();

mesh.position.y += Math.sin(time * waveSpeed + segmentIndex * waveFrequency) * waveAmplitude;
```

**Step 2: Add wave motion to enemy snake mesh sync**

Apply the same pattern in `packages/client/src/enemySnake.js` `syncEnemyMeshes`, for each enemy's segment meshes.

**Step 3: Run and verify slithering effect**

Run: `cd packages/client && pnpm dev`

Snakes should have a gentle wave running along their body. The head moves slightly too — that's fine, it adds life.

**Step 4: Commit**

```bash
git add packages/client/src/playerSnake.js packages/client/src/enemySnake.js
git commit -m "feat: sine wave body motion for player and enemy snakes"
```

---

## Task 10: Head squash & stretch + smooth turning

Compress the head on turns, stretch on speed boost.

**Files:**
- Modify: `packages/client/src/playerSnake.js:387-485` (turnLeft/turnRight — trigger squash)
- Modify: `packages/client/src/playerSnake.js:214-260` (syncPlayerMeshes — apply stretch)

**Step 1: Trigger squash tween on turn input**

In `packages/client/src/playerSnake.js`, at the top add:

```javascript
import { tween, tweenUniform, ease } from './animations';
```

In `turnLeft` and `turnRight`, after the direction change is queued, add squash animation on the head mesh:

```javascript
// After direction change logic:
if (playerSnakeMeshes.length > 0) {
  const head = playerSnakeMeshes[0];
  // Squash: compress Y, expand X/Z
  tween(head, 'scale', 'y', 0.7, 1.0, 0.15, ease.outElastic);
  tween(head, 'scale', 'x', 1.2, 1.0, 0.15, ease.outElastic);
  tween(head, 'scale', 'z', 1.2, 1.0, 0.15, ease.outElastic);
}
```

**Step 2: Apply stretch based on speed**

In `syncPlayerMeshes`, for the head mesh (index 0), stretch along the movement direction when speed-boosted:

```javascript
if (i === 0) {
  const speedRatio = gameState.playerSnake.speed / CONFIG.BASE_SNAKE_SPEED;
  if (speedRatio > 1.2) {
    // Stretch head in movement direction
    const stretchFactor = 1.0 + (speedRatio - 1.0) * 0.15;
    // Don't override active tweens
    if (head.scale.x === 1.0) {
      mesh.scale.set(1.0, 1.0, stretchFactor);
    }
  }
}
```

**Step 3: Smooth head rotation**

Instead of snapping head rotation to face movement direction, interpolate:

```javascript
// In syncPlayerMeshes, for head (index 0):
const targetRotation = Math.atan2(
  gameState.playerSnake.direction.x,
  gameState.playerSnake.direction.z
);
mesh.rotation.y = THREE.MathUtils.lerp(
  mesh.rotation.y,
  targetRotation,
  0.3 // smooth factor
);
```

**Step 4: Run and verify squash/stretch + smooth turns**

Run: `cd packages/client && pnpm dev`

Turning should briefly squash the head. Speed boost should stretch it. Head rotation should be smooth, not snappy.

**Step 5: Commit**

```bash
git add packages/client/src/playerSnake.js
git commit -m "feat: head squash/stretch on turns and smooth rotation"
```

---

## Task 11: Eating feedback — chomp animation + food squish

Make eating food feel punchy.

**Files:**
- Modify: `packages/client/src/playerSnake.js` (head chomp on eat)
- Modify: `packages/client/src/food.js:464-647` (food squish before removal)

**Step 1: Add chomp animation on food eat**

In `packages/client/src/playerSnake.js`, find where food eating triggers score/growth (inside `updatePlayer` or the event handler for FoodEaten). Add:

```javascript
// After food is eaten:
if (playerSnakeMeshes.length > 0) {
  const head = playerSnakeMeshes[0];
  // Chomp: quick scale pulse
  tweenUniform(head, 'scale', 1.3, 1.0, 0.15, ease.outElastic);
}
```

**Step 2: Add pop-in animation for new segments**

When a new segment mesh is added to `playerSnakeMeshes`, animate it popping in:

```javascript
// After creating new segment mesh:
newMesh.scale.setScalar(0);
tweenUniform(newMesh, 'scale', 0, 1.0, 0.2, ease.outBounce);
```

**Step 3: Add food squish before removal**

In `packages/client/src/food.js`, in `checkAndEatFood` where food is consumed, instead of immediately removing the mesh, animate it:

```javascript
import { tweenUniform, tween, ease } from './animations';

// Instead of immediately removing mesh:
const foodMesh = gameState.food.meshes[foodIndex];
if (foodMesh) {
  // Squish animation: shrink and rotate
  tweenUniform(foodMesh, 'scale', 1.0, 0, 0.15, ease.inOutCubic, () => {
    // Remove mesh after animation completes
    gameState.scene.remove(foodMesh);
    foodMesh.traverse(child => {
      if (child.geometry) child.geometry.dispose();
    });
  });
  tween(foodMesh, 'rotation', 'y', foodMesh.rotation.y, foodMesh.rotation.y + Math.PI, 0.15, ease.linear);
}
```

**Step 4: Increase particle burst on food eat**

In `packages/client/src/particleSystem.js`, increase the particle count for `createNormalFoodEffect` from 8-12 to 15-20, and make them color-matched to the food type.

**Step 5: Run and verify eating feels punchy**

Run: `cd packages/client && pnpm dev`

Eating should: chomp the head, squish the food, pop in the new segment, and burst more particles.

**Step 6: Commit**

```bash
git add packages/client/src/playerSnake.js packages/client/src/food.js packages/client/src/particleSystem.js
git commit -m "feat: chomp animation, food squish, and segment pop-in on eating"
```

---

## Task 12: Death scatter effect

When the player dies, segments scatter outward as physics-lite projectiles.

**Files:**
- Modify: `packages/client/src/playerSnake.js:1603` (playPlayerDeathEffects)

**Step 1: Replace death effect with segment scatter**

In `packages/client/src/playerSnake.js`, rewrite `playPlayerDeathEffects`:

```javascript
export function playPlayerDeathEffects(gameState) {
  Audio.play('playerDeath');

  // Scatter each segment outward
  const head = gameState.playerSnake.segments[0];
  if (!head) return;

  playerSnakeMeshes.forEach((mesh, i) => {
    if (!mesh) return;
    // Calculate scatter direction from head
    const angle = (i / playerSnakeMeshes.length) * Math.PI * 2 + Math.random() * 0.5;
    const distance = 2 + Math.random() * 3;
    const targetX = mesh.position.x + Math.cos(angle) * distance;
    const targetZ = mesh.position.z + Math.sin(angle) * distance;
    const targetY = 1.5 + Math.random() * 2;

    // Animate scatter
    tween(mesh, 'position', 'x', mesh.position.x, targetX, 0.4, ease.outQuad);
    tween(mesh, 'position', 'z', mesh.position.z, targetZ, 0.4, ease.outQuad);
    tween(mesh, 'position', 'y', mesh.position.y, targetY, 0.2, ease.outQuad, () => {
      // Fall back down
      tween(mesh, 'position', 'y', targetY, -0.5, 0.3, ease.inOutCubic, () => {
        // Fade out by shrinking
        tweenUniform(mesh, 'scale', 1.0, 0, 0.2, ease.linear, () => {
          gameState.scene.remove(mesh);
        });
      });
    });

    // Spin during scatter
    tween(mesh, 'rotation', 'x', 0, Math.PI * 2 * (Math.random() > 0.5 ? 1 : -1), 0.7, ease.outQuad);
    tween(mesh, 'rotation', 'z', 0, Math.PI * (Math.random() > 0.5 ? 1 : -1), 0.7, ease.outQuad);
  });

  // Particle explosion at head position
  createExplosion(
    gameState.scene,
    gameState.camera,
    new THREE.Vector3(head.x * CONFIG.UNIT_SIZE, 0.5, head.z * CONFIG.UNIT_SIZE),
    20,
    PALETTE.particles.death
  );
}
```

**Step 2: Run and verify death scatter**

Run: `cd packages/client && pnpm dev`

Die by hitting a wall or enemy. Segments should scatter outward, arc up, fall, then shrink away.

**Step 3: Commit**

```bash
git add packages/client/src/playerSnake.js
git commit -m "feat: dramatic segment scatter effect on player death"
```

---

## Task 13: Alpha mode activation effects

Add time-freeze, shockwave, aura particles, and screen vignette for alpha mode.

**Files:**
- Modify: `packages/client/src/playerSnake.js:1386` (activateAlphaMode)
- Modify: `packages/client/src/postprocessing.ts` (add vignette pass)
- Modify: `packages/client/src/particleSystem.js` (add aura particle type)

**Step 1: Add vignette shader to postprocessing**

In `packages/client/src/postprocessing.ts`, add a vignette pass that can be toggled:

```typescript
let vignettePass: ShaderPass | null = null;

const vignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    intensity: { value: 0.0 },
    color: { value: new THREE.Color(0x4A148C) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float intensity;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      float dist = distance(vUv, vec2(0.5));
      float vignette = smoothstep(0.3, 0.9, dist);
      vec3 vignetteColor = mix(texel.rgb, color, vignette * intensity);
      gl_FragColor = vec4(vignetteColor, texel.a);
    }
  `,
};

// Add to initPostprocessing, before outputPass:
vignettePass = new ShaderPass(vignetteShader);
composer.addPass(vignettePass);

export function setVignetteIntensity(intensity: number): void {
  if (vignettePass) {
    vignettePass.uniforms.intensity.value = intensity;
  }
}
```

**Step 2: Add shockwave effect**

Add to `particleSystem.js`:

```javascript
export function createShockwave(scene, position) {
  const geo = new THREE.RingGeometry(0.1, 0.3, 32);
  const mat = new THREE.MeshBasicMaterial({
    color: PALETTE.alpha.glow,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const ring = new THREE.Mesh(geo, mat);
  ring.position.copy(position);
  ring.position.y = 0.5;
  ring.rotation.x = -Math.PI / 2;
  scene.add(ring);

  // Animate expansion
  const startTime = performance.now();
  const duration = 500; // ms
  const maxScale = 15;

  function animateRing() {
    const elapsed = performance.now() - startTime;
    const t = elapsed / duration;
    if (t >= 1) {
      scene.remove(ring);
      geo.dispose();
      mat.dispose();
      return;
    }
    ring.scale.setScalar(1 + t * maxScale);
    mat.opacity = 0.8 * (1 - t);
    requestAnimationFrame(animateRing);
  }
  animateRing();
}
```

**Step 3: Wire effects into activateAlphaMode**

In `packages/client/src/playerSnake.js` `activateAlphaMode`:

```javascript
import { setVignetteIntensity } from './postprocessing';
import { createShockwave } from './particleSystem.js';

// At start of activateAlphaMode:
// Brief time-freeze (pause simulation for 100ms)
gameState.flags.gameRunning = false;
setTimeout(() => { gameState.flags.gameRunning = true; }, 100);

// Shockwave at player position
const headPos = playerSnakeMeshes[0]?.position;
if (headPos) {
  createShockwave(gameState.scene, headPos.clone());
}

// Enable vignette
setVignetteIntensity(0.4);
```

In `updateAlphaMode`, when alpha mode ends:

```javascript
setVignetteIntensity(0.0);
```

**Step 4: Run and verify alpha mode effects**

Run: `cd packages/client && pnpm dev`

Accumulate alpha points and activate. Should see: brief freeze, purple shockwave ring expanding, purple vignette on screen edges during alpha.

**Step 5: Commit**

```bash
git add packages/client/src/playerSnake.js packages/client/src/postprocessing.ts packages/client/src/particleSystem.js
git commit -m "feat: alpha mode activation effects — freeze, shockwave, vignette"
```

---

## Task 14: Speed lines / trail particles

Add faint trail particles when speed-boosted or in alpha mode.

**Files:**
- Modify: `packages/client/src/playerSnake.js:214-260` (syncPlayerMeshes — spawn trail)
- Modify: `packages/client/src/particleSystem.js` (add trail particle type)

**Step 1: Add trail particle spawner to particleSystem.js**

```javascript
export function createTrailParticle(scene, camera, position, color = 0xFFFFFF) {
  if (activeParticles.length > MAX_PARTICLES * 0.9) return;

  const mesh = new THREE.Mesh(GEOMETRIES.particle, particleMaterialRef.clone());
  mesh.material.color.set(color);
  mesh.material.opacity = 0.4;
  mesh.position.copy(position);
  mesh.position.y += 0.3;
  mesh.lookAt(camera.position);
  mesh.scale.setScalar(0.15);
  scene.add(mesh);

  activeParticles.push({
    mesh,
    velocity: new THREE.Vector3(0, 0.2, 0),
    life: 0.3,
    initialLife: 0.3,
  });
}
```

**Step 2: Spawn trail particles in syncPlayerMeshes**

In `packages/client/src/playerSnake.js` `syncPlayerMeshes`, after positioning the head mesh, if speed is boosted:

```javascript
const speedRatio = calculateActualSpeed(gameState) / CONFIG.BASE_SNAKE_SPEED;
if (speedRatio > 1.2 && Math.random() < 0.3) {
  const trailColor = gameState.playerSnake.alphaMode.active
    ? PALETTE.alpha.glow
    : PALETTE.powerups.speed.particle;
  createTrailParticle(
    gameState.scene,
    gameState.camera,
    playerSnakeMeshes[0].position,
    trailColor
  );
}
```

**Step 3: Run and verify trail particles**

Run: `cd packages/client && pnpm dev`

Eat a speed frog or activate alpha mode. Faint colored particles should trail behind the snake head.

**Step 4: Commit**

```bash
git add packages/client/src/playerSnake.js packages/client/src/particleSystem.js
git commit -m "feat: speed trail particles during boost and alpha mode"
```

---

## Task 15: UI visual integration

Match UI to the game palette, add backdrop blur, animate power-up bars and kill feed.

**Files:**
- Modify: `packages/client/styles.css`
- Modify: `packages/client/src/ui.js` (kill feed animation, powerup bar colors)

**Step 1: Update CSS for UI cohesion**

In `packages/client/styles.css`, update the game HUD elements:

```css
/* Score/kills backdrop */
#score, #kills, #highScoreInfo {
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 4px 8px;
}

/* Kill feed slide-in animation */
@keyframes killFeedSlideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.kill-feed-entry {
  animation: killFeedSlideIn 0.3s ease-out;
}

/* Power-up bar fill animation */
.powerup-bar-fill {
  transition: width 0.3s ease-out;
}

/* Alpha mode bar glow */
#alphaModeContainer.active {
  box-shadow: 0 0 12px rgba(156, 39, 176, 0.6);
}
```

**Step 2: Update kill feed in ui.js**

In `packages/client/src/ui.js` `addKillFeedMessage`, add the CSS class:

```javascript
// After creating the message div:
messageDiv.classList.add('kill-feed-entry');
```

**Step 3: Update power-up info display to use colored bars**

In `packages/client/src/ui.js` `updatePowerUpInfo`, create colored bar elements instead of plain text:

```javascript
// For each active powerup, create a bar with the powerup's color:
const barDiv = document.createElement('div');
barDiv.style.background = PALETTE.powerups[type]?.ui || '#FFFFFF';
barDiv.style.height = '4px';
barDiv.style.borderRadius = '2px';
barDiv.classList.add('powerup-bar-fill');
```

**Step 4: Run and verify UI improvements**

Run: `cd packages/client && pnpm dev`

Score/kills should have blur backdrop. Kill feed should slide in from right. Power-up display should have colored bars.

**Step 5: Commit**

```bash
git add packages/client/styles.css packages/client/src/ui.js
git commit -m "feat: UI visual integration — backdrop blur, kill feed animation, colored powerup bars"
```

---

## Task 16: Bloom on power-up pickups and alpha mode

Make bloom react to game events — brief intensity spike on powerup pickup, sustained glow during alpha.

**Files:**
- Modify: `packages/client/src/postprocessing.ts` (expose bloom control)
- Modify: `packages/client/src/playerSnake.js` (trigger bloom on events)

**Step 1: Add bloom intensity control**

In `packages/client/src/postprocessing.ts`:

```typescript
let bloomPassRef: UnrealBloomPass | null = null;
let defaultBloomStrength = 0.3;

export function setBloomStrength(strength: number): void {
  if (bloomPassRef) {
    bloomPassRef.strength = strength;
  }
}

export function pulseBloom(peakStrength: number, duration: number): void {
  if (!bloomPassRef) return;
  bloomPassRef.strength = peakStrength;
  const start = performance.now();
  function decay() {
    const t = (performance.now() - start) / (duration * 1000);
    if (t >= 1) {
      bloomPassRef!.strength = defaultBloomStrength;
      return;
    }
    bloomPassRef!.strength = peakStrength + (defaultBloomStrength - peakStrength) * t;
    requestAnimationFrame(decay);
  }
  requestAnimationFrame(decay);
}
```

**Step 2: Trigger bloom pulse on powerup pickup**

In `packages/client/src/playerSnake.js` `applyPowerUp`:

```javascript
import { pulseBloom, setBloomStrength } from './postprocessing';

// After applying powerup:
pulseBloom(0.8, 0.5); // brief bright flash
```

**Step 3: Sustained bloom during alpha mode**

In `activateAlphaMode`:

```javascript
setBloomStrength(0.6);
```

In `updateAlphaMode` when alpha ends:

```javascript
setBloomStrength(0.3); // return to default
```

**Step 4: Run and verify bloom effects**

Run: `cd packages/client && pnpm dev`

Picking up a frog should create a brief bloom flash. Alpha mode should have a persistent stronger bloom.

**Step 5: Commit**

```bash
git add packages/client/src/postprocessing.ts packages/client/src/playerSnake.js
git commit -m "feat: dynamic bloom on powerup pickups and alpha mode"
```

---

## Task 17: Add emissive glow to powerup food items

Make powerup frogs glow with their color family by adding emissive properties.

**Files:**
- Modify: `packages/client/src/materials.js` (add emissive to food powerup materials)
- Modify: `packages/client/src/food.js` (pulse emissive on frogs)

**Step 1: Add emissive to powerup materials**

In `packages/client/src/materials.js`, for powerup food materials (speed, shrink, score_x2, ghost), add emissive:

```javascript
speed: new THREE.MeshToonMaterial({
  color: PALETTE.powerups.speed.primary,
  emissive: PALETTE.powerups.speed.glow,
  emissiveIntensity: 0.3,
  gradientMap: gradientMap,
}),
```

Repeat for shrink, score_x2, ghost.

**Step 2: Pulse emissive on frogs in updateFoodAnimations**

In `packages/client/src/food.js` `updateFoodAnimations`, for frog meshes, add emissive pulsing:

```javascript
// For each frog mesh:
if (item.type !== 'normal' && group.children[0]?.material?.emissiveIntensity !== undefined) {
  const pulse = 0.2 + Math.sin(time * 3) * 0.15;
  group.traverse(child => {
    if (child.material && child.material.emissiveIntensity !== undefined) {
      child.material.emissiveIntensity = pulse;
    }
  });
}
```

**Step 3: Run and verify frog glow**

Run: `cd packages/client && pnpm dev`

Powerup frogs should have a subtle pulsing glow in their respective colors. Combined with bloom, they should look enticing.

**Step 4: Commit**

```bash
git add packages/client/src/materials.js packages/client/src/food.js
git commit -m "feat: emissive glow pulsing on powerup food items"
```

---

## Task 18: Respawn assembly animation

When the player respawns, animate segments assembling one by one.

**Files:**
- Modify: `packages/client/src/playerSnake.js:158` (resetPlayer — animate segment assembly)

**Step 1: Add staggered pop-in on respawn**

In `packages/client/src/playerSnake.js`, after `resetPlayer` recreates the snake meshes, animate them appearing one at a time:

```javascript
// After meshes are recreated:
playerSnakeMeshes.forEach((mesh, i) => {
  mesh.scale.setScalar(0);
  setTimeout(() => {
    tweenUniform(mesh, 'scale', 0, 1.0, 0.2, ease.outBounce);
  }, i * 80); // 80ms stagger between segments
});

// Brief invulnerability shimmer (flash opacity)
let shimmerCount = 0;
const shimmerInterval = setInterval(() => {
  playerSnakeMeshes.forEach(mesh => {
    if (mesh.material) {
      mesh.material.opacity = shimmerCount % 2 === 0 ? 0.4 : 1.0;
      mesh.material.transparent = true;
    }
  });
  shimmerCount++;
  if (shimmerCount > 8) {
    clearInterval(shimmerInterval);
    playerSnakeMeshes.forEach(mesh => {
      if (mesh.material) {
        mesh.material.opacity = 1.0;
        mesh.material.transparent = false;
      }
    });
  }
}, 100);
```

**Step 2: Run and verify respawn animation**

Run: `cd packages/client && pnpm dev`

Die and respawn. Segments should pop in one by one, then shimmer briefly.

**Step 3: Commit**

```bash
git add packages/client/src/playerSnake.js
git commit -m "feat: staggered segment pop-in and shimmer on respawn"
```

---

## Task 19: Final integration pass — consistent shadow casting

Ensure all game objects consistently cast and receive shadows.

**Files:**
- Modify: `packages/client/src/playerSnake.js` (enable castShadow on segment meshes)
- Modify: `packages/client/src/enemySnake.js` (enable castShadow)
- Modify: `packages/client/src/food.js` (enable castShadow on food meshes)
- Modify: `packages/client/src/obstacles.js` (enable castShadow on trees/bushes)

**Step 1: Add shadow casting to all game object creation**

In each file where meshes are created, add:

```javascript
import { performanceSettings } from './deviceUtils.js';

// After creating each mesh:
if (performanceSettings.shadows) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
}
```

Apply to:
- `playerSnake.js` in `createPlayerMeshes` / `createRemotePlayerMeshes`
- `enemySnake.js` in mesh creation within `initializeEnemy`
- `food.js` in `createAppleModel` and `createBlockyFrog`
- `obstacles.js` in `createObstacleMeshInstance`

**Step 2: Run and verify shadows on all objects**

Run: `cd packages/client && pnpm dev`

All snakes, food items, and obstacles should cast shadows on the ground.

**Step 3: Commit**

```bash
git add packages/client/src/playerSnake.js packages/client/src/enemySnake.js packages/client/src/food.js packages/client/src/obstacles.js
git commit -m "feat: consistent shadow casting on all game objects"
```

---

## Task 20: Performance guard — mobile postprocessing toggle

Disable postprocessing on mobile devices where GPU budget is limited.

**Files:**
- Modify: `packages/client/src/postprocessing.ts` (add bypass for mobile)
- Modify: `packages/client/src/main.ts` (conditional init)

**Step 1: Add mobile bypass**

In `packages/client/src/postprocessing.ts`:

```typescript
let enabled = true;

export function initPostprocessing(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  enablePostprocessing: boolean = true
): EffectComposer | null {
  enabled = enablePostprocessing;
  if (!enabled) return null;
  // ... existing init code
}

export function renderPostprocessing(): boolean {
  if (!enabled || !composer) return false;
  composer.render();
  return true;
}
```

**Step 2: Conditionally initialize in main.ts**

```typescript
import { performanceSettings } from './deviceUtils.js';

const composer = initPostprocessing(
  gameState.renderer,
  gameState.scene,
  gameState.camera,
  !performanceSettings.isMobile // disable on mobile
);

// In render:
if (!renderPostprocessing()) {
  gameState.renderer.render(gameState.scene, gameState.camera);
}
```

**Step 3: Run on desktop and verify postprocessing works**

Run: `cd packages/client && pnpm dev`

On desktop: full postprocessing. Simulate mobile (Chrome DevTools device mode): should fall back to direct rendering with no postprocessing.

**Step 4: Commit**

```bash
git add packages/client/src/postprocessing.ts packages/client/src/main.ts
git commit -m "feat: disable postprocessing on mobile for performance"
```

---

## Summary

20 tasks covering the full visual overhaul:

| # | Task | Key Change |
|---|------|-----------|
| 1 | Postprocessing pipeline | EffectComposer + bloom |
| 2 | Color palette | Centralized palette.ts |
| 3 | Toon materials | MeshToonMaterial migration |
| 4 | Outline pass | Edge detection shader |
| 5 | Lighting overhaul | Warm/cool split + fog |
| 6 | Procedural sky | Gradient + drifting clouds |
| 7 | Ground improvements | Grid overlay + rocks |
| 8 | Animation system | Tween utilities |
| 9 | Snake wave motion | Sine body oscillation |
| 10 | Head squash/stretch | Turn + speed animations |
| 11 | Eating feedback | Chomp + squish + pop-in |
| 12 | Death scatter | Segment projectiles |
| 13 | Alpha mode effects | Freeze + shockwave + vignette |
| 14 | Speed trail particles | Trail behind boosted snake |
| 15 | UI integration | Backdrop blur + animations |
| 16 | Dynamic bloom | Event-triggered bloom pulses |
| 17 | Powerup glow | Emissive frog pulsing |
| 18 | Respawn animation | Staggered assembly + shimmer |
| 19 | Shadow consistency | All objects cast shadows |
| 20 | Mobile performance | Postprocessing toggle |
