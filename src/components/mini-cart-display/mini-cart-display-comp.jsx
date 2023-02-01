import React, { PureComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import {
  Container,
  ItemsContainer,
  Total,
  ButtonsContainer,
  CartEmpty,
  Title,
} from "./mini-cart-display-styles";

import Button from "../button/button-comp";
import { default as CartItem } from "../cart-item/cart-item-container";

import { calculCartTotal } from "../../utils/cart-utils";

export class MiniCartDisplay extends PureComponent {
  componentDidMount() {
    document.addEventListener("mousedown", this.closeOnClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.closeOnClickOutside);
  }

  closeOnClickOutside = (event) => {
    const { closeCart, miniCartRef } = this.props;
    if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
      closeCart();
    }
  };

  renderCartItems = () => {
    const { cartItems, selectedCurrency } = this.props;

    if (cartItems.length === 0) {
      return <CartEmpty>Cart is empty</CartEmpty>;
    } else {
      return (
        <ItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem
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
    const cartTotal = calculCartTotal(cartItems, selectedCurrency);

    return (
      <Total>
        <span>total</span>
        <span>{`${selectedCurrency}${cartTotal}`}</span>
      </Total>
    );
  };

  render() {
    const { itemsCount, closeCart } = this.props;

    return (
      <Container>
        <Title>
          <span>My Bag,</span> {itemsCount} items
        </Title>
        {this.renderCartItems()}
        {this.renderCartTotal()}
        <ButtonsContainer>
          <Link onClick={closeCart} to="/cart">
            <Button feature="go-to-bag" children="view bag" />
          </Link>
          <Button feature="go-to-checkout" children="check out" />
        </ButtonsContainer>
      </Container>
    );
  }
}

export default MiniCartDisplay;
