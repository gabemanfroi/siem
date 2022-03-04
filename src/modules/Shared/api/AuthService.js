import BaseService from '../services/BaseService';

class AuthService extends BaseService {
  constructor() {
    super('login/access-token/');
  }

  async authenticate(username, password) {
    return this.post({ username, password });
  }
}

export default new AuthService();
