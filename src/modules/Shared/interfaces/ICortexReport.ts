interface ReportSummary {
  level: string;
  namespace: string;
  predicate: string;
  value: string;
}

export interface Report {
  summary: ReportSummary;
}

export interface ICortexReport {
  jobId: string;
  analyzerId: string;
  observable: string;
  report: Report;
}
