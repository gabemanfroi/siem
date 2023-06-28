import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';
import { useFilter } from 'modules/Shared/hooks';

export const useTopMitreQuery = () => {
  const { filters } = useFilter();
  const { data: topMitreData, isLoading: topMitreLoading } = useQuery(
    [QUERIES.SECURITY_EVENT.GET_TOP_MITRE, filters],
    () =>
      SecurityEventService.getTopMitre({
        finalDate: filters.finalDate! as number,
        initialDate: filters.initialDate! as number,
      })
  );
  return {
    topMitreData,
    topMitreLoading,
  };
};
