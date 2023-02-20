import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useFilter } from 'modules/Shared/hooks';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';

const useSecurityEventQuery = () => {
  const { filters, isFilterMode } = useFilter();
  const { selectedEventId } = useSecurityEventContext();
  const {
    data: findByElasticsearchIdEvent,
    isLoading: findByElasticsearchIsLoading,
  } = useQuery(
    [QUERIES.SECURITY_EVENT.FIND_BY_ELASTICSEARCH_ID, selectedEventId],
    () =>
      SecurityEventService.getByElasticsearchId({
        endDate: filters.endDate!,
        initialDate: filters.initialDate!,
        elasticsearchId: selectedEventId!,
      }),
    {
      enabled: !!selectedEventId,
    }
  );
  const { data: pageData, isLoading: pageIsLoading } = useQuery(
    [QUERIES.SECURITY_EVENT.GET_PAGE_DATA, filters],
    () =>
      SecurityEventService.dynamicPost('', isFilterMode ? { ...filters } : {})
  );

  return {
    findByElasticsearchIdEvent,
    findByElasticsearchIsLoading,
    pageData,
    pageIsLoading,
  };
};

export default useSecurityEventQuery;
