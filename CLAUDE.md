# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Snek is a 3D multiplayer snake game built as a pnpm monorepo with three packages: a Three.js client, a Colyseus multiplayer server, and a shared types/protocol package.

## Commands

### Development
```bash
pnpm install                          # Install all workspace dependencies
pnpm dev                              # Start client dev server (Vite, port 5173)
pnpm -C packages/server dev           # Start multiplayer server (port 2567)
```

To play multiplayer locally, run the server and open the client with `?multiplayer=1` query param.

### Build
```bash
pnpm build                            # TypeScript check + Vite production build (client)
```

### Tests
```bash
pnpm test:core                        # Core simulation headless smoke test
pnpm -C packages/client test:serialize    # Serialization round-trip test
pnpm -C packages/client test:determinism  # RNG determinism validation
pnpm -C packages/client test:multiplayer  # Headless multiplayer test (requires server running)
pnpm -C packages/client load-test         # Multi-client load test (requires server running)
```

No formal test framework (Jest/Vitest). Tests are custom Node scripts run via `tsx`.

### Docker (server)
```bash
docker build -f packages/server/Dockerfile -t snek-server .
docker run -p 2567:2567 snek-server
```

## Architecture

### Monorepo Layout
- **`packages/client/`** - Vite + Three.js game client (TypeScript + JavaScript mix)
- **`packages/server/`** - Colyseus multiplayer server (TypeScript, Express)
- **`packages/shared/`** - Shared types, protocol constants, serialization (`snek-shared`)

### Core Simulation vs Rendering

The game has a strict separation between **deterministic core simulation** and **rendering**:

**Core simulation** (`packages/client/src/core/`) is pure TypeScript, tick-based (30 Hz), and deterministic via seeded Mulberry32 RNG. Key files:
- `step.ts` - Main game tick loop, returns `StepResult` with `EventEnvelope[]`
- `state.ts` / `sync.ts` - CoreState creation and snapshot application
- `player.ts` - Player movement, input queue (prevents 180-degree reversals)
- `enemy.ts` - AI enemy state machine (seeking/idle/avoiding)
- `food.ts` / `spawn.ts` - Food spawning with type ratios
- `collision.ts` / `combat.ts` - Grid-based collision detection
- `powerups.ts` - Speed, ghost, shrink, score multiplier effects
- `alpha.ts` - Alpha Mode (earned via points, allows eating enemy heads)
- `rng.ts` - Seeded RNG; supports `?seed=123` URL param for reproducibility

**Rendering** (`packages/client/src/`) is JavaScript using Three.js:
- `playerSnake.js` / `enemySnake.js` - Snake mesh rendering and animation
- `food.js` / `obstacles.js` - Game object meshes
- `sceneSetup.js` - Three.js scene, camera, lighting, fog
- `materials.js` - Texture loading and material creation
- `particleSystem.js` - Pool-based particle effects
- `ui.js` - HTML overlay (score, kills, game over, power-ups)
- `audioSystem.js` - Sound effects and music
- `config.js` - All game constants (grid size, speeds, counts, camera)

**Entry point**: `main.ts` runs the animation loop at 60 FPS with fixed 30-tick simulation substeps.

### Multiplayer / Networking

Uses Colyseus (WebSocket-based) with a server-authoritative model:

- **Server** (`packages/server/src/index.ts`) runs the core simulation at 30 Hz, broadcasts serialized snapshots every 3 ticks, validates client inputs
- **Client** (`packages/client/src/network/colyseusClient.ts`) sends `InputMessage` (turn left/right + tick number), receives and applies state snapshots
- **Shared** (`packages/shared/src/`) defines `protocol.ts` (versioned message types), `serialize.ts` (JSON + TextEncoder encoding), `input.ts`, `core-types.ts`, `events.ts`

Clients and servers must match `PROTOCOL_VERSION`, `STATE_SCHEMA_VERSION`, and `INPUT_SCHEMA_VERSION` (defined in `packages/shared/src/protocol.ts`). Mismatches cause disconnection.

### Key Config

Game constants live in `packages/client/src/config.js`: 80x80 grid, 0.25s base snake speed, 100 food items, 8 AI enemies, 30 Hz tick rate. Multiplayer defaults to `ws://localhost:2567`.

### TypeScript Configuration

- **Client**: Strict mode, ES2020 target, bundler module resolution. Uses path alias `snek-shared` -> `../shared/src/index.ts`
- **Server**: Non-strict, ES2022 target, experimental decorators enabled (for Colyseus schema)

### Environment Variables

- `PORT` - Override server port (default: 2567)
