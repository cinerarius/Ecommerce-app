import ProductCard from "../../components/product-card/product-card.component";
import SHOP_DATA from "../../shop-data.json";

import "./shop.style.css";

const Shop = () => {
  return (
    <div className="product-card-list">
      {SHOP_DATA.map((product) => {
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
