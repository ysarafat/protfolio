import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__left">
          <div className="navbar__left-logo">
            <img src="/images/Logo/logo.png" alt="" />
          </div>
        </ul>
        <ul className="navbar__right">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Protfolio</a></li>
        <li><a href="#">BLog</a></li>
        <li><a href="#">Contact</a></li>

        </ul>
      </div>
    </nav>
  );
};

export default Nav;
