import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { Container, EmptyCart, ItemsContainer, Title } from "./cart-styles";

import { default as CartItem } from "../../components/cart-item/cart-item-container";
import Invoice from "../../components/invoice/invoice-comp";
import Button from "../../components/button/button-comp";

export class Cart extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { cartItems, selectedCurrency } = this.props;
    return (
      <Container>
        <Title>cart</Title>
        {cartItems.length < 1 && <EmptyCart>cart is empty</EmptyCart>}
        <ItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem
              selectedCurrency={selectedCurrency}
              key={uuidv4()}
              product={cartItem}
              big="big"
            />
          ))}
        </ItemsContainer>
        <Invoice {...this.props} />
        <Button feature="order" children="order" />
      </Container>
    );
  }
}

export default Cart;
