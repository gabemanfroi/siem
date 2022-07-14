import { BaseService } from 'modules/Shared/services/BaseService';
import { routes } from 'modules/Shared/core/Constants';

const AuthService = () => {
  const service = BaseService(routes.AUTH.BASE_ENDPOINT);

  const authenticate = async (username: string, password: string) =>
    service.post(routes.AUTH.LOGIN, { email: username, password });

  return {
    authenticate,
  };
};

export default AuthService;
