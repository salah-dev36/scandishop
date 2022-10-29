import React, { Component } from "react";

import { default as CartIcon } from "../../components/cart-icon/cart-icon-container";
import { default as CurrencyIcon } from "../../components/currency-icon/currency-icon-container";
import { default as CurrencySwitcher } from "../../components/currency-switcher/currency-switcher-container";
import { default as MiniCart } from "../../components/mini-cart/mini-cart-container";
import { default as Navigation } from "../../components/navigation/navigation-container";

import { Container, Features } from "./header-styles";

export class Header extends Component {
  render() {
    const { isCurrencySwitcherOpen, isCartOpen } = this.props;

    return (
      <Container>
        <Navigation />
        <Features>
          <CurrencyIcon />
          <CartIcon />
        </Features>
        {isCurrencySwitcherOpen && <CurrencySwitcher />}
        {isCartOpen && <MiniCart />}
      </Container>
    );
  }
}

export default Header;
