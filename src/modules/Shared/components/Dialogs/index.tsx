import AgentDialog from 'modules/Agent/components/AgentDialog';
import EventDialog from 'modules/SecurityEvent/components/EventDialog';
import PolicyDialog from 'modules/SCA/components/PolicyDialog';
import AnalysisDialog from 'modules/Analysis/components/AnalysisDialog';
import { useAnalysisContext } from 'modules/Analysis/hooks';
import { useAgentContext } from 'modules/Agent/hooks';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { useSCAContext } from 'modules/SCA/hooks';

const useDialogs = () => {
  const { isAgentDialogOpen } = useAgentContext();
  const { isEventDialogOpen } = useSecurityEventContext();
  const { isPolicyDialogOpen } = useSCAContext();
  const { isAnalysisDialogOpen } = useAnalysisContext();
  return {
    isAgentDialogOpen,
    isEventDialogOpen,
    isPolicyDialogOpen,
    isAnalysisDialogOpen,
  };
};

const Dialogs = () => {
  const {
    isAgentDialogOpen,
    isEventDialogOpen,
    isPolicyDialogOpen,
    isAnalysisDialogOpen,
  } = useDialogs();

  return (
    <>
      {isAgentDialogOpen && <AgentDialog />}
      {isEventDialogOpen && <EventDialog />}
      {isPolicyDialogOpen && <PolicyDialog />}
      {isAnalysisDialogOpen && <AnalysisDialog />}
    </>
  );
};

export default Dialogs;
