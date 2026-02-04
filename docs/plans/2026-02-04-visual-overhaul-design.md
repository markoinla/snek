# Visual Overhaul Design

Keep the blocky/voxel art style but execute it at a higher level through better lighting, animation, effects, and material cohesion.

## 1. Environment & Atmosphere

### Lighting
- Replace single directional light with warm sun (above) + cool fill (below) split
- Add SSAO postprocessing for depth on blocky geometry
- Add bloom postprocessing for powerup pickups and alpha mode glow
- Replace uniform white fog with ground-hugging gradient fog (dense near ground, fading upward)

### Ground
- Vertex-displaced grid for subtle height variation (visual only, gameplay stays flat)
- Scatter non-collidable decorative props: blocky grass tufts, small rocks
- Subtle grid-line overlay or cell borders for gameplay readability

### Sky
- Replace SVG skybox with procedural gradient sky (warm horizon, cool zenith)
- Add slowly drifting blocky cloud sprites

## 2. Snake Animations & Game Feel

### Movement
- Body segment wave motion: each segment follows the one ahead with slight delay and sine offset for slithering feel
- Squash & stretch on head: compress on turn, stretch on boost
- Smooth turning arcs: interpolate head rotation over 3-4 frames with body curl
- Speed lines: faint trail particles during boost or alpha mode

### Eating Feedback
- Head chomp animation: scale pulse 1.0 -> 1.3 -> 1.0 over ~150ms
- New segment pops in with scale bounce 0 -> 1.2 -> 1.0
- Food squishes before disappearing (scale down + slight rotation)
- Larger color-matched particle burst + small screen shake (infrastructure exists)

### Death & Respawn
- Death: segments scatter outward individually as physics-lite projectiles, brief camera zoom-out
- Respawn: segments assemble one by one with pop-in sequence, brief invulnerability shimmer

### Alpha Mode Activation
- Brief time-freeze effect (0.1s pause before activation)
- Purple shockwave ring expanding from snake
- Persistent energy aura particles orbiting snake during alpha
- Subtle purple screen vignette while active

## 3. Material Cohesion

### Color Palette
- Define core palette of 8-10 colors in one shared module: grass greens, earth browns, sky blues, food reds/purples, UI accents
- All materials reference the palette (no scattered hex codes)
- Each player color gets primary + accent + glow trio
- Each powerup type gets a color family carried through food item -> pickup particle -> UI indicator -> active aura

### Unified Shading
- Move all gameplay objects to MeshToonMaterial (or custom toon shader) for clean cel-shaded look with crisp light/shadow boundaries
- Add outline postprocessing pass: thin dark outlines on all game objects for blocky geometry readability
- Consistent shadow casting across all objects

### UI Integration
- Match UI fonts and colors to in-game palette
- Backdrop blur behind score/kill counters for readability
- Animated bar fills with powerup color for timers (replace plain text countdowns)
- Kill feed slide-in + glow animation

## Key Architectural Decisions

1. **Postprocessing pipeline**: EffectComposer with RenderPass + SSAOPass + UnrealBloomPass + OutlinePass. This is the single biggest change and the foundation for visual cohesion.
2. **Toon shading**: MeshToonMaterial across all game objects replaces the current Lambert/Basic/Standard mix.
3. **Centralized palette**: Single `palette.ts` module that all materials import from.
4. **Animation system**: Tween-based (using simple lerp utilities, no library) for squash/stretch, pop-in, and scale pulses.

## Implementation Order

1. Postprocessing pipeline + toon materials (foundation everything else builds on)
2. Centralized color palette
3. Lighting overhaul (sun/fill split, fog gradient)
4. Ground improvements (height variation, decorative props, grid overlay)
5. Sky replacement (procedural gradient + clouds)
6. Snake movement animations (wave motion, squash/stretch, turning arcs)
7. Eating feedback (chomp, pop-in, food squish, particles)
8. Death scatter + respawn assembly
9. Alpha mode effects (freeze, shockwave, aura, vignette)
10. Speed lines and trail particles
11. UI visual integration (palette, blur, animated bars, kill feed animations)
