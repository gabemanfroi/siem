import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { IntegrityMonitoringService } from 'modules/IntegrityMonitoring/api';
import { useFilter } from 'modules/Shared/hooks';

export const useActionsTypesQuery = () => {
  const { filters } = useFilter();

  const { data: actionsTypesData, isLoading: actionsTypesIsLoading } = useQuery(
    [QUERIES.INTEGRITY_MONITORING.GET_ACTIONS_TYPES, filters],
    () =>
      IntegrityMonitoringService.getActionsTypes({
        initialDate: filters.initialDate as number,
        endDate: filters.endDate as number,
      })
  );

  return {
    actionsTypesData: actionsTypesData || {},
    actionsTypesIsLoading,
  };
};
