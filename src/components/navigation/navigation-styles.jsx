import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 56px;
  @media screen and (max-width: 642px) {
    height: 48px;
  }
`;

export const NavigationLink = styled(NavLink)`
  padding: 4px 16px 32px;
  text-transform: uppercase;
  text-decoration: none;

  

  &.${(props) => props.activeClassName} {
    font-weight: 600;
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }

  @media screen and (max-width: 642px) {
    font-size: 14px;
    padding: 2px 8px 16px;
  }
`;
