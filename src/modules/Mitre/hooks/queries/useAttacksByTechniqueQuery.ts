import { useQuery } from '@tanstack/react-query';
import { useFilter } from 'modules/Shared/hooks';
import { QUERIES } from 'modules/Shared/constants/queries';
import { MitreService } from 'modules/Mitre/api';

export const useAttacksByTechniqueQuery = () => {
  const { filters } = useFilter();

  const {
    data: attacksByTechniqueData,
    isLoading: attacksByTechniqueIsLoading,
  } = useQuery([QUERIES.MITRE.GET_ATTACKS_BY_TECHNIQUE, filters], () =>
    MitreService.getAttacksByTechnique({
      endDate: filters.endDate! as number,
      initialDate: filters.initialDate! as number,
    })
  );

  return {
    attacksByTechniqueData: attacksByTechniqueData || {},
    attacksByTechniqueIsLoading,
  };
};
