import DASHBOARD from 'modules/Shared/constants/routes/Dashboard';
import MITRE from 'modules/Shared/constants/routes/Mitre';
import INTEGRITY_MONITORING from 'modules/Shared/constants/routes/IntegrityMonitoring';

const BRAGI = {
  BASE_ENDPOINT:
    process.env.REACT_APP_ENVIRONMENT === 'production' ? '/bragi/api' : '/api',
  DASHBOARD,
  INTEGRITY_MONITORING,
  MITRE,
  SECURITY_EVENT: '/eventos',
  VIRUS_TOTAL: '/virus-total',
  VULNERABILITY: '/vulnerabilidades',
  AGENT: '/agentes',
};
export default BRAGI;
