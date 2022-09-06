import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import agentService from 'modules/Agent/api/AgentService';
import { useFilter } from 'modules/Shared/hooks';
import { IPolicy } from 'modules/SCA/interfaces';
import { useAgent } from 'modules/Agent/hooks/index';
import { IVulnerability } from 'modules/Vulnerability/interfaces/IVulnerability';

const useAgentQuery = () => {
  const { filters } = useFilter();
  const { selectedAgentId } = useAgent();

  const {
    data: findByElasticsearchIdAgent,
    isLoading: findByElasticsearchIsLoading,
  } = useQuery(
    [QUERIES.AGENT.FIND_BY_ELASTICSEARCH_ID, selectedAgentId],
    () =>
      agentService.getByElasticsearchId({
        endDate: filters.endDate!,
        initialDate: filters.initialDate!,
        elasticsearchId: selectedAgentId!,
      }),
    {
      enabled: !!selectedAgentId,
    }
  );

  const { isLoading: getAgentPoliciesIsLoading, data: getAgentPoliciesData } =
    useQuery(
      [QUERIES.AGENT.GET_AGENT_POLICIES, selectedAgentId],
      () =>
        agentService.dynamicGet<IPolicy>(`/agent_policies/${selectedAgentId}`),
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
      agentService.dynamicGet<IVulnerability>(
        `/agent_vulnerabilities/${selectedAgentId}`
      ),
    {
      enabled: !!selectedAgentId,
    }
  );

  const { isLoading: getAgentPageIsLoading, data: getAgentPageData } = useQuery(
    [QUERIES.AGENT.GET_PAGE_DATA],
    () => agentService.dynamicPost('', { ...filters })
  );

  return {
    findByElasticsearchIdAgent,
    findByElasticsearchIsLoading,
    getAgentPoliciesIsLoading,
    getAgentPoliciesData: getAgentPoliciesData || [],
    getAgentPageIsLoading,
    getAgentPageData,
    getAgentVulnerabilitiesData: getAgentVulnerabilitiesData || [],
    getAgentVulnerabilitiesIsLoading,
  };
};
export default useAgentQuery;
