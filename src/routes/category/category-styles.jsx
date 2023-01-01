import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 100px;
  @media screen and (max-width: 642px) {
    padding:  40px 20px;
  }

  @media screen and (max-width: 428px) {
    padding: 40px 0;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;

  @media screen and (max-width: 428px) {
    margin-left: 20px;
  }
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(386px, 3fr));
  row-gap: 103px;
  place-items: center;
  max-width: 1240px;
  margin: 100px auto;
  @media screen and (max-width: 642px) {
    margin: 50px auto;
    row-gap: 50px;
  }

`;
