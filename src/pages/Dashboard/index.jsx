import { Container } from 'pages/Dashboard/style';
import LeftPanel from 'modules/Dashboard/components/LeftPanel';
import RightPanel from 'modules/Dashboard/components/RightPanel';

function Dashboard() {
  return (
    <Container>
      <LeftPanel />
      <RightPanel />
    </Container>
  );
}

export default Dashboard;
