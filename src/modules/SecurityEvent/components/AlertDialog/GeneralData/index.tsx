import Rule from 'modules/SecurityEvent/components/AlertDialog/Rule';
import Mitre from 'modules/SecurityEvent/components/AlertDialog/Mitre';
import Windows from 'modules/SecurityEvent/components/AlertDialog/Windows';
import Vulnerability from 'modules/SecurityEvent/components/AlertDialog/Vulnerability';
import Agent from 'modules/SecurityEvent/components/AlertDialog/Agent';
import { Stack } from '@mui/material';
import React from 'react';
import { IEvent } from 'modules/Shared/interfaces';

interface Props {
  event: IEvent;
}

const GeneralData = ({ event }: Props) => (
  <Stack gap={2}>
    <Agent agent={event.agent} />
    <Rule event={event} />
    <Mitre event={event} />
    <Windows event={event} />
    <Vulnerability event={event} />
  </Stack>
);

export default GeneralData;
