export type EventsByLevelType = {
  low: number;
  medium: number;
  high: number;
};

export type MetricsType = {
  trustLevel: number;
  eventsByLevel: EventsByLevelType;
};
