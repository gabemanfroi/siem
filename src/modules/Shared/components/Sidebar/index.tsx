import { MdDashboard, MdDevices } from 'react-icons/md';
import { BiRadar } from 'react-icons/bi';
import { FiTarget } from 'react-icons/fi';
import { FaClipboardList } from 'react-icons/fa';
import { Drawer, List, useTheme } from '@mui/material';

import NavigationItem from './NavigationItem';

const sidebarDrawerStyle = {
  display: { xs: 'none', sm: 'block' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',

    backgroundColor: 'primary.main',
    position: 'relative',
    textOverflow: 'ellipsis',
  },
};

export default function Sidebar() {
  const theme = useTheme();
  return (
    <Drawer variant="persistent" sx={sidebarDrawerStyle} open>
      <List>
        <NavigationItem path="/" title="Dashboard">
          <MdDashboard size={30} color={theme.palette.text.primary} />
        </NavigationItem>
        <NavigationItem path="/central-de-eventos" title="Eventos">
          <BiRadar size={30} color={theme.palette.text.primary} />
        </NavigationItem>
        <NavigationItem path="/central-de-agentes" title="Agentes">
          <MdDevices size={30} color={theme.palette.text.primary} />
        </NavigationItem>
        <NavigationItem path="/vulnerabilidades" title="Vulnerabilidades">
          <FiTarget size={30} color={theme.palette.text.primary} />
        </NavigationItem>
        <NavigationItem path="/mitre" title="Mitre ATT&CK">
          <FaClipboardList size={30} color={theme.palette.text.primary} />
        </NavigationItem>
      </List>
    </Drawer>
  );
}
