import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_PRODUCT_BY_ID } from "../../graphql/queries";

import ProductCard from "./product-card-comp";

export class ProductCardContainer extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={GET_PRODUCT_BY_ID} variables={{ id: id }}>
        {({ data, loading }) => !loading && <ProductCard {...data} />}
      </Query>
    );
  }
}

export default ProductCardContainer;
