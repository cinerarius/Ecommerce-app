import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preveiw.style.css";

const CategoryPreveiw = ({ title, products }) => {
  return (
    <div className="product-preveiw-container">
      <h1>
        <Link className="preveiw-title" to={title}>
          {title.toUpperCase()}
        </Link>
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
