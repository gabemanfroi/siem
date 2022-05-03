import { MetricsTypes } from './MetricsTypes';
import { EventType } from './EventType';

export interface AgentType extends MetricsTypes {
  generalData: {
    id: number;
    name: string;
    ip: string;
    alias: string;
  };
  events: EventType[];
}
