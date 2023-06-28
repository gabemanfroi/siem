import { IAgent } from 'modules/Shared/interfaces/IAgent';

export interface INotableAgent extends IAgent {
  alertsEvolution: { series: { data: [number, number] }[] };
  totalEvents: number;
  totalVulnerabilities: number;
}
