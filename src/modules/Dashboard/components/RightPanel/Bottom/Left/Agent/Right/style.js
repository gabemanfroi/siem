import { ColumnContainer } from 'modules/Shared/stylesHelpers/components/Containers';
import styled from 'styled-components';
import { textGray } from 'modules/Shared/stylesHelpers/colorVariables';

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
      color: ${textGray};
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
