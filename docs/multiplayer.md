# Multiplayer (Colyseus) Guide

## Quick Start (Local)

1. Install dependencies:
   - `pnpm install`
2. Start the server:
   - `pnpm -C packages/server dev`
3. Start the client with multiplayer enabled:
   - `pnpm -C packages/client dev`
   - Open the client with `?multiplayer=1` (e.g., `http://localhost:5173/?multiplayer=1`)

The server listens on `ws://localhost:2567` by default and exposes:
- `GET /health` for health checks
- `GET /metrics` for basic runtime metrics

## Local Test Commands

- Core determinism test:
  - `pnpm -C packages/client test:determinism`
- Multiplayer headless smoke test (requires server running):
  - `pnpm -C packages/client test:multiplayer`
- Load test (requires server running, defaults to 10 clients for 5s):
  - `pnpm -C packages/client load-test`

## Deployment

### Docker (server)
From the repo root:

```
docker build -f packages/server/Dockerfile -t snek-server .
docker run -p 2567:2567 snek-server
```

### Environment Variables
- `PORT`: override the Colyseus/HTTP port (default: `2567`)

## Versioning / Compatibility

Clients and servers must match:
- `PROTOCOL_VERSION`
- `STATE_SCHEMA_VERSION`
- `INPUT_SCHEMA_VERSION`

If any version mismatches, the server disconnects the client with an error message.

## Staging Validation Checklist

- [ ] `/health` returns `{"status":"ok"}`
- [ ] `/metrics` shows rooms and connected clients
- [ ] Can join a room and receive snapshots
- [ ] Inputs are accepted and reflected in snapshots
- [ ] Client disconnects cleanly on schema mismatch
- [ ] Tick rate reported by server matches 30 Hz
