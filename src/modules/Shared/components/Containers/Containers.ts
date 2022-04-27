import styled from 'styled-components';
import { dark200 } from 'modules/Shared/helpers/styles/Colors';

const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;

export const RowContainer = styled(Container)``;

export const ColumnContainer = styled(Container)`
  flex-direction: column;
`;

export const DefaultPageContainer = styled(ColumnContainer)`
  background: ${dark200};
  overflow-y: scroll;
  padding: 32px;
`;
