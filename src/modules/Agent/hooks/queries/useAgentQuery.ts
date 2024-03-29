import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import AgentService from 'modules/Agent/api/AgentService';
import { useFilter } from 'modules/Shared/hooks';
import { useAgentContext } from 'modules/Agent/hooks/index';
import { IAgent } from 'modules/Shared/interfaces/IAgent';

const useAgentQuery = () => {
  const { filters } = useFilter();
  const { selectedAgentId } = useAgentContext();

  const {
    data: findByElasticsearchIdAgent,
    isLoading: findByElasticsearchIsLoading,
  } = useQuery(
    [QUERIES.AGENT.FIND_BY_ELASTICSEARCH_ID, selectedAgentId],
    () =>
      AgentService.getByElasticsearchId({
        finalDate: filters.finalDate! as number,
        initialDate: filters.initialDate! as number,
        elasticsearchId: selectedAgentId!,
      }),
    {
      enabled: !!selectedAgentId,
    }
  );

  return {
    findByElasticsearchIdAgent: findByElasticsearchIdAgent || ({} as IAgent),
    findByElasticsearchIsLoading,
  };
};
export default useAgentQuery;
