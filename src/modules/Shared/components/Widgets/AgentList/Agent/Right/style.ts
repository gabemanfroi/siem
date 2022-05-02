import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';
import styled from 'styled-components';
import { gray300 } from 'modules/Shared/helpers/styles/Colors';

export const Container = styled(ColumnContainer)`
  flex: 0 0 20%;
  justify-content: flex-start;

  .total-events {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .wrapper {
      color: ${gray300};
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: start;

      span {
        font-size: 18px;
      }
    }
`;