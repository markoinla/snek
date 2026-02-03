# Multiplayer Refactor Plan

Last updated: 2026-02-03

## Objective

Refactor snek from single-player-on-server to true multiplayer supporting up to 4 human players per room with full PvP.

## Design Decisions

| Decision | Choice |
|----------|--------|
| Max players | 4 human players per room |
| PvP model | Full — head-to-head kills both, tail eating allowed, compete for food and AI enemies |
| Death model | Respawn after ~3 seconds at safe location, score resets to 0 |
| Lobby model | Always running — players auto-join open room via `joinOrCreate`, no waiting |
| Matchmaking | Colyseus fills rooms before creating new ones; no room picking UI |

## Current Problems (Root Causes)

1. **Second player follows first**: `CoreState.player` is singular. Server has one player snake shared by all clients.
2. **Not responsive**: Client skips local simulation in multiplayer mode; only renders snapshots every 100ms with no interpolation.
3. **No trees**: `updateFromSnapshot()` syncs Player/Enemy/Food meshes but never syncs obstacle meshes. `resetGame()` skips obstacle spawn in multiplayer.
4. **No effects/events**: All event processing (death, score, food, kills) is gated behind `if (!gameState.network?.enabled)`.

## Dependency Order

Phase 1 → 2 → 3 → 4 → 5 → 6 (each builds on the previous)

---

## Phase 1: Shared Types & Core State Refactor

**Goal**: Change `CoreState.player` (singular) to `CoreState.players` (map). Update types, serialization, and events to carry player IDs.

### Tasks

#### 1.1 Update `CoreState` type
**File**: `packages/shared/src/core-types.ts`

- Remove `player: PlayerState`
- Add `players: Record<string, PlayerState>`
- Update `SerializableCoreState` to match
- Keep `PlayerState` type unchanged

#### 1.2 Update events to carry player IDs
**File**: `packages/shared/src/events.ts`

- Add `playerId: string` to `EventEnvelope`
- Events `PlayerDead`, `FoodEaten`, `ScoreChanged`, `AlphaModeActivated`, `AlphaModeEnded`, `PowerupApplied`, `AlphaPointsChanged` need `playerId` in payload
- `EnemyKilled` gets `killedBy: string` (which player killed the enemy)
- Add new event type: `PlayerRespawned` with payload `{ playerId: string }`

#### 1.3 Verify serialization
**File**: `packages/shared/src/serialize.ts`

- `toSerializable()` / `encodeSnapshot()` use JSON — `players: Record<string, PlayerState>` serializes naturally
- `decodeSnapshot()` needs no structural change
- Verify round-trip with `players` map

#### 1.4 Input types (usage change only)
**File**: `packages/shared/src/input.ts`

- `InputMessage.playerId` already exists (currently `"local"`) — will carry real session ID
- No structural change needed

#### 1.5 Update `createInitialCoreState()`
**File**: `packages/client/src/core/state.ts`

- Initialize with `players: {}` (empty map) instead of pre-built `player`
- Add helper: `createPlayerState(id: string): PlayerState` — returns fresh player with default values (segments, direction, speed, alphaMode, etc.)
- Add per-player score: move `score: ScoreState` into `PlayerState`

#### 1.6 Update `sync.ts`
**File**: `packages/client/src/core/sync.ts`

- `bindCoreState()`: Bind `core.players` ↔ `gameState.players` (new field)
- `applyCoreStateToGameState()`: Copy `core.players` to `gameState.players`, alias `gameState.playerSnake = gameState.players[gameState.localPlayerId]`
- Single-player mode: use `localPlayerId = "local"`

#### 1.7 Update test scripts
**Files**: `packages/client/scripts/determinism-test.mjs`, `core-smoke.mjs`, `serialize-smoke.mjs`

- Create player via `state.players["test"] = createPlayerState("test")`
- Update all `state.player` references to `state.players["test"]`

---

## Phase 2: Core Simulation — Multi-Player Loop

**Goal**: Refactor all core simulation functions to operate on multiple players.

### Strategy

Functions that do `const player = state.player` change to either:
- Accept `playerId` and do `const player = state.players[playerId]`
- Iterate `Object.values(state.players)` for collision checks

