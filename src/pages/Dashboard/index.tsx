import { Container } from 'pages/Dashboard/style';
import RightPanel from 'modules/Dashboard/components/RightPanel';
import LeftPanel from '../../modules/Dashboard/components/LeftPanel';

function Dashboard() {
  return (
    <Container>
      <LeftPanel />
      <RightPanel />
    </Container>
  );
}

export default Dashboard;
