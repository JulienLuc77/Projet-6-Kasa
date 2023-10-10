import React from 'react';
import "../Stars/Stars.scss";

function RatingStars(props) {
  return (
    <div className="apartment-stars">
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num} className={props.rating >= num ? "on" : ""}>🟊</span>
      ))}
    </div>
  );
}

export default RatingStars;