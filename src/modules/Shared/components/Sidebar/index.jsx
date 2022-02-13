import { MdDashboard } from 'react-icons/md';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { drawerWidth } from '../../stylesHelpers/constants';

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          backgroundColor: 'primary.main',
        },
      }}
      open
    >
      <List>
        <ListItem
          button
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <MdDashboard size={30} color={theme.palette.text.primary} />
          </ListItemIcon>
          <Typography>Dashboard</Typography>
        </ListItem>
        <ListItem
          button
          onClick={() => navigate('/central-de-eventos')}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <MdDashboard size={30} color={theme.palette.text.primary} />
          </ListItemIcon>
          <Typography>Dashboard</Typography>
        </ListItem>
        <ListItem
          button
          onClick={() => navigate('/central-de-agentes')}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <MdDashboard size={30} color={theme.palette.text.primary} />
          </ListItemIcon>
          <Typography>Dashboard</Typography>
        </ListItem>
      </List>
    </Drawer>
  );
}
