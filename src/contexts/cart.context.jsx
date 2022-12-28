// import { createContext, useState, useEffect, useReducer } from "react";

// const addCartItem = (cartsItems, productToAdd) => {
//   const existingCartItem = cartsItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );
//   if (existingCartItem) {
//     return cartsItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }
//   return [...cartsItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartsItems, cartItemToRemove) => {
//   const existingCartItem = cartsItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );
//   if (existingCartItem.quantity === 1) {
//     return cartsItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }
//   return cartsItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const deleteCartItem = (cartsItems, cartItemToRemove) => {
//   return cartsItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartsItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartsItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       throw new Error(`Unknown type ${type} in cartReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [cartsItems, setCartItems] = useState([]);
//   // const [cartCount, setCartCount] = useState(0);
//   // const [cartTotal, setCartTotal] = useState(0);

//   // useEffect(() => {
//   //   const newCartCount = cartsItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity,
//   //     0
//   //   );
//   //   setCartCount(newCartCount);
//   // }, [cartsItems]);

//   // useEffect(() => {
//   //   const newCartTotal = cartsItems.reduce(
//   //     (total, cartItem) => total + cartItem.price * cartItem.quantity,
//   //     0
//   //   );
//   //   setCartTotal(newCartTotal);
//   // }, [cartsItems]);
//   const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
//   const { isCartOpen, cartsItems, cartCount, cartTotal } = state;
//   const updateCartItems = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );
//     const newCartTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.price * cartItem.quantity,
//       0
//     );

//     dispatch({
//       type: CART_ACTION_TYPES.SET_CART_ITEMS,
//       payload: {
//         cartsItems: newCartItems,
//         cartTotal: newCartTotal,
//         cartCount: newCartCount,
//       },
//     });
//   };

//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartsItems, productToAdd);
//     updateCartItems(newCartItems);
//   };

//   const removeItemFromCart = (cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartsItems, cartItemToRemove);
//     updateCartItems(newCartItems);
//   };

//   const clearItemFromCart = (cartItemToRemove) => {
//     const newCartItems = deleteCartItem(cartsItems, cartItemToRemove);
//     updateCartItems(newCartItems);
//   };

//   const setIsCartOpen = (bool) => {
//     dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemFromCart,
//     clearItemFromCart,
//     cartsItems,
//     cartCount,
//     cartTotal,
//   };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
