import { AppBar, Autocomplete, Box, TextField, Toolbar } from '@mui/material';
import { useWidgets } from 'modules/Shared/contexts';

const Header = () => {
  const { widgetsList } = useWidgets();

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'flex-end', padding: '16px' }}>
          <Autocomplete
            sx={{ minWidth: '300px' }}
            multiple
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Adicionar Widget"
                placeholder="Adicionar Widget"
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              />
            )}
            options={widgetsList}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
