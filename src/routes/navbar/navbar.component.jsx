import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <Fragment>
      <header className="heading">
        <Link className="title-link" to={"/"}>
          <h1 className="title">Ecommerce App</h1>
        </Link>
        <div className="navbar">
          <a className="nav-link" href="/cart">
            Add to Cart
          </a>
          <a className="nav-link" href="/signIn">
            Sign In
          </a>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
