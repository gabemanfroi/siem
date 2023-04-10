import { DonutChart } from 'modules/Shared/components/Charts';
import { useIntegrityMonitoringContext } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';

const RuleDistribution = () => {
  const { ruleDistribution } = useIntegrityMonitoringContext();

  if (!ruleDistribution) return <></>;

  const { labels, series } = ruleDistribution;
  const options = {
    series,
    labels,
  };

  return <DonutChart options={options} />;
};

export default RuleDistribution;
