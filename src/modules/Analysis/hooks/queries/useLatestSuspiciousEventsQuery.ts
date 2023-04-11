import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { useFilter } from 'modules/Shared/hooks';
import AnalysisService from 'modules/Analysis/api/AnalysisService';

export const useLatestSuspiciousEventsQuery = () => {
  const { filters } = useFilter();
  const { data: suspiciousEventsData, isLoading: suspiciousEventsLoading } =
    useQuery([QUERIES.ANALYSIS.GET_LATEST_SUSPICIOUS_EVENTS, filters], () =>
      AnalysisService.getLatestSuspiciousEvents({
        endDate: filters.endDate! as number,
        initialDate: filters.initialDate! as number,
      })
    );
  return {
    suspiciousEventsData: suspiciousEventsData || [],
    suspiciousEventsLoading,
  };
};
