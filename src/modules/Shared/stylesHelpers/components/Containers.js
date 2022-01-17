import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;

export const RowContainer = styled(Container)``;

export const ColumnContainer = styled(Container)`
  flex-direction: column;
`;
