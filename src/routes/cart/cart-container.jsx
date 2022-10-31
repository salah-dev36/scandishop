import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_CART_INFO } from "../../graphql/queries";

import Cart from "./cart-comp";

export class CartContainer extends Component {
  render() {
    return (
      <Query query={GET_CART_INFO}>
        {({ data, loading }) => !loading && <Cart {...data} />}
      </Query>
    );
  }
}

export default CartContainer;
