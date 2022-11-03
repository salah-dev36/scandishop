import styled from "styled-components";

export const Container = styled.div`
  margin: 150px 0;
  display: flex;
  padding: 0 100px;
`;

export const Carrousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-right: 40px;
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
`;

export const ProductInfo = styled.div`
  background-color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
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
`;

export const PriceTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin-top: 12px;
`;

export const Description = styled.div``;
