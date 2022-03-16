import { ThemeProvider } from '@mui/material';
import ErrorSnackbar from 'modules/Shared/components/Snackbar/ErrorSnackbar';
import Router from 'modules/Shared/components/Router';
import theme from 'modules/Shared/theme';
import './sass/main.scss';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <ErrorSnackbar />
    </ThemeProvider>
  );
}
