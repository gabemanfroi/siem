import { DonutChart } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { dark100, dark50 } from 'modules/Shared/helpers/styles/Colors';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useAgentPoliciesSummaryQuery } from 'modules/SCA/hooks/queries/useAgentPoliciesSummaryQuery';
import { LoadingHandler } from 'modules/Shared/components';
import { IPolicySummary } from 'modules/SCA/interfaces';

const SCASummary = ({ onClick }: { onClick?: () => void }) => {
  const {
    agentPoliciesSummaryIsLoading,
    agentPoliciesSummaryData = {} as IPolicySummary,
  } = useAgentPoliciesSummaryQuery();

  const options: ApexOptions = {
    chart: {
      events: {
        dataPointSelection() {
          if (onClick) onClick();
        },
      },
    },
    labels: [
      `Pass (${agentPoliciesSummaryData.pass})`,
      `Fail (${agentPoliciesSummaryData.fail})`,
    ],
    series: [agentPoliciesSummaryData.pass, agentPoliciesSummaryData.fail],
  };

  return (
    <LoadingHandler loading={agentPoliciesSummaryIsLoading}>
      <Stack
        direction="column"
        paddingTop={4}
        paddingBottom={1}
        sx={{
          background: dark100,
          position: 'relative',
          borderRadius: 2,
          border: `1px solid ${dark50}}`,
        }}
      >
        <Box
          component="span"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: -12,
            width: '100%',
            padding: '0 16px',
            zIndex: 5,
          }}
        >
          <Typography
            component="span"
            width="100%"
            sx={{
              borderRadius: 999,
              display: 'block',
              background: dark100,
              border: `1px solid ${dark50}}`,
            }}
            textAlign="center"
            paddingX="16px"
          >
            SCA
          </Typography>
        </Box>
        <DonutChart options={options} />
      </Stack>
    </LoadingHandler>
  );
};

export default SCASummary;
