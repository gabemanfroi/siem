import { AxiosClient } from './AxiosClient';

export const BaseService = (baseEndpoint: string) => {
  const axios = AxiosClient();
  return {
    get: (url = '') => axios.get(`${baseEndpoint}${url}`),
    post: <T>(url?: string, data?: T) =>
      axios.post(`${baseEndpoint}${url || ''}`, data),
  };
};
