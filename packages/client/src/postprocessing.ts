import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import * as THREE from 'three';
import { PALETTE, color } from './palette';

let composer: EffectComposer | null = null;
let outlinePass: OutlinePass | null = null;
let bloomPass: UnrealBloomPass | null = null;

export function initPostprocessing(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
): EffectComposer {
  composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // Outline pass — dark ink edges for cel-shaded look
  const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
  outlinePass = new OutlinePass(resolution, scene, camera);
  outlinePass.visibleEdgeColor = color(PALETTE.outline.edge);
  outlinePass.hiddenEdgeColor = color(PALETTE.outline.edgeGlow);
  outlinePass.edgeStrength = 1.5;
  outlinePass.edgeThickness = 0.5;
  outlinePass.edgeGlow = 0.0;
  outlinePass.pulsePeriod = 0;
  composer.addPass(outlinePass);

  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.0,   // strength (disabled by default)
    0.3,   // radius
    1.0    // threshold — nothing blooms at default
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

// --- Outline management ---

/** Replace the full set of outlined objects. */
export function setOutlinedObjects(objects: THREE.Object3D[]): void {
  if (outlinePass) {
    outlinePass.selectedObjects = objects;
  }
}

/** Add objects to the outline selection (deduplicates). */
export function addOutlinedObjects(...objects: THREE.Object3D[]): void {
  if (!outlinePass) return;
  for (const obj of objects) {
    if (!outlinePass.selectedObjects.includes(obj)) {
      outlinePass.selectedObjects.push(obj);
    }
  }
}

/** Remove objects from the outline selection. */
export function removeOutlinedObjects(...objects: THREE.Object3D[]): void {
  if (!outlinePass) return;
  outlinePass.selectedObjects = outlinePass.selectedObjects.filter(
    (o: THREE.Object3D) => !objects.includes(o)
  );
}

/** Clear all outlined objects. */
export function clearOutlinedObjects(): void {
  if (outlinePass) {
    outlinePass.selectedObjects = [];
  }
}

/** Get the outline pass instance for advanced configuration. */
export function getOutlinePass(): OutlinePass | null {
  return outlinePass;
}

/** Get the bloom pass instance for dynamic bloom adjustments. */
export function getBloomPass(): UnrealBloomPass | null {
  return bloomPass;
}
