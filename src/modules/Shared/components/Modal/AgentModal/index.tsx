import { Box, Modal, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';

import { setIsAgentModalOpen } from 'modules/Shared/reducers/modalReducer';
import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import { useAppDispatch } from 'modules/Shared/hooks/useAppDispatch';
import TokenUtil from 'modules/Shared/util/TokenUtil';
import { AgentType } from 'modules/Shared/types/AgentType';

import Overview from './Overview';
import Events from './Events';
import { AgentModalCard } from './style';

export default function AgentModal() {
  const { filter: filterToSend } = useAppSelector(({ filter }) => filter);
  const { selectedAgent } = useAppSelector(({ agent }) => agent);
  const { isAgentModalOpen } = useAppSelector(({ modal }) => modal);
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState('1');
  const [modalAgent, setModalAgent] = useState<AgentType | null>(selectedAgent);

  const handleClose = () => {
    dispatch(setIsAgentModalOpen(false));
  };

  const handleChange = (event: React.SyntheticEvent, newVal: string) => {
    setSelectedTab(newVal);
  };

  useEffect(() => {
    const ws = new WebSocket(
      `${process.env.REACT_APP_AGENT_URL!}?agent_id=${
        selectedAgent?.generalData.id
      }&token=${TokenUtil.getToken()}`
    );

    ws.addEventListener('open', () => {
      ws.send(JSON.stringify(filterToSend));
    });

    ws.addEventListener('message', (e) => {
      if (JSON.stringify(JSON.parse(e.data)) !== JSON.stringify(modalAgent)) {
        // TODO: Check out why modal agent is being reset
        setModalAgent(JSON.parse(e.data));
      }
    });

    return () => {
      ws.close();
    };
  }, []);

  if (!modalAgent) return <></>;

  return (
    <Modal
      open={isAgentModalOpen}
      onClose={handleClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <AgentModalCard>
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
          <TabPanel sx={{ flex: 1 }} value="1">
            <Overview agent={modalAgent} />
          </TabPanel>
          <TabPanel value="2">
            <Events agent={modalAgent} />
          </TabPanel>
        </TabContext>
      </AgentModalCard>
    </Modal>
  );
}
