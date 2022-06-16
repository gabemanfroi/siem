import styled from 'styled-components';
import { RowContainer } from 'modules/Shared/components/Containers/Containers';

export const Container = styled(RowContainer)`
  flex: 1;

  & > * {
    flex: 1;
  }
`;
