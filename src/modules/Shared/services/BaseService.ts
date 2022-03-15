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

  protected post(data: any) {
    return HttpClient.axiosInstance.post(this.baseEndpoint, data);
  }

  protected postDynamicRoute(url: string) {
    return HttpClient.axiosInstance.post(`${url}`);
  }
}
