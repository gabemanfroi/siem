import { ButtonGroup, DialogTitle, IconButton } from '@mui/material';
import { MdCheck, MdClose, MdEdit } from 'react-icons/md';
import React from 'react';
import { useAgent } from 'modules/Agent/hooks';

interface AgentDialogTitleProps {
  onClose: () => void;
}

const AgentDialogTitle = ({ onClose }: AgentDialogTitleProps) => {
  const {
    isAgentModalOpen,
    selectedAgent,
    isAgentEditMode,
    setIsAgentEditMode,
  } = useAgent();

  if (!isAgentModalOpen || !selectedAgent) return <></>;

  return (
    <DialogTitle
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {selectedAgent.generalData.name} - {selectedAgent.generalData.ip}
      <ButtonGroup>
        {!isAgentEditMode && (
          <IconButton
            onClick={() => {
              setIsAgentEditMode(true);
            }}
          >
            <MdEdit />
          </IconButton>
        )}
        {isAgentEditMode && (
          <IconButton
            onClick={() => {
              setIsAgentEditMode(false);
            }}
          >
            <MdCheck />
          </IconButton>
        )}
        <IconButton onClick={onClose}>
          <MdClose />
        </IconButton>
      </ButtonGroup>
    </DialogTitle>
  );
};

export default AgentDialogTitle;
