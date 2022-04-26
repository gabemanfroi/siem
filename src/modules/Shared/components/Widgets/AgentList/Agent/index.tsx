import { AgentType } from 'modules/Shared/types/AgentType';
import { Grid } from '@mui/material';
import AgentTrustLevel from './AgentTrust';
import Middle from './Middle';
import Right from './Right';

interface AgentInterface {
  agent: AgentType;
}

export default function Agent({ agent }: AgentInterface) {
  const {
    trustLevel,
    generalData: { ip = '', name },
    eventsByLevel,
  } = agent;

  const totalOfEvents = Object.keys(eventsByLevel).reduce(
    (prevValue, key) =>
      prevValue + eventsByLevel[key as 'low' | 'medium' | 'high'],
    0
  );

  return (
    <Grid container>
      <AgentTrustLevel trustLevel={trustLevel} />
      <Middle ip={ip} name={name} eventsByLevel={eventsByLevel} />
      <Right totalOfEvents={totalOfEvents} agent={agent} />
    </Grid>
  );
}
