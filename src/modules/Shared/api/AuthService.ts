import { BaseService } from '../services/BaseService';

export const AuthService = () => {
  const service = BaseService('/auth');

  const authenticate = async (username: string, password: string) =>
    service.post('/login', { email: username, password });

  const verifyToken = async () => service.post('/login');

  return {
    authenticate,
    verifyToken,
  };
};
