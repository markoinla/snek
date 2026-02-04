export const PROTOCOL_VERSION = 1 as const;
export const INPUT_SCHEMA_VERSION = 1 as const;

export type JoinOptions = {
  clientVersion: number;
  stateVersion: number;
  inputVersion: number;
};

export type ServerMeta = {
  serverVersion: number;
  tickRate: number;
  seed: number;
  sessionId: string;
};

export const MessageType = {
  Snapshot: 'snapshot',
  Meta: 'meta',
  Error: 'error',
  Events: 'events',
} as const;
