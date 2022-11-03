import { gql } from "@apollo/client";

// currency related mutations

export const TOGGLE_CURRENCY = gql`
  mutation ToggleCurrency {
    toggleCurrency @client
  }
`;

export const CLOSE_CURRENCY_SWITCHER = gql`
  mutation CloseCurrencySwitcher {
    closeCurrencySwitcher @client
  }
`;

export const SELECT_CURRENCY = gql`
  mutation SelectCurrency($newCurrency: String!) {
    selectCurrency(newCurrency: $newCurrency) @client
  }
`;

// cart related mutations

export const TOGGLE_CART = gql`
  mutation ToggleCart {
    toggleCart @client
  }
`;

export const CLOSE_CART = gql`
  mutation CloseCart {
    closeCart @client
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart(
    $productToAdd: Product!
    $selectedAttributes: [AttributeSet]
  ) {
    addToCart(
      productToAdd: $productToAdd
      selectedAttributes: $selectedAttributes
    ) @client
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($productToRemove: Product!) {
    removeFromCart(productToRemove: $productToRemove) @client
  }
`;
