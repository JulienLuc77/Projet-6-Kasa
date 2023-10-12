import React from "react";
import "./Footer.scss";

function Footer() {
  return (
  <div className="footer">
    <div className="footer-logo">
      <img src="/logo-footer.png" className="logo-footer" alt="Logo du site Kasa" width="150" />
    </div>
    <div className="footer-copyright">© 2020 Kasa. All rights reserved</div>
  </div>
  );
}
 
export default Footer;