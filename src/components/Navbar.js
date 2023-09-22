import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src="logo-kasa.png" class="logo-kasa" alt="Logo du site Kasa"/>
      </div>
      <div class="buttons-menu">
        <div class="link-menu">Accueil</div>
        <div class="link-menu">A Propos</div>
      </div>
    </nav>
  );
}
export default Navbar;