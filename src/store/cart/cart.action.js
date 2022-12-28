import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartsItems, productToAdd) => {
  const existingCartItem = cartsItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartsItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartsItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartsItems, cartItemToRemove) => {
  const existingCartItem = cartsItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartsItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartsItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartsItems, cartItemToRemove) => {
  return cartsItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const setIsCartOpen = (bool) => {
  return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool };
};

export const addItemToCart = (cartsItems, productToAdd) => {
  const newCartItems = addCartItem(cartsItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartsItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartsItems, cartItemToRemove);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartsItems, cartItemToRemove) => {
  const newCartItems = deleteCartItem(cartsItems, cartItemToRemove);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
