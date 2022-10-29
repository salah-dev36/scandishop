import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
`;

export const Brand = styled.span`
  font-weight: 300;
  display: block;
  padding: 3px 0;
`;

export const Name = styled(Brand)`
  margin-bottom: 4px;
`;

export const Price = styled.span`
  display: block;
  font-weight: 600;
  padding: 3px 0;
`;

export const Image = styled.div`
  width: 121px;
  background-image: url(${(props) => props.url});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const QuantityEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1px;
`;

export const Square = styled.button`
  width: 24px;
  height: 24px;
  background-color: white;
  border: 1px solid;
  font-size: 20px;
  padding: 0;
  cursor: pointer;
  user-select: none;
`;
