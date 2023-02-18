import { extractPrice } from "./product-utils";

//extract the selected item from the arrtibutes array
const extractSelectedAttributes = (attributes) =>
  attributes
    ?.map((attribute) => attribute.items.find((item) => item.selected))
    .filter(Boolean);

//find if product exist by comparing the id and selected attributes of product to add vs each cart item
const findExistingProduct = (cartItems, id, attributes) =>
  cartItems?.find(
    (cartItem) =>
      cartItem.id === id &&
      JSON.stringify(extractSelectedAttributes(attributes)) ===
        JSON.stringify(extractSelectedAttributes(cartItem.attributes))
  );

//add item to cart
export const addToCart = (cartItems, productToAdd, productAttributes) => {
  const selectedAttributesCount =
    extractSelectedAttributes(productAttributes).length;
  const existingProduct = findExistingProduct(
    cartItems,
    productToAdd.id,
    productAttributes
  );

  // check if all attributes are selected
  if (selectedAttributesCount < productAttributes.length) {
    alert("please select all attributes in order to add to cart");
    return;
  }
  // if product exists increment its quantity
  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem === existingProduct
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //if not add it to the cart with quantity 1 and attach selected attributes
  return [
    ...cartItems,
    { ...productToAdd, attributes: productAttributes, quantity: 1 },
  ];
};

//remove item from cart
export const removeFromCart = (cartItems, productToRemove) => {
  const { id, attributes } = productToRemove;
  const existingProduct = findExistingProduct(cartItems, id, attributes);

  return existingProduct?.quantity === 1 //if product quantity is 1,
    ? cartItems?.filter((cartItem) => cartItem !== productToRemove) //delete product,
    : cartItems?.map(
        (
          cartItem //if quantity is more than 1, decrement quantity
        ) =>
          cartItem === productToRemove
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
      );
};

//calcul cart total
export const calculCartTotal = (cartItems, selectedCurrency) => {
  return cartItems
    ?.reduce((cartTotal, item) => {
      const { amount } = extractPrice(item.prices, selectedCurrency);

      return cartTotal + amount * item.quantity;
    }, 0)
    .toFixed(2);
};

//calcul tax
const curriedCalculTax = (tax) => (total) =>
  total >= 0 && (tax * total).toFixed(2);
export const calculTax = curriedCalculTax(0.21);
