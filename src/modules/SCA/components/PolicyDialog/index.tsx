import {
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { useSCA } from 'modules/SCA/hooks';
import useSCAquery from 'modules/SCA/hooks/useSCAQuery';
import { useAgent } from 'modules/Agent/hooks';
import Content from 'modules/SCA/components/PolicyDialog/Content';
import { MdClose } from 'react-icons/md';

const PolicyDialog = () => {
  const {
    isPolicyDialogOpen,
    setIsPolicyDialogOpen,
    setSelectedPolicy,
    selectedPolicy,
  } = useSCA();

  const { selectedAgent } = useAgent();

  const { getPolicyByIdData } = useSCAquery();

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
