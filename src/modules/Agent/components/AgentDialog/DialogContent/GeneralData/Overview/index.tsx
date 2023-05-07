import { Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useAgentContext } from 'modules/Agent/hooks';
import { useAgentQuery } from 'modules/Agent/hooks/queries';
import { LoadingHandler } from 'modules/Shared/components';

const Overview = () => {
  const { setSelectedAgent, selectedAgent, isAgentEditMode } =
    useAgentContext();

  const { findByElasticsearchIdAgent, findByElasticsearchIsLoading } =
    useAgentQuery();
  useEffect(() => {
    if (findByElasticsearchIdAgent) {
      setSelectedAgent(findByElasticsearchIdAgent);
    }
  }, [findByElasticsearchIdAgent]);

  return (
    <Grid item container direction="row" gap={2}>
      <LoadingHandler loading={findByElasticsearchIsLoading}>
        <TextField
          InputProps={{ disableUnderline: true }}
          label="Name"
          variant="standard"
          size="small"
          disabled={!isAgentEditMode}
          value={findByElasticsearchIdAgent?.generalData.name}
          onChange={(e: any) =>
            setSelectedAgent({
              ...selectedAgent,
              generalData: {
                ...selectedAgent!.generalData,
                name: e.target.value,
              },
            })
          }
        />
        <TextField
          InputProps={{ disableUnderline: true }}
          label="Elasticsearch Name"
          size="small"
          variant="standard"
          disabled
          value={findByElasticsearchIdAgent?.generalData.elasticsearchName}
        />
        <TextField
          InputProps={{ disableUnderline: true }}
          label="IP Address"
          variant="standard"
          placeholder="IP"
          size="small"
          disabled
          value={findByElasticsearchIdAgent?.generalData.ip || 'N/A'}
        />
        <TextField
          InputProps={{ disableUnderline: true }}
          label="Device Type"
          variant="standard"
          placeholder="Device Type"
          size="small"
          disabled
          value={findByElasticsearchIdAgent?.generalData.deviceType || 'N/A'}
        />
      </LoadingHandler>
    </Grid>
  );
};

export default Overview;
