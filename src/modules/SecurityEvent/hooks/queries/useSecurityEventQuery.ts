import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useFilter } from 'modules/Shared/hooks';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';

const useSecurityEventQuery = () => {
  const { filters } = useFilter();
  const { selectedEventId } = useSecurityEvent();
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

  const {
    data: securityEventPageData,
    isLoading: securityEventPageDataIsLoading,
  } = useQuery([QUERIES.SECURITY_EVENT.GET_PAGE_DATA], () =>
    SecurityEventService.dynamicPost('', { ...filters })
  );

  return {
    findByElasticsearchIdEvent,
    findByElasticsearchIsLoading,
    securityEventPageData,
    securityEventPageDataIsLoading,
  };
};

export default useSecurityEventQuery;
