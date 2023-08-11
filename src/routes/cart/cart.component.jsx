import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./cart.style.css";

const Cart = () => {
  const {
    cartItem,
    addItemsToCart,
    removeItemsFromCart,
    clearItemFromCart,
    totalCartAmount,
  } = useContext(CartContext);

  return (
    <div>
      <div className="flex justify-start mx-6 space-x-14">
        <div className="cart-header">
          <span className="header-text">Product</span>
        </div>
        <div className="cart-header">
          <span className="header-text">Description</span>
        </div>
        <div className="cart-header">
          <span className="header-text">Quantity</span>
        </div>
        <div className="cart-header">
          <span className="header-text">Price</span>
        </div>
        <div className="cart-header">
          <span className="header-text">Remove</span>
        </div>
      </div>
      <div>
        {cartItem.map((cartItem) => {
          const { id, name, imageUrl, quantity, price } = cartItem;
          return (
            <div className="cart-product-container" key={id}>
              <img className="cart-product-image" src={imageUrl} alt={name} />
              <h1 className="product-name">{name}</h1>
              <div className="product-quantity">
                <img
                  src="../../src/assets/arrow_left.svg"
                  onClick={() => removeItemsFromCart(cartItem)}
                ></img>
                <br />
                <span>{quantity}</span>
                <br />
                <img
                  src="../../src/assets/arrow_right.svg"
                  onClick={() => addItemsToCart(cartItem)}
                ></img>
              </div>
              <span className="w-24">${price}</span>
              <img
                src="../../src/assets/cancel.svg"
                onClick={() => {
                  clearItemFromCart(cartItem);
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="total-container">
        <span className="total">Total : ${totalCartAmount}</span>
      </div>
    </div>
  );
};

export default Cart;
