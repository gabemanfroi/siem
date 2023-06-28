import { BaseService } from 'modules/Shared/services/BaseService';
import AxiosClient from 'modules/Shared/services/AxiosClient';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';
import { INotableAgent } from 'modules/Agent/interfaces/INotableAgents';
import { IAgent } from 'modules/Shared/interfaces/IAgent';

const AgentWidgetsService = () => {
  const customEndpoints = {
    getNotableAgents: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.get<INotableAgent[]>(
          `${ROUTES.BRAGI.AGENT_WIDGETS}/notable-agents?initialDate=${initialDate}&finalDate=${finalDate}`
        )
      ).data,
  };

  return {
    ...BaseService<IAgent>(ROUTES.BRAGI.AGENT_WIDGETS),
    ...customEndpoints,
  };
};

export default AgentWidgetsService();
