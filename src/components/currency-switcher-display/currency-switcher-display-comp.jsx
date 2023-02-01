import React, { PureComponent } from "react";

import { Container, CurrencyItem } from "./currency-switcher-display-styles";

export class CurrencySwitcherDisplay extends PureComponent {
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
    const { currencies, selectCurrency, selectedCurrency } = this.props;

    return (
      <Container>
        {currencies.map(({ label, symbol }) => {
          return (
            <CurrencyItem
              selected={symbol === selectedCurrency}
              onClick={() => selectCurrency(symbol)}
              key={label}
            >
              {symbol} {label}
            </CurrencyItem>
          );
        })}
      </Container>
    );
  }
}

export default CurrencySwitcherDisplay;
