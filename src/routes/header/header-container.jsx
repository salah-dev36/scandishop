import React, { Component } from "react";
import { Query, Mutation } from "@apollo/client/react/components";

import { GET_IS_CART_AND_CURRENCY_OPEN } from "../../graphql/queries";
import { CLOSE_CART_AND_CURRENCY } from "../../graphql/mutations";

import Header from "./header-comp";

export class HeaderContainer extends Component {
  render() {
    return (
      <Query query={GET_IS_CART_AND_CURRENCY_OPEN}>
        {({ data }) => (
          <Mutation mutation={CLOSE_CART_AND_CURRENCY}>
            
            {(closeCartAndCurrency) => (
              <Header closeCartAndCurrency={closeCartAndCurrency} {...data} />
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}

export default HeaderContainer;
