import styled from 'styled-components';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';
import { white } from 'modules/Shared/stylesHelpers/colorVariables';

export const Container = styled(ColumnContainer)`
  h1 {
    color: ${white};
  }
`;
