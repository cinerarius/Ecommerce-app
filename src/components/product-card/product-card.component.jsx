import "./product-card.style.css";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="details">
        <h2 className="name">{name}</h2>
        <p className="price">{price}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
