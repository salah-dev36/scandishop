import React, { Component } from "react";

import {
  Container,
  Name,
  ProductInfo,
  Brand,
  Price,
  ImageContainer,
  Image,
  QuantityEdit,
  Square,
  ProductLink,
} from "./cart-item-styles";

import Attributes from "../attributes/attributes-comp";
import Slider from "../slider/slider-comp";

import { extractPrice } from "../../utils/product-utils";

export class CartItem extends Component {
  renderPrice = () => {
    const {
      selectedCurrency,
      big,
      product: { prices },
    } = this.props;

    const { amount, currency } = extractPrice(prices, selectedCurrency);
    return <Price big={big}>{`${currency.symbol}${amount}`}</Price>;
  };

  render() {
    const {
      increase,
      decrease,
      big,
      product: { brand, name, gallery, quantity, attributes, id, category },
    } = this.props;

    return (
      <Container big={big}>
        <ProductInfo big={big}>
          <ProductLink to={`/${category}/${id}`} big={big}>
            <Brand big={big}>{brand}</Brand>
            <Name big={big}>{name}</Name>
          </ProductLink>
          {this.renderPrice()}
          <Attributes big={big} attributes={attributes} />
        </ProductInfo>
        <QuantityEdit big={big}>
          <Square big={big} onClick={increase}>
            &#43;
          </Square>
          {quantity}
          <Square big={big} onClick={decrease}>
            &#8722;
          </Square>
        </QuantityEdit>
        {big ? (
          <Slider imagesUrl={gallery} />
        ) : (
          <ImageContainer>
            <Image src={gallery[0]} />
          </ImageContainer>
        )}
      </Container>
    );
  }
}

export default CartItem;
