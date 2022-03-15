import { MetricsType } from './MetricsType';

export interface AgentType extends MetricsType {
  generalData: {
    id: number;
    name: string;
    ip?: string;
    alias: string;
  };
}
