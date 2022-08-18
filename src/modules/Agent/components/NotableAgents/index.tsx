import { Stack } from '@mui/material';
import NotableAgent from 'modules/Agent/components/NotableAgents/NotableAgent';
import { useAgent } from 'modules/Agent/hooks';

export const NotableAgents = () => {
  const { notableAgents } = useAgent();

  if (!notableAgents) return <></>;

  return (
    <Stack spacing={1}>
      {notableAgents.map((a) => (
        <NotableAgent key={a.id} agent={a} />
      ))}
    </Stack>
  );
};
