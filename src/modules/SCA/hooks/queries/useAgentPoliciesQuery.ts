import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useAgentContext } from 'modules/Agent/hooks';
import { SCAService } from 'modules/SCA/api';

export const useAgentPoliciesQuery = () => {
  const { selectedAgentId } = useAgentContext();

  const { data: getAgentPoliciesData, isLoading: getAgentPoliciesIsLoading } =
    useQuery(
      [QUERIES.SCA.GET_AGENT_POLICIES, selectedAgentId],
      () => SCAService.getAgentPolicies(selectedAgentId),
      {
        enabled: !!selectedAgentId,
      }
    );

  return {
    getAgentPoliciesData: getAgentPoliciesData || [],
    getAgentPoliciesIsLoading,
  };
};
