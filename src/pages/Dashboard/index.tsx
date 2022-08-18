import { Container } from 'pages/Dashboard/style';
import RightPanel from 'modules/Dashboard/components/RightPanel';
import { useDashboardQuery } from 'modules/Dashboard/hooks';
import { useEffect } from 'react';
import { useDashboard } from 'modules/Dashboard/contexts';
import { fillWidgetsWithData } from 'modules/Shared/helpers/fillWidgetsWithData';

function Dashboard() {
  const { dashboardWidgetsHandler: widgetsHandler } = useDashboard();
  const { getDashboardDataIsLoading, getDashboardData } = useDashboardQuery();

  useEffect(() => {
    if (getDashboardData) {
      const { data } = getDashboardData;
      fillWidgetsWithData(data, widgetsHandler);
    }
  }, [getDashboardData]);

  if (getDashboardDataIsLoading) return <></>;

  return (
    <Container>
      <RightPanel />
    </Container>
  );
}

export default Dashboard;
