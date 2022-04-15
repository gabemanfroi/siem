import 'react-circular-progressbar/dist/styles.css';
import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import ReactApexChart from 'react-apexcharts';
import React from 'react';
import { ApexOptions } from 'apexcharts';
import { Paper } from '@mui/material';
import { Container } from './style';

export function OverallSecurity() {
  const {
    overall: { trustLevel },
  } = useAppSelector(({ dashboard }) => dashboard);
  const radialBarOptions: ApexOptions = {
    chart: {
      height: 800,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        track: {
          background: '#cc4455',
        },
        dataLabels: {
          name: {
            color: '#fff',
          },
          value: {
            color: '#fff',
            formatter(val: number): string {
              return `${val.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}%`;
            },
          },
        },
        hollow: {
          size: '70%',
        },
      },
    },
    grid: {},
    labels: ['Confiabilidade'],
  };

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
