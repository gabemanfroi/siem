import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';

const DashboardService = () => ({
  ...BaseService(ROUTES.BRAGI.DASHBOARD),
});

export default DashboardService();
