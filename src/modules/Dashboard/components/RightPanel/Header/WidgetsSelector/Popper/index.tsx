import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Autocomplete, { AutocompleteCloseReason } from '@mui/material/Autocomplete';
import * as React from 'react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { MdOutlineCheck, MdOutlineClose } from 'react-icons/md';
import { useTheme } from '@mui/material/styles';
import { ALL_WIDGETS_LABELS } from 'modules/Shared/core/Constants';
import { useWidgets } from 'modules/Shared/contexts';
import { IAutoCompleteWidget, isWidget, IWidget, WidgetsMapKeys } from 'modules/Shared/interfaces/Widgets';
import { StyledAutocompletePopper, StyledInput, StyledPopper } from './style';

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

const PopperComponent = (props: PopperComponentProps) => {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
};

interface IWidgetsSelectorPopper {
  pendingValue: IAutoCompleteWidget[];
  setPendingValue: Dispatch<SetStateAction<IAutoCompleteWidget[]>>;
  value: IAutoCompleteWidget[];
  setValue: Dispatch<SetStateAction<IAutoCompleteWidget[]>>;
  open: boolean;
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

export const WidgetsSelectorPopper = ({
  pendingValue,
  setPendingValue,
  value,
  setValue,
  open,
  anchorEl,
  setAnchorEl,
}: IWidgetsSelectorPopper) => {
  const { setSelectedWidgets, widgetsMap } = useWidgets();

  const theme = useTheme();

  useEffect(() => {
    if (value) {
      const newSelectedWidgets = value
        .map((w) => widgetsMap[w.identifier as WidgetsMapKeys])
        .filter(isWidget) as IWidget[];
      setSelectedWidgets(newSelectedWidgets);
    }
  }, [value]);

  useEffect(() => {
    if (JSON.stringify(value) !== JSON.stringify(pendingValue)) {
      setValue(pendingValue);
    }
  }, [pendingValue]);

  const handleClose = () => {
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const handleAutoCompleteClose = (event: React.ChangeEvent<{}>,
    reason: AutocompleteCloseReason) => {
    if (reason === 'escape') {
      handleClose();
    }
  };

  return (
    <StyledPopper open={open} anchorEl={anchorEl} placement="bottom-start">
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          <Box
            sx={{
              borderBottom: `1px solid ${
                theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
              }`,
              padding: '8px 10px',
              fontWeight: 600,
            }}
          >
            Select your own widgets
          </Box>
          <Autocomplete
            open={open}
            multiple
            onClose={handleAutoCompleteClose}
            value={pendingValue}
            onChange={(event, newValue, reason) => {
              if (
                event.type === 'keydown' &&
                (event as React.KeyboardEvent).key === 'Backspace' &&
                reason === 'removeOption'
              ) {
                return;
              }
              setPendingValue(newValue);
            }}
            disableCloseOnSelect
            PopperComponent={PopperComponent}
            renderTags={() => null}
            noOptionsText="No labels"
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Box
                  component={MdOutlineCheck}
                  sx={{ width: 17, height: 17, mr: '5px', ml: '-2px' }}
                  style={{
                    visibility: selected ? 'visible' : 'hidden',
                  }}
                />
                <Box
                  sx={{
                    flexGrow: 1,
                    '& span': {
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  {option.label}
                  <br />
                </Box>
                <Box
                  component={MdOutlineClose}
                  sx={{ opacity: 0.6, width: 18, height: 18 }}
                  style={{
                    visibility: selected ? 'visible' : 'hidden',
                  }}
                />
              </li>
            )}
            options={ALL_WIDGETS_LABELS}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <StyledInput
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                autoFocus
                placeholder="Filter Widgets"
              />
            )}
          />
        </div>
      </ClickAwayListener>
    </StyledPopper>
  );
};

export default WidgetsSelectorPopper;
