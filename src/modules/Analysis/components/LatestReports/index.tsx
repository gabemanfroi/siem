import { Stack } from '@mui/material';
import React from 'react';
import { useAnalysisContext } from 'modules/Analysis/hooks';
import ListItem from 'modules/Shared/components/ListItem';

const LatestReports = () => {
  const { setIsReportDialogOpen, setSelectedReport, setSelectedReportId } =
    useAnalysisContext();
  const { latestReports: reports } = useAnalysisContext();

  return (
    <Stack spacing={1}>
      {reports.map((e) => (
        <ListItem
          key={e.jobId}
          onClick={() => {
            setSelectedReport(e);
            setSelectedReportId(e.jobId);
            setIsReportDialogOpen(true);
          }}
        >
          {e.observable}
        </ListItem>
      ))}
    </Stack>
  );
};

export default LatestReports;
