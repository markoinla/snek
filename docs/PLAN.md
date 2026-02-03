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
- Emit events for: power-up application, alpha kill FX, score popup (partially done)
- Render layer applies visuals/audio only (in progress)
- Remove any remaining logic that mutates core state in render code (in progress)

### 2) Power-ups in Core
- Apply power-up effects authoritatively in core (in progress)
- Ensure timers are advanced in core, not in render layer (in progress)

### 3) Enemy Kill Rewards
- Ensure alpha points and kill count are strictly updated in core (in progress)
- Render layer reads from core events/state only (in progress)

### 4) Input & Turn Rules
- Prevent illegal reversals and multi-turns per tick in core (in progress)
- Move pending-turn queue into core (in progress)

### 5) Deterministic Seed
- Accept a session seed and store it in core
- Log/serialize seed for reproducible sessions

### 6) Test Harness (Headless Core)
- Minimal core-only test runner
- Smoke tests: wall collision, food eat + respawn, enemy kill + respawn

### 7) Documentation
- Update README with new architecture
- Document core event schema for Phase 2 server integration

## Progress Log
- 2026-02-03: Core sim enabled; food/enemy logic moved to core; render sync implemented.
