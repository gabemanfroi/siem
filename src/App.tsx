import { ThemeProvider } from '@mui/material';
import { ErrorSnackbar } from 'modules/Shared/components/';
import Router from 'modules/Shared/components/Router';
import theme from 'modules/Shared/theme';
import './scss/main.scss';
import './scss/main.css';
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
import { SidebarProvider } from 'modules/Shared/contexts/SidebarContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 60000,
    },
  },
});

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
                            <SidebarProvider>
                              <DashboardProvider>
                                <Router />
                                <Dialogs />
                                <ErrorSnackbar />
                              </DashboardProvider>
                            </SidebarProvider>
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
