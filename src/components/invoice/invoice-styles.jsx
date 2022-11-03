import styled from "styled-components";

export const Container = styled.div`
  font-size: 24px;
  margin: 32px 0 16px;
  display: table;
`;

export const Label = styled.span`
  font-weight: ${({ bolder }) => (bolder ? "600" : "400")};
  text-transform: capitalize;
  display: table-cell;

`;
export const Data = styled.span`
  font-weight: 700;
  padding-left: 3px;
`;

export const Row = styled.div`
display:table-row;
`