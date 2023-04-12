import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { MitreService } from 'modules/Mitre/api';
import { useFilter } from 'modules/Shared/hooks';

export const useTechniquesByAgentQuery = () => {
  const { filters } = useFilter();

  const { data: techniquesByAgentData, isLoading: techniquesByAgentIsLoading } =
    useQuery([QUERIES.MITRE.GET_TECHNIQUES_BY_AGENT, filters], () =>
      MitreService.getTechniquesByAgent({
        endDate: filters.endDate! as number,
        initialDate: filters.initialDate! as number,
      })
    );

  return {
    techniquesByAgentData: techniquesByAgentData || {},
    techniquesByAgentIsLoading,
  };
};
