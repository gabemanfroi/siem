import { useVirusTotal } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { DonutChart } from 'modules/Shared/components/Charts';

const LastScannedFiles = () => {
  const { lastScannedFiles } = useVirusTotal();

  if (!lastScannedFiles) return <></>;
  const { labels, series } = lastScannedFiles;
  const options = {
    series,
    labels,
  };

  return <DonutChart options={options} />;
};

export default LastScannedFiles;
