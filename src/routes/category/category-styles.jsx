import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 100px;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 103px;
  place-items: center;
  max-width: 1240px;
  margin: 100px auto;

  @media screen and (max-width:1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
