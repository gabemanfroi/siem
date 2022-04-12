import BaseService from '../services/BaseService';

class AuthService extends BaseService {
  constructor() {
    super('/auth');
  }

  async authenticate(
    username: string,
    password: string
  ): Promise<{ accessToken: string }> {
    // @ts-ignore
    return this.post({ email: username, password }, '/login');
  }

  async verifyToken() {
    return this.post(null, '/verifyToken');
  }
}

export default new AuthService();
