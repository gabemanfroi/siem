import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';

const MitreService = () => ({
  ...BaseService(ROUTES.BRAGI.MITRE),
});
export default MitreService();
