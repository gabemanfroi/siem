import RightPanel from 'modules/Dashboard/components/RightPanel';
import { useDashboardQuery } from 'modules/Dashboard/hooks';
import { useEffect } from 'react';

import { fillWidgetsWithData } from 'modules/Shared/helpers/fillWidgetsWithData';
import DefaultLayout from 'modules/Shared/components/DefaultLayout';
import { useDashboardContext } from 'modules/Dashboard/contexts';

function Dashboard() {
  const { dashboardWidgetsHandler: widgetsHandler } = useDashboardContext();
  const { pageData } = useDashboardQuery();

  useEffect(() => {
    if (pageData) {
      const { data } = pageData;
      fillWidgetsWithData(data, widgetsHandler);
    }
  }, [pageData]);

  return (
    <DefaultLayout>
      <RightPanel />
    </DefaultLayout>
  );
}

export default Dashboard;
