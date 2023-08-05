import "../card/card.style.css";

const Card = ({ categories }) => {
  return (
    <div className="group" key={categories.id}>
      <img
        src={`./src/assets/image${categories.id}.png`}
        alt=""
        className="category-image"
      />
      <div className="category-body-container">
        <div className="content">
          <h2 className="category-title">{categories.title}</h2>
          <p className="shop-now">Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
