import React from 'react';
import { useSCAContext } from 'modules/SCA/hooks';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { IPolicy } from 'modules/SCA/interfaces';
import { LoadingHandler } from 'modules/Shared/components';
import { Stack, Typography } from '@mui/material';
import { useAgentPoliciesQuery } from 'modules/SCA/hooks/queries/useAgentPoliciesQuery';

const columns: GridColDef<IPolicy>[] = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 1 },
  { field: 'score', headerName: 'Score', flex: 1 },
  { field: 'fail', headerName: 'Fail', flex: 1 },
  { field: 'pass', headerName: 'Pass', flex: 1 },
];

const Policies = () => {
  const { setSelectedPolicy, setIsPolicyDialogOpen } = useSCAContext();

  const { getAgentPoliciesData, getAgentPoliciesIsLoading } =
    useAgentPoliciesQuery();

  const onRowClick = (params: GridRowParams) => {
    setSelectedPolicy(params.row as IPolicy);
    setIsPolicyDialogOpen(true);
  };

  return (
    <LoadingHandler loading={getAgentPoliciesIsLoading}>
      <Stack gap={2} height="100%">
        <Typography variant="h5" textTransform="uppercase">
          Policies
        </Typography>
        <DataGrid
          autoPageSize
          columns={columns}
          rows={getAgentPoliciesData}
          getRowId={(row) => row.policyId}
          onRowClick={onRowClick}
          sx={{
            '& .MuiDataGrid-row': { cursor: 'pointer' },
          }}
        />
      </Stack>
    </LoadingHandler>
  );
};

export default Policies;
