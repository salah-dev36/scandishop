import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 56px;
  z-index: 4;
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
`;
