import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Cart from "./routes/cart/cart.component";
import Navbar from "./routes/navbar/navbar.component";
import SignIn from "./routes/signIn/signIn.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
