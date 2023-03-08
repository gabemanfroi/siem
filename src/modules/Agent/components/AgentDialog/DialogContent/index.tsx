import { DialogContent, Tab } from '@mui/material';
import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import GeneralData from 'modules/Agent/components/AgentDialog/DialogContent/GeneralData';
import Events from 'modules/Agent/components/AgentDialog/DialogContent/Events';
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
          <Tab label="Events" value="3" />
        </TabList>
        <TabPanel sx={{ flex: 1 }} value="1">
          <GeneralData />
        </TabPanel>
        <TabPanel sx={{ flex: 1 }} value="2">
          <Vulnerabilities />
        </TabPanel>
        <TabPanel sx={{ flex: 1 }} value="3">
          <Events />
        </TabPanel>
      </TabContext>
    </DialogContent>
  );
};

export default AgentDialogContent;
