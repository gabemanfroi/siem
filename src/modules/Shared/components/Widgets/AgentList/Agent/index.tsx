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

  return (
    <Grid container>
      <AgentTrustLevel trustLevel={trustLevel} />
      <Middle ip={ip} name={name} eventsByLevel={eventsByLevel} />
      <Right agent={agent} />
    </Grid>
  );
}
