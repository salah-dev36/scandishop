import React, { Component } from "react";

import { default as CartIcon } from "../../components/cart-icon/cart-icon-container";
import { default as CurrencyIcon } from "../../components/currency-icon/currency-icon-container";
import { default as CurrencySwitcher } from "../../components/currency-switcher/currency-switcher-container";
import { default as MiniCart } from "../../components/mini-cart/mini-cart-container";
import { default as Navigation } from "../../components/navigation/navigation-container";

import ShopLogo from "../../assets/shop-logo.png";

import { Container, Features, Logo, Overlay } from "./header-styles";

export class Header extends Component {
  render() {
    const { isCurrencySwitcherOpen, isCartOpen, closeCartAndCurrency } =
      this.props;

    return (
      <Container className="header">
        <Navigation closeCartAndCurrency={() => closeCartAndCurrency()} />
        <Logo src={ShopLogo}/>
        <Features>
          <CurrencyIcon />
          <CartIcon />
        </Features>
        {isCurrencySwitcherOpen && (
          <>
            <CurrencySwitcher /> <Overlay onClick={closeCartAndCurrency} />
          </>
        )}
        {isCartOpen && (
          <>
            <MiniCart />
            <Overlay feature="cart" onClick={closeCartAndCurrency} />
          </>
        )}
      </Container>
    );
  }
}

export default Header;
