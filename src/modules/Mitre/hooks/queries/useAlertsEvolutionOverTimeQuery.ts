import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { MitreService } from 'modules/Mitre/api';
import { useFilter } from 'modules/Shared/hooks';

export const useAlertsEvolutionOverTimeQuery = () => {
  const { filters } = useFilter();

  const {
    data: alertsEvolutionOverTimeData,
    isLoading: alertsEvolutionOverTimeLoading,
  } = useQuery([QUERIES.MITRE.GET_ALERTS_EVOLUTION_OVER_TIME, filters], () =>
    MitreService.getAlertsEvolutionOverTime({
      endDate: filters.endDate! as number,
      initialDate: filters.initialDate! as number,
    })
  );

  return {
    alertsEvolutionOverTimeData: alertsEvolutionOverTimeData || {},
    alertsEvolutionOverTimeLoading,
  };
};
