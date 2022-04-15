import { PaletteOptions } from '@mui/material';
import {
  dark200,
  dark500,
  primary600,
  primary700,
  primaryBlue,
  primaryRed,
  primaryYellow,
  gray300,
  white,
} from '../helpers/styles/Colors';

const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: primary700,
    contrastText: white,
  },
  secondary: {
    main: primaryBlue,
    contrastText: white,
  },
  error: {
    main: primaryRed,
    contrastText: white,
  },
  warning: {
    main: primaryYellow,
    contrastText: white,
  },
  success: {
    main: primary600,
    contrastText: white,
  },
  text: {
    primary: white,
    secondary: gray300,
  },
  background: {
    default: dark500,
    paper: dark200,
  },
};

export default palette;
