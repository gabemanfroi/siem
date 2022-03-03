import { Snackbar, Alert } from '@mui/material';
import { setErrorMessage } from 'modules/Shared/reducers/errorReducer';
import { useDispatch, useSelector } from 'react-redux';

function ErrorSnackbar() {
  const { errorMessage } = useSelector(({ error }) => error);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setErrorMessage(null));
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
}

export default ErrorSnackbar;
