import { Paper, styled } from '@mui/material';

export const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 8px;
  overflow-y: scroll;
  gap: 8px;

  & > :last-child {
    flex: 1;
  }

  .drag-icon {
    &:hover {
      cursor: grab;
    }
  }

  .close-icon {
    cursor: pointer;
  }
`;
