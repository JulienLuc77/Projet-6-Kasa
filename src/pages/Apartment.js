import React, { useEffect, useState } from "react";
import "./Apartment.scss";
import Description from "../components/Description";
import { useLocation } from "react-router-dom";

function Apartment () {
  const location = useLocation();
  const [selectedApartment, setSelectedApartement] = useState(null);
  useEffect(fetchApartmentData,[]);

  function fetchApartmentData () {
    fetch("db.json")
    .then((res) => res.json())
    .then((apartment) => {
      const selectedApartment = apartment.filter((apartment) => apartment.id === location.state.apartmentId)[0];
      setSelectedApartement (selectedApartment);
    })
  }
  return (
  <div className="apartment">
    <div>
      <img src="https://picsum.photos/800/400" alt="image appartement"/>
    </div>
    <div className="apartment-header">
      <div className="apartment-title">
        <h1>Crazy Loft on canal Saint Martin</h1>
        <h2>Paris, Ile de France</h2>
        <div className="apartment-tags">
          <span className="apartment-tag">Cozy</span>
          <span className="apartment-tag">Canal</span>
          <span className="apartment-tag">Paris 10</span>
        </div>
      </div>
      <div className="apartment-owner">
        <div className="apartment-details" >
          <h3>
            <span>Alexandre</span>
            <span>Dumas</span>
          </h3>
          <div className="apartment-badge"></div>
        </div>
        <div className="apartment-stars">
          <span className="on">🟊</span>
          <span className="on">🟊</span>
          <span className="on">🟊</span>
          <span className="off">🟊</span>
          <span className="off">🟊</span>
        </div>
      </div>
    </div>
    <div className="apartment-area">
    <Description />
    <Description />
    </div>
  </div>
  );
}

export default Apartment;