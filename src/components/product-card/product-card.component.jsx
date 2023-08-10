import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./product-card.style.css";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(CartContext);

  const addProductToCart = () => addItemsToCart(product);

  return (
    <div className="flex items-center justify-center">
      <div className="group">
        <div className="product-card-container">
          <img className="product-image" src={imageUrl} alt={`${name}`} />
          <div className="details">
            <h2 className="name">{name}</h2>
            <p className="price">Price - ${price}</p>
          </div>
          <button className="add-to-cart-btn" onClick={addProductToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
