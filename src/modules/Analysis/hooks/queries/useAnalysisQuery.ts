import { useFilter } from 'modules/Shared/hooks';
import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import AnalysisService from 'modules/Analysis/api/AnalysisService';

const useAnalysisQuery = () => {
  const { filters } = useFilter();
  const { isLoading: pageIsLoading, data: pageData } = useQuery(
    [QUERIES.ANALYSIS.GET_PAGE_DATA, filters],
    () =>
      AnalysisService.dynamicPost('', {
        ...filters,
      })
  );

  return {
    pageIsLoading,
    pageData,
  };
};

export default useAnalysisQuery;
