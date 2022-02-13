import { Container } from 'pages/Dashboard/style';
import LeftPanel from 'modules/Dashboard/components/LeftPanel';
import RightPanel from 'modules/Dashboard/components/RightPanel';
import AgentModal from '../../modules/Shared/components/Modal/AgentModal';

function Dashboard() {
  return (
    <>
      <AgentModal />
      <Container>
        <LeftPanel />
        <RightPanel />
      </Container>
    </>
  );
}

export default Dashboard;
