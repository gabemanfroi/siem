import { Stack, TextField } from '@mui/material';
import React from 'react';
import { useAgentContext } from 'modules/Agent/hooks';
import { LoadingHandler } from 'modules/Shared/components';

const Overview = () => {
  const { setSelectedAgent, selectedAgent, isAgentEditMode } =
    useAgentContext();

  if (!selectedAgent) return <></>;

  return (
    <Stack gap={1}>
      <LoadingHandler sx={{ width: '100%', height: 40 }}>
        <TextField
          size="small"
          disabled={!isAgentEditMode}
          defaultValue={selectedAgent.generalData.name}
          value={selectedAgent.generalData.name}
          onChange={(e) =>
            setSelectedAgent({
              ...selectedAgent,
              generalData: {
                ...selectedAgent?.generalData,
                name: e.target.value,
              },
            })
          }
        />
      </LoadingHandler>
      <LoadingHandler sx={{ width: '100%', height: 40 }}>
        <TextField
          size="small"
          disabled
          defaultValue={selectedAgent.generalData.elasticsearchName}
          value={selectedAgent.generalData.elasticsearchName}
        />
      </LoadingHandler>
      <LoadingHandler sx={{ width: '100%', height: 40 }}>
        <TextField
          placeholder="IP"
          size="small"
          disabled
          defaultValue={selectedAgent.generalData.ip}
          value={selectedAgent.generalData.ip}
        />
      </LoadingHandler>
      <LoadingHandler sx={{ width: '100%', height: 40 }}>
        <TextField
          placeholder="Device Type"
          size="small"
          disabled
          defaultValue={selectedAgent.generalData.deviceType}
          value={selectedAgent.generalData.deviceType}
        />
      </LoadingHandler>
    </Stack>
  );
};

export default Overview;
