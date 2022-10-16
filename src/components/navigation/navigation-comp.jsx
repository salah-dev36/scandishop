import React, { Component } from "react";

import { Container, NavigationLink } from "./navigation-styles";

export class Navigation extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Container>
        {categories.map(({ name }) => (
          <NavigationLink key={name}>{name}</NavigationLink>
        ))}
      </Container>
    );
  }
}

export default Navigation;
