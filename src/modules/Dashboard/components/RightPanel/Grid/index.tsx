import 'react-grid-layout/css/styles.css';
import { useWidgets } from 'modules/Shared/hooks';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';

const Grid = () => {
  const { selectedWidgets } = useWidgets();

  if (selectedWidgets.length === 0) return <></>;

  return <WidgetsGrid widgets={selectedWidgets} apiEndpoint="/dashboard" />;
};

export default Grid;
