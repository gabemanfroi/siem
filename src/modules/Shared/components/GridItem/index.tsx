import React from 'react';
import 'react-grid-layout/css/styles.css';
import { Container } from './style';

const GridItem: React.FC = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default GridItem;
