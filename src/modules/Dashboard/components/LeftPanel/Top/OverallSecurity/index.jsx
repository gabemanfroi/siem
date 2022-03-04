import { Typography } from '@mui/material';
import LabeledCircularProgress from 'modules/Shared/components/LabeledCircularProgress';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import { Container } from './style';

export function OverallSecurity() {
  const {
    overallMetrics: { trustLevel },
  } = useSelector(({ metrics }) => metrics);

  return (
    <>
      {trustLevel && (
        <Container>
          <Typography variant="h2">Trust Level</Typography>
          <LabeledCircularProgress value={trustLevel}>
            <Typography fontSize={20} component="div" color="text.primary">
              {`${trustLevel.toFixed(2)}%`}
            </Typography>
          </LabeledCircularProgress>
        </Container>
      )}
    </>
  );
}
