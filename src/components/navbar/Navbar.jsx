import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const menuNavbar = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <a href=".">VELOCITY</a>
        </h1>

        <div className="menuBar">
          <ul>
            {menuNavbar.map((menu) => {
              return <li><NavLink to={menu.url}>{menu.name}</NavLink></li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
