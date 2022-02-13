import HttpClient from '../util/HttpClient';

export default class BaseService {
  constructor(baseEndpoint) {
    this.baseEndpoint = baseEndpoint;
  }

  get() {
    return HttpClient.axiosInstance.get(this.baseEndpoint);
  }

  getDynamicRoute(url) {
    return HttpClient.axiosInstance.get(`${this.baseEndpoint}${url}`);
  }

  post(data) {
    return HttpClient.axiosInstance.post(this.baseEndpoint, data);
  }
}
