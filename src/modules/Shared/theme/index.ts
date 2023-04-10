import { createTheme } from '@mui/material';
import { Theme } from '@mui/system';
import palette from './palette';
import typography from './typography';
import components from './components';

// @ts-ignore
const theme: Theme = createTheme({
  palette,
  typography,
  components,
});

export default theme;
