import { ReactNode } from 'react';
import 'react-grid-layout/css/styles.css';
import { Container } from './style';

interface GridItemInterface {
  children: ReactNode;
  key: string;
}

const GridItem = ({ key, children, ...props }: GridItemInterface) => (
  <Container key={key} {...props}>
    {children}
  </Container>
);

export default GridItem;
