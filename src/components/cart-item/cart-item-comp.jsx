import React, { PureComponent } from "react";

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

export class CartItem extends PureComponent {
  renderPrice = () => {
    const {
      selectedCurrency,
      big,
      product: { prices },
    } = this.props;

    const { amount, currency } = extractPrice(prices, selectedCurrency);
    return <Price big={big}>{`${currency.symbol}${amount}`}</Price>;
  };

  renderQuantityEdit = () => {
    const {
      big,
      increase,
      decrease,
      product: { quantity },
    } = this.props;
    return (
      <QuantityEdit big={big}>
        <Square big={big} onClick={increase}>
          &#43;
        </Square>
        {quantity}
        <Square big={big} onClick={decrease}>
          &#8722;
        </Square>
      </QuantityEdit>
    );
  };

  renderProductImage = () => {
    const {
      big,
      product: { gallery },
    } = this.props;

    if (big) {
      return <Slider imagesUrl={gallery} />;
    } else {
      return (
        <ImageContainer>
          <Image src={gallery[0]} />
        </ImageContainer>
      );
    }
  };

  render() {
    const {
      big,
      product: { brand, name, attributes, id, category },
    } = this.props;

    return (
      <Container big={big}>
        <ProductInfo big={big}>
          <ProductLink big={big} to={`/${category}/${id}`}>
            <Brand big={big}>{brand}</Brand>
            <Name big={big}>{name}</Name>
          </ProductLink>
          {this.renderPrice()}
          <Attributes big={big} attributes={attributes} />
        </ProductInfo>
        {this.renderQuantityEdit()}
        {this.renderProductImage()}
      </Container>
    );
  }
}

export default CartItem;
