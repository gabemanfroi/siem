import {
  MdDashboard,
  MdDevices,
  MdPowerSettingsNew,
  MdViewList,
} from 'react-icons/md';
import { IconButton, List, SwipeableDrawer, useTheme } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useSidebar } from 'modules/Shared/hooks';
import NavigationItem from './NavigationItem';

export default function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <div>
      <SwipeableDrawer
        PaperProps={{
          sx: {
            transition: 'transform 0.2s',
            backgroundColor: 'primary.main',
            justifyContent: 'space-between',
          },
        }}
        anchor="left"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onOpen={() => {
          setIsOpen(true);
        }}
      >
        <List>
          <NavigationItem path="/" title="Dashboard">
            <MdDashboard size={30} color={theme.palette.text.primary} />
          </NavigationItem>
          <NavigationItem path="/agentes" title="Agentes">
            <MdDevices size={30} color={theme.palette.text.primary} />
          </NavigationItem>
          {/* <NavigationItem path="/mitre" title="Mitre ATT&CK">
            <MdReportGmailerrorred
              size={30}
              color={theme.palette.text.primary}
            />
          </NavigationItem> */}
          {/* <NavigationItem
            path="/monitoramento-de-integridade"
            title="Integridade"
          >
            <MdOutlineSecurity size={30} color={theme.palette.text.primary} />
          </NavigationItem> */}
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
      </SwipeableDrawer>
    </div>
  );
}
