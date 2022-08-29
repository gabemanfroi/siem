import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { IntegrityMonitoringService } from 'modules/IntegrityMonitoring/api';
import { useFilter } from 'modules/Shared/hooks';

const useIntegrityMonitoringQuery = () => {
  const { filters } = useFilter();
  const {
    isLoading: integrityMonitoringPageIsLoading,
    data: integrityMonitoringPageData,
  } = useQuery([QUERIES.INTEGRITY_MONITORING.GET_PAGE_DATA, filters], () =>
    IntegrityMonitoringService.dynamicPost('', {
      ...filters,
    })
  );

  return {
    integrityMonitoringPageIsLoading,
    integrityMonitoringPageData,
  };
};

export default useIntegrityMonitoringQuery;
