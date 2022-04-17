import 'react-circular-progressbar/dist/styles.css';
import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import ReactApexChart from 'react-apexcharts';
import React from 'react';
import { ApexOptions } from 'apexcharts';
import { Paper } from '@mui/material';
import { defaultRadialBarOptions } from 'modules/Shared/config/ChartsOptions';
import { Container } from './style';

export function OverallSecurity() {
  const {
    overall: { trustLevel },
  } = useAppSelector(({ dashboard }) => dashboard);
  const radialBarOptions: ApexOptions = {
    ...defaultRadialBarOptions,
    chart: { ...defaultRadialBarOptions.chart, height: 800 },
  };

  return (
    <>
      <Container>
        <Paper sx={{ flex: 0 }}>
          <ReactApexChart
            options={radialBarOptions}
            series={[trustLevel]}
            type='radialBar'
          />
        </Paper>
      </Container>
    </>
  );
}
