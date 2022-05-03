import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AgentType } from 'modules/Shared/types/AgentType';
import { useAgent } from 'modules/Shared/contexts';
import GeneralData from './GeneralData';
import Charts from './Charts';

const Overview = () => {
  const { selectedAgent } = useAgent();
  const [agentState, setAgentState] = useState<AgentType | null>(selectedAgent);

  useEffect(() => {
    if (selectedAgent) setAgentState(selectedAgent);
  }, [selectedAgent]);

  if (!agentState) return <></>;

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
