export type TurnInput = 'left' | 'right';

export type InputMessage = {
  playerId: string;
  tick: number;
  turn: TurnInput;
};

export type InputQueue = InputMessage[];
