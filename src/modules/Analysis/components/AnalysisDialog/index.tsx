import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material';
import { useAnalysisContext } from 'modules/Analysis/hooks';
import Rule from 'modules/SecurityEvent/components/EventDialog/Rule';
import React from 'react';
import Analysis from 'modules/Analysis/components/AnalysisDialog/Analysis';

const AnalysisDialog = () => {
  const { isAnalysisDialogOpen, setIsAnalysisDialogOpen, selectedAnalysis } =
    useAnalysisContext();

  const onClose = () => {
    setIsAnalysisDialogOpen(false);
  };

  if (!selectedAnalysis) return <></>;

  return (
    <Dialog
      maxWidth="xl"
      open={isAnalysisDialogOpen}
      onClose={onClose}
      fullWidth
    >
      <DialogTitle textTransform="uppercase">
        {selectedAnalysis.analysis.observable}
      </DialogTitle>
      <DialogContent>
        <Stack gap={2}>
          <Rule event={selectedAnalysis.event} />
          <Analysis selectedAnalysis={selectedAnalysis} />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AnalysisDialog;
