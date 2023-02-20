import { IEvent } from 'modules/Shared/interfaces/index';

interface IAnalysis {
  observable: string;
  level: string;
  namespace: string;
  predicate: string;
  value: string;
}

interface ISeclabEvent {
  event: IEvent;
  analysis: IAnalysis;
  id: string;
}

export default ISeclabEvent;
