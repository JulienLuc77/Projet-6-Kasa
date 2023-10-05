import React from "react";
import "./Pictures.scss";
import {Link} from "react-router-dom";

function Pictures(props) {
  return (
    <div className="pictures">
      <Link
        to="/flat"
        state={{
          apartmentId: props.id,
        }}
        key={props.id}
      >
        <img src={props.imageUrl} alt="" />
        <div className="pictures_title">{props.title}</div>
      </Link>
    </div>
  );
}

export default Pictures;