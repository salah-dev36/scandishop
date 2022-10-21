import React, { Component } from "react";

import { AddToCart } from "./button-styles";

export class Button extends Component {
  render() {
    const { children } = this.props;

    return <AddToCart>{children}</AddToCart>;
  }
}

export default Button;
