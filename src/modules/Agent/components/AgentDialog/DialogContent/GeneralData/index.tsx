import { Grid } from '@mui/material';
import Overview from 'modules/Agent/components/AgentDialog/DialogContent/GeneralData/Overview';
import Policies from 'modules/Agent/components/AgentDialog/DialogContent/GeneralData/Policies';
import React from 'react';

const GeneralData = () => (
  <Grid container height="100%">
    <Grid item xs={3}>
      <Overview />
    </Grid>
    <Grid item xs={9} sx={{ padding: '0 8px' }}>
      <Policies />
    </Grid>
  </Grid>
);

export default GeneralData;
