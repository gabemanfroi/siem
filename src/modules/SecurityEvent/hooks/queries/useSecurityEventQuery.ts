import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useFilter } from 'modules/Shared/hooks';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';

interface useSecurityEventQueryProps {
  elasticsearchId: string;
}

const useSecurityEventQuery = ({
  elasticsearchId,
}: useSecurityEventQueryProps) => {
  const { filters } = useFilter();

  const {
    data: findByElasticsearchIdEvent,
    isLoading: findByElasticsearchIsLoading,
  } = useQuery(
    [QUERIES.SECURITY_EVENT.findByElasticsearchId, elasticsearchId],
    () =>
      SecurityEventService.getByElasticsearchId({
        endDate: filters.endDate!,
        initialDate: filters.initialDate!,
        elasticsearchId,
      })
  );

  return {
    findByElasticsearchIdEvent,
    findByElasticsearchIsLoading,
  };
};

export default useSecurityEventQuery;
