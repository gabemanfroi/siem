import styled from 'styled-components';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';
import { textWhite } from 'modules/Shared/helpers/styles/Colors';

export const Container = styled(ColumnContainer)`
  overflow-y: scroll;

  h5 {
    color: ${textWhite};
  }
`;