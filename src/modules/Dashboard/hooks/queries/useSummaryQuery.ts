import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import DashboardWidgetsService from 'modules/Dashboard/api/DashboardWidgetsService';
import { useFilter } from 'modules/Shared/hooks';
import { ISummary } from 'modules/Dashboard/interfaces/ISummary';

export const useSummaryQuery = () => {
  const { filters } = useFilter();

  const { data: getSummaryData, isLoading: getSummaryIsLoading } =
    useQuery<ISummary>([QUERIES.DASHBOARD.GET_SUMMARY, filters], () =>
      DashboardWidgetsService.getSummary({
        initialDate: filters.initialDate! as number,
        finalDate: filters.finalDate! as number,
      })
    );

  return {
    getSummaryData: getSummaryData || ({} as ISummary),
    getSummaryIsLoading,
  };
};
