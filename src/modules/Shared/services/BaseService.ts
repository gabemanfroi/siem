import HttpClient from '../util/HttpClient';

export default class BaseService {
  private readonly baseEndpoint: string;

  constructor(baseEndpoint: string) {
    this.baseEndpoint = baseEndpoint;
  }

  protected get() {
    return HttpClient.axiosInstance.get(this.baseEndpoint);
  }

  protected getDynamicRoute(url: string) {
    return HttpClient.axiosInstance.get(`${this.baseEndpoint}${url}`);
  }

  protected post(data?: any, url = '') {
    if (data) {
      return HttpClient.axiosInstance.post(`${this.baseEndpoint}${url}`, data);
    }
    return HttpClient.axiosInstance.post(`${this.baseEndpoint}${url}`);
  }
}
