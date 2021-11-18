import styled from "styled-components";
import bg from '../../images/gs.png'

export const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 480px;
  
  h1 {
    font-weight: bold;
    font-size: 64px;
    margin-bottom: 32px;
  }
`;

export const Img = styled.div`
  margin: 16px;
  width: 256px;
  height: 256px;
  background-image: url(${bg});
  background-size: 100% 100%;;
`;


 
