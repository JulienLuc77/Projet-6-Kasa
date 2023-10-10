import React from "react";
import RatingStars from "../Stars/Stars";
import "./ApartmentHeader.scss";

export function ApartmentHeader (props) {
const flat = props.flat;
const name = flat.host.name;
const [firstName, lastName] = name.split(" ");

  return (
<div className="apartment-header">
<div className="apartment-title">
  <h1>{flat.title}</h1>
  <h2>{flat.location}</h2>
  <div className="apartment-tags">
    {flat.tags.map((tag) => (
      <span key={tag}>{tag}</span>
    ))}
  </div>
</div>
<div className="apartment-owner">
  <div className="apartment-details" >
    <h3>
      <span>{firstName}</span>
      <span>{lastName}</span>
    </h3>
    <div className="apartment-badge">
      <img src={flat.host.picture} alt="" />
    </div>
  </div>
  <div className="stars">
  <RatingStars rating={flat.rating} />
  </div>
</div>
</div>
  );
}