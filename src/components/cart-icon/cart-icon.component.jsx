import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import "./cart-icon.style.css";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalQuantity } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-container" onClick={toggleIsCartOpen}>
      <img
        className="cart-logo"
        src="../../../assets/shopping-bag.svg"
        alt=""
      />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
