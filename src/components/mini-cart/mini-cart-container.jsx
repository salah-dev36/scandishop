import React, { Component } from "react";
import { Query, Mutation } from "@apollo/client/react/components";

import { GET_CART_INFO } from "../../graphql/queries";
import { CLOSE_CART } from "../../graphql/mutations";

import MiniCart from "./mini-cart-comp";

export class MiniCartContainer extends Component {
  render() {
    return (
      <Query query={GET_CART_INFO}>
        {({ loading, data }) =>
          !loading && (
            <Mutation mutation={CLOSE_CART}>
              {(closeCart) => <MiniCart closeCart={closeCart} {...data} />}
            </Mutation>
          )
        }
      </Query>
    );
  }
}

export default MiniCartContainer;
