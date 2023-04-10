import { Dialog } from '@mui/material';
import React from 'react';

import { useAgentContext } from 'modules/Agent/hooks';
import AgentDialogTitle from 'modules/Agent/components/AgentDialog/DialogTitle';
import AgentDialogContent from 'modules/Agent/components/AgentDialog/DialogContent';

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
          height: '90vh',
        },
      }}
      open={isAgentDialogOpen}
      onClose={handleClose}
      maxWidth="xl"
      fullWidth
    >
      <AgentDialogTitle onClose={handleClose} />
      <AgentDialogContent />
    </Dialog>
  );
}
