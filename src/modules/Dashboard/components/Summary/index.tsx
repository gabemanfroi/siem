import { LinearProgress, Stack, Typography } from '@mui/material';
import { VulnerabilityBySeverity } from 'modules/Vulnerability/components/SeveritySummary';
import { useSummaryQuery } from 'modules/Dashboard/hooks/queries/useSummaryQuery';
import React from 'react';
import { LoadingHandler } from 'modules/Shared/components';
import { CardWithBadge } from 'modules/Shared/components/CardWithBadge';
import { dark50 } from 'modules/Shared/helpers/styles/Colors';

const getTotalFromAllLevels = (data: {
  low: number;
  high: number;
  medium: number;
}) => {
  if (!data) return 0;
  return data.low + data.high + data.medium;
};

const getPercentage = (total: number, value: number) => {
  if (!total) return 0;
  return Math.floor((value * 100) / total);
};

const formatAmount = (amount: number) => {
  if (!amount) return 0;
  if (amount > 1000) {
    return `+${Math.floor(amount / 1000)}k`;
  }
  if (amount > 1000000) {
    return `+${Math.floor(amount / 1000000)}M`;
  }
  if (amount > 1000000000) {
    return `+${Math.floor(amount / 1000000000)}B`;
  }
  return amount;
};

export const Summary = () => {
  const { getSummaryData, getSummaryIsLoading } = useSummaryQuery();
  return (
    <LoadingHandler loading={getSummaryIsLoading}>
      <Stack padding={3} gap={8}>
        <VulnerabilityBySeverity
          title="Vulnerabilidades Na Estrutura"
          severitySummaryData={
            getSummaryData?.structureTotalVulnerabilitiesBySeverity
          }
          severitySummaryIsLoading={getSummaryIsLoading}
        />
        <CardWithBadge title="Número de Eventos por Nível">
          <Stack sx={{ color: dark50 }} gap={1}>
            <Stack>
              <Typography>Baixo</Typography>
              <Typography>
                {formatAmount(
                  getSummaryData?.structureNumberOfEventsByLevel?.low
                )}
                <LinearProgress
                  variant="determinate"
                  value={getPercentage(
                    getTotalFromAllLevels(
                      getSummaryData?.structureNumberOfEventsByLevel
                    ),
                    getSummaryData?.structureNumberOfEventsByLevel?.low
                  )}
                  sx={{ height: '8px', borderRadius: '999px' }}
                />
              </Typography>
            </Stack>
            <Stack>
              <Typography>Médio</Typography>
              <Typography>
                {formatAmount(
                  getSummaryData?.structureNumberOfEventsByLevel?.medium
                )}
                <LinearProgress
                  variant="determinate"
                  value={getPercentage(
                    getTotalFromAllLevels(
                      getSummaryData?.structureNumberOfEventsByLevel
                    ),
                    getSummaryData?.structureNumberOfEventsByLevel?.medium
                  )}
                  sx={{ height: '8px', borderRadius: '999px' }}
                />
              </Typography>
            </Stack>
            <Stack>
              <Typography>Alto</Typography>
              <Typography>
                {formatAmount(
                  getSummaryData?.structureNumberOfEventsByLevel?.high
                )}
                <LinearProgress
                  variant="determinate"
                  value={getPercentage(
                    getTotalFromAllLevels(
                      getSummaryData?.structureNumberOfEventsByLevel
                    ),
                    getSummaryData?.structureNumberOfEventsByLevel?.high
                  )}
                  sx={{ height: '8px', borderRadius: '999px' }}
                />
              </Typography>
            </Stack>
          </Stack>
        </CardWithBadge>
      </Stack>
    </LoadingHandler>
  );
};
