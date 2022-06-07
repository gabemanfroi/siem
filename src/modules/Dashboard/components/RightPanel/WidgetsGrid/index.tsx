import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import { LoadingHandler } from 'modules/Shared/components';
import { useWidgets } from 'modules/Shared/contexts';
import { useWidgetsGrid } from 'modules/Dashboard/hooks';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WidgetsGrid = () => {
  const { selectedWidgets, saveCurrentLayout } = useWidgets();
  const { layouts } = useWidgetsGrid();

  if (selectedWidgets.length === 0) return <></>;

  return (
    <ResponsiveGridLayout
      isResizable
      isDraggable
      onLayoutChange={saveCurrentLayout}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 120, sm: 6, xs: 4, xxs: 2 }}
      style={{ flex: 1 }}
      layouts={layouts}
      draggableHandle=".drag-icon"
    >
      {selectedWidgets.map((w) => (
        <GridItem key={w.identifier} widget={w}>
          <LoadingHandler>{w.builder()}</LoadingHandler>
        </GridItem>
      ))}
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
