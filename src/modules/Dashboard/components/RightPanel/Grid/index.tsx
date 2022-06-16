import 'react-grid-layout/css/styles.css';
import { useWidgets } from 'modules/Shared/contexts';
import { useDashboard } from 'modules/Dashboard/contexts';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';

const Grid = () => {
  const { selectedWidgets } = useWidgets();
  const { dashboardWidgetsHandler } = useDashboard();

  if (selectedWidgets.length === 0) return <></>;

  return (
    <WidgetsGrid
      widgets={selectedWidgets}
      widgetsHandler={dashboardWidgetsHandler}
      apiEndpoint="/dashboard"
    />
  );
};

export default Grid;
