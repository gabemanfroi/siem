import { Card, IconButton, Stack, Typography } from '@mui/material';
import { FaDesktop, FaServer } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';
import { AgentType } from 'modules/Shared/types';
import { dark100 } from 'modules/Shared/helpers/styles/Colors';
import { useAgent } from 'modules/Shared/contexts';
import { BsBoxArrowUpRight } from 'react-icons/bs';

type AgentItemProps = {
  agent: AgentType;
};

export default function AgentItem({ agent }: AgentItemProps) {
  const { setIsAgentModalOpen, setSelectedAgent } = useAgent();
  const agentIconMap = {
    server: <FaServer />,
    desktop: <FaDesktop />,
    laptop: <AiOutlineLaptop />,
  };
  return (
    <Card
      key={agent.generalData.id}
      sx={{
        display: 'flex',
        direction: 'row',
        backgroundColor: dark100,
        justifyContent: 'space-between',
        p: 0.5,
      }}
    >
      <Stack direction="row" alignItems="center" mx={1} spacing={1}>
        {
          agentIconMap[
            agent.generalData.deviceType as 'server' | 'desktop' | 'laptop'
          ]
        }
        <Typography>{agent.generalData.alias}</Typography>
      </Stack>
      <IconButton
        onClick={() => {
          setIsAgentModalOpen(true);
          setSelectedAgent(agent);
        }}
        role="button"
      >
        <BsBoxArrowUpRight cursor="pointer" size={12} />
      </IconButton>
    </Card>
  );
}
