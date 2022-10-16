import React, { Component } from "react";

import { default as ProductCard } from "../../components/product-card/product-card-container";

import { Container, Title, ProductsList } from "./category-styles";

export class Category extends Component {
  render() {
    const { products, category } = this.props;
    return (
      <Container>
        <Title>{category}</Title>
        <ProductsList>
          {products.map(({ id }) => (
            <ProductCard id={id} key={id} />
          ))}
        </ProductsList>
      </Container>
    );
  }
}

export default Category;
