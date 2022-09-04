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
import { MdCheck, MdEdit, MdMenu } from 'react-icons/md';
import WidgetsSelector from 'modules/Shared/components/Header/WidgetsSelector';
import { useFilter, useSidebar, useWidgets } from 'modules/Shared/hooks';
import DateFilter from 'modules/Shared/components/Header/DateFilter';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const { customizeMode, setCustomizeMode } = useWidgets();
  const { isFilterMode, setIsFilterMode } = useFilter();
  const { isOpen, setIsOpen } = useSidebar();

  const { pathname } = useLocation();

  useEffect(
    () => () => {
      setCustomizeMode(false);
      setIsFilterMode(false);
    },
    []
  );

  useEffect(() => {}, [pathname]);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <MdMenu />
            </IconButton>
          </Stack>
          <Stack direction="row" justifyContent="flex-end">
            {isFilterMode && <DateFilter />}
            <FormControl>
              <FormControlLabel
                label={isFilterMode ? 'Filtering Data' : 'Real Time Data'}
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
            {pathname === '/' && (
              <>
                {!customizeMode && (
                  <IconButton
                    sx={{ borderRadius: '8px' }}
                    onClick={() => {
                      setCustomizeMode(!customizeMode);
                    }}
                  >
                    <MdEdit />
                  </IconButton>
                )}
                {customizeMode && (
                  <>
                    <WidgetsSelector />
                    <IconButton
                      sx={{ borderRadius: '8px' }}
                      onClick={() => {
                        setCustomizeMode(!customizeMode);
                      }}
                    >
                      <MdCheck />
                    </IconButton>
                  </>
                )}
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
