import { useFilter } from 'modules/Shared/hooks';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';

export const useAlertLevelEvolutionQuery = () => {
  const { filters } = useFilter();

  const {
    data: alertLevelEvolutionData,
    isLoading: alertLevelEvolutionIsLoading,
  } = useQuery(
    [QUERIES.SECURITY_EVENT.GET_ALERT_LEVEL_EVOLUTION, filters],
    () =>
      SecurityEventService.getAlertLevelEvolution({
        finalDate: filters.finalDate! as number,
        initialDate: filters.initialDate! as number,
      })
  );

  return {
    alertLevelEvolutionData: alertLevelEvolutionData || {},
    alertLevelEvolutionIsLoading,
  };
};
