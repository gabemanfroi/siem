export type EventsByLevelType = {
  low: number;
  medium: number;
  high: number;
};

export type EventsByGdprType = {
  [key: string]: number;
};

export type MetricsTypes = {
  trustLevel: number;
  eventsByLevel: EventsByLevelType;
};
