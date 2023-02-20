import {
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { useSCAContext, useSCAQuery } from 'modules/SCA/hooks';
import { useAgentContext } from 'modules/Agent/hooks';
import Content from 'modules/SCA/components/PolicyDialog/Content';
import { MdClose } from 'react-icons/md';

const PolicyDialog = () => {
  const {
    isPolicyDialogOpen,
    setIsPolicyDialogOpen,
    setSelectedPolicy,
    selectedPolicy,
  } = useSCAContext();

  const { selectedAgent } = useAgentContext();

  const { getPolicyByIdData } = useSCAQuery();

  const onClose = () => {
    setSelectedPolicy(null);
    setIsPolicyDialogOpen(false);
  };

  if (!getPolicyByIdData) return <></>;

  return (
    <Dialog maxWidth="xl" fullWidth open={isPolicyDialogOpen} onClose={onClose}>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {selectedAgent?.generalData.name} - {selectedPolicy?.name}
        <ButtonGroup>
          <IconButton onClick={onClose}>
            <MdClose />
          </IconButton>
        </ButtonGroup>
      </DialogTitle>
      <DialogContent>
        <Content policies={getPolicyByIdData} />
      </DialogContent>
    </Dialog>
  );
};

export default PolicyDialog;
