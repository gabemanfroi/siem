import React from 'react';
import { useAgentQuery } from 'modules/Agent/hooks/queries';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { IVulnerability } from 'modules/Vulnerability/interfaces';
import { LoadingHandler } from 'modules/Shared/components';

const columns: GridColumns<IVulnerability> = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'severity', headerName: 'Severity', flex: 1 },
  { field: 'condition', headerName: 'Condition', flex: 1 },
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'cve', headerName: 'CVE', flex: 1 },
  { field: 'detectionTime', headerName: 'Detection Time', flex: 1 },
];

const Vulnerabilities = () => {
  const { getAgentVulnerabilitiesData, getAgentVulnerabilitiesIsLoading } =
    useAgentQuery();

  return (
    <LoadingHandler
      loading={getAgentVulnerabilitiesIsLoading}
      sx={{ width: '100%', height: '100%' }}
    >
      <Box sx={{ flex: 1 }} height="100%">
        <DataGrid
          autoPageSize
          columns={columns}
          rows={getAgentVulnerabilitiesData}
          getRowId={(row) => `${row.name}-${row.detectionTime}`}
          sx={{
            '& .MuiDataGrid-row': { cursor: 'pointer' },
          }}
        />
      </Box>
    </LoadingHandler>
  );
};

export default Vulnerabilities;
