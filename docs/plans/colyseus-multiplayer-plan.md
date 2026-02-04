# Colyseus Multiplayer Implementation Plan

Last updated: 2026-02-05

## Objective
Ship authoritative multiplayer using Colyseus with a stable protocol, deterministic simulation, and a production-ready deploy/test path.

## Phase 0: Grounding and Decisions

### Goals
- Confirm the authoritative model, tick rate, and state sync strategy.
- Align on Colyseus server topology and deployment path.

### Tasks
1. [x] Decide tick rate (e.g., 20/30/60) and target latency budget.
2. [x] Choose state sync approach (snapshot-only vs snapshot + delta).
3. [x] Confirm server process layout (single room type vs multi-room, scaling plan).
4. [x] Define environment targets (local dev, staging, prod) and hosting constraints.

### Deliverables
- [x] Decision notes in `docs/plans/colyseus-multiplayer-plan.md`.
- [x] A short compatibility matrix (client version vs server version strategy).

### Decisions
- Tick rate: 30 Hz (balanced latency vs CPU/network cost).
- State sync: snapshots only to start; add deltas after stabilization.
- Room topology: single room type initially.
- Environments: local dev + staging first; production later.
- Version policy: hard disconnect on client/server schema mismatch.

### Compatibility Matrix
| Client | Server | Outcome |
| --- | --- | --- |
| Same `PROTOCOL_VERSION` + matching `STATE_SCHEMA_VERSION`/`INPUT_SCHEMA_VERSION` | Same | Join allowed |
| `PROTOCOL_VERSION` mismatch | Any | Disconnect with error |
| `STATE_SCHEMA_VERSION` or `INPUT_SCHEMA_VERSION` mismatch | Any | Disconnect with error |

Status: completed

---

## Phase 1: Colyseus Server Skeleton

### Goals
- Boot a minimal Colyseus server with one room type.
- Wire shared protocol types and event schema.

### Tasks
1. [x] Add Colyseus server package and scripts under `packages/server`.
2. [x] Create a `SnekRoom` with join/leave hooks and tick loop.
3. [x] Import shared types from `src/shared/` and validate schema version.
4. [x] Add basic server config (port, CORS, dev logging).

### Deliverables
- `packages/server` with Colyseus setup and `SnekRoom`.
- Basic health check and room join logs.

Status: completed

---

## Phase 2: State Model and Sync

### Goals
- Define Colyseus state model and wire it to core simulation.
- Ensure consistent serialization and compatibility with existing protocols.

### Tasks
1. [x] Define Colyseus `RoomState` and map it to `CoreState`.
2. [x] Implement snapshot broadcast at fixed intervals.
3. [x] Add schema version checks and graceful client disconnect on mismatch.
4. [x] Create a replayable seed/init path for deterministic startup.

### Deliverables
- `RoomState` schema, mapping layer, and snapshot flow.
- Version mismatch handling.

Status: completed

---

## Phase 3: Input Pipeline and Reconciliation

### Goals
- Authoritative server input handling with tick-aligned processing.
- Client prediction and reconciliation hooks (if needed).

### Tasks
1. [x] Implement input queue per player keyed by tick.
2. [x] Validate input rate limits and late input rules.
3. [x] Server applies inputs deterministically per tick.
4. [x] Client predicts locally (optional) and reconciles on snapshots.

### Deliverables
- Deterministic input processing in `SnekRoom`.
- Client-side input buffering + optional prediction layer.

Status: completed

---

## Phase 4: Client Integration

### Goals
- Connect client to Colyseus and render from authoritative state.
- Handle reconnect and error states gracefully.

### Tasks
1. [x] Add Colyseus client dependency to the game package.
2. [x] Connect, join room, and handle events.
3. [x] Update render loop to use server snapshots.
4. [x] Add reconnect flow and user feedback for disconnects.

### Deliverables
- Client connection and room lifecycle.
- Render pipeline driven by authoritative state.

Status: completed

---

## Phase 5: Testing and Tooling

### Goals
- Confidence in determinism, latency tolerance, and compatibility.
- A repeatable load and integration test path.

### Tasks
1. [x] Add integration tests for join, input, and sync flows.
2. [x] Build a headless client simulator for load testing.
3. [x] Add deterministic simulation tests with fixed seeds.
4. [x] Document local multiplayer test instructions.

### Deliverables
- Test harness and load test script.
- Determinism test suite.

Status: completed

---

## Phase 6: Deployment and Observability

### Goals
- Production-ready deployment with monitoring.
- Clear rollback and versioning plan.

### Tasks
1. [x] Add deploy scripts/config (container or hosted).
2. [x] Add metrics/logging (room count, tick rate, latency).
3. [x] Define versioning/compat policy and release process.
4. [x] Add staging environment validation checklist.

### Deliverables
- Deployment docs and configs.
- Metrics dashboard checklist.

Status: completed

---

## Open Questions
- None (resolved for initial rollout).

## Risks
- Divergent state if input handling is not deterministic.
- Latency spikes causing poor client experience without prediction.
- Schema or protocol drift between client/server builds.

## Notes
- Keep shared types under `src/shared/` and avoid render dependencies.
- Treat schema version mismatches as a hard disconnect with clear messaging.