### Tasks

#### 2.1 Refactor `player.ts`
**File**: `packages/client/src/core/player.ts`

- `applyPlayerInput(state, input)` → use `input.playerId` to find `state.players[input.playerId]`. Guard against missing player.
- `updatePlayerCore(state, delta)` → `updatePlayerCore(state, playerId, delta)`. All `state.player` refs become `state.players[playerId]`.
- `evaluatePlayerMove(state)` → `evaluatePlayerMove(state, playerId)`. Self-collision checks that player's segments.
- `initTurnQueue()`, `queueTurn()` — already take a player object, no change needed.

#### 2.2 Refactor `step.ts` — Main tick loop
**File**: `packages/client/src/core/step.ts`

New structure:

```
stepCore(state, delta):
  state.time += delta
  state.tick += 1
  events = []

  // 1. Update ALL players
  for each playerId in state.players:
    player = state.players[playerId]
    if player.dead: skip

    updatePlayerCore(state, playerId, delta)
    head = player.segments[0]

    // Enemy collision (per player)
    enemyHit = checkEnemyCollisionCoreDetailed(state, head)
    → handle tail eat / head-on / alpha mode for THIS player

    // Player-vs-player collision (NEW)
    pvpHit = checkPlayerCollision(state, playerId, head)
    → head-to-head: both die
    → head-to-body: moving player dies
    → head-to-tail: edible tail logic (optional)

    // Food collision (per player)
    foodEaten = checkAndEatFoodCore(state, head, player.alphaMode?.active)
    → award score to THIS player, grow THIS player

    // Alpha mode per player
    decayAlphaPointsCore(state, playerId, ...)
    checkAlphaModeActivationPointsCore(state, playerId, ...)
    updateAlphaModeCore(state, playerId, ...)

    // Power-up timers per player
    updatePowerUpTimersCore(state, playerId, ...)

  // 2. Update enemies (unchanged)
  updateEnemiesCore(state, delta)

  // 3. Update food movement (unchanged)
  updateFoodMovementCore(state, delta)

  // 4. Process enemy respawns (unchanged)
  processEnemyRespawnsCore(state)

  // 5. Process player respawns (NEW)
  processPlayerRespawnsCore(state)

  return { events }
```

#### 2.3 Add player-vs-player collision
**File**: `packages/client/src/core/combat.ts` (or `collision.ts`)

New function `checkPlayerCollision(state, playerId, headPos)`:
- Iterate all OTHER players (skip self, skip dead)
- Check if `headPos` matches any segment of another player
- Return `{ hitPlayerId, segmentIndex, isHead, isTail }`
- **Head-to-head** (same position): both players die
- **Head-to-body**: moving player dies
- **Head-to-tail**: hit player loses tail segments (uses `ENEMY_TAIL_EDIBLE_SEGMENTS` config or new player-specific config)

#### 2.4 Refactor `powerups.ts`
**File**: `packages/client/src/core/powerups.ts`

- `applyPowerUpCore(type, state, currentTime)` → `applyPowerUpCore(type, state, playerId, currentTime)`
- `updatePowerUpTimersCore(state, currentTime)` → `updatePowerUpTimersCore(state, playerId, currentTime)`
- Internal logic unchanged, just targeting `state.players[playerId]`

#### 2.5 Refactor `alpha.ts`
**File**: `packages/client/src/core/alpha.ts`

All functions get `playerId` parameter:
- `addAlphaPointsCore(state, playerId, points, events)`
- `decayAlphaPointsCore(state, playerId, currentTime)`
- `checkAlphaModeActivationPointsCore(state, playerId, currentTime, events)`
- `activateAlphaModeCore(state, playerId, currentTime, events)`
- `updateAlphaModeCore(state, playerId, currentTime, events)`
- `addScoreMultiplierCore(state, playerId, currentTime)`

#### 2.6 Refactor `food.ts`
**File**: `packages/client/src/core/food.ts`

- `checkAndEatFoodCore(state, position)` → `checkAndEatFoodCore(state, position, isAlphaActive: boolean)` — remove internal `state.player` access, accept alpha flag as parameter
- `updateFoodMovementCore()` — no change (no player reference)

