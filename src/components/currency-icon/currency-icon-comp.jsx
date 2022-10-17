import React, { Component } from "react";

import { Container } from "./currency-icon-styles";

export class CurrencyIcon extends Component {
  
  renderSelectedCurrency = () => {
    const { selectedCurrency, isCurrencySwitcherOpen } = this.props;
    if (isCurrencySwitcherOpen) {
      return <Container>{selectedCurrency} &#708;</Container>;
    } else {
      return <Container>{selectedCurrency} &#709;</Container>;
    }
  };

  render() {
    return (
      <div onClick={this.props.toggleCurrency}>
        {this.renderSelectedCurrency()}
      </div>
    );
  }
}

export default CurrencyIcon;
