import { MetricsType } from './MetricsType';
import { EventType } from './EventType';

export interface AgentType extends MetricsType {
  generalData: {
    id: number;
    name: string;
    ip?: string;
    alias: string;
  };
  events: EventType[];
}
