import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { DonutChart } from 'modules/Shared/components/Charts';

const TopMitre = () => {
  const { topMitre } = useSecurityEventContext();

  if (!topMitre) return <></>;

  const { labels, series } = topMitre;
  const options = {
    series,
    labels,
  };

  return <DonutChart options={options} />;
};

export default TopMitre;
