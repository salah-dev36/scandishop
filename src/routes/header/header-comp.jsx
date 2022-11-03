import React, { Component } from "react";

import { default as Navigation } from "../../components/navigation/navigation-container";
import { default as CurrencySwitcher } from "../../components/currency-switcher/currency-switcher-container";

import ShopLogo from "../../assets/shop-logo.png";

import { Container, Features, Logo } from "./header-styles";
import { default as MiniCart } from "../../components/mini-cart/mini-cart-container";

export class Header extends Component {
  render() {
    return (
      <Container className="header">
        <Navigation />
        <Logo src={ShopLogo} />
        <Features>
          <CurrencySwitcher />
          <MiniCart />
        </Features>
      </Container>
    );
  }
}

export default Header;
