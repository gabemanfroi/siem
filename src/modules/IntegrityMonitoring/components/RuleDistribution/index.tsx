import { DonutChart } from 'modules/Shared/components/Charts';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';

const RuleDistribution = () => {
  const { ruleDistribution } = useIntegrityMonitoring();

  if (!ruleDistribution) return <></>;

  const { labels, series } = ruleDistribution;
  const options = {
    series,
    labels,
    title: { text: 'Rule Distribution' },
  };

  return <DonutChart options={options} />;
};

export default RuleDistribution;
