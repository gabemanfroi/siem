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
import { MitreProvider } from 'modules/Mitre/contexts/MitreContext';
import { VulnerabilityProvider } from 'modules/Vulnerability/contexts/VulnerabilityContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WebsocketProvider>
        <LoadingProvider>
          <MitreProvider>
            <VulnerabilityProvider>
              <AgentProvider>
                <WidgetsProvider>
                  <DashboardProvider>
                    <Router />
                    <ErrorSnackbar />
                  </DashboardProvider>
                </WidgetsProvider>
              </AgentProvider>
            </VulnerabilityProvider>
          </MitreProvider>
        </LoadingProvider>
      </WebsocketProvider>
    </ThemeProvider>
  );
}
