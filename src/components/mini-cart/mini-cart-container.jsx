import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_MINI_CART_DATA } from "../../graphql/queries";

import MiniCart from "./mini-cart-comp";

export class MiniCartContainer extends PureComponent {
  render() {
    return (
      <Query query={GET_MINI_CART_DATA}>
        {({ data }) => <MiniCart {...data} />}
      </Query>
    );
  }
}

export default MiniCartContainer;
