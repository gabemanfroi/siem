import { BaseService } from 'modules/Shared/services/BaseService';
import AxiosClient from 'modules/Shared/services/AxiosClient';
import { IAgent } from 'modules/Shared/interfaces';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';

const AgentService = () => {
  const endpoints = {
    getByElasticsearchId: async ({
      elasticsearchId,
      initialDate,
      endDate,
    }: IQueryParams) =>
      (
        await AxiosClient.get<IAgent>(
          `${ROUTES.BRAGI.AGENT}/get_by_elasticsearch_id/${elasticsearchId}?initial_date=${initialDate}&end_date=${endDate}`
        )
      ).data,
  };
  return {
    ...BaseService<IAgent>(ROUTES.BRAGI.AGENT),
    ...endpoints,
  };
};

export default AgentService();
