import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';

import { useAgent } from 'modules/Shared/contexts';
import { AiOutlineClose } from 'react-icons/ai';
import Overview from './Overview';
import Events from './Events';
import { AgentModalCard, StyledModal } from './style';

export default function AgentModal() {
  const [selectedTab, setSelectedTab] = useState('1');
  const {
    selectedAgent,
    isAgentModalOpen,
    setIsAgentModalOpen,
    setSelectedAgent,
  } = useAgent();

  const handleChange = (event: React.SyntheticEvent, newVal: string) => {
    setSelectedTab(newVal);
  };

  const handleClose = () => {
    setIsAgentModalOpen(false);
    setSelectedAgent(null);
  };

  if (!isAgentModalOpen || !selectedAgent) return <></>;

  return (
    <StyledModal open={isAgentModalOpen} onClose={handleClose}>
      <AgentModalCard>
        <Stack>
          <Box
            sx={{
              justifyContent: 'end',
              display: 'flex',
            }}
          >
            <AiOutlineClose size={24} cursor="pointer" onClick={handleClose} />
          </Box>
          <Typography color="#c3c3c3" variant="h2" sx={{ textAlign: 'center' }}>
            {`${selectedAgent.generalData.name.toUpperCase()} - `}
            {selectedAgent.generalData.ip}
          </Typography>
        </Stack>
        <TabContext value={selectedTab}>
          <Box>
            <Tabs onChange={handleChange} value={selectedTab}>
              <Tab label="Informações Gerais" value="1" />
              <Tab label="Eventos" value="2" />
            </Tabs>
          </Box>
          <TabPanel sx={{ flex: 1 }} value="1">
            <Overview />
          </TabPanel>
          <TabPanel value="2">
            <Events />
          </TabPanel>
        </TabContext>
      </AgentModalCard>
    </StyledModal>
  );
}
