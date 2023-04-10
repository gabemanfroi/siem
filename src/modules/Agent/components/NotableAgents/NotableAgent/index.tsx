import {
  dark200,
  gray300,
  primary700,
  white,
} from 'modules/Shared/helpers/styles/Colors';
import { Stack, Typography } from '@mui/material';
import { INotableAgent } from 'modules/Agent/interfaces/INotableAgents';
import { useAgentContext } from 'modules/Agent/hooks';

interface NotableAgentProps {
  agent: INotableAgent;
}

const NotableAgent = ({ agent }: NotableAgentProps) => {
  const { setSelectedAgentId, setIsAgentDialogOpen } = useAgentContext();

  return (
    <Stack
      onClick={() => {
        setSelectedAgentId(agent.elasticsearchId);
        setIsAgentDialogOpen(true);
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        p: 1,
        px: 3,
        borderRadius: 2,
        background: white,
        color: dark200,
        '&:hover': {
          cursor: 'pointer',
          background: primary700,
          color: 'white',
          transition: 'color ease 0.1s,background ease 0.2s',
          border: 'none',
        },
      }}
    >
      <Stack alignItems="start">
        <Typography fontSize={18}>{agent.name}</Typography>
        <Typography fontSize={14}>{agent.elasticsearchName}</Typography>
      </Stack>
      <Stack px={2} sx={{ background: gray300, borderRadius: 2 }}>
        {agent.total}
      </Stack>
    </Stack>
  );
};

export default NotableAgent;
