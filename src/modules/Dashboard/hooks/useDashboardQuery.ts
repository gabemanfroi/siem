import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useFilter, useWidgets } from 'modules/Shared/hooks';
import { DashboardService } from 'modules/Dashboard/api';

const useDashboardQuery = () => {
  const { selectedWidgets } = useWidgets();
  const { filters } = useFilter();

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
      [QUERIES.DASHBOARD.GET_DASHBOARD_DATA, filters, selectedWidgets],
      () =>
        DashboardService.dynamicPost('', {
          ...filters,
          selectedWidgets: getWidgetsToRetrieveFromServer(),
        })
    );

  return {
    getDashboardDataIsLoading,
    getDashboardData,
  };
};

export default useDashboardQuery;
