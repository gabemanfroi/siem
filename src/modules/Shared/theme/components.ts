import { Components } from '@mui/material';

const components: Components = {
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      autoHideDuration: 5000,
    },
  },
};

export default components;
