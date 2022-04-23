import { ThemeProvider } from '@mui/material';
import { ErrorSnackbar } from 'modules/Shared/components/';
import Router from 'modules/Shared/components/Router';
import theme from 'modules/Shared/theme';
import './sass/main.scss';
import { AgentProvider } from 'modules/Shared/contexts/AgentContext';
import { LoadingProvider } from 'modules/Shared/contexts/LoadingContext';
import { DashboardProvider } from 'modules/Shared/contexts/DashboardContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <AgentProvider>
          <DashboardProvider>
            <Router />
            <ErrorSnackbar />
          </DashboardProvider>
        </AgentProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
