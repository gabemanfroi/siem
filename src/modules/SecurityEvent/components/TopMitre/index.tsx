import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { DonutChart } from 'modules/Shared/components/Charts';

const TopMitre = () => {
  const { topMitre } = useSecurityEvent();

  if (!topMitre) return <></>;

  const { labels, series } = topMitre;
  const options = {
    series,
    labels,
    title: { text: 'Top Mitre' },
  };

  return <DonutChart options={options} />;
};

export default TopMitre;
