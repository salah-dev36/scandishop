import React, { Component } from "react";

import { default as CurrencyIcon } from "../../components/currency-icon/currency-icon-container";
import { default as CurrencySwitcher } from "../../components/currency-switcher/currency-switcher-container";
import { default as Navigation } from "../../components/navigation/navigation-container";

import { Container, Features } from "./header-styles";

export class Header extends Component {
  renderCurrencySwitcher = () => {
    const { isCurrencySwitcherOpen } = this.props;
    if (isCurrencySwitcherOpen) {
      return <CurrencySwitcher />;
    }
  };

  render() {
    return (
      <Container>
        <Navigation />
        <Features>
          <CurrencyIcon />
        </Features>
        {this.renderCurrencySwitcher()}
      </Container>
    );
  }
}

export default Header;
