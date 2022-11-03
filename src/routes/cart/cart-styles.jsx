import styled from "styled-components";

export const Container = styled.div`
  margin: 80px 0 200px 0;
  padding: 0 100px;
  min-width: 900px;
`;

export const EmptyCart = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  text-transform: uppercase;
`;
export const Title = styled.h1`
  text-transform: uppercase;
  margin: 0 0 55px 0;
`;

export const ItemsContainer = styled.div`
  width: 100%;

  > * {
    &:last-child {
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;
