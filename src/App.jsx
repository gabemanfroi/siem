import './sass/main.scss';
import { ThemeProvider } from '@mui/material';
import Router from './modules/Shared/components/Router';
import theme from './modules/Shared/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
