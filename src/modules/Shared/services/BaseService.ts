import AxiosClient from './AxiosClient';

export const BaseService = <T>(baseEndpoint: string) => {
  const axios = AxiosClient;
  return {
    get: (url = '') => axios.get<T[]>(`${baseEndpoint}${url}`),
    dynamicGet: async <TGet>(url = '') =>
      (await axios.get<TGet[]>(`${baseEndpoint}${url}`)).data,
    post: (url?: string, data?: T) =>
      axios.post<T>(`${baseEndpoint}${url || ''}`, data),
    dynamicPost: (url?: string, data?: unknown) =>
      axios.post(`${baseEndpoint}${url || ''}`, data),
  };
};
