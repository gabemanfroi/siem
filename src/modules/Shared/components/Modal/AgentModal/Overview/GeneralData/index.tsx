import { AgentType } from 'modules/Shared/types/AgentType';
import {
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import {
  MdDevices,
  MdOutlineModeEditOutline,
  MdOutlinePersonOutline,
} from 'react-icons/md';
import { FaNetworkWired } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import React, { useState } from 'react';

interface GeneralDataPropsInterface {
  agent: AgentType;
  agentState: AgentType;
  setAgentState: React.Dispatch<React.SetStateAction<AgentType | null>>;
}

const GeneralData = ({
  agent,
  agentState,
  setAgentState,
}: GeneralDataPropsInterface) => {
  const theme = useTheme();

  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <Grid item container direction="column" xs={3} spacing={2}>
      <Grid item>
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
      <Grid item>
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
      <Grid item>
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
      <Grid item>
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
  );
};

export default GeneralData;
