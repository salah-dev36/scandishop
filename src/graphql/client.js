import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache } from "apollo3-cache-persist"

import { resolvers } from "./resolvers";

import { GET_CART_ITEMS } from "./queries";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        selectedCurrency: {
          read(selectedCurrency = "$") {
            return selectedCurrency;
          },
        },
        isCurrencySwitcherOpen: {
          read(isCurrencySwitcherOpen = false) {
            return isCurrencySwitcherOpen;
          },
        },
        cartItems: {
          read(cartItems = []) {
            return cartItems;
          },
        },
        isCartOpen: {
          read(isCartOpen = false) {
            return isCartOpen;
          },
        },
        itemsCount: {
          read(itemsCount = 0) {
            const { cartItems } = cache.readQuery({
              query: GET_CART_ITEMS,
            });

            return cartItems
              ? cartItems.reduce((total, item) => total + item.quantity, 0)
              : itemsCount;
          },
        },
      },
    },
  },
});

persistCache({
  cache,
  storage: localStorage
})

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
  resolvers,
});
