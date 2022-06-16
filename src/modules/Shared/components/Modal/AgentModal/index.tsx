import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';

import { useAgent } from 'modules/Shared/contexts';
import Overview from './Overview';
import Events from './Events';
import { AgentModalCard, StyledModal } from './style';

export default function AgentModal() {
  const [selectedTab, setSelectedTab] = useState('1');
  const { selectedAgent, isAgentModalOpen } = useAgent();

  const handleChange = (event: React.SyntheticEvent, newVal: string) => {
    setSelectedTab(newVal);
  };

  if (!isAgentModalOpen || !selectedAgent) return <></>;

  return (
    <StyledModal open={isAgentModalOpen}>
      <AgentModalCard>
        <Typography color="#c3c3c3" variant="h2" sx={{ textAlign: 'center' }}>
          {`${selectedAgent.generalData.name.toUpperCase()} - `}
          {selectedAgent.generalData.ip}
        </Typography>
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
