import {
  GET_IS_CURRENCY_SWITCHER_OPEN,
  GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN,
  GET_IS_CART_OPEN,
  GET_CART_ITEMS,
} from "./queries";

import { addToCart, removeFromCart } from "../utils/cart-utils";

export const resolvers = {
  Mutation: {
    toggleCurrency: (_root, _args, { cache }) => {
      const { isCurrencySwitcherOpen } = cache.readQuery({
        query: GET_IS_CURRENCY_SWITCHER_OPEN,
      });

      cache.writeQuery({
        query: GET_IS_CURRENCY_SWITCHER_OPEN,
        data: {
          isCurrencySwitcherOpen: !isCurrencySwitcherOpen,
        },
      });
    },

    closeCurrencySwitcher: (_root, _args, { cache }) => {
      cache.writeQuery({
        query: GET_IS_CURRENCY_SWITCHER_OPEN,
        data: {
          isCurrencySwitcherOpen: false,
        },
      });
    },

    selectCurrency: (_root, { newCurrency }, { cache }) => {
      cache.writeQuery({
        query: GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN,
        data: {
          selectedCurrency: newCurrency,
          isCurrencySwitcherOpen: false,
        },
      });
    },

    toggleCart: (_root, _args, { cache }) => {
      const { isCartOpen } = cache.readQuery({
        query: GET_IS_CART_OPEN,
      });

      cache.writeQuery({
        query: GET_IS_CART_OPEN,
        data: { isCartOpen: !isCartOpen },
      });
    },

    closeCart: (_root, _args, { cache }) => {
      cache.writeQuery({
        query: GET_IS_CART_OPEN,
        data: {
          isCartOpen: false,
        },
      });
    },

    addToCart: (_root, { productToAdd, selectedAttributes }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addToCart(
        cartItems,
        productToAdd,
        selectedAttributes
      );

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItems,
        },
      });
    },

    removeFromCart: (_root, { productToRemove }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = removeFromCart(cartItems, productToRemove);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItems,
        },
      });
    },
  },
};
