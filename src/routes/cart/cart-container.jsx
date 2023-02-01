import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_CART_DATA } from "../../graphql/queries";

import Cart from "./cart-comp";

export class CartContainer extends PureComponent {
  render() {
    return (
      <Query query={GET_CART_DATA}>
        {({ data, loading }) => !loading && <Cart {...data} />}
      </Query>
    );
  }
}

export default CartContainer;
