import React, { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  SxProps,
} from '@mui/material';
import { MdClose } from 'react-icons/md';
import { Theme } from '@mui/system';

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: ReactNode;
  sx?: SxProps<Theme>;
}

const DefaultDialog = ({ open, onClose, children, title, ...rest }: Props) => (
  <Dialog
    PaperProps={{
      sx: {
        height: '95vh',
      },
    }}
    open={open}
    onClose={onClose}
    maxWidth="xl"
    fullWidth
    {...rest}
  >
    <DialogTitle textTransform="uppercase">
      {title}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <MdClose />
      </IconButton>
    </DialogTitle>
    <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
      {children}
    </DialogContent>
  </Dialog>
);

export default DefaultDialog;
