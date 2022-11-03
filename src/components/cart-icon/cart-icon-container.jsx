import React, { Component } from "react";
import { Mutation } from "@apollo/client/react/components";

import { TOGGLE_CART } from "../../graphql/mutations";

import CartIcon from "./cart-icon-comp";

export class CartIconContainer extends Component {
  render() {
    return (
      <Mutation mutation={TOGGLE_CART}>
        {(toggleCart) => <CartIcon {...this.props} toggleCart={toggleCart} />}
      </Mutation>
    );
  }
}

export default CartIconContainer;
