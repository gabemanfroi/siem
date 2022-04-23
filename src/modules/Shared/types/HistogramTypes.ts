import { EventsByGdprType, EventsByLevelType } from './MetricsType';

type DefaultHistogramType = {
  timestamp: number;
};

export type CriticalityByTimeType = DefaultHistogramType & {
  eventsByLevel: EventsByLevelType;
};

export type GdprByTimeType = DefaultHistogramType & {
  eventsByGdpr: EventsByGdprType;
};
