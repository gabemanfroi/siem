import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { defaultRadialBarOptions } from 'modules/Shared/config/ChartsOptions';
import { Container } from './style';

interface LeftProps {
  trustLevel: number;
}

export default function AgentTrustLevel({ trustLevel }: LeftProps) {
  const radialBarOptions: ApexOptions = defaultRadialBarOptions;

  return (
    <Container>
      <ReactApexChart
        options={radialBarOptions}
        series={[trustLevel]}
        type='radialBar'
      />
    </Container>
  );
}
