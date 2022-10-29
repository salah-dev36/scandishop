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

export const GET_IS_CART_OPEN = gql`
  query {
    isCartOpen @client
  }
`;

export const GET_IS_CART_AND_CURRENCY_OPEN = gql`
  query {
    isCurrencySwitcherOpen @client
    isCartOpen @client
  }
`;

export const GET_CART_ITEMS = gql`
  query {
    cartItems @client
  }
`;

export const GET_CART_INFO = gql`
  query {
    cartItems @client
    selectedCurrency @client
    itemsCount @client
  }
`;

export const GET_ITEMS_COUNT = gql`
  query {
    itemsCount @client
  }
`;
