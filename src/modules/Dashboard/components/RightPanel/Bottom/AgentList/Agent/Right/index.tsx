import { IconButton } from '@mui/material';
import { MdMoreHoriz } from 'react-icons/md';

import { setSelectedAgent } from 'modules/Shared/reducers/agentReducer';
import { setIsAgentModalOpen } from 'modules/Shared/reducers/modalReducer';

import { AgentType } from 'modules/Shared/types/AgentType';
import { Container } from './style';
import { useAppDispatch } from '../../../../../../../Shared/hooks/useAppDispatch';

interface RightProps {
  totalOfEvents: number;
  agent: AgentType;
}

export default function Right({ agent, totalOfEvents }: RightProps) {
  const dispatch = useAppDispatch();
  const onButtonClick = () => {
    dispatch(setSelectedAgent({ selectedAgent: agent }));
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
