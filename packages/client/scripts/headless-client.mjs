import { Client } from 'colyseus.js';
import { INPUT_SCHEMA_VERSION, MessageType, PROTOCOL_VERSION, STATE_SCHEMA_VERSION } from 'snek-shared';

const serverUrl = process.env.SNEK_SERVER_URL ?? 'ws://localhost:2567';
const client = new Client(serverUrl);

const room = await client.joinOrCreate('snek', {
  clientVersion: PROTOCOL_VERSION,
  stateVersion: STATE_SCHEMA_VERSION,
  inputVersion: INPUT_SCHEMA_VERSION,
});

let receivedSnapshot = false;

room.onMessage(MessageType.Snapshot, () => {
  receivedSnapshot = true;
});

for (let i = 0; i < 5; i++) {
  room.send('input', { playerId: 'headless', tick: i + 1, turn: i % 2 === 0 ? 'left' : 'right', version: INPUT_SCHEMA_VERSION });
}

setTimeout(async () => {
  await room.leave();
  if (!receivedSnapshot) {
    console.error('No snapshot received during headless test');
    process.exit(1);
  }
  console.log('Headless multiplayer client test passed');
  process.exit(0);
}, 1500);
