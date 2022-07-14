import axios from 'axios';
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

  return axiosInstance;
};

export default AxiosClient()
