import { Dialog, DialogTitle } from '@mui/material';
import { useSCA } from 'modules/SCA/hooks';
import useSCAquery from 'modules/SCA/hooks/useSCAQuery';

const PolicyDialog = () => {
  const { isPolicyDialogOpen, setIsPolicyDialogOpen, setSelectedPolicy } =
    useSCA();

  const { getPolicyByIdData } = useSCAquery();

  const onClose = () => {
    setSelectedPolicy(null);
    setIsPolicyDialogOpen(false);
  };

  if (!getPolicyByIdData) return <></>;

  return (
    <Dialog maxWidth="lg" fullWidth open={isPolicyDialogOpen} onClose={onClose}>
      <DialogTitle>hi</DialogTitle>
    </Dialog>
  );
};

export default PolicyDialog;
