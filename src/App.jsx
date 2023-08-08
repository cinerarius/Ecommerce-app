import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Cart from "./routes/cart/cart.component";
import Navbar from "./routes/navbar/navbar.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
