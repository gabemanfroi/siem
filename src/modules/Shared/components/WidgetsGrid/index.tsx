import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import { LoadingHandler } from 'modules/Shared/components/index';
import { useWidgets, useWidgetsGrid } from 'modules/Shared/hooks';
import { IWidget } from 'modules/Shared/interfaces/Widgets';
import { useDashboard } from 'modules/Dashboard/contexts';
import { createRef } from 'react';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface WidgetsGridProps {
  widgets: IWidget[];
  apiEndpoint: string;
}

const WidgetsGrid = ({ widgets, apiEndpoint }: WidgetsGridProps) => {
  const { saveCurrentLayout } = useWidgets();

  const { isEditMode } = useDashboard();

  const ref = createRef();

  const { layouts } = useWidgetsGrid(widgets, apiEndpoint);
  return (
    <ResponsiveGridLayout
      isResizable={isEditMode}
      isDraggable={isEditMode}
      onLayoutChange={saveCurrentLayout}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
      style={{ flex: 1 }}
      layouts={layouts}
      draggableHandle=".drag-icon"
    >
      {widgets.map((w) => (
        <GridItem
          ref={ref}
          key={w.identifier}
          widget={w}
          isDraggable={isEditMode}
          isResizable={isEditMode}
        >
          <LoadingHandler>{w.builder}</LoadingHandler>
        </GridItem>
      ))}
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
