import {
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import {
  MdDevices,
  MdOutlineModeEditOutline,
  MdOutlinePersonOutline,
} from 'react-icons/md';
import { FaNetworkWired } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AgentType } from 'modules/Shared/types/AgentType';

interface OverviewProps {
  agent: AgentType;
}

const Overview = ({ agent }: OverviewProps) => {
  const [agentState, setAgentState] = useState<AgentType>(agent);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    setAgentState(agent);
  }, [agent]);

  const theme = useTheme();
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
          size: '70%',
        },
      },
    },
    labels: ['Trust Level'],
  };

  const donutChartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'donut',
    },
    labels: ['Low', 'Medium', 'High'],
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

  if (!agent) return <></>;

  return (
    <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Grid sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
        <Grid item xs={3}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px',
              justifyContent: 'space-between',
            }}
          >
            <>
              <MdDevices size={32} color={theme.palette.text.disabled} />
              {editMode && (
                <TextField
                  size="small"
                  value={agentState.generalData.alias}
                  onKeyPress={(e) => {
                    if (e.code === 'Enter') {
                      setEditMode(!editMode);
                    }
                  }}
                  onChange={(e) =>
                    setAgentState({
                      ...agent,
                      generalData: {
                        ...agentState.generalData,
                        alias: e.target.value,
                      },
                    })
                  }
                />
              )}
              {!editMode && (
                <Typography
                  align="left"
                  color={theme.palette.text.disabled}
                  variant="h5"
                >
                  {agentState.generalData.alias}
                </Typography>
              )}
            </>
            <IconButton
              sx={{ padding: 0 }}
              onClick={() => setEditMode(!editMode)}
            >
              <MdOutlineModeEditOutline
                size={32}
                color={theme.palette.text.disabled}
              />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px',
            }}
          >
            <FaNetworkWired size={32} color={theme.palette.text.disabled} />
            <Typography color={theme.palette.text.disabled} variant="h5">
              {agent.generalData.ip}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px',
            }}
          >
            <MdOutlinePersonOutline
              size={32}
              color={theme.palette.text.disabled}
            />
            <Typography color={theme.palette.text.disabled} variant="h5">
              Responsável
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              background: '#c3c3c3',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px',
            }}
          >
            <HiOutlineUserGroup size={32} color={theme.palette.text.disabled} />
            <Typography color={theme.palette.text.disabled} variant="h5">
              Grupo
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'space-around',
          flex: 1,
        }}
      >
        <Grid item xs={3}>
          <Paper sx={{ background: '#c3c3c3' }} elevation={5}>
            <ReactApexChart
              options={radialBarOptions}
              series={[agent.trustLevel]}
              type="radialBar"
            />
          </Paper>
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex' }}>
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
    </Box>
  );
};

export default Overview;
