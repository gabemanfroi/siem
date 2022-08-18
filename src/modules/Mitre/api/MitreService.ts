import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';

const MitreService = () => ({
  ...BaseService(ROUTES.BRAGI.MITRE.BASE),
});
export default MitreService();
