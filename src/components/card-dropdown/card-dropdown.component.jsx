import "./card-dropdown.style.css";

const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-dropdown-menu">
        <div className="flex flex-col items-center">
          <div className="cart-items">
            <h1>Item 1</h1>
          </div>
          <button className="checkout-btn">Go To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CardDropdown;
