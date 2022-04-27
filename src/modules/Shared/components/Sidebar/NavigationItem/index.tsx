import { ListItem, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const navigationItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
};

interface NavigationItemPropsInterface {
  path: string;
  title: string;
}

const NavigationItem: React.FC<NavigationItemPropsInterface> = ({
  path,
  title,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <ListItem button onClick={() => navigate(path)} sx={navigationItemStyle}>
      <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </ListItemIcon>
      <Typography sx={{ overflow: 'hidden', fontSize: '12px' }}>
        {title}
      </Typography>
    </ListItem>
  );
};

export default NavigationItem;
