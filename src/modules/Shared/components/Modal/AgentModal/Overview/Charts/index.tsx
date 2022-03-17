import { AgentType } from 'modules/Shared/types';
import { Grid, Paper } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import React from 'react';
import { ApexOptions } from 'apexcharts';

interface ChartsPropsInterface {
  agent: AgentType;
}

const Charts = ({ agent }: ChartsPropsInterface) => {
  const radialBarOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            formatter(val: number): string {
              return `${val.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}%`;
            },
          },
        },
        hollow: {
          size: '60%',
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Confiabilidade'],
  };

  const donutChartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'donut',
    },
    labels: ['Baixa', 'Média', 'Alta'],
    legend: {
      position: 'bottom',
    },
    title: {
      text: 'Eventos Por Criticidade',
      align: 'center',
      style: {
        color: 'black',
      },
    },
  };
  return (
    <Grid item container direction="column" xs={9} spacing={2}>
      <Grid item container xs={6}>
        <Grid item container xs={4}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
            }}
            elevation={5}
          >
            <ReactApexChart
              options={radialBarOptions}
              series={[agent.trustLevel]}
              type="radialBar"
            />
          </Paper>
        </Grid>
        <Grid item container xs={4}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
            }}
            elevation={5}
          >
            <ReactApexChart
              options={donutChartOptions}
              series={[
                agent.eventsByLevel.low,
                agent.eventsByLevel.medium,
                agent.eventsByLevel.high,
              ]}
              type="donut"
            />
          </Paper>
        </Grid>
        <Grid item container xs={4}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
            }}
            elevation={5}
          >
            <ReactApexChart
              options={donutChartOptions}
              series={[
                agent.eventsByLevel.low,
                agent.eventsByLevel.medium,
                agent.eventsByLevel.high,
              ]}
              type="donut"
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item container xs={6}>
        <Grid item container xs={4}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
            }}
            elevation={5}
          >
            <ReactApexChart
              options={radialBarOptions}
              series={[agent.trustLevel]}
              type="radialBar"
            />
          </Paper>
        </Grid>
        <Grid item container xs={4}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
            }}
            elevation={5}
          >
            <ReactApexChart
              options={donutChartOptions}
              series={[
                agent.eventsByLevel.low,
                agent.eventsByLevel.medium,
                agent.eventsByLevel.high,
              ]}
              type="donut"
            />
          </Paper>
        </Grid>
        <Grid item container xs={4}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
            }}
            elevation={5}
          >
            <ReactApexChart
              options={donutChartOptions}
              series={[
                agent.eventsByLevel.low,
                agent.eventsByLevel.medium,
                agent.eventsByLevel.high,
              ]}
              type="donut"
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Charts;
