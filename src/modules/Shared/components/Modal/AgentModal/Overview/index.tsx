import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AgentType } from 'modules/Shared/types/AgentType';
import GeneralData from './GeneralData';
import Charts from './Charts';

interface OverviewProps {
  agent: AgentType;
}

const Overview = ({ agent }: OverviewProps) => {
  const [agentState, setAgentState] = useState<AgentType>(agent);

  useEffect(() => {
    setAgentState(agent);
  }, [agent]);

  if (!agent) return <></>;

  return (
    <Grid container sx={{ height: '100%' }} spacing={2}>
      <GeneralData
        agentState={agentState}
        setAgentState={setAgentState}
        agent={agentState}
      />
      <Charts agent={agentState} />
    </Grid>
  );
};

export default Overview;
