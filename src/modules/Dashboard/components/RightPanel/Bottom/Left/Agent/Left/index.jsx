import { Typography } from '@mui/material';
import LabeledCircularProgress from 'modules/Shared/components/LabeledCircularProgress';
import { Container } from './style';

export default function Left({ reliabilityLevel }) {
  return (
    <Container>
      <LabeledCircularProgress size={90} value={reliabilityLevel.toFixed(0)}>
        <Typography>
          <Typography fontSize={16} component="div" color="text.secondary">
            {`${reliabilityLevel.toFixed(0)}%`}
          </Typography>
        </Typography>
      </LabeledCircularProgress>
    </Container>
  );
}
