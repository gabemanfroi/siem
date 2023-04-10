import 'react-grid-layout/css/styles.css';
import { useWidgetsContext } from 'modules/Shared/hooks';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { PAGES } from 'modules/Shared/enums';

const Grid = () => {
  const { selectedWidgets } = useWidgetsContext();

  if (selectedWidgets.length === 0) return <></>;

  return (
    <WidgetsGrid
      widgets={selectedWidgets.filter(({ available }) => available)}
      page={PAGES.DASHBOARD}
    />
  );
};

export default Grid;
