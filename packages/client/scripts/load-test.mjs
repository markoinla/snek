import { Client } from 'colyseus.js';
import { INPUT_SCHEMA_VERSION, MessageType, PROTOCOL_VERSION, STATE_SCHEMA_VERSION } from 'snek-shared';

const serverUrl = process.env.SNEK_SERVER_URL ?? 'ws://localhost:2567';
const count = Number(process.env.SNEK_CLIENTS ?? 10);
const durationMs = Number(process.env.SNEK_DURATION_MS ?? 5000);

const clients = [];

async function startClient(index) {
  const client = new Client(serverUrl);
  const room = await client.joinOrCreate('snek', {
    clientVersion: PROTOCOL_VERSION,
    stateVersion: STATE_SCHEMA_VERSION,
    inputVersion: INPUT_SCHEMA_VERSION,
  });

  let snapshots = 0;
  room.onMessage(MessageType.Snapshot, () => {
    snapshots += 1;
  });

  const interval = setInterval(() => {
    const tick = Math.floor(Date.now() / 100) % 1000;
    room.send('input', {
      playerId: `load-${index}`,
      tick: tick + 1,
      turn: Math.random() > 0.5 ? 'left' : 'right',
      version: INPUT_SCHEMA_VERSION,
    });
  }, 100);

  return { room, interval, snapshots };
}

for (let i = 0; i < count; i++) {
  clients.push(startClient(i));
}

const activeClients = await Promise.all(clients);

setTimeout(async () => {
  for (const client of activeClients) {
    clearInterval(client.interval);
    await client.room.leave();
  }
  const totalSnapshots = activeClients.reduce((sum, client) => sum + client.snapshots, 0);
  console.log(`Load test complete. Clients: ${count}, snapshots received: ${totalSnapshots}`);
  process.exit(0);
}, durationMs);
