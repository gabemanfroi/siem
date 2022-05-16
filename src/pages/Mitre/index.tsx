import { DefaultPageContainer, GridItem } from 'modules/Shared/components';

import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import { mitreWidgets } from 'modules/Mitre/contexts';
import { IWidget } from 'modules/Shared/types/WidgetsTypes';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Mitre = () => {
  const widgets: IWidget[] = Object.values(mitreWidgets).map((w: IWidget) => w);

  const layouts = {
    lg: Object.values(mitreWidgets).map((w: IWidget) => w.options.lg),
  };
  return (
    <DefaultPageContainer>
      <ResponsiveGridLayout
        isResizable={false}
        isDraggable={false}
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 120, sm: 6, xs: 4, xxs: 2 }}
        style={{ flex: 1 }}
        layouts={layouts}
      >
        {widgets.map((w) => (
          <GridItem key={w.identifier}>{w.builder()}</GridItem>
        ))}
      </ResponsiveGridLayout>
    </DefaultPageContainer>
  );
};

export default Mitre;
