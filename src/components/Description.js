import React from "react";
import "./Description.scss";

export function Description (props) {
  return (

      <div className="apartment-description">
      <p className="description">
      <span>{props.title}</span>
      <span><i className="fa-solid fa-chevron-up"></i></span>
        </p>
        <p className="content">{props.content}</p>
      </div>
  );
}

export default Description;