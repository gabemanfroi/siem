import BaseService from './BaseService';

class AuthService extends BaseService {
  constructor() {
    super('login/');
  }

  async authenticate(username, password) {
    return this.post({ username, password });
  }
}

export default new AuthService();
