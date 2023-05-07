import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Autocomplete, {
  AutocompleteCloseReason,
} from '@mui/material/Autocomplete';
import * as React from 'react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { ALL_WIDGETS_LABELS } from 'modules/Shared/core/constants';
import {
  IAutoCompleteWidget,
  isWidget,
  IWidget,
  WidgetsMapKeys,
} from 'modules/Shared/interfaces/Widgets';
import {
  StyledAutocompletePopper,
  StyledInput,
  StyledPopper,
} from 'modules/Shared/components/Header/WidgetsSelector/Popper/style';
import { useWidgetsSelectionContext } from 'modules/Shared/hooks/useWidgetsSelectionContext';
import AutoCompleteItem from 'modules/Shared/components/Header/WidgetsSelector/Popper/AutoCompleteItem';

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

const PopperComponent = (props: PopperComponentProps) => {
  const { ...other } = props;
  // @ts-ignore
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
  const { setSelectedWidgets, selectedWidgets, widgetsMap } =
    useWidgetsSelectionContext();

  const theme = useTheme();

  useEffect(() => {
    if (value) {
      const selectedWidgetsIdentifiers = selectedWidgets.map(
        ({ identifier }) => identifier
      );

      const newSelectedWidgets = value
        .filter(
          ({ identifier }) => !selectedWidgetsIdentifiers.includes(identifier)
        )
        .map((w) => widgetsMap[w.identifier as WidgetsMapKeys])
        .filter(isWidget) as IWidget[];

      setSelectedWidgets([...selectedWidgets, ...newSelectedWidgets]);
    }
  }, [value]);

  const handleClose = () => {
    if (anchorEl) {
      anchorEl.focus();
    }
    if (JSON.stringify(value) !== JSON.stringify(pendingValue)) {
      setValue(pendingValue);
    }
    setAnchorEl(null);
  };

  const handleAutoCompleteClose = (
    event: React.ChangeEvent<{}>,
    reason: AutocompleteCloseReason
  ) => {
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
              textTransform: 'uppercase',
            }}
          >
            Select your widgets
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
              <AutoCompleteItem
                selected={selected}
                option={option}
                {...props}
              />
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
