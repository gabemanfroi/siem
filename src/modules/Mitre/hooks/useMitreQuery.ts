import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { MitreService } from 'modules/Mitre/api';
import { useFilter } from 'modules/Shared/hooks';

const useMitreQuery = () => {
  const { filters } = useFilter();
  const { isLoading: mitrePageDataIsLoading, data: mitrePageData } = useQuery(
    [QUERIES.MITRE.GET_PAGE_DATA, filters],
    () =>
      MitreService.dynamicPost('', {
        ...filters,
      })
  );

  return { mitrePageData, mitrePageDataIsLoading };
};

export default useMitreQuery;
