import styled from "styled-components";

export const Container = styled.div`
  box-shadow: rgba(168, 172, 176, 0.19) 0px 4px 35px;
  position: absolute;
  right: -22px;
  top: 67px;
  font-size: 18px;
  cursor: pointer;
  background-color: white;
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
