import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DataGrid, GridColumns, GridRowParams } from '@mui/x-data-grid';
import i18n from 'modules/Shared/core/i18n';
import { Box } from '@mui/material';
import { ICortexReport } from 'modules/Shared/interfaces';
import { useAnalysisContext } from 'modules/Analysis/hooks';
import useAnalysisQuery from 'modules/Analysis/hooks/queries/useAnalysisQuery';
import { LoadingHandler } from 'modules/Shared/components';

const { t } = i18n;

const columns: GridColumns<ICortexReport> = [
  { field: 'observable', headerName: t('Observable'), flex: 1 },
  {
    field: 'level',
    headerName: 'Level',
    flex: 1,
    valueGetter: (params) => params.row.report.summary.level,
  },
  {
    field: 'namespace',
    headerName: 'Analyzer',
    flex: 1,
    valueGetter: (params) => params.row.report.summary.namespace,
  },
];

const Analysis = () => {
  const { setIsReportDialogOpen, setSelectedReportId } = useAnalysisContext();
  const { getReportsByEventIdLoading, getReportsByEventIdData } =
    useAnalysisQuery();

  const onRowClick = (params: GridRowParams<ICortexReport>) => {
    setSelectedReportId(params.row.jobId);
    setIsReportDialogOpen(true);
  };

  return (
    <LoadingHandler loading={getReportsByEventIdLoading}>
      <Box sx={{ height: '100%' }}>
        <DataGrid
          autoHeight
          columns={columns}
          rows={getReportsByEventIdData}
          getRowId={(row) => row.jobId}
          onRowClick={onRowClick}
          sx={{
            '& .MuiDataGrid-row': { cursor: 'pointer' },
          }}
        />
      </Box>
    </LoadingHandler>
  );
};

export default Analysis;
