import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';
import styled from 'styled-components';
import { gray300 } from 'modules/Shared/stylesHelpers/colorVariables';

export const Container = styled(ColumnContainer)`
  flex: 1;
  height: 100%;
  justify-content: flex-start;

  .total-events {
    flex: 1;
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
        margin-left: 8px;
      }
    }
`;
