import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";

import { Container, NavigationLink } from "./navigation-styles";

export class Navigation extends Component {
  redirectToALL = () => {
    const { categories, location: { pathname }} = this.props;

    if (pathname === "/") {
      return <Redirect to={categories[0].name} />;
    }
  };

  render() {
    const { categories, closeCartAndCurrency } = this.props;
    return (
      <Container onClick={closeCartAndCurrency}>
        {this.redirectToALL()}
        {categories.map(({ name }) => (
          <NavigationLink to={`/${name}`} key={name} activeClassName="any">
            {name}
          </NavigationLink>
        ))}
      </Container>
    );
  }
}

export default withRouter(Navigation);
