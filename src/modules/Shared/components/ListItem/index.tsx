import React, { ReactNode } from 'react';
import { Container } from 'modules/Shared/components/ListItem/style';

interface Props {
  onClick?: () => void;
  children: ReactNode;
}

const ListItem = ({ onClick, children }: Props) => (
  <Container p={1} onClick={onClick}>
    {children}
  </Container>
);

export default ListItem;
