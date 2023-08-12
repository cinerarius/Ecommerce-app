import ProductCard from "../product-card/product-card.component";

import "./category-preveiw.style.css";

const CategoryPreveiw = ({ title, products }) => {
  return (
    <div className="product-preveiw-container">
      <h1>
        <span className="preveiw-title">{title.toUpperCase()}</span>
      </h1>
      <div className="preveiw">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreveiw;
