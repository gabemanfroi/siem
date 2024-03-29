import React from 'react';
import { Stack } from '@mui/material';
import { useAnalysisContext } from 'modules/Analysis/hooks';
import Report from 'modules/Analysis/components/ReportDialog/Report';
import { DefaultDialog } from 'modules/Shared/components';

const AnalysisDialog = () => {
  const {
    setSelectedReport,
    selectedReport,
    setIsReportDialogOpen,
    isReportDialogOpen,
  } = useAnalysisContext();

  const onClose = () => {
    setSelectedReport(null);
    setIsReportDialogOpen(false);
  };

  if (!selectedReport) return null;

  return (
    <DefaultDialog
      open={isReportDialogOpen}
      onClose={onClose}
      title={selectedReport.observable}
    >
      <Stack gap={2}>
        <Report />
      </Stack>
    </DefaultDialog>
  );
};

export default AnalysisDialog;
