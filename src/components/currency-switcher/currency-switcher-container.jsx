import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_CURRENCY_SWITCHER_DATA } from "../../graphql/queries";

import CurrencySwitcher from "./currency-switcher-comp";

export class CurrencySwitcherContainer extends PureComponent {
  render() {
    return (
      <Query query={GET_CURRENCY_SWITCHER_DATA}>
        {({ data }) => <CurrencySwitcher {...data} />}
      </Query>
    );
  }
}

export default CurrencySwitcherContainer;
