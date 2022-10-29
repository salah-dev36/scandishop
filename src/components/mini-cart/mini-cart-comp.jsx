import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Container,
  ItemsContainer,
  Total,
  ButtonsContainer,
  CartEmpty,
} from "./mini-cart-styles";

import { default as MiniCartItem } from "../mini-cart-item/mini-cart-item-container";
import Button from "../button/button-comp";

import { calculCartTotal } from "../../utils/cart-utils";

export class MiniCart extends Component {
  renderCartItems = () => {
    const { cartItems, selectedCurrency } = this.props;

    if (cartItems.length === 0) {
      return <CartEmpty>Cart is empty</CartEmpty>;
    } else {
      return (
        <ItemsContainer>
          {cartItems.map((cartItem) => (
            <MiniCartItem
              selectedCurrency={selectedCurrency}
              key={uuidv4()}
              product={cartItem}
            />
          ))}
        </ItemsContainer>
      );
    }
  };

  renderCartTotal = () => {
    const { cartItems, selectedCurrency } = this.props;

    return (
      <Total>
        total
        <span>{`${selectedCurrency}${calculCartTotal(
          cartItems,
          selectedCurrency
        ).toFixed(2)}`}</span>
      </Total>
    );
  };

  render() {
    const { itemsCount } = this.props;

    return (
      <Container>
        <div>
          <b>My Bag,</b> {itemsCount} items
        </div>
        {this.renderCartItems()}
        {this.renderCartTotal()}
        <ButtonsContainer>
          <Button feature="go-to-bag" children="view bag" />
          <Button feature="go-to-checkout" children="check out" />
        </ButtonsContainer>
      </Container>
    );
  }
}

export default MiniCart;
