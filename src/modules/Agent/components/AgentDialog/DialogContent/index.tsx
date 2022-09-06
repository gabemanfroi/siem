import { DialogContent, Tab } from '@mui/material';
import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import GeneralData from 'modules/Agent/components/AgentDialog/DialogContent/GeneralData';

const AgentDialogContent = () => {
  const [tab, setTab] = useState('1');
  return (
    <DialogContent>
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
        <TabPanel value="1">
          <GeneralData />
        </TabPanel>
        <TabPanel value="2" />
      </TabContext>
    </DialogContent>
  );
};

export default AgentDialogContent;
