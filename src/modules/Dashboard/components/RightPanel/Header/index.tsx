import { AppBar, Autocomplete, Box, TextField, Toolbar } from '@mui/material';

const Header = () => (
  <Box sx={{ width: '100%' }}>
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'flex-end', padding: '16px' }}>
        <Autocomplete
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Widgets" />}
          options={[{ label: 'Teste' }, { label: 'Test1' }]}
        />
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
