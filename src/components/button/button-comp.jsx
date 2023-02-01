import React, { PureComponent } from "react";

import {
  AddToCartBtn,
  CheckOutBtn,
  OrderBtn,
  ViewBagBtn,
} from "./button-styles";

export class Button extends PureComponent {
  render() {
    const { feature, addToCart, children, inStock } = this.props;

    return (
      <>
        {feature === "add-to-cart" ? (
          <AddToCartBtn disabled={!inStock} onClick={addToCart}>
            {children}
          </AddToCartBtn>
        ) : feature === "go-to-checkout" ? (
          <CheckOutBtn>{children}</CheckOutBtn>
        ) : feature === "go-to-bag" ? (
          <ViewBagBtn>{children} </ViewBagBtn>
        ) : (
          feature === "order" && <OrderBtn>{children}</OrderBtn>
        )}
      </>
    );
  }
}

export default Button;
