import { Stack } from '@mui/material';
import React from 'react';
import { useAnalysisContext } from 'modules/Analysis/hooks';
import ListItem from 'modules/Shared/components/ListItem';
import { LoadingHandler } from 'modules/Shared/components';
import { useLatestReportsQuery } from 'modules/Analysis/hooks/queries/useLatestReportsQuery';

const LatestReports = () => {
  const { setIsReportDialogOpen, setSelectedReport, setSelectedReportId } =
    useAnalysisContext();
  const { latestReportsData, latestReportsLoading } = useLatestReportsQuery();

  return (
    <LoadingHandler loading={latestReportsLoading}>
      <Stack spacing={1}>
        {latestReportsData.map((e) => (
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
    </LoadingHandler>
  );
};

export default LatestReports;
