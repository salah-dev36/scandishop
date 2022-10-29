export const extractPrice = (pricesArray, selectedCurrency) => {
  return pricesArray.find(
    ({ currency }) => currency.symbol === selectedCurrency
  );
};

export const selectAttributesFunc = (
  attributesArray,
  newAttributeValue,
  newAttributename
) => {
  const newAttributesArray = attributesArray.map((attribute) =>
    attribute.name === newAttributename
      ? {
          ...attribute,
          items: attribute.items.map((item) =>
            item.value === newAttributeValue && !item.selected
              ? { ...item, selected: true }
              : { ...item, selected: false }
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
