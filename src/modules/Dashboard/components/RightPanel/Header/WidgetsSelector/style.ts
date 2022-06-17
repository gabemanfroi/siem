import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/material';
import { primary500, primary600 } from 'modules/Shared/helpers/styles/Colors';

export const AutocompleteBox = styled(Box)(() => ({
  width: 221,
  fontSize: 13,
  border: `1px solid ${primary600}`,
  padding: '8px',
  borderRadius: '8px',
  alignItems: 'center',
  display: 'flex',
  cursor: 'pointer',
  '&:hover': {
    border: `1px solid ${primary500}`,
  },
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
