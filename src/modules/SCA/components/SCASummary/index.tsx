import { DonutChart } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import React from 'react';
import { useAgentPoliciesSummaryQuery } from 'modules/SCA/hooks/queries/useAgentPoliciesSummaryQuery';
import { LoadingHandler } from 'modules/Shared/components';
import { IPolicySummary } from 'modules/SCA/interfaces';
import { CardWithBadge } from 'modules/Shared/components/CardWithBadge';

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
      <CardWithBadge title="SCA">
        <DonutChart options={options} />
      </CardWithBadge>
    </LoadingHandler>
  );
};

export default SCASummary;
