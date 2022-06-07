import { PaletteOptions } from '@mui/material';
import {
  dark200,
  dark500,
  primaryBlue,
  primaryRed,
  primaryYellow,
  gray300,
  white,
  primary100,
  primary300,
  primary200,
  primary400,
  primary500,
  primary600,
  primary700,
  primary800,
} from '../helpers/styles/Colors';

const palette: PaletteOptions = {
  mode: 'dark',
  grey: {},
  primary: {
    main: primary700,
    contrastText: white,
    100: primary100,
    200: primary200,
    300: primary300,
    400: primary400,
    500: primary500,
    600: primary600,
    700: primary700,
    800: primary800,
    light: primary100,
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
