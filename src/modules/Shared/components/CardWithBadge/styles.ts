import { Box, Stack, styled } from '@mui/material';
import { dark50, white } from 'modules/Shared/helpers/styles/Colors';

export const Container = styled(Stack)({
  background: white,
  position: 'relative',
  borderRadius: 8,
  border: `1px solid ${dark50}}`,
  paddingTop: 4,
  paddingBottom: 1,
});

export const TitleContainer = styled(Box)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  top: -12,
  width: '100%',
  padding: '0 16px',
  zIndex: 5,
});
