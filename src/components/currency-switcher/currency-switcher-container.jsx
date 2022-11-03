import React, { Component } from "react";
import CurrencySwitcher from "./currency-switcher-comp";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";

const GET_CURRENCY_SWITCHER_DATA = gql`
  query {
    selectedCurrency @client
    isCurrencySwitcherOpen @client
    currencies {
      label
      symbol
    }
  }
`;

export class CurrencySwitcherContainer extends Component {
  render() {
    return (
      <Query query={GET_CURRENCY_SWITCHER_DATA}>
        {({ data }) => <CurrencySwitcher {...data} />}
      </Query>
    );
  }
}

export default CurrencySwitcherContainer;
