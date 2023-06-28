import { IntegrityMonitoringService } from 'modules/IntegrityMonitoring/api';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { useFilter } from 'modules/Shared/hooks';

export const useAlertsByActionOverTimeQuery = () => {
  const { filters } = useFilter();

  const {
    data: alertsByActionOverTimeData,
    isLoading: alertsByActionOverTimeIsLoading,
  } = useQuery(
    [QUERIES.INTEGRITY_MONITORING.GET_ALERTS_BY_ACTION_OVER_TIME, filters],
    () =>
      IntegrityMonitoringService.getAlertsByActionOverTime({
        initialDate: filters.initialDate as number,
        finalDate: filters.finalDate as number,
      })
  );

  return {
    alertsByActionOverTimeData: alertsByActionOverTimeData || {},
    alertsByActionOverTimeIsLoading,
  };
};
