import * as THREE from 'three';

// Core game palette — all colors in one place
// Every material, particle, and UI element references these

export const PALETTE = {
  // Environment
  sky: {
    zenith: 0x87CEEB,    // light sky blue
    horizon: 0xB0D4F1,   // muted sky blue
    fog: 0xD4E5F7,       // matches horizon
  },

  ground: {
    base: 0x4A7C3F,      // natural grass green
    grid: 0x3D6B34,      // darker grid lines
    rock: 0x808080,       // neutral gray decorative rocks
    rockDark: 0x606060,   // darker rock variation
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
    speedTrail: 0xAED581,       // green-yellow for normal speed trail
    alphaSpeedTrail: 0xCE93D8,  // purple for alpha mode trail
    respawn: 0x88CCFF,          // light blue for respawn assembly
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

  // Outline (postprocessing edge pass)
  outline: {
    edge: 0x222222,      // dark ink outline
    edgeGlow: 0x000000,  // no hidden-edge glow
  },
} as const;

// Helper: convert hex to THREE.Color
export function color(hex: number): THREE.Color {
  return new THREE.Color(hex);
}
