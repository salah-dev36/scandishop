import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_CART_INFO } from "../../graphql/queries";

import MiniCart from "./mini-cart-comp";

export class MiniCartContainer extends Component {
  render() {
    return (
      <Query query={GET_CART_INFO}>
        {({ loading, data }) => !loading && <MiniCart {...data} />}
      </Query>
    );
  }
}

export default MiniCartContainer;
