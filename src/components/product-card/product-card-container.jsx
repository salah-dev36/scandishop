import React, { Component } from "react";
import { Query, Mutation } from "@apollo/client/react/components";

import { GET_PRODUCT_BY_ID_FOR_CARD } from "../../graphql/queries";
import { ADD_TO_CART } from "../../graphql/mutations";

import ProductCard from "./product-card-comp";
import { selectDefaultAttributes } from "../../utils/product-utils";

export class ProductCardContainer extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={GET_PRODUCT_BY_ID_FOR_CARD} variables={{ id }}>
        {({ data, loading }) =>
          !loading && (
            <Mutation
              mutation={ADD_TO_CART}
              variables={{
                productToAdd: data.product,
                selectedAttributes: selectDefaultAttributes(
                  data.product.attributes
                ),
              }}
            >
              {(addToCart) => <ProductCard {...data} addToCart={addToCart} />}
            </Mutation>
          )
        }
      </Query>
    );
  }
}

export default ProductCardContainer;
