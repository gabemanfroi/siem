import styled from 'styled-components';
import { dark400 } from 'modules/Shared/stylesHelpers/colorVariables';
import { RowContainer } from 'modules/Shared/stylesHelpers/components/Containers';

export const Container = styled(RowContainer)`
  flex: 0 0 20%;
  background: ${dark400};
  align-items: center;

  .left {
    flex: 0 0 20%;
    display: flex;
    justify-content: center;
    padding: 8px;

    svg {
      width: 75%;
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    flex: 0 0 60%;
    gap: 4px;

    .header {
      .group-name,
      .device-name {
        display: flex;
        align-items: end;
        gap: 8px;
      }

      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .metrics {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  .right {
  }
`;
