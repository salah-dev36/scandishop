import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_PRODUCTS_BY_CATEGORY } from "../../graphql/queries";

import Category from "./category-comp";
import Spinner from "../../components/spinner/spinner-comp";

export class CategoryContainer extends PureComponent {
  render() {
    const { category } = this.props;
    return (
      <Query query={GET_PRODUCTS_BY_CATEGORY} variables={{ title: category }}>
        {({ data, loading }) =>
          loading ? (
            <Spinner />
          ) : (
            <Category
              selectedCurrency={data.selectedCurrency}
              products={data.category.products}
              category={category}
            />
          )
        }
      </Query>
    );
  }
}

export default CategoryContainer;
