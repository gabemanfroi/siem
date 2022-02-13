import { Box, Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAgentModalOpen } from '../../../reducers/modalReducer';

export default function AgentModal() {
  const { selectedAgent } = useSelector(({ agent }) => agent);
  const { isAgentModalOpen } = useSelector(({ modal }) => modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setIsAgentModalOpen(false));
  };

  if (!selectedAgent) return <></>;

  return (
    <Modal
      open={isAgentModalOpen}
      onClose={handleClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box
        sx={{
          height: '80vh',
          width: '80vw',
          background: 'white',
        }}
      >
        {selectedAgent.name}
      </Box>
    </Modal>
  );
}
