import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS_ID_BY_CATEGORY = gql`
  query ($title: String!) {
    category(input: { title: $title }) {
      products {
        id
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID_FOR_CARD = gql`
  query ($id: String!) {
    product(id: $id) {
      name
      brand
      gallery
      inStock
      category
      id
      prices {
        amount
        currency {
          symbol
        }
      }
    }
    selectedCurrency @client
  }
`;

export const GET_PRODUCT_BY_ID_FOR_PAGE = gql`
  query ($id: String!) {
    product(id: $id) {
      name
      brand
      gallery
      inStock
      description
      id
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency {
          symbol
        }
      }
    }
    selectedCurrency @client
  }
`;

export const GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN = gql`
  query {
    selectedCurrency @client
    isCurrencySwitcherOpen @client
  }
`;

export const GET_IS_CURRENCY_SWITCHER_OPEN = gql`
  query {
    isCurrencySwitcherOpen @client
  }
`;

export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
