import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';

const SCAService = () => ({
  ...BaseService(ROUTES.BRAGI.SCA),
});

export default SCAService();
