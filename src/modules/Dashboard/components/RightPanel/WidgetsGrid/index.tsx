import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import { useState } from 'react';
import { useWidgets } from 'modules/Shared/contexts';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WidgetsGrid = () => {
  const { widgetsList, saveCurrentLayout } = useWidgets();

  const [layouts] = useState({
    lg: widgetsList.map((w) => w.options.lg),
  });

  if (!layouts) return <></>;

  return (
    <ResponsiveGridLayout
      isResizable
      isDraggable
      onResizeStop={saveCurrentLayout}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 120, sm: 6, xs: 4, xxs: 2 }}
      style={{ flex: 1 }}
      layouts={layouts}
    >
      {widgetsList.map((w) => (
        <GridItem key={w.options.lg.i}>{w.builder()}</GridItem>
      ))}
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
