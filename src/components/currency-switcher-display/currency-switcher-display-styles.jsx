import styled from "styled-components";

export const Container = styled.div`
  box-shadow: rgba(168, 172, 176, 0.19) 0px 4px 35px;
  position: absolute;
  right: 78px;
  top: 65px;
  font-size: 18px;
  cursor: pointer;
  background-color: white;
  z-index: 3;

  @media screen and (max-width: 642px) {
    right: 30px;
    font-size: 14px;
  }
`;

export const CurrencyItem = styled.div`
  width: 114px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => selected === true && "#eeeeee"};
  &:hover {
    background-color: #eeeeee;
  }

  @media screen and (max-width: 642px) {
    width:90px;
    height: 36px;
  }
`;
