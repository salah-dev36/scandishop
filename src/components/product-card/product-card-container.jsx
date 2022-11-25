import React, { Component } from "react";
import { Mutation } from "@apollo/client/react/components";

import { ADD_TO_CART } from "../../graphql/mutations";

import ProductCard from "./product-card-comp";

import { selectDefaultAttributes } from "../../utils/product-utils";

export class ProductCardContainer extends Component {
  render() {
    const { product } = this.props;

    return (
      <Mutation
        mutation={ADD_TO_CART}
        variables={{
          productToAdd: product,
          selectedAttributes: selectDefaultAttributes(product.attributes),
        }}
      >
        {(addToCart) => <ProductCard {...this.props} addToCart={addToCart} />}
      </Mutation>
    );
  }
}

export default ProductCardContainer;
