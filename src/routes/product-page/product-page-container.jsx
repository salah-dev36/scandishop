import React, { PureComponent } from "react";
import { Mutation, Query } from "@apollo/client/react/components";

import { GET_PRODUCT_BY_ID_FOR_PAGE } from "../../graphql/queries";
import { ADD_TO_CART } from "../../graphql/mutations";

import Spinner from "../../components/spinner/spinner-comp";
import ProductPage from "./product-page-comp";

export class ProductPageContainer extends PureComponent {
  render() {
    const { productId } = this.props.match.params;
    return (
      <Query query={GET_PRODUCT_BY_ID_FOR_PAGE} variables={{ id: productId }}>
        {({ data, loading }) =>
          loading ? (
            <Spinner />
          ) : (
            <Mutation mutation={ADD_TO_CART}>
              {(addToCart) => (
                <ProductPage
                  {...data}
                  addToCart={(productToAdd, selectedAttributes) =>
                    addToCart({
                      variables: { productToAdd, selectedAttributes },
                    })
                  }
                />
              )}
            </Mutation>
          )
        }
      </Query>
    );
  }
}

export default ProductPageContainer;
