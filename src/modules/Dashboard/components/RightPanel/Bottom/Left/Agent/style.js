import styled from 'styled-components';

export const Container = styled.div`
    flex: 0 0 20%;
    padding: 8px;
    .inner-container{
      display: flex;
      background: gray;
      width: 100%;
      height: 100%;
      padding: 8px;

      .left{
        height: 100%;
        position: relative;
        svg{
          height: 100%;
        }
      }
      .middle{

      }
      .right{

      }
    }
`;
