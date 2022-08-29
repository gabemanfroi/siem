import { useAgent } from 'modules/Agent/hooks';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { useSCA } from 'modules/SCA/hooks';
import AgentDialog from 'modules/Agent/components/AgentDialog';
import EventDialog from 'modules/SecurityEvent/components/EventDialog';
import PolicyDialog from 'modules/SCA/components/PolicyDialog';

const Dialogs = () => {
  const { isAgentModalOpen } = useAgent();
  const { isEventModalOpen } = useSecurityEvent();
  const { isPolicyDialogOpen } = useSCA();
  return (
    <>
      {isAgentModalOpen && <AgentDialog />}
      {isEventModalOpen && <EventDialog />}
      {isPolicyDialogOpen && <PolicyDialog />}
    </>
  );
};

export default Dialogs;
