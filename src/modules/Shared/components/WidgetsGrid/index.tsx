import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import { useWidgetsLayouts } from 'modules/Shared/hooks';
import { IWidget } from 'modules/Shared/interfaces/Widgets';
import { createRef } from 'react';
import { PAGES } from 'modules/Shared/enums';
import { saveCurrentLayout } from 'modules/Shared/utils/Layout';
import { useCustomizationContext } from 'modules/Shared/hooks/useCustomizationContext';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface WidgetsGridProps {
  widgets: IWidget[];
  page: PAGES;
}

const WidgetsGrid = ({ widgets, page }: WidgetsGridProps) => {
  const { customizationMode } = useCustomizationContext();

  const ref = createRef();

  const { layouts } = useWidgetsLayouts(widgets, page);

  return (
    <ResponsiveGridLayout
      isResizable={customizationMode}
      isDraggable={customizationMode}
      onLayoutChange={customizationMode ? saveCurrentLayout : () => {}}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
      style={{ flex: 1 }}
      layouts={layouts}
    >
      {widgets.map((w) => (
        <GridItem ref={ref} key={w.identifier} widget={w}>
          <w.Component />
        </GridItem>
      ))}
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
