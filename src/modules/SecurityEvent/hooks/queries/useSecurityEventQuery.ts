import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useFilter } from 'modules/Shared/hooks';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { useAgentContext } from 'modules/Agent/hooks';
import { useVulnerabilityContext } from 'modules/Vulnerability/contexts/VulnerabilityContext';

const useSecurityEventQuery = () => {
  const { filters, isFilterMode } = useFilter();
  const { selectedAlertId } = useSecurityEventContext();
  const { selectedAgentId } = useAgentContext();
  const { selectedVulnerability } = useVulnerabilityContext();

  const {
    data: findByElasticsearchIdEvent,
    isLoading: findByElasticsearchIsLoading,
  } = useQuery(
    [QUERIES.SECURITY_EVENT.FIND_BY_ELASTICSEARCH_ID, selectedAlertId],
    () =>
      SecurityEventService.getByElasticsearchId({
        finalDate: filters.finalDate! as number,
        initialDate: filters.initialDate! as number,
        elasticsearchId: selectedAlertId!,
      }),
    {
      enabled: !!selectedAlertId,
    }
  );

  const {
    data: eventsBelongingToAgent,
    isLoading: eventsBelongingToAgentIsLoading,
  } = useQuery(
    [QUERIES.SECURITY_EVENT.GET_EVENTS_BELONGING_TO_AGENT, selectedAgentId],
    () =>
      SecurityEventService.getEventsBelongingToAgent({
        finalDate: filters.finalDate! as number,
        initialDate: filters.initialDate! as number,
        elasticsearchId: selectedAgentId!,
      }),
    {
      enabled: !!selectedAgentId,
    }
  );

  const {
    data: eventsByAgentAndVulnerability,
    isLoading: eventsByAgentAndVulnerabilityIsLoading,
  } = useQuery(
    [
      QUERIES.SECURITY_EVENT.GET_EVENTS_BY_AGENT_AND_VULNERABILITY,
      selectedAgentId,
      selectedVulnerability,
    ],
    () =>
      SecurityEventService.getEventsByAgentAndVulnerability(
        selectedAgentId!,
        selectedVulnerability!
      )
  );

  const { data: pageData, isLoading: pageIsLoading } = useQuery(
    [QUERIES.SECURITY_EVENT.GET_PAGE_DATA, filters],
    () =>
      SecurityEventService.dynamicPost('', isFilterMode ? { ...filters } : {})
  );

  return {
    findByElasticsearchIdEvent,
    findByElasticsearchIsLoading,
    eventsBelongingToAgent: eventsBelongingToAgent || [],
    eventsBelongingToAgentIsLoading,
    pageData,
    pageIsLoading,
    eventsByAgentAndVulnerability: eventsByAgentAndVulnerability || [],
    eventsByAgentAndVulnerabilityIsLoading,
  };
};

export default useSecurityEventQuery;