#### 2.7 Refactor `spawn.ts`
**File**: `packages/client/src/core/spawn.ts`

- `isPositionOccupiedCore(state, targetPos)` — change `state.player?.segments` check to iterate ALL `Object.values(state.players)` and check each player's segments
- Everything else unchanged

#### 2.8 Add death/respawn fields to `PlayerState`
**File**: `packages/shared/src/core-types.ts`

Add to `PlayerState`:
- `dead: boolean` (default `false`)
- `respawnAt: number` (tick number, 0 when alive)
- `score: ScoreState` (moved from `CoreState.score`)
- `colorIndex: number` (0-3, assigned on join)

Remove from `CoreState`:
- `score: ScoreState` (now per-player)

---

## Phase 3: Server — Multi-Player Lifecycle

**Goal**: Server creates/removes player snakes on join/leave, routes inputs, manages room capacity.

### Tasks

#### 3.1 Player creation on join
**File**: `packages/server/src/index.ts`

- `onJoin(client)`:
  - Check capacity: `Object.keys(this.coreState.players).length >= 4` → reject with error
  - Call `createPlayerState(client.sessionId)` (from Phase 1.5)
  - Spawn at safe position: `generateUniquePositionCore(state)`
  - Initialize segments (length `MIN_SNAKE_LENGTH`), random cardinal direction
  - Assign color index (next available 0-3)
  - Add to `this.coreState.players[client.sessionId]`
  - Send `Meta` message with `sessionId` so client knows its ID
  - Send initial snapshot

#### 3.2 Player removal on leave
- `onLeave(client)`:
  - Delete `this.coreState.players[client.sessionId]`
  - Delete input queue
  - Clean up `PlayerMeta` from schema state

#### 3.3 Input routing
- `handleInput()`: stamp `message.playerId = sessionId` before queuing
- `applyPlayerInput()` already uses `input.playerId` (from Phase 2.1)

#### 3.4 Remove single-player init from `initializeCoreState()`
- Remove all `state.player.segments`, `state.player.direction`, `state.player.speed` setup
- Keep food and enemy spawning

#### 3.5 Update `ServerMeta` type
**File**: `packages/shared/src/protocol.ts`

- Add `sessionId: string` to `ServerMeta`

#### 3.6 Room configuration
- Set `maxClients = 4`
- Colyseus `joinOrCreate` handles auto-matchmaking

#### 3.7 Include events in snapshot
- Change `serializeSnapshot()` to include pending events since last snapshot
- Server accumulates events from `stepCore()` results between snapshots
- Clear event buffer after each broadcast

---

## Phase 4: Client — Multi-Player Rendering

**Goal**: Render all players (self + others), fix obstacles, fix events, camera follows local player.

### Tasks

#### 4.1 Add `gameState.players` and `gameState.localPlayerId`
**File**: `packages/client/src/gameState.js`

- Add `players: {}` (map of all player states by ID)
- Add `localPlayerId: null` (set on connect)
- Keep `gameState.playerSnake` as alias to local player for backward compat

#### 4.2 Update snapshot handling
**File**: `packages/client/src/network/colyseusClient.ts`

- `handleMeta()`: store `gameState.localPlayerId = meta.sessionId`
- `updateFromSnapshot()`:
  - After `applyCoreStateToGameState()`, set `gameState.playerSnake = gameState.players[gameState.localPlayerId]`
  - Add `Obstacles.syncObstacleMeshes(gameState)` ← **fixes missing trees**
  - Call `Player.syncAllPlayerMeshes(gameState)` instead of `Player.syncPlayerMeshes(gameState)`
  - Process events from snapshot payload (death, score, food, kills, etc.)

#### 4.3 Add obstacle mesh sync
**File**: `packages/client/src/obstacles.js`

- New function `syncObstacleMeshes(gameState)`:
  - Compare server obstacle data against currently rendered meshes
  - Create meshes for new obstacles via existing `createObstacleMeshInstance()`
  - Remove meshes for obstacles no longer in state

#### 4.4 Render multiple player snakes
**File**: `packages/client/src/playerSnake.js`

