import { DialogContent, Tab } from '@mui/material';
import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Summary from 'modules/Agent/components/AgentDialog/DialogContent/Summary';
import Events from 'modules/Agent/components/AgentDialog/DialogContent/Events';
import SCA from 'modules/Agent/components/AgentDialog/DialogContent/SCA';
import Vulnerabilities from './Vulnerabilities';

const AgentDialogContent = () => {
  const [tab, setTab] = useState('1');
  return (
    <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
      <TabContext value={tab}>
        <TabList
          onChange={(e, v) => {
            setTab(v);
          }}
        >
          <Tab label="General Data" value="1" />
          <Tab label="Vulnerabilities" value="2" />
          <Tab label="Security Events" value="3" />
          <Tab label="SCA" value="4" />
        </TabList>
        <TabPanel sx={{ flex: 1 }} value="1">
          <Summary setTab={setTab} />
        </TabPanel>
        <TabPanel sx={{ flex: 1 }} value="2">
          <Vulnerabilities />
        </TabPanel>
        <TabPanel sx={{ flex: 1 }} value="3">
          <Events />
        </TabPanel>
        <TabPanel sx={{ flex: 1 }} value="4">
          <SCA />
        </TabPanel>
      </TabContext>
    </DialogContent>
  );
};

export default AgentDialogContent;
