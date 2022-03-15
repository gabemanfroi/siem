import styled from 'styled-components';
import { dark500 } from 'modules/Shared/stylesHelpers/colorVariables';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';

export const Container = styled(ColumnContainer)`
  gap: 16px;
  background: ${dark500};
  padding: 16px 32px;
`;
