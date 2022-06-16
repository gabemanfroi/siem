import { AgentType } from 'modules/Shared/types';
import { Grid, Paper } from '@mui/material';
import Chart from 'react-apexcharts';
import React from 'react';
import { ApexOptions } from 'apexcharts';
import {
  DonutChartOptionsFactory,
  RadialBarOptionsFactory,
} from 'modules/Shared/helpers/factories/chartsOptions';

interface ChartsPropsInterface {
  agent: AgentType;
}

const Charts = ({ agent }: ChartsPropsInterface) => {
  const radialBarOptions = RadialBarOptionsFactory();
  const donutChartOptions: ApexOptions = DonutChartOptionsFactory();

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
            <Chart
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
            <Chart
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
            <Chart
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
            <Chart
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
            <Chart
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
