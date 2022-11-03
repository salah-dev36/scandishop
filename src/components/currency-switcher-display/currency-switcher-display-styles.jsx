import styled from "styled-components";

export const Container = styled.div`
  box-shadow: rgba(168, 172, 176, 0.19) 0px 4px 35px;
  position: absolute;
  right: 78px;
  top: 65px;
  font-size: 18px;
  cursor: pointer;
  background-color: white;
  z-index:4;
`;

export const CurrencyItem = styled.div`
  width: 114px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #eeeeee;
  }
`;
