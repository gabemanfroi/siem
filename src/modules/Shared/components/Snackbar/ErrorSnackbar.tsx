import { Snackbar, Alert } from '@mui/material';
import { setErrorMessage } from 'modules/Shared/reducers/errorReducer';
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const ErrorSnackbar = () => {
  const { errorMessage } = useAppSelector(({ error }) => error);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setErrorMessage({ errorMessage: null }));
  };

  return (
    <>
      {!!errorMessage && (
        <Snackbar open onClose={handleClose}>
          <Alert
            variant="filled"
            onClose={handleClose}
            severity="error"
            sx={{ width: '100%' }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default ErrorSnackbar;
