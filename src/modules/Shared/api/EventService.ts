import BaseService from '../services/BaseService';

class EventService extends BaseService {
  constructor() {
    super('event/');
  }
}

export default new EventService();
