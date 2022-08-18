export default interface IEvent {
  rule: {
    level: number;
    firedTimes: number;
    description: string;
  };
  win?: {
    message: string;
    processId: number;
    task: number;
    targetDomainName: string;
    ipPort: number;
  };
  id: string;
  agent: {
    name: string;
    ip: string;
  };
  vulnerability?: {
    severity: string;
    references: string[];
    cve: string;
    title: string;
    package: {
      condition: string;
      name: string;
      source: string;
    };
  };
  mitre?: {
    technique: string[];
    id: string[];
    tactic: string[];
  };
}
