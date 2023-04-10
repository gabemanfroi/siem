import axios, { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';
import TokenUtil from '../utils/TokenUtil';

const AxiosClient = (baseURL?: string) => {
  const axiosInstance = axios.create({
    baseURL: baseURL || process.env.REACT_APP_HTTP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  axiosInstance.interceptors.request.use(async (config) => {
    const token = TokenUtil().getToken();

    if (config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    if (response.data) {
      response.data = camelizeKeys(response.data);
    }
    return response;
  });

  return axiosInstance;
};

export default AxiosClient();
