import { MetricsTypes } from './MetricsTypes';
import { EventType } from './EventType';

export interface AgentType extends MetricsTypes {
  generalData: {
    id: number;
    name: string;
    ip: string;
    alias: string;
    deviceType: 'SERVER' | 'DESKTOP' | 'LAPTOP' | 'MOBILE';
  };
  events: EventType[];
  eventsByLevel: {
    low: number;
    medium: number;
    high: number;
  };
  trustLevel: number;
}
