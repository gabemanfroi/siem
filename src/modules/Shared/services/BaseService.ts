import AxiosClient from './AxiosClient';

export const BaseService = (baseEndpoint: string) => {
  const axios = AxiosClient;
  return {
    get: <T>(url = '') => axios.get<T>(`${baseEndpoint}${url}`),
    post: <T>(url?: string, data?: T) =>
      axios.post(`${baseEndpoint}${url || ''}`, data),
  };
};
