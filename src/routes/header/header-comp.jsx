import React, { Component } from "react";
import { default as Navigation } from "../../components/navigation/navigation-container";
import { Container } from "./header-styles";

export class Header extends Component {
  render() {
    return (
      <Container>
        <Navigation />
      </Container>
    );
  }
}

export default Header;
