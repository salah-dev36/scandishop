export const extractPrice = (pricesArray, selectedCurrency) => {
  const price = pricesArray.find(
    ({ currency }) => currency.symbol === selectedCurrency
  );

  return { ...price, amount: Math.floor(price.amount).toFixed(2) };
};

export const selectAttributesFunc = (
  attributesArray,
  newAttributeValue,
  newAttributename
) => {
  const newAttributesArray = attributesArray.map((attribute) =>
    attribute.name === newAttributename // find the concerned attribute
      ? {
          ...attribute,
          items: attribute.items.map(
            (item) =>
              item.value === newAttributeValue && !item.selected // find the concerned item
                ? { ...item, selected: true } // if it is not selected make it selected
                : { ...item, selected: false } // otherwise return the item unselected
          ),
        }
      : attribute
  );
  return newAttributesArray;
};

export const selectDefaultAttributes = (attributesArray) => {
  const modifyItems = (itemsArray) => {
    return itemsArray.map((item) =>
      itemsArray.indexOf(item) === 0 ? { ...item, selected: true } : item
    );
  };

  return attributesArray.map((attribute) => ({
    ...attribute,
    items: modifyItems(attribute.items),
  }));
};
