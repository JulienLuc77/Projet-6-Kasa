import React, { useState } from "react";
import "../Carousel/Carousel.scss";

export function Carousel (props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };
  const movetoPrevious = () => {
    const newCurrentPicture = currentPicture -1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length -1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };
  return (
    <div className="apartment-banner">
      <div className="image-container">
      {pictures.map ((pic, i) => (
        <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
      ))}
      </div>
      <button className="button-previous" onClick={movetoPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="button-next" onClick={moveToNext}>
        <i className=" fas fa-chevron-right"></i>
      </button>
    </div>
  )

}
