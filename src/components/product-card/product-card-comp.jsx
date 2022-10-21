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

import { extractPrice } from "../../utils/product-utils";

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

  renderPrice = () => {
    const {
      selectedCurrency,
      product: { prices },
    } = this.props;

    const {
      amount,
      currency: { symbol },
    } = extractPrice(prices, selectedCurrency);
    return (
      <Price>
        {symbol} {amount}
      </Price>
    );
  };

  render() {
    const { gallery, name, brand, inStock, category, id } = this.props.product;

    return (
      <Container
        onMouseOver={this.onHoverHandle}
        onMouseOut={this.onHoverOutHandle}
        instock={`${inStock}`}
        to={`/${category}/${id}`}
      >
        {this.renderOutOfStock()}
        {this.renderAddToCart()}
        <ProductImage url={gallery[0]} />
        <ProductInfo>
          <Name>
            {brand} {name}
          </Name>
          {this.renderPrice()}
        </ProductInfo>
      </Container>
    );
  }
}

export default ProductCard;
