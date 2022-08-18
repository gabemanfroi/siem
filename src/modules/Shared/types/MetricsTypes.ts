export type EventsByLevelType = {
  low: number;
  medium: number;
  high: number;
};

export type MetricsTypes = {
  trustLevel: number;
  eventsByLevel: EventsByLevelType;
};
