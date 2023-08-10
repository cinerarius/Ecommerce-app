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

const cartIconQuantity = (quantity) => {};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemsToCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalQuantity(newCartCount);
  }, [cartItem]);

  const addItemsToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    cartItem,
    totalQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
