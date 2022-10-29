import React, { Component } from "react";
import { Mutation } from "@apollo/client/react/components";

import { ADD_TO_CART, REMOVE_FROM_CART } from "../../graphql/mutations";
import MiniCartItem from "./mini-cart-item-comp";

export class MiniCartItemContainer extends Component {
  render() {
    const { product } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART}
        variables={{
          productToAdd: product,
          selectedAttributes: product.attributes,
        }}
      >
        {(addToCart) => (
          <Mutation
            mutation={REMOVE_FROM_CART}
            variables={{ productToRemove: product }}
          >
            {(removeFromCart) => (
              <MiniCartItem
                {...this.props}
                decrease={removeFromCart}
                increase={addToCart}
              />
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export default MiniCartItemContainer;
