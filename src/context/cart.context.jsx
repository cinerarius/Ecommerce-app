import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItems = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItems = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemsToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalQuantity(newCartCount);
  }, [cartItem]);

  useEffect(() => {
    const newTotalCartAmount = cartItem.reduce(
      (total, cartItem) => (total + cartItem.quantity) * cartItem.price,
      0
    );
    setTotalCartAmount(newTotalCartAmount);
  }, [cartItem]);

  const addItemsToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  };

  const removeItemsFromCart = (cartItemToRemove) => {
    setCartItem(removeCartItems(cartItem, cartItemToRemove));
  };
  const clearItemFromCart = (clearCartItem) => {
    setCartItem(clearCartItems(cartItem, clearCartItem));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    removeItemsFromCart,
    clearItemFromCart,
    cartItem,
    totalQuantity,
    totalCartAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
