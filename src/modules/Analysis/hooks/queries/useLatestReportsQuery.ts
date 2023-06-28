import { useFilter } from 'modules/Shared/hooks';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import AnalysisService from 'modules/Analysis/api/AnalysisService';

export const useLatestReportsQuery = () => {
  const { filters } = useFilter();

  const { data: latestReportsData, isLoading: latestReportsLoading } = useQuery(
    [QUERIES.ANALYSIS.GET_LATEST_REPORTS, filters],
    () =>
      AnalysisService.getLatestReports({
        finalDate: filters.finalDate! as number,
        initialDate: filters.initialDate! as number,
      })
  );
  return {
    latestReportsData: latestReportsData || [],
    latestReportsLoading,
  };
};
