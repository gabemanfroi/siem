import {
  AppBar,
  Box,
  FormControl,
  FormControlLabel,
  IconButton,
  Switch,
  Toolbar,
} from '@mui/material';
import { MdCheck, MdEdit } from 'react-icons/md';
import { useDashboard } from 'modules/Dashboard/contexts';
import WidgetsSelector from 'modules/Dashboard/components/RightPanel/Header/WidgetsSelector';
import { useFilter } from 'modules/Shared/hooks';
import DateFilter from 'modules/Dashboard/components/RightPanel/Header/DateFilter';

const Header = () => {
  const { isEditMode, setIsEditMode } = useDashboard();
  const { isFilterMode, setIsFilterMode } = useFilter();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{ justifyContent: 'flex-end', padding: '16px', gap: '8px' }}
        >
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
          {!isEditMode && (
            <IconButton
              sx={{ borderRadius: '8px' }}
              onClick={() => {
                setIsEditMode(!isEditMode);
              }}
            >
              <MdEdit />
            </IconButton>
          )}
          {isEditMode && (
            <>
              <WidgetsSelector />
              <IconButton
                sx={{ borderRadius: '8px' }}
                onClick={() => {
                  setIsEditMode(!isEditMode);
                }}
              >
                <MdCheck />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
