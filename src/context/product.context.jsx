import { createContext, useState } from "react";

import PRODUCT from "../shop-data.json";

export const ProductsContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCT);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
