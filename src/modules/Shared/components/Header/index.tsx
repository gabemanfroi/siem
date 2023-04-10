import {
  AppBar,
  Box,
  FormControl,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  Toolbar,
} from '@mui/material';
import { MdMenu } from 'react-icons/md';
import { useFilter, useSidebar } from 'modules/Shared/hooks';
import DateFilter from 'modules/Shared/components/Header/DateFilter';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { isFilterMode, setIsFilterMode } = useFilter();
  const { isOpen, setIsOpen } = useSidebar();
  const { t } = useTranslation();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <MdMenu />
            </IconButton>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" gap={3}>
            {isFilterMode && <DateFilter />}
            <FormControl>
              <FormControlLabel
                label={t(isFilterMode ? 'Filtering Data' : 'Real Time Data')}
                value={!isFilterMode}
                control={
                  <Switch
                    defaultChecked={!isFilterMode}
                    value={!isFilterMode}
                    onClick={() => {
                      setIsFilterMode(!isFilterMode);
                    }}
                  />
                }
              />
            </FormControl>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
