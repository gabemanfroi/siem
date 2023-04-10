import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { MitreService } from 'modules/Mitre/api';
import { useFilter } from 'modules/Shared/hooks';

const useMitreQuery = () => {
  const { filters } = useFilter();

  const { isLoading: pageIsLoading, data: pageData } = useQuery(
    [QUERIES.MITRE.GET_PAGE_DATA, filters],
    () =>
      MitreService.dynamicPost('', {
        ...filters,
      })
  );

  return { pageData, pageIsLoading };
};

export default useMitreQuery;
