import React from "react";
import logo from "../assets/cyberlogo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";

const navbar = () => {
  return (
    <div className="nav-wrapper">
      
      <p>
        <img src={logo} alt="logo" />
      </p>
      <div className="nav-inp">
        <IoIosSearch className="sr-icon" />
        <input type="text" id="" placeholder="Search" className="sr-inp" />
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
        <p>
          <FaRegHeart />
        </p>
        <p>
          <SlBasket />
        </p>
        <p>
          <FaRegUser />
        </p>
      </div>
    </div>
  );
};

export default navbar;
