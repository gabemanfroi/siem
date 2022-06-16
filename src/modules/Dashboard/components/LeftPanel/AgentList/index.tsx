import { Card, CardHeader, Stack, Typography } from '@mui/material';
import { dark50 } from 'modules/Shared/helpers/styles/Colors';
import { createAgentListMock } from 'modules/Shared/helpers/factories/mocks/AgentMock';
import AgentItem from './components/AgentItem';

const agentDataMock = createAgentListMock(5);
export default function AgentList() {
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
        {agentDataMock.map((agent) => (
          <AgentItem key={agent.generalData.id} agent={agent} />
        ))}
      </Stack>
    </Card>
  );
}
