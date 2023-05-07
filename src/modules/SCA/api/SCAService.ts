import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';
import AxiosClient from 'modules/Shared/services/AxiosClient';
import { IPolicy, IPolicySummary } from 'modules/SCA/interfaces';

const SCAService = () => {
  const customEndpoints = {
    getAgentPoliciesSummary: async (agentId: string = '') =>
      (
        await AxiosClient.get<IPolicySummary>(
          `${ROUTES.BRAGI.SCA}/agent_policies/${agentId}/summary`
        )
      ).data,
    getAgentPolicies: async (selectedAgentId: string | null) =>
      (
        await AxiosClient.get<IPolicy[]>(
          `${ROUTES.BRAGI.SCA}/agent_policies/${selectedAgentId}`
        )
      ).data,
  };
  return {
    ...customEndpoints,
    ...BaseService(ROUTES.BRAGI.SCA),
  };
};

export default SCAService();
