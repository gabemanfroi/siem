import { useFilter } from 'modules/Shared/hooks';
import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { MitreService } from 'modules/Mitre/api';

export const useTopTacticsQuery = () => {
  const { filters } = useFilter();

  const { data: topTacticsData, isLoading: topTacticsLoading } = useQuery(
    [QUERIES.MITRE.GET_TOP_TACTICS, filters],
    () =>
      MitreService.getTopTactics({
        finalDate: filters.finalDate! as number,
        initialDate: filters.initialDate! as number,
      })
  );

  return {
    topTacticsData: topTacticsData || {},
    topTacticsLoading,
  };
};
