import React from "react";
import "./ApartmentBanner.scss";

export function ApartmentBanner (props) {
  return (
    <div className="apartment">
      <img src={props.imageUrl} alt="image appartement"/>
    </div>
  )

}
