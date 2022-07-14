export const HEXADECIMAL_REGEX = /^#[a-f0-9]/i;
export const DEFAULT_CHARTS_PALETTE = 'palette3';
export const LOCAL_STORAGE_WIDGETS_CONFIG_NAME = '@seclab_widgets_config';
export const ALL_WIDGETS_LABELS = [
  {
    label: 'Actions Types',
    identifier: 'actionsTypes',
  },
  {
    label: 'Alerts by Action Over Time',
    identifier: 'alertsByActionOverTime',
  },
  {
    label: 'Rule Distribution',
    identifier: 'ruleDistribution',
  },
  {
    label: 'Top 5 Agents',
    identifier: 'integrityMonitoringTop5Agents',
  },
  {
    label: 'Top Mitre',
    identifier: 'topMitre',
  },
  {
    label: 'Alert Evolution Top 5 Agents',
    identifier: 'alertsEvolutionTop5Agents',
  },
  {
    label: 'Alert Level Evolution',
    identifier: 'alertLevelEvolution',
  },
  {
    label: 'Attacks by Technique',
    identifier: 'attacksByTechnique',
  },
  {
    label: 'Techniques by Agent',
    identifier: 'techniquesByAgent',
  },
  {
    label: 'Top Tactics',
    identifier: 'topTactics',
  },
  {
    label: 'Top Tactics by Agent',
    identifier: 'topTacticsByAgent',
  },
  {
    label: 'Alerts Evolution Over Time',
    identifier: 'alertsEvolutionOverTime',
  },
  {
    label: 'Alerts Severity by Time',
    identifier: 'alertsSeverityByTime',
  },
  {
    label: 'Most Affected Agents',
    identifier: 'mostAffectedAgents',
  },
  {
    label: 'Most Common CVEs',
    identifier: 'mostCommonCVEs',
  },
  {
    label: 'Most Common CWEs',
    identifier: 'mostCommonCWEs',
  },
  {
    label: 'Top Affected Packages by CVEs',
    identifier: 'topAffectedPackagesByCVEs',
  },
];
const authRoutes = {
  BASE_ENDPOINT: process.env.REACT_APP_ENVIRONMENT === 'production' ? '/auth/auth' : '/api/auth',
  LOGIN: '/login',
};

const bragiRoutes = {
  BASE_ENDPOINT: process.env.REACT_APP_ENVIRONMENT === 'production' ? '/bragi/api' : '/api',
  DASHBOARD: '/dashboard',
  INTEGRITY_MONITORING: '/integridade',
  MITRE: '/mitre',
  SECURITY_EVENT: '/eventos',
  VIRUS_TOTAL: '/virus-total',
  VULNERABILITY: '/vulnerabilidades'
};

export const routes = {
  AUTH: { ...authRoutes },
  BRAGI: { ...bragiRoutes }
}
