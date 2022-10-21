import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_PRODUCT_BY_ID_FOR_PAGE } from "../../graphql/queries";

import Spinner from "../../components/spinner/spinner-comp";
import ProductPage from "./product-page-comp";

export class ProductPageContainer extends Component {
  render() {
    const { productId } = this.props.match.params;
    return (
      <Query query={GET_PRODUCT_BY_ID_FOR_PAGE} variables={{ id: productId }}>
        {({ data, loading }) =>
          loading ? <Spinner /> : <ProductPage {...data} />
        }
      </Query>
    );
  }
}

export default ProductPageContainer;
