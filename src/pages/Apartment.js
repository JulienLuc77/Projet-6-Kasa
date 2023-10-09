import React, { useEffect, useState } from "react";
import "./Apartment.scss";
import Description from "../components/Description/Description";
import { useLocation } from "react-router-dom";
import { ApartmentBanner } from "../components/Apartment Banner/ApartmentBanner";
import { ApartmentHeader } from "../components/Header/ApartmentHeader";

function Apartment () {
  const location = useLocation();
  const [flat, setFlat] = useState(null);
  useEffect(fetchApartmentData,[]);

  function fetchApartmentData () {
    fetch("logements.json")
    .then((res) => res.json())
    .then((flats) => {
      const flat = flats.find((flat) => flat.id === location.state.apartmentId);
      setFlat (flat);
    })
    .catch(console.error);
  }
  if (flat == null) return <div>Chargement...</div>;
  return (
   <div className="apartment">
     <ApartmentBanner pictures={flat.pictures} />
     <ApartmentHeader flat={flat} />
    <div className="apartment-area">
    <Description title="Description" content={flat.description}/>
    <Description title="Equipements" content={flat.equipments.map((eq, i) => (
      <li key={i}>{eq}</li>
    ))}/>
    </div>
  </div>
  );
}

export default Apartment;