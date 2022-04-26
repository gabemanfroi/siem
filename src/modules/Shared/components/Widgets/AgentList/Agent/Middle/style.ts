import { ColumnContainer } from 'modules/Shared/components/Containers/Containers';
import styled from 'styled-components';

export const Container = styled(ColumnContainer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
  justify-content: center;

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
  }
`;
