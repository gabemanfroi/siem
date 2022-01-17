import styled from 'styled-components';
import { textGray } from 'modules/Shared/stylesHelpers/colorVariables';
import { ColumnContainer } from 'modules/Shared/stylesHelpers/components/Containers';

export const Container = styled(ColumnContainer)`

  h2 {
    color: ${textGray};
  }

  svg {
    align-self: center;
    width: 60%;
  }
`;
