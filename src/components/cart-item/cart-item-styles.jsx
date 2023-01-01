import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;

  ${({ big }) =>
    big &&
    `
    padding: 24px 0; 
    border-top: 1px solid #E5E5E5;
    @media screen and (max-width: 829px) {
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
  `}
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  gap: ${({ big }) => (big ? "20px" : "10px")};
`;

export const Brand = styled.span`
  font-weight: 300;
  ${({ big }) =>
    big &&
    `
      font-weight: 700; 
      font-size: 30px; 
      @media screen and (max-width: 829px) {
        font-size: 20px;
      }
    `}
`;

export const Name = styled(Brand)`
  font-weight: 400;
`;

export const Price = styled.span`
  display: block;
  font-weight: 600;
  font-size: ${({ big }) => big && "24px"};
`;

export const ImageContainer = styled.div`
  width: 121px;
  min-width: 121px;
  overflow: hidden;
  margin-left: 7px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const QuantityEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1px;

  ${({ big }) =>
    big &&
    `
    font-size: 24px;
    @media screen and (max-width: 829px) {
      flex-direction: row-reverse;
      padding: 0 15px;
      order : 1;
    }
  `}
 

`;

export const Square = styled.button`
  background-color: white;
  border: 1px solid;
  padding: 0;
  cursor: pointer;
  user-select: none;

  &:active {
    background-color: black;
    color: white;
  }

  ${({ big }) =>
    big
      ? `
      width: 45px;
      height: 45px;
      font-size: 25px;
      @media screen and (max-width: 829px) {
        width: 35px;
        height: 35px;
        font-size: 20px;
      }
  `
      : `
      width: 24px;
      height: 24px;
      font-size: 20px;
  `};
`;

export const ProductLink = styled(Link)`
  display: flex;
  flex-direction: column;
  ${({ big }) =>
    big
      ? `
      gap: 16px;
  `
      : `
      pointer-events:none;
      gap:8px;
  `}
`;
