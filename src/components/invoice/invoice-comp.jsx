import React, { Component } from "react";

import { Container, Data, Label } from "./invoice-styles";

import { calculCartTotal, calculTax } from "../../utils/cart-utils";

export class Invoice extends Component {
  render() {
    const { cartItems, selectedCurrency, itemsCount } = this.props;
    const total = calculCartTotal(cartItems, selectedCurrency);
    const tax= calculTax(total)
    return (
      <Container>
        <tbody>
          <tr>
            <Label>Tax 21%:</Label>
            <Data>
              {selectedCurrency}
              {tax}
            </Data>
          </tr>
          <tr>
            <Label>Quantity:</Label>
            <Data>{itemsCount}</Data>
          </tr>
          <tr>
            <Label bolder="bolder">Total:</Label>
            <Data>
              {selectedCurrency}
              {total}
            </Data>
          </tr>
        </tbody>
      </Container>
    );
  }
}

export default Invoice;
