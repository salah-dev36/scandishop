import React, { Component } from "react";

import {
  Container,
  Name,
  ProductInfo,
  Brand,
  Price,
  Image,
  QuantityEdit,
  Square,
} from "./mini-cart-item-styles";

import { extractPrice } from "../../utils/product-utils";
import Attributes from "../attributes/attributes-comp";

export class MiniCartItem extends Component {
  renderPrice = () => {
    const {
      selectedCurrency,
      product: { prices },
    } = this.props;

    const { amount, currency } = extractPrice(prices, selectedCurrency);
    return (
      <Price>{`${currency.symbol}${Math.floor(amount).toFixed(2)}`}</Price>
    );
  };

  render() {
    const {
      increase,
      decrease,
      product: { brand, name, gallery, quantity, attributes },
    } = this.props;

    return (
      <Container>
        <ProductInfo>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          {this.renderPrice()}
          <Attributes attributes={attributes} />
        </ProductInfo>
        <QuantityEdit>
          <Square onClick={increase}>+</Square>
          {quantity}
          <Square onClick={decrease}>&#8722;</Square>
        </QuantityEdit>
        <Image url={gallery[0]} />
      </Container>
    );
  }
}

export default MiniCartItem;
