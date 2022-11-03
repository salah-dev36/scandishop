import React, { Component } from "react";

import { Container, Data, Label, Row } from "./invoice-styles";

import { calculCartTotal, calculTax } from "../../utils/cart-utils";

export class Invoice extends Component {
  render() {
    const { cartItems, selectedCurrency, itemsCount } = this.props;
    const total = calculCartTotal(cartItems, selectedCurrency);
    const tax = calculTax(total);
    return (
      <Container>
        <Row>
          <Label>tax 21%:</Label>
          <Data>
            {selectedCurrency}
            {tax}
          </Data>
        </Row>
        <Row>
          <Label>quantity:</Label>
          <Data>{itemsCount}</Data>
        </Row>
        <Row>
          <Label bolder="bolder">total:</Label>
          <Data>
            {selectedCurrency}
            {total}
          </Data>
        </Row>
      </Container>
    );
  }
}

export default Invoice;
