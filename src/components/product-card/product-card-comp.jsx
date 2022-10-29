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
import { Link } from "react-router-dom";

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
    const {
      addToCart,
      product: { inStock },
    } = this.props;
    const { hover } = this.state;

    if (inStock && hover) {
      return <AddToCartImg onClick={addToCart} src={GreenCartImg} />;
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
    return <Price>{`${symbol} ${Math.floor(amount).toFixed(2)}`}</Price>;
  };

  render() {
    const { gallery, name, brand, inStock, category, id } = this.props.product;

    return (
      <Container
        onMouseOver={this.onHoverHandle}
        onMouseOut={this.onHoverOutHandle}
        instock={`${inStock}`}
      >
        <Link to={`/${category}/${id}`}>
          {this.renderOutOfStock()}
          <ProductImage url={gallery[0]} />
          <ProductInfo>
            <Name>
              {brand} {name}
            </Name>
            {this.renderPrice()}
          </ProductInfo>
        </Link>
        {this.renderAddToCart()}
      </Container>
    );
  }
}

export default ProductCard;
