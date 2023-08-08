import ProductCard from "../../components/product-card/product-card.component";
import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map((product) => (
        <ProductCard key={product.key} product={product} />
      ))}
    </div>
  );
};

export default Shop;
