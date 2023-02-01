import React, { PureComponent } from "react";
import { Mutation, Query } from "@apollo/client/react/components";


import { GET_SELECTED_CURRENCY } from "../../graphql/queries";
import { CLOSE_CART } from "../../graphql/mutations";

import MiniCartDisplay from "./mini-cart-display-comp";

export class MiniCartDisplayContainer extends PureComponent {
  render() {
    return (
      <Query query={GET_SELECTED_CURRENCY}>
        {
          ({data}) => <Mutation mutation={CLOSE_CART}>
          {(closeCart) => (
            <MiniCartDisplay {...data} closeCart={closeCart} {...this.props} />
          )}
        </Mutation>
        }
      </Query>
    );
  }
}

export default MiniCartDisplayContainer;
