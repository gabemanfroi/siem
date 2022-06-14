import styled from 'styled-components';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';
import { white } from 'modules/Shared/helpers/styles/Colors';

export const Container = styled(ColumnContainer)`
  flex: 0 0 20%;

  h1 {
    color: ${white};
  }
`;
