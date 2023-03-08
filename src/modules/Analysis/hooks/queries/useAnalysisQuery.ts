import { useFilter } from 'modules/Shared/hooks';
import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import AnalysisService from 'modules/Analysis/api/AnalysisService';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';

const useAnalysisQuery = () => {
  const { selectedAlertId, selectedAlert } = useSecurityEventContext();

  const { filters } = useFilter();

  const { isLoading: pageIsLoading, data: pageData } = useQuery(
    [QUERIES.ANALYSIS.GET_PAGE_DATA, filters],
    () =>
      AnalysisService.dynamicPost('', {
        ...filters,
      })
  );

  const {
    isLoading: getReportsByEventIdLoading,
    data: getReportsByEventIdData,
  } = useQuery(
    [QUERIES.ANALYSIS.GET_REPORTS_BY_ALERT_ID, selectedAlertId],
    () => AnalysisService.getReportsByEventId(selectedAlert?.event.id!),
    {
      enabled: !!selectedAlertId || !!selectedAlert,
    }
  );

  return {
    pageIsLoading,
    pageData,
    getReportsByEventIdLoading,
    getReportsByEventIdData: getReportsByEventIdData || [],
  };
};

export default useAnalysisQuery;
