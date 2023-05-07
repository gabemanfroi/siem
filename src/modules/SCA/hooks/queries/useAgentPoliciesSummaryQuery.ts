import { QUERIES } from 'modules/Shared/constants/queries';
import { useAgentContext } from 'modules/Agent/hooks';
import { SCAService } from 'modules/SCA/api';
import { useQuery } from '@tanstack/react-query';

export const useAgentPoliciesSummaryQuery = () => {
  const { selectedAgentId } = useAgentContext();

  const {
    data: agentPoliciesSummaryData,
    isLoading: agentPoliciesSummaryIsLoading,
  } = useQuery([QUERIES.SCA.GET_AGENT_POLICIES_SUMMARY, selectedAgentId], () =>
    SCAService.getAgentPoliciesSummary(selectedAgentId!)
  );

  return {
    agentPoliciesSummaryData,
    agentPoliciesSummaryIsLoading,
  };
};
