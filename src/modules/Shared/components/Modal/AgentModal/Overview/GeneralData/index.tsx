import { IAgent } from 'modules/Shared/interfaces';
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
  MdDone,
  MdOutlineModeEditOutline,
  MdOutlinePersonOutline,
} from 'react-icons/md';
import { FaNetworkWired } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import React, { useState } from 'react';
import { dark50 } from 'modules/Shared/helpers/styles/Colors';

interface GeneralDataPropsInterface {
  agent: IAgent;
  agentState: IAgent;
  setAgentState: React.Dispatch<React.SetStateAction<IAgent | null>>;
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
            background: dark50,
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            gap: '8px',
            justifyContent: 'space-between',
            minWidth: 200,
          }}
        >
          <>
            <MdDevices size={22} color={theme.palette.text.disabled} />
            {editMode && (
              <>
                <TextField
                  sx={{ fontSize: '16px' }}
                  size="small"
                  value={agentState.generalData.name}
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
                        name: e.target.value,
                      },
                    })
                  }
                />
                <IconButton
                  sx={{ padding: 0, width: 22, height: 22 }}
                  onClick={() => setEditMode(!editMode)}
                >
                  <MdDone size={22} color={theme.palette.text.disabled} />
                </IconButton>
              </>
            )}
            {!editMode && (
              <>
                <Typography
                  fontSize="18px"
                  align="left"
                  color={theme.palette.text.disabled}
                  variant="h5"
                >
                  {agentState.generalData.name}
                </Typography>
                <IconButton
                  sx={{ padding: 0, width: 22, height: 22 }}
                  onClick={() => setEditMode(!editMode)}
                >
                  <MdOutlineModeEditOutline
                    size={24}
                    color={theme.palette.text.disabled}
                  />
                </IconButton>
              </>
            )}
          </>
        </Paper>
      </Grid>
      <Grid item>
        <Paper
          sx={{
            background: dark50,
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            gap: 3,
            justifyContent: 'flex-start',
          }}
        >
          <FaNetworkWired size={22} color={theme.palette.text.disabled} />

          <Typography
            fontSize="16px"
            color={theme.palette.text.disabled}
            variant="h5"
          >
            {agent.generalData.ip}
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper
          sx={{
            background: dark50,
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            gap: 3,
            justifyContent: 'flex-start',
          }}
        >
          <MdOutlinePersonOutline
            size={22}
            color={theme.palette.text.disabled}
          />
          <Typography
            sx={{ fontSize: '18px' }}
            color={theme.palette.text.disabled}
            variant="h5"
          >
            Responsável
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper
          sx={{
            background: dark50,
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            gap: 3,
            justifyContent: 'flex-start',
          }}
        >
          <HiOutlineUserGroup size={22} color={theme.palette.text.disabled} />
          <Typography
            fontSize={18}
            color={theme.palette.text.disabled}
            variant="h5"
          >
            Grupo
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GeneralData;
