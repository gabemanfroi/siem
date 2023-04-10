import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useFilter, useWidgetsContext } from 'modules/Shared/hooks';
import { DashboardService } from 'modules/Dashboard/api';
import { IWidget } from 'modules/Shared/interfaces/Widgets';

const getWidgetsToRetrieveFromServer = (selectedWidgets: IWidget[]) => {
  const widgetsToRetrieveFromServer: { [key: string]: string[] } = {};

  selectedWidgets.forEach((w) => {
    if (widgetsToRetrieveFromServer[w.framework]) {
      widgetsToRetrieveFromServer[w.framework].push(w.identifier);
    } else {
      widgetsToRetrieveFromServer[w.framework] = [w.identifier];
    }
  });
  return widgetsToRetrieveFromServer;
};

const useDashboardQuery = () => {
  const { selectedWidgets } = useWidgetsContext();
  const { filters, isFilterMode } = useFilter();

  const { isLoading: pageIsLoading, data: pageData } = useQuery(
    [QUERIES.DASHBOARD.GET_DASHBOARD_DATA, filters, selectedWidgets],
    () =>
      DashboardService.dynamicPost('', {
        ...(isFilterMode ? filters : {}),
        selectedWidgets: getWidgetsToRetrieveFromServer(
          selectedWidgets.filter((w) => w.available)
        ),
      })
  );

  return {
    pageIsLoading,
    pageData,
  };
};

export default useDashboardQuery;
