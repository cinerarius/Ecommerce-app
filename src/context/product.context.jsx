import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      console.log(categoryMap);
    };

    return getCategoryMap;
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
