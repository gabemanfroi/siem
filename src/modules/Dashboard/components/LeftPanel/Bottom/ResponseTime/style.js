import styled from 'styled-components';
import { RowContainer } from 'modules/Shared/stylesHelpers/components/Containers';
import { dark100 } from 'modules/Shared/stylesHelpers/colorVariables';

export const Container = styled(RowContainer)`
  background: ${dark100};
  border-radius: 3px;
`;
