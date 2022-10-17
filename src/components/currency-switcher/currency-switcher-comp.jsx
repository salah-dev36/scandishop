import React, { Component } from "react";

import { Container, CurrencyItem } from "./currency-switcher-styles";

export class CurrencySwitcher extends Component {
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

export default CurrencySwitcher;
