import React, { useContext, useState } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import Cart from "./svg/cart-plus-solid.svg";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { GlobalContext } from "./context/GlobalState";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  const { cart } = useContext(GlobalContext);

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="Menu Icon" width="20" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Nike</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login / Register</Link>
          </li>
          <li className="close" onClick={menuToggle}>
            <img src={Close} alt="Menu Icon" width="20" />
          </li>
        </ul>
        <div className="nav-cart">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="Menu Icon" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
