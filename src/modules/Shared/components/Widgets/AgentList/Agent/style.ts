import styled from 'styled-components';
import { dark400 } from 'modules/Shared/helpers/styles/Colors';
import { RowContainer } from 'modules/Shared/components/Containers/Containers';

export const Container = styled(RowContainer)`
  flex: 1;
  background: ${dark400};
  align-items: center;
}
`;
