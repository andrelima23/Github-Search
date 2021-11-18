import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 64px;
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
  border-radius: 10px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 16px;
  margin-top: 16px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
  }

  h4 {
    color: gray11;
    font-size: 14px;
    font-weight: 300;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: 400;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
