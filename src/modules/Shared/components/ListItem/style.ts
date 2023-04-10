import { Stack, styled } from '@mui/material';
import { primary700 } from 'modules/Shared/helpers/styles/Colors';

export const Container = styled(Stack)({
  fontSize: 16,
  background: 'white',
  borderRadius: 8,
  color: 'black',
  '&:hover': {
    cursor: 'pointer',
    background: primary700,
    color: 'white',
    transition: 'color ease 0.1s,background ease 0.2s',
    border: 'none',
  },
});
