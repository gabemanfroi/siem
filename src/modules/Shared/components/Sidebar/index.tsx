import { MdDashboard, MdOutlineSecurity, MdPolicy, MdReportGmailerrorred, MdViewList } from 'react-icons/md';
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
    </Drawer>
  );
}
