import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">
          <img src="logo-kasa.png" class="logo-kasa" alt="Logo du site Kasa"/>
        </NavLink>
      </div>
      <div className="buttons-menu">
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/about">
          <div>A Propos</div>
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;