import { Link, Outlet } from "react-router-dom";
import { useState, Fragment, useContext } from "react";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navbar.style.css";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
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
          <a className="nav-link" href="/shop">
            Shop
          </a>
          {currentUser ? (
            <a className="nav-link" href="/auth" onClick={signOutHandler}>
              Sign Out
            </a>
          ) : (
            <a className="nav-link" href="/auth">
              Sign In
            </a>
          )}
          <Link>
            <CartIcon />
          </Link>
        </div>
        <CardDropdown />
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
