import { EventsByGdprType, EventsByLevelType } from './MetricsTypes';

type DefaultHistogramType = {
  timestamp: number;
};

export type CriticalityByTimeType = DefaultHistogramType & {
  eventsByLevel: EventsByLevelType;
};

export type GdprByTimeType = DefaultHistogramType & {
  eventsByGdpr: EventsByGdprType;
};
