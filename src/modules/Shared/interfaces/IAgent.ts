import { MetricsTypes } from 'modules/Shared/types/MetricsTypes';
import { IEvent } from 'modules/Shared/interfaces';

export default interface IAgent extends MetricsTypes {
  generalData: {
    id: number;
    elasticsearchName: string;
    ip: string;
    name: string;
    deviceType: 'SERVER' | 'DESKTOP' | 'LAPTOP' | 'MOBILE';
  };
  events: IEvent[];
  eventsByLevel: {
    low: number;
    medium: number;
    high: number;
  };
  trustLevel: number;
}
