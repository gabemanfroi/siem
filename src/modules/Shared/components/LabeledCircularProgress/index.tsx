import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface LabeledCircularProgressInterface {
  size: number;
  thickness: number;
  value: number;
  children: React.ReactNode;
}

export default function LabeledCircularProgress({
  size = 150,
  thickness = 2.5,
  value = 50,
  children,
}: LabeledCircularProgressInterface) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignSelf: 'center',
      }}
    >
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.grey[800],
        }}
        size={size}
        thickness={thickness}
        value={100}
      />
      <CircularProgress
        color="secondary"
        value={value}
        variant="determinate"
        sx={{
          position: 'absolute',
        }}
        thickness={thickness}
        size={size}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
