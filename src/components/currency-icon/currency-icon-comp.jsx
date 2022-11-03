import React, { Component } from "react";

import { Container } from "./currency-icon-styles";
import { ReactComponent as ArrowDown } from "../../assets/arrow-head-down.svg";
import { ReactComponent as ArrowUp } from "../../assets/arrow-head-up.svg";

export class CurrencyIcon extends Component {
  render() {
    const { selectedCurrency, isCurrencySwitcherOpen, toggleCurrency } =
      this.props;
    return (
      <Container onClick={toggleCurrency}>
        {selectedCurrency}{" "}
        {isCurrencySwitcherOpen ? <ArrowUp /> : <ArrowDown />}
      </Container>
    );
  }
}

export default CurrencyIcon;
