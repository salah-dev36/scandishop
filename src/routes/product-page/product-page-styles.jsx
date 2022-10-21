import styled from "styled-components";

export const Container = styled.div`
  width: 1230px;
  margin-top: 150px;
  height: 1000px;
  display: flex;
`;

export const Carrousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 80px;
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
`;

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
  margin: 8px 0;
`;

export const AttributeGroupe = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const AttributeName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const Attribute = styled.button`
  width: ${({ type }) => (type === "text" ? "64px" : "32px")};
  height: ${({ type }) => (type === "text" ? "45px" : "32px")};

  border ${({ type, color, selected }) =>
    type === "text"
      ? "1px solid black"
      : selected
      ? "1px solid white"
      : color === "#FFFFFF"
      ? "1px solid gray"
      : "none"};

  color: ${({ type, selected }) =>
    (type === "text") & selected ? "white" : "black"};

  outline: ${({ type, selected }) =>
    (type === "swatch") & selected && "1px solid #5ece7b"};

  background-color:${({ type, color, selected }) =>
    type === "swatch" ? color : selected ? "black" : "white"};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Description = styled.div``;
