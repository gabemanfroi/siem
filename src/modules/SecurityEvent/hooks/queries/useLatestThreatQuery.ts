import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';
import { useFilter } from 'modules/Shared/hooks';

export const useLatestThreatQuery = () => {
  const { filters } = useFilter();

  const { data: latestThreatsData, isLoading: latestThreatsIsLoading } =
    useQuery([QUERIES.SECURITY_EVENT.GET_LATEST_THREATS, filters], () =>
      SecurityEventService.getLatestThreats({
        endDate: filters.endDate! as number,
        initialDate: filters.initialDate! as number,
      })
    );

  return {
    latestThreatsData: latestThreatsData || [],
    latestThreatsIsLoading,
  };
};
