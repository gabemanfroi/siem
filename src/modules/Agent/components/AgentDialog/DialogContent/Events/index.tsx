import React from 'react';
import { IEvent } from 'modules/Shared/interfaces';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useSecurityEventQuery from 'modules/SecurityEvent/hooks/queries/useSecurityEventQuery';
import { LoadingHandler } from 'modules/Shared/components';
import { Stack } from '@mui/material';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';

const columns: GridColDef<IEvent>[] = [
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
    valueGetter: ({ row }) => row.rule.description,
  },
  {
    field: 'level',
    headerName: 'Level',
    valueGetter: ({ row }) => row.rule.level,
  },
  {
    field: 'firedtimes',
    headerName: 'Fired Times',
    flex: 1,
    valueGetter: ({ row }) => row.rule.firedtimes,
  },
];

const Events = () => {
  const { eventsBelongingToAgent, eventsBelongingToAgentIsLoading } =
    useSecurityEventQuery();

  const { setSelectedAlertId, setIsAlertDialogOpen } =
    useSecurityEventContext();

  return (
    <LoadingHandler loading={eventsBelongingToAgentIsLoading}>
      <Stack height="100%">
        <DataGrid
          autoPageSize
          sx={{
            '& .MuiDataGrid-row': { cursor: 'pointer' },
          }}
          onRowClick={({ row }) => {
            setSelectedAlertId(row.id);
            setIsAlertDialogOpen(true);
          }}
          columns={columns}
          rows={eventsBelongingToAgent!}
          getRowId={(r) => r.id}
        />
      </Stack>
    </LoadingHandler>
  );
};

export default Events;
