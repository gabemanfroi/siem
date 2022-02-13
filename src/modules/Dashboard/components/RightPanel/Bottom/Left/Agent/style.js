import styled from 'styled-components';
import { dark400 } from 'modules/Shared/stylesHelpers/colorVariables';
import { RowContainer } from 'modules/Shared/stylesHelpers/components/Containers';

export const Container = styled(RowContainer)`
  flex: 0 0 20%;
  background: ${dark400};
  align-items: center;
}
`;
