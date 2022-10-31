import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  min-height: 288px;
  position: relative;
  margin-left: 24px;
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const RightArrowBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: black;
  opacity: 0.73;
  position: absolute;
  right: 16px;
  bottom: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LeftArrowBox = styled(RightArrowBox)`
  right: 48px;
  bottom: 16px;
`;
