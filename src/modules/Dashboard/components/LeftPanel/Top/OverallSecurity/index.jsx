import { Typography } from '@mui/material';
import LabeledCircularProgress from 'modules/Shared/components/LabeledCircularProgress';
import 'react-circular-progressbar/dist/styles.css';
import { Container } from './style';

export function OverallSecurity({ level }) {
  return (
    <Container>
      <Typography variant="h2">Overall Security</Typography>
      <LabeledCircularProgress value={level}>
        <Typography fontSize={20} component="div" color="text.primary">
          {`${level}%`}
        </Typography>
      </LabeledCircularProgress>
    </Container>
  );
}
