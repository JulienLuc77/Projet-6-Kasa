import React from "react";
import "./Pictures.css";
import {Link} from "react-router-dom";

function Pictures() {
  return <div className="pictures">
    <Link to="/appartment">
      <div className="pictures_title">Titre de la location</div>
    </Link>
  </div>;
}

export default Pictures;