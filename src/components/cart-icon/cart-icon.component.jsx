import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import "./cart-icon.style.css";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-container" onClick={toggleIsCartOpen}>
      <img
        className="cart-logo"
        src="../../src/assets/shopping-bag.svg"
        alt=""
      />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
