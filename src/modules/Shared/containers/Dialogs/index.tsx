import AgentDialog from 'modules/Agent/components/AgentDialog';
import AlertDialog from 'modules/SecurityEvent/components/AlertDialog';
import PolicyDialog from 'modules/SCA/components/PolicyDialog';
import AnalysisDialog from 'modules/Analysis/components/ReportDialog';
import { useAnalysisContext } from 'modules/Analysis/hooks';
import { useAgentContext } from 'modules/Agent/hooks';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { useSCAContext } from 'modules/SCA/hooks';

const useDialogs = () => {
  const { isAgentDialogOpen } = useAgentContext();
  const { isAlertDialogOpen } = useSecurityEventContext();
  const { isPolicyDialogOpen } = useSCAContext();
  const { isReportDialogOpen } = useAnalysisContext();
  return {
    isAgentDialogOpen,
    isAlertDialogOpen,
    isPolicyDialogOpen,
    isReportDialogOpen,
  };
};

const Dialogs = () => {
  const {
    isAgentDialogOpen,
    isAlertDialogOpen,
    isPolicyDialogOpen,
    isReportDialogOpen,
  } = useDialogs();

  return (
    <>
      {isAgentDialogOpen && <AgentDialog />}
      {isAlertDialogOpen && <AlertDialog />}
      {isPolicyDialogOpen && <PolicyDialog />}
      {isReportDialogOpen && <AnalysisDialog />}
    </>
  );
};

export default Dialogs;
