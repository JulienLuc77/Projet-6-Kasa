import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src="logo-kasa.png" alt="Logo du site Kasa"/>
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
  );
}
export default Navbar;