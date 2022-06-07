import { AppBar, Box, Toolbar } from '@mui/material';
import DateFilter from './DateFilter';
import WidgetsSelector from './WidgetsSelector';

const Header = () => (
  <Box>
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'flex-end', padding: '16px', gap: '8px' }}>
        <DateFilter />
        <WidgetsSelector />
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
