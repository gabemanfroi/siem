import { Grid, styled } from '@mui/material';
import {
  dark200,
  primary700,
  white,
} from 'modules/Shared/helpers/styles/Colors';

export const Container = styled(Grid)({
  borderRadius: 2,
  background: white,
  color: dark200,
  '&:hover': {
    cursor: 'pointer',
    background: primary700,
    color: 'white',
    transition: 'color ease 0.1s,background ease 0.2s',
    border: 'none',
  },
});
