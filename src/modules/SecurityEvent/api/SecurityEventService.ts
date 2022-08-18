import AxiosClient from 'modules/Shared/services/AxiosClient';
import { IEvent } from 'modules/Shared/interfaces';
import { ROUTES } from 'modules/Shared/constants/routes';
import { BaseService } from 'modules/Shared/services/BaseService';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';

const SecurityEventService = () => {
  const endpoints = {
    getByElasticsearchId: async ({
      elasticsearchId,
      initialDate,
      endDate,
    }: IQueryParams) =>
      (
        await AxiosClient.get<IEvent>(
          `${ROUTES.BRAGI.SECURITY_EVENT}/get_by_elasticsearch_id/${elasticsearchId}?initial_date=${initialDate}&end_date=${endDate}`
        )
      ).data,
  };
  return {
    ...BaseService<IEvent>(ROUTES.BRAGI.SECURITY_EVENT),
    ...endpoints,
  };
};

export default SecurityEventService();
