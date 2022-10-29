import React, { Component } from "react";
import { Mutation, Query } from "@apollo/client/react/components";

import { GET_ITEMS_COUNT } from "../../graphql/queries";
import { TOGGLE_CART } from "../../graphql/mutations";

import CartIcon from "./cart-icon-comp";

export class CartIconContainer extends Component {
  render() {
    return (
      <Query query={GET_ITEMS_COUNT}>
        {({ data, loading }) =>
          !loading && (
            <Mutation mutation={TOGGLE_CART}>
              {(toggleCart) => <CartIcon {...data} toggleCart={toggleCart} />}
            </Mutation>
          )
        }
      </Query>
    );
  }
}

export default CartIconContainer;
