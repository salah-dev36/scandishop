import { gql } from "@apollo/client";

export const TOOGLE_CURRENCY = gql`
  mutation ToggleCurrency {
    toggleCurrency @client
  }
`;

export const SELECT_CURRENCY = gql`
  mutation SelectCurrency($newCurrency: String!) {
    selectCurrency(newCurrency: $newCurrency) @client
  }
`;
