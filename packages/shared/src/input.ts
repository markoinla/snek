export type TurnInput = 'left' | 'right';

export type InputMessage = {
  playerId: string;
  tick: number;
  turn: TurnInput;
  version: number;
};

export type InputQueue = InputMessage[];
