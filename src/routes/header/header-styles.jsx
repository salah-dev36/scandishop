import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  padding: 0 100px;
  min-width: 375px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  top: 0;
  z-index: 2;

  @media screen and (max-width: 428px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 642px) {
    padding: 0 20px;
  }
  

`;

export const Features = styled.div`
  height: 80px;
  display: flex;
  margin-left : 176px;
  align-items: center;
  gap: 22px;
  @media screen and (max-width: 805px) {
    margin: 0;
  }
`;

export const Logo = styled.img`
  align-self: center;
  @media screen and (max-width: 642px) {
    display: none;
  }
`;
