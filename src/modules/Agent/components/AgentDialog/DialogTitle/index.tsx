import { ButtonGroup, DialogTitle, IconButton } from '@mui/material';
import { MdCheck, MdClose, MdEdit } from 'react-icons/md';
import React from 'react';
import { useAgentContext } from 'modules/Agent/hooks';
import { useAgentQuery } from 'modules/Agent/hooks/queries';
import { LoadingHandler } from 'modules/Shared/components';

interface AgentDialogTitleProps {
  onClose: () => void;
}

const AgentDialogTitle = ({ onClose }: AgentDialogTitleProps) => {
  const { isAgentEditMode, setIsAgentEditMode } = useAgentContext();

  const { findByElasticsearchIdAgent, findByElasticsearchIsLoading } =
    useAgentQuery();

  return (
    <DialogTitle
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <LoadingHandler loading={findByElasticsearchIsLoading}>
        {findByElasticsearchIdAgent?.name} - {findByElasticsearchIdAgent?.ip}
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
      </LoadingHandler>
    </DialogTitle>
  );
};

export default AgentDialogTitle;
