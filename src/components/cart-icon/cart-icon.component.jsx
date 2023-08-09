import "./cart-icon.style.css";

const CartIcon = () => {
  return (
    <div className="cart-container">
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
