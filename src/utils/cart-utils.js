import { extractPrice } from "./product-utils";

const extractSelectedAttributes = (attributes) => {
  return attributes
    ?.map((attri) => attri.items.find((item) => item.selected === true))
    .filter((element) => element);
};

export const addItemToCart = (cartItems, productToAdd, productAttributes) => {
  const selectedAttributes = extractSelectedAttributes(productAttributes);

  const existingProduct = cartItems.find(
    (cartItem) =>
      cartItem.id === productToAdd.id &&
      JSON.stringify(selectedAttributes) ===
        JSON.stringify(extractSelectedAttributes(cartItem.attributes))
  );
  if (selectedAttributes.length < productAttributes.length) {
    alert("please select missing attributes in order to add to cart");
  } else {
    if (existingProduct) {
      return cartItems.map((cartItem) =>
        cartItem === existingProduct
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [
      ...cartItems,
      { ...productToAdd, attributes: productAttributes, quantity: 1 },
    ];
  }
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const existingProduct = cartItems.find(
    (cartItem) =>
      cartItem.id === productToRemove.id &&
      JSON.stringify(extractSelectedAttributes(productToRemove.attributes)) ===
        JSON.stringify(extractSelectedAttributes(cartItem.attributes))
  );

  if (existingProduct && existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem !== productToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItem === productToRemove
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const calculCartTotal = (cartItems, selectedCurrency) => {
  const total = cartItems.reduce((cartTotal, item) => {
    const { amount } = extractPrice(item.prices, selectedCurrency);

    return cartTotal + amount * item.quantity
  }, 0);
  return total.toFixed(2)
};

export const calculTax = (total) => {
  return (total * 0.21).toFixed(2)
}