- New state: `allPlayerMeshes: Record<string, Mesh[]>` (keyed by player ID)
- New function `syncAllPlayerMeshes(gameState)`:
  - Iterate `gameState.players`
  - Local player: green materials (current)
  - Other players: red, blue, yellow materials (by `colorIndex`)
  - Create/remove meshes as players join/leave
  - Update positions from segments
- Keep `syncPlayerMeshes()` as wrapper for single-player compat

#### 4.5 Fix event processing in multiplayer
**File**: `packages/client/src/main.ts`

- Remove the `if (!gameState.network?.enabled)` gate around event processing
- Events now come via snapshot payload (Phase 3.7)
- `updateFromSnapshot()` processes events:
  - Local player events: show full UI (death screen, score popup, power-up text)
  - Other player events: show visual effects only (particles, explosions)
  - All players: `EnemyKilled` → death particles, `PlayerDead` → death effect

#### 4.6 Camera (no change needed)
- `updateCamera()` follows `gameState.playerSnake.segments[0]`
- Since `playerSnake` is aliased to local player, this works automatically

#### 4.7 Input sending
**File**: `packages/client/src/inputHandler.js`

- Stamp `playerId: gameState.localPlayerId` on each `InputMessage`

---

## Phase 5: Death, Respawn & Per-Player Score

**Goal**: Handle player death/respawn cycle and per-player scoring in multiplayer.

### Tasks

#### 5.1 Player death in simulation
**File**: `packages/client/src/core/step.ts` (already structured in Phase 2.2)

When a player dies (wall, self, PvP, enemy head):
- Set `player.dead = true`
- Set `player.respawnAt = state.tick + RESPAWN_DELAY_TICKS` (90 ticks = 3s at 30Hz)
- Clear `player.segments = []`
- Reset `player.activePowerUps = []`
- Emit `PlayerDead` event with `playerId` and `reason`

#### 5.2 Player respawn in simulation
**File**: `packages/client/src/core/step.ts` or new `packages/client/src/core/respawn.ts`

New function `processPlayerRespawnsCore(state)`:
- For each dead player where `state.tick >= player.respawnAt`:
  - `player.dead = false`
  - `player.score = { current: 0, multiplier: 1 }`
  - Reset speed, power-ups, alpha mode to defaults
  - Spawn at safe random position with `MIN_SNAKE_LENGTH` segments
  - Random cardinal direction
  - Emit `PlayerRespawned` event

#### 5.3 Per-player score
- Score now lives in `PlayerState.score` (Phase 2.8)
- `stepCore()` awards score to the eating player
- Client UI reads from `gameState.playerSnake.score.current`

#### 5.4 Client death/respawn UI
**Files**: `packages/client/src/ui.js`, `packages/client/src/main.ts`

- Local `PlayerDead` → show death overlay with reason and respawn countdown
- Local `PlayerRespawned` → hide overlay, resume
- Other player death → show kill feed entry, death particles at their location
- During death: camera stays at last position or slowly pans

#### 5.5 Config constants
**File**: `packages/client/src/config.js`

- Add `RESPAWN_DELAY_TICKS = 90` (3 seconds at 30Hz)
- Add `PLAYER_TAIL_EDIBLE_SEGMENTS = 3` (for PvP tail eating)
- Add `MAX_PLAYERS = 4`

---

## Phase 6: Polish & Stability

**Goal**: Scoreboard, player identity, cleanup, and optional smoothing.

### Tasks

#### 6.1 Multiplayer scoreboard
**File**: `packages/client/src/ui.js`

- New UI element: player list with scores, sorted by score
- Color indicator per player
- Highlight local player
- Update on each snapshot

#### 6.2 Player color system
**Files**: `packages/client/src/materials.js`, `packages/client/src/playerSnake.js`

- 4 predefined color sets: green (P1), red (P2), blue (P3), yellow (P4)
- Server assigns `colorIndex` on join
- Client picks materials by `colorIndex`
- Alpha mode purple tint and ghost mode transparency still applied per-player

