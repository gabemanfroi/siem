import styled from 'styled-components';

export const Container = styled.div`
  .progress-bar{
    width: 100%;
    height: ${({ strokeHeight }) => `${strokeHeight}px`};
    position: relative;
    background: #1A1A1A;
    border-radius: 999px;
    
    &:before {
      content: '';
      border-radius: 999px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: ${({ value }) => `${value}%`};
      background: ${({ strokeColor }) => strokeColor};
    }
  }
  
  
  
  .bar-header{
    display: flex;
    justify-content: space-between;
  }
`;
