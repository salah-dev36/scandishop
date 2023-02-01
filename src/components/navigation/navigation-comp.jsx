import React, { PureComponent } from "react";
import { Redirect, withRouter } from "react-router-dom";

import { Container, NavigationLink } from "./navigation-styles";

export class Navigation extends PureComponent {
  redirectToALL = () => {
    const {
      categories,
      location: { pathname },
    } = this.props;

    if (pathname === "/") {
      return <Redirect to={categories[0].name} />;
    }
  };

  render() {
    const { categories } = this.props;
    return (
      <Container>
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
