import 'react-circular-progressbar/dist/styles.css';
import ReactApexChart from 'react-apexcharts';
import React from 'react';
import { Paper } from '@mui/material';
import { RadialBarOptionsFactory } from 'modules/Shared/helpers/factories/chartsOptions';
import { Container } from './style';

export function OverallSecurity() {
  const radialBarOptions = RadialBarOptionsFactory({
    labels: ['Confiabilidade'],
  });
  const trustLevel = 50;
  return (
    <>
      <Container>
        <Paper sx={{ flex: 0 }}>
          <ReactApexChart
            options={radialBarOptions}
            series={[trustLevel]}
            type="radialBar"
          />
        </Paper>
      </Container>
    </>
  );
}
