import styled from "styled-components";

export const CheckOutBtn = styled.button`
  width: 140px;
  height: 43px;
  border: none;
  color: white;
  background-color: #5ece7b;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;

  &:active {
    background-color: #4ba663;
    transform: scale(0.99);
  }
`;

export const AddToCartBtn = styled(CheckOutBtn)`
  width: 292px;
  height: 52px;
  min-height: 52px;
  letter-spacing: 0.5px;
  margin: 12px 0;
  background-color: ${(props) => props.disabled && "#4ba663"};
  cursor: ${(props) => props.disabled && "not-allowed"};
`;

export const ViewBagBtn = styled(CheckOutBtn)`
  background-color: white;
  color: black;
  border: 1px solid;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const OrderBtn = styled(CheckOutBtn)`
  width: 279px;
  height: 43px;
`;
