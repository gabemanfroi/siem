export interface ISummary {
  structureTotalVulnerabilitiesBySeverity: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  structureNumberOfEventsByLevel: {
    high: number;
    low: number;
    medium: number;
  };
}
