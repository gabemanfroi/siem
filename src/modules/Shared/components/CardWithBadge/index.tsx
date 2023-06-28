import React from 'react';
import { dark50, white } from 'modules/Shared/helpers/styles/Colors';
import { Box, Typography } from '@mui/material';
import {
  Container,
  TitleContainer,
} from 'modules/Shared/components/CardWithBadge/styles';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const CardWithBadge: React.FC<Props> = ({ children, title }) => (
  <Container direction="column" paddingTop={4} paddingBottom={1}>
    <TitleContainer component="span" sx={{}}>
      <Typography
        component="span"
        width="100%"
        sx={{
          borderRadius: 999,
          display: 'block',
          background: white,
          border: `1px solid ${dark50}}`,
          color: dark50,
          textAlign: ' center',
        }}
        textAlign="center"
        paddingX="16px"
        color={dark50}
      >
        {title}
      </Typography>
    </TitleContainer>
    <Box p={2}>{children}</Box>
  </Container>
);
