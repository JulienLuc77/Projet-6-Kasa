import React from "react";
import { useLocation } from 'react-router-dom';
import "./Banner.scss";
const Banner = ({ image, text, alt }) => {
  const location = useLocation(); 
  const withTitle = location.pathname === "/"; 
  return (
    <div className="banner">
      <img src={image} alt={alt} />
      {withTitle && <h1>{text}</h1>}
    </div>
  );
};
export default Banner;