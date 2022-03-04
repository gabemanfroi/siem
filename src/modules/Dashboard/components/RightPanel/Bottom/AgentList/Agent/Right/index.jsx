import { IconButton } from '@mui/material';
import { MdMoreHoriz } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { setSelectedAgent } from 'modules/Shared/reducers/agentReducer';
import { setIsAgentModalOpen } from 'modules/Shared/reducers/modalReducer';

import { Container } from './style';

export default function Right({ totalOfEvents, agent }) {
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(setSelectedAgent(agent));
    dispatch(setIsAgentModalOpen(true));
  };

  return (
    <Container>
      <IconButton
        sx={{
          padding: '0 8px',
          alignSelf: 'flexEnd',
          justifyContent: 'end',
        }}
        onClick={onButtonClick}
      >
        <MdMoreHoriz />
      </IconButton>
      <div className="total-events">
        <div className="wrapper">
          <span>Total:</span>
          <span style={{ fontSize: '26px', color: 'white' }}>
            {totalOfEvents}
          </span>
        </div>
      </div>
    </Container>
  );
}
