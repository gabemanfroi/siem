import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useAgentQuery } from 'modules/Agent/hooks/queries';
import { LoadingHandler } from 'modules/Shared/components';

const Overview = () => {
  const { findByElasticsearchIdAgent, findByElasticsearchIsLoading } =
    useAgentQuery();

  return (
    <Grid item container direction="row" gap={2}>
      <LoadingHandler loading={findByElasticsearchIsLoading}>
        <TextField
          InputProps={{ disableUnderline: true }}
          label="Name"
          variant="standard"
          size="small"
          disabled
          value={findByElasticsearchIdAgent?.name}
        />
        <TextField
          InputProps={{ disableUnderline: true }}
          label="Elasticsearch Name"
          size="small"
          variant="standard"
          disabled
          value={findByElasticsearchIdAgent?.name}
        />
        <TextField
          InputProps={{ disableUnderline: true }}
          label="IP Address"
          variant="standard"
          placeholder="IP"
          size="small"
          disabled
          value={findByElasticsearchIdAgent?.ip || 'N/A'}
        />
      </LoadingHandler>
    </Grid>
  );
};

export default Overview;
