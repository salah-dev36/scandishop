import React, { PureComponent } from "react";
import { Mutation } from "@apollo/client/react/components";

import { ADD_TO_CART, REMOVE_FROM_CART } from "../../graphql/mutations";
import CartItem from "./cart-item-comp";

export class CartItemContainer extends PureComponent {
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
              <CartItem
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

export default CartItemContainer;
