import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';

const IntegrityMonitoringService = () => ({
  ...BaseService(ROUTES.BRAGI.INTEGRITY_MONITORING),
});

export default IntegrityMonitoringService();
