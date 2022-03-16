import BaseService from '../services/BaseService';

class AuthService extends BaseService {
  constructor() {
    super('login/access-token/');
  }

  async authenticate(
    username: string,
    password: string
  ): Promise<{ accessToken: string }> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    // @ts-ignore
    return this.post(formData);
  }

  async verifyToken(): Promise<{ status: string }> {
    // @ts-ignore
    return this.postDynamicRoute('login/verify-token');
  }
}

export default new AuthService();
