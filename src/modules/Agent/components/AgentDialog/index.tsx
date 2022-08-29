import { Dialog } from '@mui/material';
import React, { useEffect } from 'react';

import { useAgent } from 'modules/Agent/hooks';
import { useAgentQuery } from 'modules/Agent/hooks/queries';
import AgentDialogTitle from 'modules/Agent/components/AgentDialog/DialogTitle';
import AgentDialogContent from 'modules/Agent/components/AgentDialog/DialogContent';

export default function AgentDialog() {
  const {
    isAgentModalOpen,
    setIsAgentModalOpen,
    setSelectedAgent,
    selectedAgentId,
  } = useAgent();

  const { findByElasticsearchIdAgent } = useAgentQuery({
    elasticsearchId: selectedAgentId!,
  });
  const handleClose = () => {
    setSelectedAgent(null);
    setIsAgentModalOpen(false);
  };

  useEffect(() => {
    if (findByElasticsearchIdAgent) {
      setSelectedAgent(findByElasticsearchIdAgent);
    }
  }, [findByElasticsearchIdAgent]);

  return (
    <Dialog
      open={isAgentModalOpen}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
    >
      <AgentDialogTitle onClose={handleClose} />
      <AgentDialogContent />
    </Dialog>
  );
}
