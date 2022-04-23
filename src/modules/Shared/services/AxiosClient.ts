import axios from 'axios';
import { camelizeKeys } from 'humps';
import TokenUtil from '../utils/TokenUtil';

export const AxiosClient = (baseURL?: string) => {
  const axiosInstance = axios.create({
    baseURL: baseURL || process.env.REACT_APP_HTTP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => camelizeKeys(response.data),
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.request.use(async (config) => {
    const token = TokenUtil.getToken();

    if (config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return axiosInstance;
};
