import { ThemeProvider } from '@mui/material';
import { ErrorSnackbar } from 'modules/Shared/components/';
import Router from 'modules/Shared/components/Router';
import theme from 'modules/Shared/theme';
import './sass/main.scss';
import {
  AgentProvider,
  DashboardProvider,
  LoadingProvider,
  WidgetsProvider,
} from 'modules/Shared/contexts';
import { MitreProvider } from 'modules/Mitre/contexts/MitreContext';
import { VulnerabilityProvider } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { IntegrityMonitoringProvider } from 'modules/IntegrityMonitoring/contexts';
import { VirusTotalProvider } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { SecurityEventProvider } from './modules/SecurityEvent/contexts/SecurityEventContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <MitreProvider>
          <VulnerabilityProvider>
            <IntegrityMonitoringProvider>
              <VirusTotalProvider>
                <SecurityEventProvider>
                  <AgentProvider>
                    <WidgetsProvider>
                      <DashboardProvider>
                        <Router />
                        <ErrorSnackbar />
                      </DashboardProvider>
                    </WidgetsProvider>
                  </AgentProvider>
                </SecurityEventProvider>
              </VirusTotalProvider>
            </IntegrityMonitoringProvider>
          </VulnerabilityProvider>
        </MitreProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
