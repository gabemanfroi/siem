import { Typography } from '@mui/material';
import LabeledCircularProgress from 'modules/Shared/components/LabeledCircularProgress';
import 'react-circular-progressbar/dist/styles.css';
import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import { Container } from './style';

export function OverallSecurity() {
  const {
    overall: { trustLevel },
  } = useAppSelector(({ dashboard }) => dashboard);

  return (
    <>
      {trustLevel && (
        <Container>
          <Typography variant="h2">Trust Level</Typography>
          <LabeledCircularProgress
            value={trustLevel}
            size={150}
            thickness={2.5}
          >
            <Typography fontSize={20} component="div" color="text.primary">
              {`${trustLevel.toFixed(2)}%`}
            </Typography>
          </LabeledCircularProgress>
        </Container>
      )}
    </>
  );
}
