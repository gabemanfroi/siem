import axios from 'axios';
import { camelizeKeys } from 'humps';
import TokenUtil from './TokenUtil';

class HttpClient {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    this.axiosInstance.interceptors.response.use(
      (response) => camelizeKeys(response.data),
      (error) => Promise.reject(error),
    );
    this.axiosInstance.interceptors.request.use(async (config) => {
      const token = TokenUtil.getToken();

      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }
}

export default new HttpClient();
