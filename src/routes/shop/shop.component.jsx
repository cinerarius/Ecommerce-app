import { useContext } from "react";

import { ProductsContext } from "../../context/product.context";

import ProductCard from "../../components/product-card/product-card.component";
import "./shop.style.css";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="product-card-list">
      {products.map((product) => {
        return (
          <ProductCard
            className="product-card"
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Shop;
