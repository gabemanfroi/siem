import { useSCAContext } from 'modules/SCA/hooks';
import { useAgentContext } from 'modules/Agent/hooks';
import Content from 'modules/SCA/components/PolicyDialog/Content';
import { DefaultDialog } from 'modules/Shared/components';

const PolicyDialog = () => {
  const {
    isPolicyDialogOpen,
    setIsPolicyDialogOpen,
    setSelectedPolicy,
    selectedPolicy,
  } = useSCAContext();

  const { selectedAgent } = useAgentContext();

  const onClose = () => {
    setSelectedPolicy(null);
    setIsPolicyDialogOpen(false);
  };

  return (
    <DefaultDialog
      title={`${selectedAgent?.generalData.name} - ${selectedPolicy?.name}`}
      open={isPolicyDialogOpen}
      onClose={onClose}
    >
      <Content />
    </DefaultDialog>
  );
};

export default PolicyDialog;
