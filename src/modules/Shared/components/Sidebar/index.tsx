import {
  MdDashboard,
  MdOutlineSecurity,
  MdPolicy,
  MdPowerSettingsNew,
  MdReportGmailerrorred,
  MdViewList,
} from 'react-icons/md';
import { Drawer, IconButton, List, useTheme } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import NavigationItem from './NavigationItem';

const sidebarDrawerStyle = {
  display: { xs: 'none', sm: 'block' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '8px',

    backgroundColor: 'primary.main',
    position: 'relative',
    textOverflow: 'ellipsis',
  },
};

export default function Sidebar() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer variant="persistent" sx={sidebarDrawerStyle} open>
      <List>
        <NavigationItem path="/" title="Dashboard">
          <MdDashboard size={30} color={theme.palette.text.primary} />
        </NavigationItem>
        <NavigationItem path="/vulnerabilidades" title="Vulnerabilidades">
          <MdPolicy size={30} color={theme.palette.text.primary} />
        </NavigationItem>
        <NavigationItem path="/mitre" title="Mitre ATT&CK">
          <MdReportGmailerrorred size={30} color={theme.palette.text.primary} />
        </NavigationItem>
        <NavigationItem
          path="/monitoramento-de-integridade"
          title="Integridade"
        >
          <MdOutlineSecurity size={30} color={theme.palette.text.primary} />
        </NavigationItem>
        <NavigationItem path="/eventos" title="Eventos">
          <MdViewList size={30} color={theme.palette.text.primary} />
        </NavigationItem>
      </List>
      <IconButton
        onClick={() => {
          if (process.env.REACT_APP_TOKEN_KEY_NAME) {
            localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY_NAME);
          }
          navigate('/login');
        }}
        sx={{ borderRadius: 0 }}
      >
        <MdPowerSettingsNew />
      </IconButton>
    </Drawer>
  );
}
