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
import { IntegrityMonitoringProvider } from 'modules/IntegrityMonitoring/contexts';
import { VirusTotalProvider } from 'modules/VirusTotal/contexts/VirusTotalContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WebsocketProvider>
        <LoadingProvider>
          <MitreProvider>
            <VulnerabilityProvider>
              <IntegrityMonitoringProvider>
                <VirusTotalProvider>
                  <AgentProvider>
                    <WidgetsProvider>
                      <DashboardProvider>
                        <Router />
                        <ErrorSnackbar />
                      </DashboardProvider>
                    </WidgetsProvider>
                  </AgentProvider>
                </VirusTotalProvider>
              </IntegrityMonitoringProvider>
            </VulnerabilityProvider>
          </MitreProvider>
        </LoadingProvider>
      </WebsocketProvider>
    </ThemeProvider>
  );
}
