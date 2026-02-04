export const PROTOCOL_VERSION = 1 as const;
export const INPUT_SCHEMA_VERSION = 1 as const;

export type JoinOptions = {
  clientVersion: number;
  stateVersion: number;
  inputVersion: number;
  playerName?: string;
  roomCode?: string;
  createRoom?: boolean;
};

export type ServerMeta = {
  serverVersion: number;
  tickRate: number;
  seed: number;
  sessionId: string;
  playerName: string;
  roomCode?: string;
};

export type RoomInfo = {
  roomId: string;
  roomCode: string;
  displayName: string;
  playerCount: number;
  maxPlayers: number;
};

export const MessageType = {
  Snapshot: 'snapshot',
  Meta: 'meta',
  Error: 'error',
  Events: 'events',
} as const;
