import React, { PureComponent } from "react";
import { Mutation } from "@apollo/client/react/components";

import {
  SELECT_CURRENCY,
  CLOSE_CURRENCY_SWITCHER,
} from "../../graphql/mutations";

import CurrencySwitcherDisplay from "./currency-switcher-display-comp";

export class CurrencySwitcherDisplayContainer extends PureComponent {
  render() {
    return (
      <Mutation mutation={SELECT_CURRENCY}>
        {(selectCurrency) => (
          <Mutation mutation={CLOSE_CURRENCY_SWITCHER}>
            {(closeCurrencySwitcher) => (
              <CurrencySwitcherDisplay
                {...this.props}
                closeCurrencySwitcher={closeCurrencySwitcher}
                selectCurrency={(newCurrency) =>
                  selectCurrency({ variables: { newCurrency } })
                }
              />
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export default CurrencySwitcherDisplayContainer;
