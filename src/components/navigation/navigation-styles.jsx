import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 56px;
`;

export const NavigationLink = styled.div`
  padding: 4px 16px 32px;
  text-transform: uppercase;

  &:hover {
    font-weight: 600;
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }
`;
