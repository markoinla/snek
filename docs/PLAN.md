# Refactor Plan

Last updated: 2026-02-03

## Goals
- Complete Phase 1 refactor: deterministic core + render-only client
- Make Phase 2 (multiplayer/Colyseus) a straightforward server-side port

## Current Status Summary
- Core simulation exists and is enabled
- Core handles player movement, collisions, food spawn/eat, enemy AI/move/respawn
- Render layer syncs meshes from core state
- Input queue feeds core

## In Progress
- Core event wiring and render-only effects

## Remaining Work (Phase 1)

### 1) Core/Render Parity
- Emit events for: power-up application, alpha kill FX, score popup (done)
- Render layer applies visuals/audio only (done)
- Remove any remaining logic that mutates core state in render code (done)

### 2) Power-ups in Core
- Apply power-up effects authoritatively in core (done)
- Ensure timers are advanced in core, not in render layer (done)

### 3) Enemy Kill Rewards
- Ensure alpha points and kill count are strictly updated in core (done)
- Render layer reads from core events/state only (done)

### 4) Input & Turn Rules
- Prevent illegal reversals and multi-turns per tick in core (done)
- Move pending-turn queue into core (done)

### 5) Deterministic Seed
- Accept a session seed and store it in core (done)
- Log/serialize seed for reproducible sessions (done)

### 6) Test Harness (Headless Core)
- Minimal core-only test runner (done)
- Smoke tests: wall collision, food eat + respawn, enemy kill + respawn (partial)

### 7) Documentation
- Update README with new architecture (done)
- Document core event schema for Phase 2 server integration (done)

## Progress Log
- 2026-02-03: Core sim enabled; food/enemy logic moved to core; render sync implemented.
