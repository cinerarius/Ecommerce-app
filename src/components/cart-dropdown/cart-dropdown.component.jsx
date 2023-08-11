import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.style.css";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItem } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-dropdown-menu">
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            {cartItem.map((item) => {
              return <CartItem key={item.id} cartItem={item} />;
            })}
          </div>
        </div>
      </div>
      <button className="checkout-btn" onClick={goToCart}>
        Go To Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
