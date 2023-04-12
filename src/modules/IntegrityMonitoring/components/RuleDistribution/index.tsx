import { DonutChart } from 'modules/Shared/components/Charts';
import { useRuleDistributionQuery } from 'modules/IntegrityMonitoring/hooks/queries/useRuleDistributionQuery';
import { LoadingHandler } from 'modules/Shared/components';

const RuleDistribution = () => {
  const { ruleDistributionIsLoading, ruleDistributionData } =
    useRuleDistributionQuery();

  const { labels, series } = ruleDistributionData;
  const options = {
    series,
    labels,
  };

  return (
    <LoadingHandler loading={ruleDistributionIsLoading}>
      <DonutChart options={options} />
    </LoadingHandler>
  );
};

export default RuleDistribution;
