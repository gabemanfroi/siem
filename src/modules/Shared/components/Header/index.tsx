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
import { useFilter, useSidebar } from 'modules/Shared/hooks';
import DateFilter from 'modules/Shared/components/Header/DateFilter';
import { useTranslation } from 'react-i18next';
import WidgetsSelector from 'modules/Shared/components/Header/WidgetsSelector';
import { useCustomizationContext } from 'modules/Shared/hooks/useCustomizationContext';
import React from 'react';

const Header = () => {
  const { isFilterMode, setIsFilterMode } = useFilter();
  const { isOpen, setIsOpen } = useSidebar();
  const { t } = useTranslation();
  const { setCustomizationMode, customizationMode } = useCustomizationContext();
  const { pathname } = window.location;

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
            {pathname === '/' && (
              <>
                {!customizationMode && (
                  <IconButton
                    sx={{ borderRadius: '8px' }}
                    onClick={() => {
                      setCustomizationMode(!customizationMode);
                    }}
                  >
                    <MdEdit />
                  </IconButton>
                )}
                {customizationMode && (
                  <>
                    <WidgetsSelector />
                    <IconButton
                      sx={{ borderRadius: '8px' }}
                      onClick={() => {
                        setCustomizationMode(!customizationMode);
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
