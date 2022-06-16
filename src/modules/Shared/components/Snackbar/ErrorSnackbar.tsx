import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const ErrorSnackbar = () => {
  const errorMessage = '';

  return (
    <>
      {!!errorMessage && (
        <Snackbar open>
          <Alert variant="filled" severity="error" sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default ErrorSnackbar;
