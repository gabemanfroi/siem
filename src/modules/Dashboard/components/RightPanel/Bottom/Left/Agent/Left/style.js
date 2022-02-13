import styled from 'styled-components';
import { RowContainer } from 'modules/Shared/stylesHelpers/components/Containers';

export const Container = styled(RowContainer)`
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  padding: 8px;

  svg {
    width: 75%;
  }
`;
