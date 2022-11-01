import { gql } from "@apollo/client";

export const TOGGLE_CURRENCY = gql`
  mutation ToggleCurrency {
    toggleCurrency @client
  }
`;

export const SELECT_CURRENCY = gql`
  mutation SelectCurrency($newCurrency: String!) {
    selectCurrency(newCurrency: $newCurrency) @client
  }
`;

export const TOGGLE_CART = gql`
  mutation ToggleCart {
    toggleCart @client
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

export const CLOSE_CART_AND_CURRENCY = gql`
  mutation CloseCartAndCurrency {
    closeCartAndCurrency @client
  }
`
export const CLOSE_CART = gql`
  mutation CloseCart {
    closeCart @client
  }
`

