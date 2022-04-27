import {
  AttacksByTechnique,
  DefaultPageContainer,
  TechniquesByAgent,
  GridItem,
} from 'modules/Shared/components';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Mitre = () => {
  const layouts = {
    lg: [
      { i: 'AttacksByTechnique', x: 0, y: 0, w: 6, h: 2 },
      { i: 'TechniquesByAgent', x: 6, y: 0, w: 6, h: 2 },
    ],
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
        <GridItem key="AttacksByTechnique">
          <AttacksByTechnique />
        </GridItem>
        <GridItem key="TechniquesByAgent">
          <TechniquesByAgent />
        </GridItem>
      </ResponsiveGridLayout>
    </DefaultPageContainer>
  );
};

export default Mitre;
