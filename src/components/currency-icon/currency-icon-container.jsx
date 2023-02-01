import React, { PureComponent } from "react";
import { Mutation } from "@apollo/client/react/components";

import { TOGGLE_CURRENCY } from "../../graphql/mutations";

import CurrencyIcon from "./currency-icon-comp";

export class CurrencyIconContainer extends PureComponent {
  render() {
    return (
      <Mutation mutation={TOGGLE_CURRENCY}>
        {(toggleCurrency) => (
          <CurrencyIcon {...this.props} toggleCurrency={toggleCurrency} />
        )}
      </Mutation>
    );
  }
}

export default CurrencyIconContainer;
