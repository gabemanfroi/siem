import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';
import { useFilter } from 'modules/Shared/hooks';

export const useAlertEvolutionTop5AgentsQuery = () => {
  const { filters } = useFilter();
  const {
    data: alertEvolutionTop5AgentsData,
    isLoading: alertEvolutionTop5AgentsLoading,
  } = useQuery(
    [QUERIES.SECURITY_EVENT.GET_ALERT_EVOLUTION_TOP_5_AGENTS, filters],
    () =>
      SecurityEventService.getAlertEvolutionTop5Agents({
        finalDate: filters.finalDate as number,
        initialDate: filters.initialDate as number,
      })
  );
  return {
    top5AgentsData: alertEvolutionTop5AgentsData,
    alertEvolutionTop5AgentsLoading,
  };
};
