import React, { Component } from "react";
import { Query, Mutation } from "@apollo/client/react/components";

import { GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN } from "../../graphql/queries";
import { TOGGLE_CURRENCY } from "../../graphql/mutations";

import CurrencyIcon from "./currency-icon-comp";

export class CurrencyIconContainer extends Component {
  render() {
    return (
      <Query query={GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN}>
        {({ data, loading }) =>
          !loading && (
            <Mutation mutation={TOGGLE_CURRENCY}>
              {(toggleCurrency) => (
                <CurrencyIcon {...data} toggleCurrency={toggleCurrency} />
              )}
            </Mutation>
          )
        }
      </Query>
    );
  }
}

export default CurrencyIconContainer;
