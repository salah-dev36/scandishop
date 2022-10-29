import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  width: 325px;
  height: 677px;
  background-color: white;
  padding: 32px 16px;
  position: absolute;
  right: -28px;
  top: 78px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ItemsContainer = styled.div`
  widht: 293px;
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartEmpty = styled(ItemsContainer)`
  justify-content: center;
  align-items: center;
  font-size: 21px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  text-transform: capitalize;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
