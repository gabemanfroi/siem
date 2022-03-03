import { Box } from '@mui/material';
import { primaryBg } from 'modules/Shared/stylesHelpers/colorVariables';
import styled from 'styled-components';

export const StyledContainer = styled(Box)`
  &:after {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.6;
    background-image: url('${process.env.PUBLIC_URL}/main-background.png');
    background-position: right center;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-color: ${primaryBg};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${primaryBg};
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
