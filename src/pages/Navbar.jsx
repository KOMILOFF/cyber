import React from "react";
import "../../src/index.css";
import logo from "../assets/cyberlogo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ goToCart, cartCount }) => {
  return (
    <div className="nav-wrapper">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="nav-inp">
        <IoIosSearch className="sr-icon" />
        <input type="text" placeholder="Search" className="sr-inp" />
      </div>

      <nav className="navbar-nav">
        <ul className="nav-ul">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </nav>

      <div className="bask">
        <p><FaRegHeart /></p>

        <p onClick={goToCart} style={{ cursor: "pointer", position: "relative" }}>
          <SlBasket />
          {cartCount > 0 && <span className="card-count">{cartCount}</span>}
        </p>

        <p><FaRegUser /></p>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
