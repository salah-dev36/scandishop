export const extractPrice = (pricesArray, selectedCurrency) => {
  const price = pricesArray.find(
    ({ currency }) => currency.symbol === selectedCurrency
  );

  return { ...price, amount: Math.floor(price.amount).toFixed(2) };
};

export const selectAttributesFunc = (
  attributesArray,
  attributeValue,
  attributename
) => {
  const toggleSelected = (items, attribute) => {
    return items.map(
      (item) =>
        item.value === attribute && !item.selected // find the concerned item
          ? { ...item, selected: true } // if it is not selected make it selected
          : { ...item, selected: false } // otherwise return the item unselected
    );
  };

  const mapOverAttributes = (attributes, attributeName) => {
    return attributes.map((attributeObject) =>
      attributeObject.name === attributeName // find the concerned attribute
        ? {
            ...attributeObject,
            items: toggleSelected(attributeObject.items, attributeValue),
          }
        : attributeObject
    );
  };

  return mapOverAttributes(attributesArray, attributename);
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
