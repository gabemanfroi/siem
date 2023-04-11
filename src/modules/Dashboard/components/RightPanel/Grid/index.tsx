import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { PAGES } from 'modules/Shared/enums';
import { useWidgetsSelectionContext } from 'modules/Shared/hooks/useWidgetsSelectionContext';

const Grid = () => {
  const { selectedWidgets } = useWidgetsSelectionContext();

  if (selectedWidgets.length === 0) return <></>;

  return (
    <WidgetsGrid
      widgets={selectedWidgets.filter(({ available }) => available)}
      page={PAGES.DASHBOARD}
    />
  );
};

export default Grid;
