import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';

const AuthService = () => {
  const service = BaseService(ROUTES.AUTH.BASE_ENDPOINT);

  const authenticate = async (username: string, password: string) =>
    service.post(ROUTES.AUTH.LOGIN, { email: username, password });

  return {
    authenticate,
  };
};

export default AuthService;
