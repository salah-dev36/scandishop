import React, { Component } from "react";
import { Query, Mutation } from "@apollo/client/react/components";

import { GET_CURRENCIES } from "../../graphql/queries";
import { SELECT_CURRENCY, TOGGLE_CURRENCY } from "../../graphql/mutations";

import CurrencySwitcher from "./currency-switcher-comp";

export class CurrencySwitcherContainer extends Component {
  render() {
    return (
      <Query query={GET_CURRENCIES}>
        {({ data, loading }) =>
          !loading && (
            <Mutation mutation={SELECT_CURRENCY}>
              {(selectCurrency) => (
                <Mutation mutation={TOGGLE_CURRENCY}>
                  {(toggleCurrency) => (
                    <CurrencySwitcher
                      toggleCurrency={toggleCurrency}
                      selectCurrency={(newCurrency) =>
                        selectCurrency({ variables: { newCurrency } })
                      }
                      {...data}
                    />
                  )}
                </Mutation>
              )}
            </Mutation>
          )
        }
      </Query>
    );
  }
}

export default CurrencySwitcherContainer;
