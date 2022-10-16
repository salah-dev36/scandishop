import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_PRODUCTS_ID_BY_CATEGORY } from "../../graphql/queries";

import Category from "./category-comp";
import Spinner from "../../components/spinner/spinner-comp";

export class CategoryContainer extends Component {
  render() {
    return (
      <Query query={GET_PRODUCTS_ID_BY_CATEGORY} variables={{ title: "all" }}>
        {({ data, loading }) =>
          loading? <Spinner />: <Category products={data.category.products} />
        }
      </Query>
    );
  }
}

export default CategoryContainer;
