import React from "react";
import "./NavBar.css";
import tubev1 from "../../assets/tubev1.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={tubev1} alt="Logo" className="navbar-logo" />
      </div>

      <ul className="navbar-links">
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>

      <button className="navbar-btn">Do More With Video</button>
    </nav>
  );
};

export default NavBar;
