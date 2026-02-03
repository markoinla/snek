export type {
  CoreState,
  CoreEvent,
  EventEnvelope,
  Vec2,
  Vec3,
  FoodItem,
  FoodMovement,
  PlayerState,
  ScoreState
} from 'snek-shared';

export type CoreStepResult = {
  events: import('snek-shared').CoreEvent[];
};

export type StepResult = {
  events: import('snek-shared').EventEnvelope[];
};
