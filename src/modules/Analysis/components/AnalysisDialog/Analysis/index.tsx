import ISeclabEvent from 'modules/Shared/interfaces/ISeclabEvent';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { white } from 'modules/Shared/helpers/styles/Colors';

const Analysis = ({ selectedAnalysis }: { selectedAnalysis: ISeclabEvent }) => (
  <Stack>
    <Typography variant="h2" textTransform="uppercase">
      Analysis
    </Typography>
    <Divider />
    <Grid container mt={1} gap={1}>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h6" color="gray200">
            Observable
          </Typography>
          <Typography
            variant="subtitle2"
            color={white}
            fontSize={16}
            sx={{ fontWeight: 600 }}
          >
            {selectedAnalysis.analysis.observable}
          </Typography>
        </Grid>
        <Grid item container xs={6}>
          <Grid item xs={6}>
            <Typography variant="h6" color="gray200">
              Namespace
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {selectedAnalysis.analysis.namespace}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h6" color="gray200">
            Predicate
          </Typography>
          <Typography
            variant="subtitle2"
            color={white}
            fontSize={16}
            sx={{ fontWeight: 600 }}
          >
            {selectedAnalysis.analysis.predicate}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color="gray200">
            Level
          </Typography>
          <Typography
            variant="subtitle2"
            color={white}
            fontSize={16}
            sx={{ fontWeight: 600 }}
          >
            {selectedAnalysis.analysis.level}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Stack>
);
export default Analysis;
