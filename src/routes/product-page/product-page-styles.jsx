import styled from "styled-components";

export const Container = styled.div`
  margin: 150px 0;
  display: flex;
  padding: 0 100px;

  @media screen and (max-width: 642px) {
    padding: 10px;
    margin: 50px auto;
    flex-direction: column;
    gap: 40px;
  }
`;

export const Carrousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-right: 40px;
  @media screen and (max-width: 642px) {
    flex-direction: row;
  }
`;

export const CarrouselItem = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const MainImage = styled.div`
  width: 610px;
  min-width: 300px;
  height: 511px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 100px;
  opacity: ${({ inStock }) => !inStock && "0.5"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;

  @media screen and (max-width: 642px) {
    order: -1;
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
`;

export const ProductInfo = styled.div`
  background-color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 642px) {
    gap: 5px;
    margin: 0 auto;
  }
`;

export const Title = styled.div``;

export const Brand = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
`;
export const Name = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin: 16px 0;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 700;
  align-self: start;
`;

export const PriceTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin-top: 12px;
  align-self: start;
`;

export const Description = styled.div``;
