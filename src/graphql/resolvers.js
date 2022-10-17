import {
  GET_IS_CURRENCY_SWITCHER_OPEN,
  GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN,
} from "./queries";

export const resolvers = {
  Mutation: {
    toggleCurrency: (_root, _args, { cache }) => {
      const { isCurrencySwitcherOpen } = cache.readQuery({
        query: GET_IS_CURRENCY_SWITCHER_OPEN,
      });

      cache.writeQuery({
        query: GET_IS_CURRENCY_SWITCHER_OPEN,
        data: { isCurrencySwitcherOpen: !isCurrencySwitcherOpen },
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
  },
};
