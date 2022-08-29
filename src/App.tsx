import { ThemeProvider } from '@mui/material';
import { ErrorSnackbar } from 'modules/Shared/components/';
import Router from 'modules/Shared/components/Router';
import theme from 'modules/Shared/theme';
import './sass/main.scss';
import './sass/main.css';
import {
  FilterProvider,
  LoadingProvider,
  WidgetsProvider,
} from 'modules/Shared/contexts';
import { DashboardProvider } from 'modules/Dashboard/contexts/DashboardContext';
import { IntegrityMonitoringProvider } from 'modules/IntegrityMonitoring/contexts';
import { MitreProvider } from 'modules/Mitre/contexts/MitreContext';
import { VirusTotalProvider } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { VulnerabilityProvider } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { SecurityEventProvider } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AgentProvider } from 'modules/Agent/contexts';
import { SCAProvider } from 'modules/SCA/contexts/SCAContext';
import Dialogs from 'modules/Shared/components/Dialogs';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <FilterProvider>
            <MitreProvider>
              <VulnerabilityProvider>
                <IntegrityMonitoringProvider>
                  <VirusTotalProvider>
                    <SecurityEventProvider>
                      <AgentProvider>
                        <SCAProvider>
                          <WidgetsProvider>
                            <DashboardProvider>
                              <Router />
                              <Dialogs />
                              <ErrorSnackbar />
                            </DashboardProvider>
                          </WidgetsProvider>
                        </SCAProvider>
                      </AgentProvider>
                    </SecurityEventProvider>
                  </VirusTotalProvider>
                </IntegrityMonitoringProvider>
              </VulnerabilityProvider>
            </MitreProvider>
          </FilterProvider>
        </LoadingProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
