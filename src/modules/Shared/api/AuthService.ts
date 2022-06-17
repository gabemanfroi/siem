import { BaseService } from 'modules/Shared/services/BaseService';
import { routes } from 'modules/Shared/core/Constants';

const AuthService = () => {
  const service = BaseService(routes.auth.BASE_ENDPOINT);

  const authenticate = async (username: string, password: string) =>
    service.post(routes.auth.LOGIN, { email: username, password });

  return {
    authenticate,
  };
};

export default AuthService;
