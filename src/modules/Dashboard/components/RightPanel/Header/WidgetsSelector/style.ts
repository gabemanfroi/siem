import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/material';

export const AutocompleteBox = styled(Box)(() => ({
  width: 221,
  fontSize: 13,
  border: '2px solid black',
  padding: '8px',
  borderRadius: '8px',
  alignItems: 'center',
  display: 'flex',
}));

export const StyledButton = styled(ButtonBase)(() => ({
  fontSize: 15,
  width: '100%',
  textAlign: 'left',
  fontWeight: 600,
  '& span': {
    width: '100%',
  },
  '& svg': {
    width: 16,
    height: 16,
  },
}));
