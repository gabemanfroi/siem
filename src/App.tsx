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
import { MitreProvider } from 'modules/Shared/contexts/MitreContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WebsocketProvider>
        <LoadingProvider>
          <MitreProvider>
            <AgentProvider>
              <WidgetsProvider>
                <DashboardProvider>
                  <Router />
                  <ErrorSnackbar />
                </DashboardProvider>
              </WidgetsProvider>
            </AgentProvider>
          </MitreProvider>
        </LoadingProvider>
      </WebsocketProvider>
    </ThemeProvider>
  );
}
