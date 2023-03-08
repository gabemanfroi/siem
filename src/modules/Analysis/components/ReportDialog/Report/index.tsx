import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { white } from 'modules/Shared/helpers/styles/Colors';
import { ICortexReport } from 'modules/Shared/interfaces';
import { useTranslation } from 'react-i18next';

interface Props {
  report: ICortexReport;
}

const Report = ({ report }: Props) => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Typography variant="h2" textTransform="uppercase">
        {t('Report')}
      </Typography>
      <Divider />
      <Grid container mt={1} gap={1}>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography variant="h6" color="gray200">
              {t('Observable')}
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {report.observable}
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
                {report.report.summary.namespace}
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
              {report.report.summary.namespace}
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
              {report.report.summary.level}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Report;
