import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import DateHistogram from 'modules/Shared/components/Widgets/DateHistogram';
import GridItem from 'modules/Shared/components/GridItem';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WidgetsGrid = () => {
  const layouts = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 12, h: 3 },
      { i: 'b', x: 1, y: 0, w: 12, h: 2 },
      { i: 'c', x: 4, y: 0, w: 12, h: 1 },
    ],
  };

  return (
    <ResponsiveGridLayout
      isResizable
      isDraggable
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 120, sm: 6, xs: 4, xxs: 2 }}
      style={{ flex: 1 }}
      layouts={layouts}
    >
      <GridItem key="a">
        <DateHistogram />
      </GridItem>
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
