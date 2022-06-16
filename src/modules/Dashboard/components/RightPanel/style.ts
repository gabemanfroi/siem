import styled from 'styled-components';
import { dark500 } from 'modules/Shared/helpers/styles/Colors';
import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';

export const Container = styled(ColumnContainer)`
  background: ${dark500};
  overflow-y: scroll;
`;
