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
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }

  onHoverHandle = () => this.setState({ hover: true });

  onHoverOutHandle = () => this.setState({ hover: false });

  renderAddToCart = () => {
    const { inStock } = this.props.product;
    const { hover } = this.state;

    if (inStock & hover) {
      return <AddToCartImg src={GreenCartImg} />;
    }
  };

  renderOutOfStock = () => {
    const { inStock } = this.props.product;

    if (!inStock) {
      return <OutOfStock>OUT OF STOCK</OutOfStock>;
    }
  };

  render() {
    const { gallery, name, brand, prices, inStock } = this.props.product;
    const {
      amount,
      currency: { symbol },
    } = prices[0];

    return (
      <Container
        onMouseOver={this.onHoverHandle}
        onMouseOut={this.onHoverOutHandle}
        inStock={inStock}
      >
        {" "}
        {this.renderOutOfStock()}
        {this.renderAddToCart()}
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
