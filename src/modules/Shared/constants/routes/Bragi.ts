const initialPath =
  process.env.REACT_APP_ENVIRONMENT === 'development' ? '' : '/bragi';
const BRAGI = {
  BASE_ENDPOINT: initialPath,
  DASHBOARD: `${initialPath}/api/dashboard`,
  DASHBOARD_WIDGETS: `${initialPath}/widgets/dashboard`,
  INTEGRITY_MONITORING: `${initialPath}/api/integrity_monitoring`,
  MITRE: `${initialPath}/api/mitre`,
  SECURITY_EVENT: `${initialPath}/api/security_event`,
  SECURITY_EVENT_WIDGETS: `${initialPath}/widgets/security-event`,
  VIRUS_TOTAL: `${initialPath}/api/virus_total`,
  VULNERABILITY: '/bragi/api/vulnerability',
  AGENT: `${initialPath}/agent`,
  AGENT_WIDGETS: `${initialPath}/widgets/agent`,
  SCA: `${initialPath}/sca`,
  ANALYSIS: `${initialPath}/api/analysis`,
};
export default BRAGI;
