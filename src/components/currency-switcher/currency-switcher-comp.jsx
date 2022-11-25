import React, { Component } from "react";

import { default as CurrencyIcon } from "../currency-icon/currency-icon-container";
import { default as CurrencySwitcherDisplay } from "../currency-switcher-display/currency-switcher-display-container";

export class CurrencySwitcher extends Component {
  constructor() {
    super();
    this.SwitcherRef = React.createRef();
  }

  render() {
    const { selectedCurrency, isCurrencySwitcherOpen, currencies } = this.props;
    return (
      <div ref={this.SwitcherRef}>
        <CurrencyIcon
          selectedCurrency={selectedCurrency}
          isCurrencySwitcherOpen={isCurrencySwitcherOpen}
        />
        {isCurrencySwitcherOpen && (
          <CurrencySwitcherDisplay
            switcherRef={this.SwitcherRef}
            currencies={currencies}
            selectedCurrency={selectedCurrency}
          />
        )}
      </div>
    );
  }
}

export default CurrencySwitcher;
