import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import AgentService from 'modules/Agent/api/AgentService';
import { useFilter } from 'modules/Shared/hooks';
import { IPolicy } from 'modules/SCA/interfaces';
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

  const { isLoading: getAgentPoliciesIsLoading, data: getAgentPoliciesData } =
    useQuery(
      [QUERIES.AGENT.GET_AGENT_POLICIES, selectedAgentId],
      () =>
        AgentService.dynamicGet<IPolicy>(`/agent_policies/${selectedAgentId}`),
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

  const { isLoading: getAgentPageIsLoading, data: getAgentPageData } = useQuery(
    [QUERIES.AGENT.GET_PAGE_DATA],
    () => AgentService.dynamicPost('', { ...filters })
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
