import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import React, { useEffect } from 'react';

import { useAgent } from 'modules/Agent/hooks';
import { useAgentQuery } from 'modules/Agent/hooks/queries';

export default function AgentModal() {
  const {
    isAgentModalOpen,
    setIsAgentModalOpen,
    setSelectedAgent,
    selectedAgentId,
  } = useAgent();

  const { findByElasticsearchIdAgent } = useAgentQuery({
    elasticsearchId: selectedAgentId!,
  });

  useEffect(() => {
    if (findByElasticsearchIdAgent) {
      setSelectedAgent(findByElasticsearchIdAgent);
    }
  }, [findByElasticsearchIdAgent]);

  const handleClose = () => {
    setIsAgentModalOpen(false);
    setSelectedAgent(null);
  };

  if (!isAgentModalOpen || !findByElasticsearchIdAgent) return <></>;

  return (
    <Dialog
      open={isAgentModalOpen}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle>
        {findByElasticsearchIdAgent.generalData.elasticsearchName} -{' '}
        {findByElasticsearchIdAgent.generalData.ip}
      </DialogTitle>
      <DialogContent>
        <Grid container gap={1}>
          <Grid item xs={3}>
            <Stack gap={1}>
              <TextField
                disabled
                defaultValue={findByElasticsearchIdAgent.generalData.name}
                value={findByElasticsearchIdAgent.generalData.name}
              />
              <TextField
                disabled
                defaultValue={
                  findByElasticsearchIdAgent.generalData.elasticsearchName
                }
                value={findByElasticsearchIdAgent.generalData.elasticsearchName}
              />
              <TextField
                disabled
                defaultValue={findByElasticsearchIdAgent.generalData.ip}
                value={findByElasticsearchIdAgent.generalData.ip}
              />
              <TextField
                disabled
                defaultValue={findByElasticsearchIdAgent.generalData.deviceType}
                value={findByElasticsearchIdAgent.generalData.deviceType}
              />
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack>oi</Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
