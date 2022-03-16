import styled from 'styled-components';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';
import { dark100 } from 'modules/Shared/stylesHelpers/colorVariables';

export const Container = styled(ColumnContainer)`
  background: ${dark100};
  border-radius: 3px;
`;
