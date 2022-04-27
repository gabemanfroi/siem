import ReactApexChart from 'react-apexcharts';
import { RadialBarOptionsFactory } from 'modules/Shared/helpers/factories/chartsOptions';
import { Container } from './style';

interface LeftProps {
  trustLevel: number;
}

const radialBarOptions = RadialBarOptionsFactory({
  chart: {
    sparkline: {
      enabled: false,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '70%' },
    },
  },
});

export default function AgentTrustLevel({ trustLevel }: LeftProps) {
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
