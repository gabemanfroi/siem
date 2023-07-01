const initialPath =
  process.env.REACT_APP_ENVIRONMENT === 'development' ? '' : '/bragi';
const BRAGI = {
  BASE_ENDPOINT: initialPath,
  DASHBOARD: `${initialPath}/dashboard`,
  DASHBOARD_WIDGETS: `${initialPath}/widgets/dashboard`,
  INTEGRITY_MONITORING: `${initialPath}/integrity_monitoring`,
  MITRE: `${initialPath}/mitre`,
  SECURITY_EVENT: `${initialPath}/security_event`,
  SECURITY_EVENT_WIDGETS: `${initialPath}/widgets/security-event`,
  VIRUS_TOTAL: `${initialPath}/virus_total`,
  VULNERABILITY: `${initialPath}/vulnerability`,
  AGENT: `${initialPath}/agent`,
  AGENT_WIDGETS: `${initialPath}/widgets/agent`,
  SCA: `${initialPath}/sca`,
  ANALYSIS: `${initialPath}/analysis`,
};
export default BRAGI;
