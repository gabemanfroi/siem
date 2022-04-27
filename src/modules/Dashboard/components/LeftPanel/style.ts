import styled from 'styled-components';
import { dark200 } from 'modules/Shared/helpers/styles/Colors';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';

export const Container = styled(ColumnContainer)`
  flex: 0 0 15%;
  padding: 32px 16px;
  background: ${dark200};

  > * {
    flex: 1;
  }
`;
