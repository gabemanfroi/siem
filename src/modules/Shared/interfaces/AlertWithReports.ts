import { ICortexReport, IEvent } from 'modules/Shared/interfaces/index';

export interface AlertWithReports {
  event: IEvent;
  reports: ICortexReport[];
  id: string;
}
