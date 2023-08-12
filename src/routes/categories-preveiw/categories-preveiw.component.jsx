import { useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";

import CategoryPreveiw from "../../components/category-preveiw/category-preveiw.component";
import "./categories-preveiw.style.css";

const CategoriesPreveiw = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreveiw key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreveiw;
