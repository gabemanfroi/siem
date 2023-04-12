import { useFilter } from 'modules/Shared/hooks';
import { QUERIES } from 'modules/Shared/constants/queries';
import { IntegrityMonitoringService } from 'modules/IntegrityMonitoring/api';
import { useQuery } from '@tanstack/react-query';

export const useTop5AgentsQuery = () => {
  const { filters } = useFilter();

  const { data: top5AgentsData, isLoading: top5AgentsIsLoading } = useQuery(
    [QUERIES.INTEGRITY_MONITORING.GET_TOP_5_AGENTS, filters],
    () =>
      IntegrityMonitoringService.getTop5Agents({
        initialDate: filters.initialDate as number,
        endDate: filters.endDate as number,
      })
  );

  return {
    top5AgentsData: top5AgentsData || {},
    top5AgentsIsLoading,
  };
};
