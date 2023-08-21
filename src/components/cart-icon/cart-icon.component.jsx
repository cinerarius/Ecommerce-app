import { useContext } from "react";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";
import "./cart-icon.style.css";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalQuantity } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-container" onClick={toggleIsCartOpen}>
      <ShoppingBag className="cart-logo" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
