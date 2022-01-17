import styled from 'styled-components';
import { dark100, textGray, white } from '../../stylesHelpers/colorVariables';

export const Container = styled.div`
  .progress-bar {
    width: 100%;
    height: ${({ strokeHeight }) => `${strokeHeight}px`};
    position: relative;
    background: ${dark100};


    &:before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: ${({ value }) => `${value}%`};
      background: ${({ strokeColor }) => strokeColor};
    }
  }

  .bar-header {
    display: flex;
    justify-content: space-between;

    h5 {
      span {
        color: ${textGray};
      }
    }

    span {
      color: ${white};
      text-align: right;
    }
  }
`;
