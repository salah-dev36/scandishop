import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache } from "apollo3-cache-persist";

import { resolvers } from "./resolvers";

import { GET_CART_ITEMS } from "./queries";

const cache = new InMemoryCache({
  typePolicies: {
    AttributeSet: {
      // identify by id and items to avoid misidentification for jacket, sneaker, and imac because some of the fields have same id and typeName
      keyFields: ["id", "items", ["id", "value", "displayValue"]],
    },
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
  storage: localStorage,
});

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache,
  resolvers,
});
