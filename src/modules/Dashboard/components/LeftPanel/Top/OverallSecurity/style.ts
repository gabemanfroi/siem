import styled from 'styled-components';
import { gray300 } from 'modules/Shared/helpers/styles/Colors';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';

export const Container = styled(ColumnContainer)`
  h2 {
    color: ${gray300};
  }
`;
