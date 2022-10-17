import { ApolloClient, InMemoryCache } from "@apollo/client";

import { resolvers } from "./resolvers";

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
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
  resolvers,
});
