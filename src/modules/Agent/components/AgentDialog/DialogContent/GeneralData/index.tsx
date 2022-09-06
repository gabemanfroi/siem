import { Grid } from '@mui/material';
import Overview from 'modules/Agent/components/AgentDialog/Overview';
import PoliciesTable from 'modules/Agent/components/AgentDialog/PoliciesTable';
import React from 'react';

const GeneralData = () => (
  <Grid container>
    <Grid item xs={3}>
      <Overview />
    </Grid>
    <Grid item xs={9} sx={{ padding: '0 8px' }}>
      <PoliciesTable />
    </Grid>
  </Grid>
);

export default GeneralData;
