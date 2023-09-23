import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src="logo-kasa.png" class="logo-kasa" alt="Logo du site Kasa"/>
      </div>
      <div class="buttons-menu">
        <Link to="/">
          <div class="link-menu">Accueil</div>
        </Link>
        <Link to="/about">
          <div class="link-menu">A Propos</div>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;