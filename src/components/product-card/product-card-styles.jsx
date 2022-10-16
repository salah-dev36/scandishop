import styled from "styled-components";

export const Container = styled.div`
  width: 354px;
  height: 412px;
  padding: 16px;
  position: relative;
  font-size: 18px;
  opacity: ${(props) => !props.inStock && "0.5"};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.07);
    box-shadow: rgba(168, 172, 176, 0.19) 0px 4px 35px;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 330px;
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

export const Name = styled.div``;

export const Price = styled.div`
  font-weight: 600;
`;

export const OutOfStock = styled.div`
  position: absolute;
  opacity: 0.8;
  font-size: 24px;
  z-index: 2;
  left: 103px;
  top: 167px;
`;

export const AddToCartImg = styled.img`
  position: absolute;
  right: 31px;
  bottom: 72px;
`;