#### 6.3 Disconnect cleanup
- Server removes player on leave → next snapshot reflects removal
- Client `syncAllPlayerMeshes()` detects missing player → removes meshes from scene

#### 6.4 Smooth rendering (recommended)
**File**: `packages/client/src/network/colyseusClient.ts` or new interpolation module

- Store previous + current snapshot
- Lerp positions between snapshots based on time elapsed since last snapshot
- Eliminates choppy 100ms discrete updates

#### 6.5 Single-player backward compatibility
- Single-player: create player in `state.players["local"]`
- Set `gameState.localPlayerId = "local"`
- All code paths work identically since they now use `state.players`

#### 6.6 Update tests
**Files**: all test scripts in `packages/client/scripts/`

- `determinism-test.mjs` → use `state.players["test"]`
- `core-smoke.mjs` → use `state.players["test"]`
- `serialize-smoke.mjs` → use `state.players["test"]`
- `test:multiplayer` → verify multi-player join, input routing, PvP
- `load-test` → verify 4-player rooms under load

---

## File Change Summary

| File | Phase | Change Type |
|------|-------|-------------|
| `packages/shared/src/core-types.ts` | 1, 2 | `player` → `players` map, add death/respawn/score fields |
| `packages/shared/src/events.ts` | 1 | Add `playerId` to events, add `PlayerRespawned` |
| `packages/shared/src/serialize.ts` | 1 | Verify round-trip with `players` map |
| `packages/shared/src/protocol.ts` | 3 | Add `sessionId` to `ServerMeta` |
| `packages/shared/src/input.ts` | 1 | Usage change only (real session IDs) |
| `packages/client/src/core/state.ts` | 1 | `createPlayerState()` helper, empty `players` map |
| `packages/client/src/core/sync.ts` | 1 | Bind/apply `players` map, alias local player |
| `packages/client/src/core/step.ts` | 2 | Multi-player loop, PvP checks, respawn processing |
| `packages/client/src/core/player.ts` | 2 | Accept `playerId` param on all functions |
| `packages/client/src/core/collision.ts` | 2 | No direct change (already generic) |
| `packages/client/src/core/combat.ts` | 2 | Add `checkPlayerCollision()`, `processPlayerRespawnsCore()` |
| `packages/client/src/core/powerups.ts` | 2 | Accept `playerId` param |
| `packages/client/src/core/alpha.ts` | 2 | Accept `playerId` param on all functions |
| `packages/client/src/core/food.ts` | 2 | Accept `isAlphaActive` param instead of reading `state.player` |
| `packages/client/src/core/spawn.ts` | 2 | Iterate all players in `isPositionOccupiedCore()` |
| `packages/server/src/index.ts` | 3 | Per-client player lifecycle, input routing, events in snapshot |
| `packages/client/src/network/colyseusClient.ts` | 4 | Snapshot handling, obstacle sync, event processing |
| `packages/client/src/gameState.js` | 4 | Add `players`, `localPlayerId` |
| `packages/client/src/playerSnake.js` | 4 | `syncAllPlayerMeshes()`, multi-color rendering |
| `packages/client/src/obstacles.js` | 4 | `syncObstacleMeshes()` |
| `packages/client/src/main.ts` | 4, 5 | Remove network gate on events, death/respawn UI |
| `packages/client/src/inputHandler.js` | 4 | Stamp `playerId` on inputs |
| `packages/client/src/ui.js` | 5, 6 | Death/respawn overlay, scoreboard |
| `packages/client/src/materials.js` | 6 | Multi-player color materials |
| `packages/client/src/config.js` | 5 | Respawn constants, max players |
| `packages/client/scripts/*.mjs` | 1, 6 | Update test references |

---

## Risks

- **Core simulation refactor scope**: `state.player` is referenced 50+ times across 10 files. One missed reference breaks everything.
- **Determinism**: Multiple players must update in consistent order (sort by player ID) for deterministic replay.
- **Event ordering**: Events must carry player IDs to avoid ambiguity with multiple players eating food or dying simultaneously.
- **Backward compatibility**: Single-player mode must continue working with `players["local"]` pattern.
- **Snapshot size**: With 4 players, snapshot payload grows. JSON encoding may need optimization later.
