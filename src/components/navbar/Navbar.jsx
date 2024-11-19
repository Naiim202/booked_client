import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="brand">Wasomi</h1>
      </div>
      <ul className="navbar-links">
       
        {/* <li>
          <Link to="/borrow">Borrow</Link>
        </li> */}
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/borrowed">Borrowed</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to="/checkoutcart">
          <button className="cart-button">
            Cart <i className="cart-icon"></i>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
