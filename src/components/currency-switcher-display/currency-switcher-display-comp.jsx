import React, { Component } from "react";

import { Container, CurrencyItem } from "./currency-switcher-display-styles";

export class CurrencySwitcherDisplay extends Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.closeOnClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.closeOnClickOutside);
  }

  closeOnClickOutside = (event) => {
    const { closeCurrencySwitcher, switcherRef } = this.props;
    if (switcherRef.current && !switcherRef.current.contains(event.target)) {
      closeCurrencySwitcher();
    }
  };

  render() {
    const { currencies, selectCurrency } = this.props;
    return (
      <Container>
        {currencies.map(({ label, symbol }) => (
          <CurrencyItem onClick={() => selectCurrency(symbol)} key={label}>
            {symbol} {label}
          </CurrencyItem>
        ))}
      </Container>
    );
  }
}

export default CurrencySwitcherDisplay;
