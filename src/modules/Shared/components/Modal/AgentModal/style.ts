import { Card, Modal, styled } from '@mui/material';

export const AgentModalCard = styled(Card)`
  height: 80vh;
  width: 80vw;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
