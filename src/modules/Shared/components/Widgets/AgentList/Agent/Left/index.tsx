import { Typography } from '@mui/material';
import LabeledCircularProgress from 'modules/Shared/components/LabeledCircularProgress';
import { Container } from './style';

interface LeftProps {
  reliabilityLevel: number;
}

export default function Left({ reliabilityLevel }: LeftProps) {
  return (
    <Container>
      <LabeledCircularProgress
        thickness={2.5}
        size={90}
        value={Number(reliabilityLevel.toFixed(0))}
      >
        <Typography>
          <Typography fontSize={16} component="div" color="text.secondary">
            {`${reliabilityLevel.toFixed(0)}%`}
          </Typography>
        </Typography>
      </LabeledCircularProgress>
    </Container>
  );
}
