import React, { Component } from "react";

import { default as ProductCard } from "../../components/product-card/product-card-container";

import { Container, Title, ProductsList } from "./category-styles";

export class Category extends Component {
  constructor() {
    super();
    this.state = {
      limit: 6,
    };
  }

  handleScroll = (event) => {
    const { products } = this.props;
    const scrollHeight = event.target.documentElement.scrollHeight;
    const currentHeight =
      event.target.documentElement.scrollTop + window.innerHeight;
    if (
      currentHeight + 1 >= scrollHeight &&
      // to avoid extra rerenders if there is no more products
      this.state.limit < products.length
    ) {
      this.setState({
        limit: this.state.limit + 3,
      });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { products, category } = this.props;
    return (
      <Container>
        <Title>{category}</Title>
        <ProductsList>
          {products
            ?.filter((item) => products.indexOf(item) < this.state.limit)
            .map(({ id }) => (
              <ProductCard id={id} key={id} />
            ))}
        </ProductsList>
      </Container>
    );
  }
}

export default Category;
