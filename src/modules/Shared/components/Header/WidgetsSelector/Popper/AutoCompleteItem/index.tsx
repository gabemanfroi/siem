import Box from '@mui/material/Box';
import { MdOutlineCheck, MdOutlineClose } from 'react-icons/md';
import * as React from 'react';
import { useTheme } from '@mui/material';
import { IAutoCompleteWidget } from 'modules/Shared/interfaces/Widgets';

const AutoCompleteItem = ({
  selected,
  option,
  ...props
}: {
  selected: boolean;
  option: IAutoCompleteWidget;
}) => {
  const theme = useTheme();
  return (
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
      </Box>
      <Box
        component={MdOutlineClose}
        sx={{ opacity: 0.6, width: 18, height: 18 }}
        style={{
          visibility: selected ? 'visible' : 'hidden',
        }}
      />
    </li>
  );
};

export default AutoCompleteItem;
