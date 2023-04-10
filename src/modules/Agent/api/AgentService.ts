import { BaseService } from 'modules/Shared/services/BaseService';
import AxiosClient from 'modules/Shared/services/AxiosClient';
import { Agent } from 'modules/Shared/interfaces';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';

const AgentService = () => {
  const customEndpoints = {
    getByElasticsearchId: async ({
      elasticsearchId,
      initialDate,
      endDate,
    }: IQueryParams) =>
      (
        await AxiosClient.get<Agent>(
          `${ROUTES.BRAGI.AGENT}/get_by_elasticsearch_id/${elasticsearchId}?initial_date=${initialDate}&end_date=${endDate}`
        )
      ).data,
  };
  return {
    ...BaseService<Agent>(ROUTES.BRAGI.AGENT),
    ...customEndpoints,
  };
};

export default AgentService();
