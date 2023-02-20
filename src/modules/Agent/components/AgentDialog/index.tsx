import { Dialog } from '@mui/material';
import React, { useEffect } from 'react';

import { useAgentContext } from 'modules/Agent/hooks';
import { useAgentQuery } from 'modules/Agent/hooks/queries';
import AgentDialogTitle from 'modules/Agent/components/AgentDialog/DialogTitle';
import AgentDialogContent from 'modules/Agent/components/AgentDialog/DialogContent';

export default function AgentDialog() {
  const { isAgentDialogOpen, setIsAgentDialogOpen, setSelectedAgent } =
    useAgentContext();

  const { findByElasticsearchIdAgent } = useAgentQuery();
  const handleClose = () => {
    setSelectedAgent(null);
    setIsAgentDialogOpen(false);
  };

  useEffect(() => {
    if (findByElasticsearchIdAgent) {
      setSelectedAgent(findByElasticsearchIdAgent);
    }
  }, [findByElasticsearchIdAgent]);

  return (
    <Dialog
      open={isAgentDialogOpen}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
    >
      <AgentDialogTitle onClose={handleClose} />
      <AgentDialogContent />
    </Dialog>
  );
}
