import { Stack, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useAgentContext } from 'modules/Agent/hooks';
import { LoadingHandler } from 'modules/Shared/components';
import { useAgentQuery } from 'modules/Agent/hooks/queries';

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
    <Stack gap={1}>
      <LoadingHandler
        loading={findByElasticsearchIsLoading}
        sx={{ width: '100%', height: 40 }}
      >
        <TextField
          size="small"
          disabled={!isAgentEditMode}
          value={findByElasticsearchIdAgent?.generalData.name}
          onChange={(e) =>
            setSelectedAgent({
              ...selectedAgent,
              generalData: {
                ...selectedAgent!.generalData,
                name: e.target.value,
              },
            })
          }
        />
      </LoadingHandler>
      <LoadingHandler
        loading={findByElasticsearchIsLoading}
        sx={{ width: '100%', height: 40 }}
      >
        <TextField
          size="small"
          disabled
          value={findByElasticsearchIdAgent?.generalData.elasticsearchName}
        />
      </LoadingHandler>
      <LoadingHandler
        loading={findByElasticsearchIsLoading}
        sx={{ width: '100%', height: 40 }}
      >
        <TextField
          placeholder="IP"
          size="small"
          disabled
          value={findByElasticsearchIdAgent?.generalData.ip || 'N/A'}
        />
      </LoadingHandler>
      <LoadingHandler
        loading={findByElasticsearchIsLoading}
        sx={{ width: '100%', height: 40 }}
      >
        <TextField
          placeholder="Device Type"
          size="small"
          disabled
          value={findByElasticsearchIdAgent?.generalData.deviceType}
        />
      </LoadingHandler>
    </Stack>
  );
};

export default Overview;
