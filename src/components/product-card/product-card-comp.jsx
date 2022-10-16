import React, { Component } from "react";

import {
  Container,
  ProductImage,
  ProductInfo,
  Name,
  Price,
  OutOfStock,
  AddToCartImg,
} from "./product-card-styles";

import GreenCartImg from "../../assets/add-to-cart-img.png";

export class ProductCard extends Component {
  render() {
    const { gallery, name, brand, prices, inStock } = this.props.product;
    const {
      amount,
      currency: { symbol },
    } = prices[0];
    return (
      <Container inStock={inStock}>
        {inStock ? (
          <AddToCartImg src={GreenCartImg} />
        ) : (
          <OutOfStock>OUT OF STOCK</OutOfStock>
        )}
        <ProductImage url={gallery[0]} />
        <ProductInfo>
          <Name>
            {brand} {name}
          </Name>
          <Price>
            {symbol}
            {amount}
          </Price>
        </ProductInfo>
      </Container>
    );
  }
}

export default ProductCard;
