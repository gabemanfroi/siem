import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { MitreService } from 'modules/Mitre/api';
import { useFilter } from 'modules/Shared/hooks';

export const useTopTacticsByAgentQuery = () => {
  const { filters } = useFilter();

  const { data: topTacticsByAgentData, isLoading: topTacticsByAgentIsLoading } =
    useQuery([QUERIES.MITRE.GET_TOP_TACTICS_BY_AGENT, filters], () =>
      MitreService.getTopTacticsByAgent({
        endDate: filters.endDate! as number,
        initialDate: filters.initialDate! as number,
      })
    );

  return {
    topTacticsByAgentData: topTacticsByAgentData || {},
    topTacticsByAgentIsLoading,
  };
};
