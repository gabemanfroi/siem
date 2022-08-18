import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import DateFnsAdapter from '@date-io/date-fns';
import { IntegrityMonitoringService } from 'modules/IntegrityMonitoring/api';

const dateFns = new DateFnsAdapter();

const useIntegrityMonitoringQuery = () => {
  const {
    isLoading: integrityMonitoringPageIsLoading,
    data: integrityMonitoringPageData,
  } = useQuery([QUERIES.INTEGRITY_MONITORING.GET_PAGE_DATA], () => {
    const now = new Date();
    return IntegrityMonitoringService.dynamicPost('', {
      endDate: now.getTime(),
      initialDate: dateFns.addDays(now, -1).getTime(),
    });
  });
  return {
    integrityMonitoringPageIsLoading,
    integrityMonitoringPageData,
  };
};

export default useIntegrityMonitoringQuery;
