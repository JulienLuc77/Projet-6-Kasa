import React from 'react';
import "../Stars/Stars.scss";
import Star from "../../img/star.svg";
import Nonestar from "../../img/none-star.svg";

function RatingStars(props) {
  return (
    <div className="apartment-stars">
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num} className={props.rating >= num ? "on" : "off"}>
          {props.rating >= num ? <img src={Star} alt="Star" className="star-img" /> : <img src={Nonestar} alt="Nonestar" className="star-img" />}
        </span>
      ))}
    </div>
  );
}

export default RatingStars;