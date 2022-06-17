import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import { LoadingHandler } from 'modules/Shared/components/index';
import { useWidgets } from 'modules/Shared/contexts';
import { useWidgetsGrid } from 'modules/Shared/hooks';
import { IWidget, IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface WidgetsGridProps {
  widgets: IWidget[];
  widgetsHandler: IWidgetsHandler;
  apiEndpoint: string;
}

const WidgetsGrid = ({
  widgets,
  widgetsHandler,
  apiEndpoint,
}: WidgetsGridProps) => {
  const { saveCurrentLayout } = useWidgets();

  const { layouts } = useWidgetsGrid(
    widgets,
    widgetsHandler,
    apiEndpoint,
  );
  return (
    <ResponsiveGridLayout
      isResizable={apiEndpoint === '/dashboard'}
      isDraggable={apiEndpoint === '/dashboard'}
      onLayoutChange={Array.isArray(widgets) ? saveCurrentLayout : () => {
      }}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
      style={{ flex: 1 }}
      layouts={layouts}
      draggableHandle='.drag-icon'
    >
      {
        widgets.map((w) => (
          <GridItem
            key={w.identifier}
            widget={w}
            isDraggable={apiEndpoint === '/dashboard'}
            isResizable={apiEndpoint === '/dashboard'}
          >
            <LoadingHandler>{w.builder()}</LoadingHandler>
          </GridItem>
        ))
      }

    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
