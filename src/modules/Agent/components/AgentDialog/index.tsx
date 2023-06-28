import { Box, Dialog, Typography } from '@mui/material';
import React from 'react';

import { useAgentContext } from 'modules/Agent/hooks';

export default function AgentDialog() {
  const { isAgentDialogOpen, setIsAgentDialogOpen, setSelectedAgent } =
    useAgentContext();

  const handleClose = () => {
    setSelectedAgent(null);
    setIsAgentDialogOpen(false);
  };

  return (
    <Dialog
      PaperProps={{
        sx: {
          height: '95vh',
          margin: '0 5vh',
        },
      }}
      open={isAgentDialogOpen}
      onClose={handleClose}
      fullScreen
      fullWidth
    >
      {/* <AgentDialogTitle onClose={handleClose} />
      <AgentDialogContent /> */}
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" textTransform="uppercase">
          Coming soon...
        </Typography>
      </Box>
    </Dialog>
  );
}
