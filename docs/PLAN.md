# Multiplayer Prep Plan

Last updated: 2026-02-03

## Objectives
1. Event schema hardening (server ↔ client contract)
2. CoreState serialization (snapshot + delta)
3. Input protocol + tick tracking

## 1) Event Schema Hardening

### Goals
- Freeze a stable, versioned event contract shared by server and client.
- Clearly separate simulation events (authoritative) from render-only hints.

### Tasks
1. Create `src/shared/events.ts`
   - Define `EventType` enum
   - Define strict payload types per event
   - Add `EventEnvelope` with `tick`, `eventId`, `version`
2. Refactor core to emit typed events only
   - Replace ad-hoc string events in `core/step.ts`
   - Ensure every emitted event has a corresponding payload type
3. Add compatibility guard
   - Add `EVENT_SCHEMA_VERSION` constant
   - Validate client/server event version match at runtime

### Deliverables
- `src/shared/events.ts`
- All core emissions updated to use typed events
- Version handshake validated

---

## 2) CoreState Serialization

### Goals
- Efficiently encode/decode CoreState for network transport.
- Support full snapshot + delta updates.

### Tasks
1. Create `src/shared/serialize.ts`
   - `encodeSnapshot(state): Uint8Array`
   - `decodeSnapshot(buffer): CoreState`
   - `encodeDelta(prev, next): Uint8Array`
   - `applyDelta(state, delta): CoreState`
2. Decide format
   - Start with JSON + typed arrays for performance
   - Add `StateVersion` and `schemaHash`
3. Add unit tests for round‑trip integrity

### Deliverables
- `serialize.ts` with snapshot + delta
- Tests: snapshot round‑trip, delta application

---

## 3) Input Protocol + Tick Tracking

### Goals
- Deterministic inputs per tick.
- Server authoritative reconciliation.

### Tasks
1. Define input types in `src/shared/input.ts`
   - `InputMessage { playerId, tick, turn }`
   - `InputQueue` per player
2. Add tick counter to core
   - `core.tick` increments per step
   - Tick exposed to client events
3. Update input handling to queue by tick
   - Server drops late or duplicate input

### Deliverables
- `input.ts` protocol
- Tick tracking in core
- Input validation rules

---

## Milestones
1. Schema + event refactor
2. Snapshot + delta serialization
3. Input protocol + tick handling

## Notes
- Keep shared protocol types under `src/shared/` for reuse by server and client.
- Avoid render‑layer dependencies in shared code.
