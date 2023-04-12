import React, { FC } from 'react';
import theme from 'modules/Shared/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SidebarProvider } from 'modules/Shared/contexts/SidebarContext';
import { WidgetsSelectionProvider } from 'modules/Shared/contexts/WidgetsSelectionContext';
import { SCAProvider } from 'modules/SCA/contexts/SCAContext';
import { AgentProvider } from 'modules/Agent/contexts';
import { SecurityEventProvider } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { VirusTotalProvider } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { VulnerabilityProvider } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { FilterProvider, LoadingProvider } from 'modules/Shared/contexts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnalysisProvider } from 'modules/Analysis/contexts/AnalysisContext';
import { ThemeProvider } from '@mui/material';
import { CACHE_TIME } from 'modules/Shared/constants/utils';
import { CustomizationProvider } from 'modules/Shared/contexts/CustomizationContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: CACHE_TIME,
    },
  },
});

export const DefaultProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <CustomizationProvider>
          <FilterProvider>
            <VulnerabilityProvider>
              <VirusTotalProvider>
                <SecurityEventProvider>
                  <AgentProvider>
                    <SCAProvider>
                      <WidgetsSelectionProvider>
                        <SidebarProvider>
                          <AnalysisProvider>{children}</AnalysisProvider>
                        </SidebarProvider>
                      </WidgetsSelectionProvider>
                    </SCAProvider>
                  </AgentProvider>
                </SecurityEventProvider>
              </VirusTotalProvider>
            </VulnerabilityProvider>
          </FilterProvider>
        </CustomizationProvider>
      </LoadingProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </ThemeProvider>
);
