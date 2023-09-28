import React, { useEffect, useState } from "react";
import "./Card.scss";
import Pictures from "./Pictures";

function Card() {
  const [apartments, setApartments] = useState ([]);

  useEffect(fetchApartments, []);

  function fetchApartments () {
    fetch("logements.json")
    .then((res) => res.json())
    .then((res) => setApartments (res))
    .catch(console.error);
  }

  return (
    <div className="card">
      {apartments.map((apartment) => (
         <Pictures title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>
      ))}
    </div>
  );
}
export default Card;