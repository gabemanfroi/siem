import styled from 'styled-components';
import { textGray } from 'modules/Shared/stylesHelpers/colorVariables';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';

export const Container = styled(ColumnContainer)`
  h2 {
    color: ${textGray};
  }
`;
