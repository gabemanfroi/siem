import { Card, CardHeader, Stack, Typography } from '@mui/material';
import { dark50 } from 'modules/Shared/helpers/styles/Colors';
import { useAgent, useLoading } from 'modules/Shared/contexts';
import AgentItem from './components/AgentItem';

export default function AgentList() {
  const { agents } = useAgent()
  const { isLoading } = useLoading()

  if (isLoading) return <></>

  return (
    <Card
      sx={{
        flex: '0 0 25%',
        overflowY: 'scroll',
      }}
    >
      <CardHeader
        title={<Typography>Agentes</Typography>}
        sx={{ p: 1, backgroundColor: dark50 }}
      />
      <Stack
        my={1}
        mx={1}
        sx={{
          overflowY: 'scroll',
        }}
        spacing={1}
      >
        {agents.map((agent) => (
          <AgentItem key={agent.generalData.id} agent={agent} />
        ))}
      </Stack>
    </Card>
  );
}
