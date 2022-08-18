import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useWidgets } from 'modules/Shared/hooks';
import { DashboardService } from 'modules/Dashboard/api';
import { CACHE_TIME } from 'modules/Shared/constants/utils';

import DateFnsAdapter from '@date-io/date-fns';

const dateFns = new DateFnsAdapter();

const useDashboardQuery = () => {
  const { selectedWidgets } = useWidgets();

  const getWidgetsToRetrieveFromServer = () => {
    const widgetsToRetrieveFromServer: { [key: string]: string[] } = {};

    selectedWidgets.forEach((w) => {
      if (widgetsToRetrieveFromServer[w.framework]) {
        widgetsToRetrieveFromServer[w.framework].push(w.identifier);
      } else {
        widgetsToRetrieveFromServer[w.framework] = [];
      }
    });
    return widgetsToRetrieveFromServer;
  };

  const { isLoading: getDashboardDataIsLoading, data: getDashboardData } =
    useQuery(
      [QUERIES.DASHBOARD.GET_DASHBOARD_DATA],
      () => {
        const now = new Date();
        return DashboardService.dynamicPost('', {
          endDate: now.getTime(),
          initialDate: dateFns.addDays(now, -1).getTime(),
          selectedWidgets: getWidgetsToRetrieveFromServer(),
        });
      },
      {
        cacheTime: CACHE_TIME,
      }
    );

  return {
    getDashboardDataIsLoading,
    getDashboardData,
  };
};

export default useDashboardQuery;
