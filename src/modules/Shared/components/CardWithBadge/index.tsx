import React from 'react';
import { dark100, dark50 } from 'modules/Shared/helpers/styles/Colors';
import { Box, Stack, Typography } from '@mui/material';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const CardWithBadge: React.FC<Props> = ({ children, title }) => (
  <Stack
    direction="column"
    paddingTop={4}
    paddingBottom={1}
    sx={{
      background: dark100,
      position: 'relative',
      borderRadius: 2,
      border: `1px solid ${dark50}}`,
    }}
  >
    <Box
      component="span"
      sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: -12,
        width: '100%',
        padding: '0 16px',
        zIndex: 5,
      }}
    >
      <Typography
        component="span"
        width="100%"
        sx={{
          borderRadius: 999,
          display: 'block',
          background: dark100,
          border: `1px solid ${dark50}}`,
        }}
        textAlign="center"
        paddingX="16px"
      >
        {title}
      </Typography>
    </Box>
    <Box p={2}>{children}</Box>
  </Stack>
);
