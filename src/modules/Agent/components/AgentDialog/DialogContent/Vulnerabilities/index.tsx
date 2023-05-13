import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { IVulnerability } from 'modules/Vulnerability/interfaces';
import { LoadingHandler } from 'modules/Shared/components';
import { useVulnerabilityContext } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { useAgentVulnerabilitiesQuery } from 'modules/Vulnerability/hooks/queries/useAgentVulnerabilitiesQuery';
import { useAgentSeveritySummaryQuery } from 'modules/Vulnerability/hooks/queries/useAgentSeveritySummaryQuery';
import { SeveritySummary } from 'modules/Vulnerability/components/SeveritySummary';
import { dark100, dark300, dark50 } from 'modules/Shared/helpers/styles/Colors';
import { MdClose } from 'react-icons/md';
import ButtonBase from '@mui/material/ButtonBase';

const columns: GridColDef<IVulnerability>[] = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'severity', headerName: 'Severity', flex: 1 },
  { field: 'condition', headerName: 'Condition', flex: 1 },
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'cve', headerName: 'CVE', flex: 1 },
  { field: 'detectionTime', headerName: 'Detection Time', flex: 1 },
];

const Vulnerabilities = () => {
  const { vulnerabilitiesFilters, setVulnerabilitiesFilters } =
    useVulnerabilityContext();
  const { getAgentVulnerabilitiesData, getAgentVulnerabilitiesIsLoading } =
    useAgentVulnerabilitiesQuery();
  const { getAgentSeveritySummaryIsLoading, getAgentSeveritySummaryData } =
    useAgentSeveritySummaryQuery();
  const { setSelectedVulnerability, setIsVulnerabilityDialogOpen } =
    useVulnerabilityContext();

  return (
    <Grid
      container
      direction="column"
      height="100%"
      justifyContent="spaceBetween"
    >
      <Grid
        p={1}
        item
        container
        justifyContent="space-evenly"
        direction="row"
        flex={0}
        xs={2}
      >
        <Grid item xs={4}>
          <SeveritySummary
            severitySummaryData={getAgentSeveritySummaryData}
            severitySummaryIsLoading={getAgentSeveritySummaryIsLoading}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        p={2}
        xs={9}
        sx={{
          background: dark100,
          position: 'relative',
          borderRadius: 2,
          border: `1px solid ${dark50}}`,
        }}
      >
        <Grid item container direction="column" flex={1} gap={1}>
          <Grid item>
            <Typography variant="h2">Vulnerabilities</Typography>
          </Grid>
          {vulnerabilitiesFilters &&
            Object.keys(vulnerabilitiesFilters).length > 0 && (
              <Grid
                item
                container
                sx={{ background: dark50 }}
                borderRadius={1}
                p={0.5}
                gap={1}
              >
                {Object.entries(vulnerabilitiesFilters).map(([key, value]) => (
                  <Grid
                    item
                    sx={{ background: dark300 }}
                    borderRadius={1}
                    p={0.5}
                  >
                    <Stack alignItems="center" direction="row">
                      <Typography variant="subtitle2">
                        {key}={value}
                      </Typography>
                      <ButtonBase
                        onClick={() => {
                          // eslint-disable-next-line @typescript-eslint/no-unused-vars
                          const { severity, ...rest } = vulnerabilitiesFilters;
                          setVulnerabilitiesFilters(rest);
                        }}
                      >
                        <MdClose />
                      </ButtonBase>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            )}
          <Grid item flex={1}>
            <LoadingHandler loading={getAgentVulnerabilitiesIsLoading}>
              <Box sx={{ flex: 1 }} height="100%">
                <DataGrid
                  columnHeaderHeight={40}
                  rowHeight={30}
                  autoPageSize
                  columns={columns}
                  rows={getAgentVulnerabilitiesData}
                  getRowId={(row) => `${row.cve}`}
                  onRowClick={({ row }) => {
                    setSelectedVulnerability(row);
                    setIsVulnerabilityDialogOpen(true);
                  }}
                  sx={{
                    '& .MuiDataGrid-row': { cursor: 'pointer' },
                  }}
                />
              </Box>
            </LoadingHandler>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Vulnerabilities;
