import * as React from 'react';
import { MdSettings } from 'react-icons/md';
import {
  IAutoCompleteWidget,
  isWidget,
} from 'modules/Shared/interfaces/Widgets';
import { ALL_WIDGETS_LABELS } from 'modules/Shared/core/Constants';
import { useWidgets } from 'modules/Shared/contexts';
import { useEffect } from 'react';
import { AutocompleteBox, StyledButton } from './style';
import WidgetsSelectorPopper from './Popper';

const WidgetsSelector = () => {
  const [pendingValue, setPendingValue] = React.useState<IAutoCompleteWidget[]>(
    []
  );
  const { selectedWidgets } = useWidgets();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [value, setValue] = React.useState<IAutoCompleteWidget[]>([]);

  useEffect(() => {
    setPendingValue(
      selectedWidgets
        .map((w) =>
          ALL_WIDGETS_LABELS.find((label) => label.identifier === w.identifier)
        )
        .filter(isWidget) as IAutoCompleteWidget[]
    );
  }, [selectedWidgets]);

  useEffect(() => {
    if (JSON.stringify(value) !== JSON.stringify(pendingValue)) {
      setValue(pendingValue);
    }
  }, [pendingValue]);

  useEffect(() => {
    setValue(
      selectedWidgets
        .map((w) =>
          ALL_WIDGETS_LABELS.find((label) => label.identifier === w.identifier)
        )
        .filter(isWidget) as IAutoCompleteWidget[]
    );
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <AutocompleteBox>
        <StyledButton disableRipple onClick={handleClick}>
          <span>Select Widgets</span>
          <MdSettings />
        </StyledButton>
      </AutocompleteBox>
      <WidgetsSelectorPopper
        pendingValue={pendingValue}
        value={value}
        setValue={setValue}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        setPendingValue={setPendingValue}
      />
    </>
  );
};

export default WidgetsSelector;
