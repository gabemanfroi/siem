import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import {
  CriticalityDateHistogram,
  PackagesByCVE,
} from 'modules/Shared/components/Widgets/';
import MostCommonCVE from '../../../../Shared/components/Widgets/Vulnerability/MostCommonCVE';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WidgetsGrid = () => {
  const layouts = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 6, h: 2 },
      { i: 'b', x: 6, y: 0, w: 6, h: 2 },
      { i: 'c', x: 0, y: 3, w: 6, h: 2 },
      { i: 'd', x: 6, y: 3, w: 6, h: 2 },
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
        <CriticalityDateHistogram />
      </GridItem>
      <GridItem key="b">
        <MostCommonCVE />
      </GridItem>
      <GridItem key="c">
        <PackagesByCVE />
      </GridItem>
      <GridItem key="d">
        <PackagesByCVE />
      </GridItem>
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
