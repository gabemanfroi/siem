import AxiosClient from './AxiosClient';

export const BaseService = <T>(baseEndpoint: string) => {
  const axios = AxiosClient;
  return {
    get: (url = '') => axios.get<T[]>(`${baseEndpoint}${url}`),
    getDynamic: async <TGet>(url = '') =>
      (await axios.get<TGet[]>(`${baseEndpoint}${url}`)).data,
    getById: (id: string | number) => axios.get<T>(`${baseEndpoint}${id}`),
    post: (url?: string, data?: T) =>
      axios.post<T>(`${baseEndpoint}${url || ''}`, data),
    dynamicPost: (url?: string, data?: unknown) =>
      axios.post(`${baseEndpoint}${url || ''}`, data),
  };
};
