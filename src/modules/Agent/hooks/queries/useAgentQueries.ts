import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import agentService from 'modules/Agent/api/AgentService';
import { useFilter } from 'modules/Shared/hooks';
import { IPolicy } from 'modules/SCA/interfaces';

interface useAgentQueryProps {
  elasticsearchId: string;
}

const useAgentQuery = ({ elasticsearchId }: useAgentQueryProps) => {
  const { filters } = useFilter();

  const {
    data: findByElasticsearchIdAgent,
    isLoading: findByElasticsearchIsLoading,
  } = useQuery(
    [QUERIES.AGENT.FIND_BY_ELASTICSEARCH_ID, elasticsearchId],
    () =>
      agentService.getByElasticsearchId({
        endDate: filters.endDate!,
        initialDate: filters.initialDate!,
        elasticsearchId,
      }),
    {
      enabled: !!elasticsearchId,
    }
  );

  const { isLoading: getAgentPoliciesIsLoading, data: getAgentPoliciesData } =
    useQuery(
      [QUERIES.AGENT.GET_AGENT_POLICIES, elasticsearchId],
      () =>
        agentService.getDynamic<IPolicy>(`/agent_policies/${elasticsearchId}`),
      {
        enabled: !!elasticsearchId,
      }
    );

  return {
    findByElasticsearchIdAgent,
    findByElasticsearchIsLoading,
    getAgentPoliciesIsLoading,
    getAgentPoliciesData: getAgentPoliciesData || [],
  };
};
export default useAgentQuery;
