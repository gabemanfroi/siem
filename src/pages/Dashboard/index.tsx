import { Container } from 'pages/Dashboard/style';
import LeftPanel from 'modules/Dashboard/components/LeftPanel';
import RightPanel from 'modules/Dashboard/components/RightPanel';
import { useEffect } from 'react';
import AgentModal from 'modules/Shared/components/Modal/AgentModal';
import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import TokenUtil from 'modules/Shared/util/TokenUtil';
import { useAppDispatch } from 'modules/Shared/hooks/useAppDispatch';
import { setDashboardData } from 'modules/Shared/reducers/dashboardReducer';
import { setIsLoading } from 'modules/Shared/reducers/loadingReducer';
import useWebSocket from 'react-use-websocket';

function Dashboard() {
  const { isAgentModalOpen } = useAppSelector(({ modal }) => modal);
  const { filter: filterToSend } = useAppSelector(({ filter }) => filter);
  const dashboardWsUrl = `${
    process.env.REACT_APP_WS_API_URL
  }/dashboard?token=${TokenUtil.getToken()}`;

  const { lastJsonMessage, sendJsonMessage, readyState } =
    useWebSocket(dashboardWsUrl);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (lastJsonMessage) {
      dispatch(setDashboardData(lastJsonMessage));
      dispatch(setIsLoading({ isLoading: false }));
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    sendJsonMessage(filterToSend);
  }, [filterToSend]);

  useEffect(() => {
    dispatch(setIsLoading({ isLoading: true }));
  }, [readyState]);

  return (
    <>
      {isAgentModalOpen && <AgentModal />}
      <Container>
        <LeftPanel />
        <RightPanel />
      </Container>
    </>
  );
}

export default Dashboard;
