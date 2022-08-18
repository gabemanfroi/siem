import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { MitreService } from 'modules/Mitre/api';

import DateFnsAdapter from '@date-io/date-fns';

const dateFns = new DateFnsAdapter();

const useMitreQuery = () => {
  const { isLoading: mitrePageDataIsLoading, data: mitrePageData } = useQuery(
    [QUERIES.MITRE.GET_PAGE_DATA],
    () => {
      const now = new Date();

      return MitreService.dynamicPost('', {
        endDate: now.getTime(),
        initialDate: dateFns.addDays(now, -1).getTime(),
      });
    }
  );
  return { mitrePageData, mitrePageDataIsLoading };
};

export default useMitreQuery;
