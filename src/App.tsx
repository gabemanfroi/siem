import { ThemeProvider } from '@mui/material';
import { ErrorSnackbar } from 'modules/Shared/components/';
import Router from 'modules/Shared/components/Router';
import theme from 'modules/Shared/theme';
import './sass/main.scss';
import {
  AgentProvider,
  LoadingProvider,
  DashboardProvider,
  WidgetsProvider,
  WebsocketProvider,
} from 'modules/Shared/contexts';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WebsocketProvider>
        <LoadingProvider>
          <AgentProvider>
            <DashboardProvider>
              <WidgetsProvider>
                <Router />
                <ErrorSnackbar />
              </WidgetsProvider>
            </DashboardProvider>
          </AgentProvider>
        </LoadingProvider>
      </WebsocketProvider>
    </ThemeProvider>
  );
}
