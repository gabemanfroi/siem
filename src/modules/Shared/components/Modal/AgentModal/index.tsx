import { Box, Modal, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import useWebSocket from 'react-use-websocket';
import { setIsAgentModalOpen } from 'modules/Shared/reducers/modalReducer';
import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import { useAppDispatch } from 'modules/Shared/hooks/useAppDispatch';
import TokenUtil from 'modules/Shared/util/TokenUtil';
import Overview from './Overview';
import Events from './Events';
import { AgentType } from '../../../types/AgentType';

export default function AgentModal() {
  const { filter: filterToSend } = useAppSelector(({ filter }) => filter);
  const { selectedAgent } = useAppSelector(({ agent }) => agent);
  const { isAgentModalOpen } = useAppSelector(({ modal }) => modal);
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState('1');
  const [modalAgent, setModalAgent] = useState<AgentType | null>(selectedAgent);

  useEffect(() => {
    console.log(selectedAgent);
  }, [selectedAgent]);

  const handleClose = () => {
    dispatch(setIsAgentModalOpen(false));
  };

  const handleChange = (event: React.SyntheticEvent, newVal: string) => {
    setSelectedTab(newVal);
  };

  const { lastJsonMessage, sendJsonMessage } = useWebSocket(
    `${process.env.REACT_APP_AGENT_URL!}?agent_id=${
      selectedAgent?.generalData.id
    }&token=${TokenUtil.getToken()}`
  );

  useEffect(() => {
    if (lastJsonMessage) setModalAgent(lastJsonMessage);
  }, [lastJsonMessage]);

  useEffect(() => {
    sendJsonMessage(filterToSend);
  }, [filterToSend]);

  if (!modalAgent) return <></>;

  return (
    <Modal
      open={isAgentModalOpen}
      onClose={handleClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box
        sx={{
          height: '80vh',
          width: '80vw',
          background: '#ffffff33',
          padding: '1.5rem',
          borderRadius: '5px',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography color="#c3c3c3" variant="h2" sx={{ textAlign: 'center' }}>
          {`${modalAgent.generalData.name.toUpperCase()} - `}
          {modalAgent.generalData.ip || ''}
        </Typography>
        <TabContext value={selectedTab}>
          <Box>
            <Tabs onChange={handleChange} value={selectedTab}>
              <Tab label="Informações Gerais" value="1" />
              <Tab label="Eventos" value="2" />
            </Tabs>
          </Box>
          <TabPanel value="1">
            <Overview agent={modalAgent} />
          </TabPanel>
          <TabPanel value="2">
            <Events />
          </TabPanel>
        </TabContext>
      </Box>
    </Modal>
  );
}
