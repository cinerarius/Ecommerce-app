import "./cart-item.style.css";

const CartItem = ({ cartItem }) => {
  const { id, name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img className="cart-img" src={imageUrl} alt={id} />
      <div className="item-details">
        <span className="cart-item-name">{name}</span>
        <span className="cart-item-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
