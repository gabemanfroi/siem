import { Grid } from '@mui/material';
import Overview from 'modules/Agent/components/AgentDialog/DialogContent/Summary/Overview';
import React, { Dispatch, SetStateAction } from 'react';
import SCASummary from 'modules/SCA/components/SCASummary';
import { dark100, dark50 } from 'modules/Shared/helpers/styles/Colors';

const Summary = ({ setTab }: { setTab: Dispatch<SetStateAction<string>> }) => (
  <Grid container direction="column" gap={4} height="100%">
    <Grid
      item
      p={1}
      container
      xs={1}
      sx={{
        background: dark100,
        borderRadius: 2,
        border: `1px solid ${dark50}}`,
      }}
      direction="row"
      alignContent="center"
    >
      <Overview />
    </Grid>
    <Grid item container xs={9} height="100%">
      <Grid item xs={4} height="50%">
        <SCASummary onClick={() => setTab('4')} />
      </Grid>
    </Grid>
  </Grid>
);

export default Summary;
