import React, { Component } from "react";

import { default as MiniCartDisplay } from "../mini-cart-display/mini-cart-display-container";
import { default as CartIcon } from "../cart-icon/cart-icon-container";

import { Overlay } from "./mini-cart-styles";

export class MiniCart extends Component {
  constructor() {
    super();
    this.miniCartRef = React.createRef();
  }

  render() {
    const { cartItems, itemsCount, isCartOpen } = this.props;
    return (
      <>
        <div ref={this.miniCartRef}>
          <CartIcon itemsCount={itemsCount} />
          {isCartOpen && (
            <MiniCartDisplay
              cartItems={cartItems}
              miniCartRef={this.miniCartRef}
              itemsCount={itemsCount}
            />
          )}
        </div>
        {isCartOpen && <Overlay />}
      </>
    );
  }
}

export default MiniCart;
