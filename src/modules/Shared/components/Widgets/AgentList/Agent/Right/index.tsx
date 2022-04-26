import { IconButton } from '@mui/material';
import { MdMoreHoriz } from 'react-icons/md';

import { AgentType } from 'modules/Shared/types/AgentType';
import { useAgent } from 'modules/Shared/contexts';
import { Container } from './style';

interface RightProps {
  totalOfEvents: number;
  agent: AgentType;
}

export default function Right({ agent, totalOfEvents }: RightProps) {
  const { setSelectedAgent, setIsAgentModalOpen } = useAgent();
  const onButtonClick = () => {
    setSelectedAgent(agent);
    setIsAgentModalOpen(true);
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
          <span>Total: {totalOfEvents}</span>
        </div>
      </div>
    </Container>
  );
}
