import styled from "styled-components";

export const Container = styled.table`
  text-align: left;
  font-size: 24px;
  margin: 32px 0 16px;
`;

export const Label = styled.th`
  font-weight: ${({ bolder }) => (bolder ? "600" : "400")};
`;
export const Data = styled.td`
  font-weight: 700;
  padding-left: 3px;
`;
