import { AppBar, Box, Toolbar } from '@mui/material';
import WidgetsSelector from './WidgetsSelector';

const Header = () => (
  <Box>
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'flex-end', padding: '16px' }}>
        <WidgetsSelector />
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
