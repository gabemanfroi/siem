import ReactApexChart from 'react-apexcharts';
import { RadialBarOptionsFactory } from 'modules/Shared/helpers/factories/chartsOptions';
import { Container } from './style';

interface LeftProps {
  trustLevel: number;
}

export default function AgentTrustLevel({ trustLevel }: LeftProps) {
  const radialBarOptions = RadialBarOptionsFactory();

  return (
    <Container>
      <ReactApexChart
        options={radialBarOptions}
        series={[trustLevel]}
        type="radialBar"
      />
    </Container>
  );
}
