import styled from "styled-components";

export const Container = styled.div`
  width: 386px;
  height: 444px;
  padding: 16px;
  position: relative;
  font-size: 18px;
  opacity: ${(props) => props.instock === "false" && "0.5"};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.07);
    box-shadow: rgba(168, 172, 176, 0.19) 0px 4px 35px;
  }
`;

export const ProductImage = styled.div`
  height: 330px;
  width: 354px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ProductInfo = styled.div`
  margin-top: 24px;
  height: 56px;
  line-height: 1.7;
`;

export const Name = styled.span``;

export const Price = styled.span`
  display: block;
  font-weight: 600;
`;

export const OutOfStock = styled.span`
  position: absolute;
  opacity: 0.8;
  font-size: 24px;
  z-index: 2;
  left: 106px;
  top: 158px;
`;

export const AddToCartImg = styled.img`
  position: absolute;
  right: 31px;
  bottom: 72px;
`;
