import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import AgentService from 'modules/Agent/api/AgentService';
import { useFilter } from 'modules/Shared/hooks';
import { useAgentContext } from 'modules/Agent/hooks/index';
import { IVulnerability } from 'modules/Vulnerability/interfaces/IVulnerability';

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
        endDate: filters.endDate! as number,
        initialDate: filters.initialDate! as number,
        elasticsearchId: selectedAgentId!,
      }),
    {
      enabled: !!selectedAgentId,
    }
  );

  const {
    isLoading: getAgentVulnerabilitiesIsLoading,
    data: getAgentVulnerabilitiesData,
  } = useQuery(
    [QUERIES.AGENT.GET_AGENT_VULNERABILITIES, selectedAgentId],
    () =>
      AgentService.dynamicGet<IVulnerability>(
        `/agent_vulnerabilities/${selectedAgentId}`
      ),
    {
      enabled: !!selectedAgentId,
    }
  );

  return {
    findByElasticsearchIdAgent,
    findByElasticsearchIsLoading,
    getAgentVulnerabilitiesData: getAgentVulnerabilitiesData || [],
    getAgentVulnerabilitiesIsLoading,
  };
};
export default useAgentQuery;
