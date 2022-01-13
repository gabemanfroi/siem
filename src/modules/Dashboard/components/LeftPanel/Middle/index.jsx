import GaugeChart from 'react-gauge-chart';
import LinearProgressBar from 'modules/Shared/components/LinearProgressBar';
import { Container } from './style';

export default function Middle() {
  return (
    <Container>
      <GaugeChart
        nrOfLevels={20}
        percent={0.86}
      />
      <LinearProgressBar value={50} />
      <LinearProgressBar value={50} />
    </Container>
  );
}
