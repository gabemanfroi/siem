import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import { LoadingHandler } from 'modules/Shared/components/index';
import { useWidgets, useWidgetsGrid } from 'modules/Shared/hooks';
import { IWidget } from 'modules/Shared/interfaces/Widgets';
import { ROUTES } from 'modules/Shared/constants/routes';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface WidgetsGridProps {
  widgets: IWidget[];
  apiEndpoint: string;
}

const WidgetsGrid = ({ widgets, apiEndpoint }: WidgetsGridProps) => {
  const { saveCurrentLayout, customizeMode } = useWidgets();

  const { layouts } = useWidgetsGrid(widgets, apiEndpoint);
  return (
    <ResponsiveGridLayout
      isResizable={apiEndpoint === '/dashboard' && customizeMode}
      isDraggable={apiEndpoint === '/dashboard' && customizeMode}
      onLayoutChange={saveCurrentLayout}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
      style={{ flex: 1 }}
      layouts={layouts}
      draggableHandle=".drag-icon"
    >
      {widgets.map((w) => (
        <GridItem
          key={w.identifier}
          widget={w}
          isDraggable={apiEndpoint === ROUTES.BRAGI.MITRE && customizeMode}
          isResizable={apiEndpoint === ROUTES.BRAGI.MITRE && customizeMode}
        >
          <LoadingHandler>{w.builder}</LoadingHandler>
        </GridItem>
      ))}
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
