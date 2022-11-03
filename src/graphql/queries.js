import { gql } from "@apollo/client";

// categories and product queries

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
      category
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

// currency related queries

export const GET_IS_CURRENCY_SWITCHER_OPEN = gql`
  query {
    isCurrencySwitcherOpen @client
  }
`;

export const GET_SELECTED_CURRENCY = gql`
  query {
    selectedCurrency @client
  }
`;
export const GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN = gql`
  query {
    selectedCurrency @client
    isCurrencySwitcherOpen @client
  }
`;

export const GET_CURRENCY_SWITCHER_DATA = gql`
  query {
    selectedCurrency @client
    isCurrencySwitcherOpen @client
    currencies {
      label
      symbol
    }
  }
`;

// cart related queries

export const GET_IS_CART_OPEN = gql`
  query {
    isCartOpen @client
  }
`;

export const GET_CART_ITEMS = gql`
  query {
    cartItems @client
  }
`;

export const GET_MINI_CART_DATA = gql`
  query {
    cartItems @client
    itemsCount @client
    isCartOpen @client
  }
`;

export const GET_CART_DATA = gql`
  query {
    cartItems @client
    itemsCount @client
    selectedCurrency @client
  }
`;
