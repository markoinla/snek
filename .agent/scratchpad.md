# Multiplayer Refactor — Scratchpad

Last updated: 2026-02-03 (Phase 4.3+4.4 multi-player rendering complete)

## Phase 1: Shared Types & Core State Refactor

- [x] 1.1 Update `CoreState` type: `player` → `players: Record<string, PlayerState>`, add `dead`/`respawnAt`/`score`/`colorIndex` to `PlayerState`, remove top-level `score`
- [x] 1.2 Update events: add `playerId` to `EventEnvelope`, add `playerId` to player-specific event payloads, add `PlayerRespawned` event type, bump EVENT_SCHEMA_VERSION to 2
- [x] 1.3 Serialization: verified round-trip with `players` map (JSON handles Record naturally)
- [x] 1.4 Input types: `playerId` already existed; now stamped from `gameState.localPlayerId`
- [x] 1.5 Update `createInitialCoreState()`: empty `players: {}`, add `createPlayerState(id)` helper
- [x] 1.6 Update `sync.ts`: bind/apply `players` map, alias `playerSnake` and `score` to local player
- [x] 1.7 Update test scripts: `state.player` → `state.players["test"]`, fix event envelope access
- [x] All simulation files refactored to use `state.players[playerId]` (player.ts, step.ts, alpha.ts, powerups.ts, food.ts, spawn.ts)
- [x] Server: player creation on join, removal on leave, input routing with playerId stamp
- [x] Client: main.ts creates local player, gameState.js has players/localPlayerId, inputHandler stamps playerId
- [x] Tests pass: test:core, test:serialize, test:determinism

## Phase 2: Core Simulation — Multi-Player Loop

- [x] 2.1 Refactor `player.ts`: accept `playerId` param (done in Phase 1)
- [x] 2.2 Refactor `step.ts`: multi-player loop with sorted playerIds for determinism (done in Phase 1)
- [x] 2.3 Add player-vs-player collision in `combat.ts` (checkPlayerCollisionCore + PvP in step.ts, PlayerKilledPlayer event, PVP_COLLISION death reason)
- [x] 2.4 Refactor `powerups.ts`: accept `playerId` param (done in Phase 1)
- [x] 2.5 Refactor `alpha.ts`: accept `playerId` param on all functions (done in Phase 1)
- [x] 2.6 Refactor `food.ts`: accept `isAlphaActive` param instead of `state.player` (done in Phase 1)
- [x] 2.7 Refactor `spawn.ts`: iterate all players in `isPositionOccupiedCore()` (done in Phase 1)
- [x] 2.8 Death/respawn fields in PlayerState (done in Phase 1.1)
- [x] Run all tests after PvP collision (test:core, test:serialize, test:determinism all pass)

## Phase 3: Server — Multi-Player Lifecycle

- [x] 3.1 Player creation on join (done in Phase 1)
- [x] 3.2 Player removal on leave (done in Phase 1)
- [x] 3.3 Input routing with playerId stamp (done in Phase 1)
- [x] 3.4 Remove single-player init from `initializeCoreState()` (done in Phase 1)
- [x] 3.5 Update `ServerMeta` type with `sessionId` — added to protocol.ts, server sends it in meta, client uses it for localPlayerId
- [x] 3.6 Room configuration (`maxClients = 4`) — set in SnekRoom.onCreate()
- [x] 3.7 Broadcast events alongside snapshot — added `Events` message type, server accumulates stepCore events and broadcasts on snapshot interval, client stores in `pendingServerEvents` queue
- [x] Fix TS build errors — added `allowImportingTsExtensions` to tsconfig, typed callback params in colyseusClient.ts
- [x] Build + all tests pass (test:core, test:serialize, test:determinism)

## Phase 4: Client — Multi-Player Rendering

- [x] 4.1 Add `gameState.players` and `gameState.localPlayerId` (done in Phase 1)
- [x] 4.2 Update snapshot handling in `colyseusClient.ts` (done in Phase 1)
- [x] 4.3 Add obstacle mesh sync — syncObstacleMeshes() creates meshes for server-sent obstacles missing a mesh
- [x] 4.4 Render multiple player snakes — remotePlayerMeshes cache, syncAllPlayerMeshes() creates/removes/updates color-tinted meshes per remote player, hides dead players
- [x] 4.5 Fix event processing in multiplayer — extracted processEventEnvelopes() shared handler, multiplayer branch drains pendingServerEvents with playerId filtering
- [x] 4.6 Camera (no change — follows playerSnake alias)
- [x] 4.7 Input sending: stamp `playerId` (done in Phase 1)

## Phase 5: Death, Respawn & Per-Player Score

- [x] 5.1 Player death in simulation — `killPlayerCore()` sets `dead=true` + `respawnAt` on all death types (wall/self/obstacle/enemy/PvP)
- [x] 5.2 Player respawn logic — `processPlayerRespawnsCore()` resets dead players after PLAYER_RESPAWN_DELAY_TICKS, emits PlayerRespawned
- [x] 5.3 Per-player score (done in Phase 1 — score now in PlayerState)
- [ ] 5.4 Client death/respawn UI
- [x] 5.5 Config constants — PLAYER_RESPAWN_DELAY_TICKS=90 (3s at 30Hz), PLAYER_RESPAWN_LENGTH=3

## Phase 6: Polish & Stability

- [ ] 6.1 Multiplayer scoreboard
- [ ] 6.2 Player color system
- [ ] 6.3 Disconnect cleanup
- [ ] 6.4 Smooth rendering / interpolation
- [x] 6.5 Single-player backward compatibility (ensured via "local" player ID pattern)
- [ ] 6.6 Update tests for full coverage
