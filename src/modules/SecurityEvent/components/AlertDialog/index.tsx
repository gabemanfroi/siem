import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { Stack, Tab, Typography } from '@mui/material';
import useSecurityEventQuery from 'modules/SecurityEvent/hooks/queries/useSecurityEventQuery';
import React, { useEffect } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import GeneralData from 'modules/SecurityEvent/components/AlertDialog/GeneralData';
import Analysis from 'modules/SecurityEvent/components/AlertDialog/Analysis';
import { DefaultDialog } from 'modules/Shared/components';
import { useTranslation } from 'react-i18next';
import { IAlert } from 'modules/Shared/interfaces';
import { MdSearch } from 'react-icons/md';
import ButtonBase from '@mui/material/ButtonBase';
import AnalysisService from 'modules/Analysis/api/AnalysisService';

interface DialogTitleProps {
  alert: IAlert;
}

const DialogTitle = ({ alert: { event } }: DialogTitleProps) => {
  const onClick = async () => {
    await AnalysisService.analyzeByElasticsearchId(event.id);
  };

  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <Typography variant="h5">
        {event.agent.name} - {event.rule.description}
      </Typography>
      <ButtonBase onClick={onClick}>
        <Stack direction="row" alignItems="center" gap={1}>
          <MdSearch size={24} />
          <Typography variant="h5">Analisar</Typography>
        </Stack>
      </ButtonBase>
    </Stack>
  );
};

const AlertDialog = () => {
  const { t } = useTranslation();
  const [tab, setTab] = React.useState('1');
  const {
    selectedAlertId,
    setSelectedAlertId,
    setSelectedAlert,
    selectedAlert,
  } = useSecurityEventContext();

  const { findByElasticsearchIdEvent } = useSecurityEventQuery();

  useEffect(() => {
    if (findByElasticsearchIdEvent) {
      setSelectedAlert(findByElasticsearchIdEvent);
    }
  }, [findByElasticsearchIdEvent]);

  const handleClose = () => {
    setSelectedAlertId(null);
    setSelectedAlert(null);
  };

  if (!findByElasticsearchIdEvent && !selectedAlert) return <></>;

  return (
    <DefaultDialog
      open={!!selectedAlertId || selectedAlert !== null}
      onClose={handleClose}
      title={
        <DialogTitle alert={(findByElasticsearchIdEvent || selectedAlert)!} />
      }
    >
      <TabContext value={tab}>
        <TabList
          onChange={(e, v) => {
            setTab(v);
          }}
        >
          <Tab label={t('Event')} value="1" />
          <Tab label={t('Analysis')} value="2" />
        </TabList>
        <TabPanel value="1">
          <GeneralData
            event={findByElasticsearchIdEvent?.event || selectedAlert?.event!}
          />
        </TabPanel>
        <TabPanel sx={{ flex: 1 }} value="2">
          <Analysis />
        </TabPanel>
      </TabContext>
    </DefaultDialog>
  );
};

export default AlertDialog;
