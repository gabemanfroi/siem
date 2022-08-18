import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import agentService from 'modules/Agent/api/AgentService';
import { useFilter } from 'modules/Shared/hooks';

interface useAgentQueryProps {
  elasticsearchId: string;
}

const useAgentQuery = ({ elasticsearchId }: useAgentQueryProps) => {
  const { filters } = useFilter();

  const {
    data: findByElasticsearchIdAgent,
    isLoading: findByElasticsearchIsLoading,
  } = useQuery([QUERIES.AGENT.findByElasticsearchId, elasticsearchId], () =>
    agentService.getByElasticsearchId({
      endDate: filters.endDate!,
      initialDate: filters.initialDate!,
      elasticsearchId,
    })
  );

  return {
    findByElasticsearchIdAgent,
    findByElasticsearchIsLoading,
  };
};
export default useAgentQuery;
