import { extractPrice } from "./product-utils";

//find product with same id and same selected attributes
const findExistingProduct = (cartItems, id, attributes) => {
  return cartItems.find((cartItem) => {
    return (
      cartItem.id === id &&
      JSON.stringify(attributes) === JSON.stringify(cartItem.attributes)
    );
  });
};

//add item to cart
export const addItemToCart = (cartItems, productToAdd, productAttributes) => {
  const selectedAttributesCount = productAttributes.reduce((acc, { items }) => {
    const a = items.some(({ selected }) => selected);
    return a ? acc + 1 : acc;
  }, 0);

  const existingProduct = findExistingProduct(
    cartItems,
    productToAdd.id,
    productAttributes
  );

  if (selectedAttributesCount < productAttributes.length) {
    // check if all attributes are selected
    alert("please select all attributes in order to add to cart");
  } else {
    // if product exists increase its quantity
    if (existingProduct) {
      return cartItems.map((cartItem) =>
        cartItem === existingProduct
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    //else add it to the cart with quantity 1
    return [
      ...cartItems,
      { ...productToAdd, attributes: productAttributes, quantity: 1 },
    ];
  }
};

//remove item from cart
export const removeItemFromCart = (cartItems, productToRemove) => {
  const { id, attributes } = productToRemove;
  const existingProduct = findExistingProduct(cartItems, id, attributes);

  //if product quantity is 1, delete product, if not decrease quantity by 1
  return existingProduct?.quantity === 1
    ? cartItems.filter((cartItem) => cartItem !== productToRemove)
    : cartItems.map((cartItem) =>
        cartItem === productToRemove
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
};

export const calculCartTotal = (cartItems, selectedCurrency) => {
  return cartItems
    .reduce((cartTotal, item) => {
      const { amount } = extractPrice(item.prices, selectedCurrency);

      return cartTotal + amount * item.quantity;
    }, 0)
    .toFixed(2);
};

export const calculTax = (total) => {
  return (total * 0.21).toFixed(2);
};
