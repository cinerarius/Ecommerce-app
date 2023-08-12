import { Routes, Route } from "react-router-dom";

import Category from "../category/category.component";
import CategoriesPreveiw from "../categories-preveiw/categories-preveiw.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreveiw />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
