import { BaseService } from 'modules/Shared/services/BaseService';
import AxiosClient from 'modules/Shared/services/AxiosClient';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';
import { INotableAgent } from 'modules/Agent/interfaces/INotableAgents';
import { IAgent } from 'modules/Shared/interfaces/IAgent';

const AgentService = () => {
  const customEndpoints = {
    getByElasticsearchId: async ({
      elasticsearchId,
      initialDate,
      finalDate,
    }: IQueryParams) =>
      (
        await AxiosClient.get<IAgent>(
          `${ROUTES.BRAGI.AGENT}/get_by_elasticsearch_id/${elasticsearchId}?initial_date=${initialDate}&end_date=${finalDate}`
        )
      ).data,
    getNotableAgents: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.post<INotableAgent[]>(
          `${ROUTES.BRAGI.AGENT}/notable_agents`,
          {
            initialDate,
            finalDate,
          }
        )
      ).data,
  };
  return {
    ...BaseService<IAgent>(ROUTES.BRAGI.AGENT),
    ...customEndpoints,
  };
};

export default AgentService();
