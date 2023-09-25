import React from "react";
import "./Apartment.scss";

function Apartment () {
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
          <span className="apartment-tag">Paris</span>
        </div>
      </div>
      <div className="apartment-owner" >
        <h3>Alexandre Dumas</h3>
        <div className="apartment-badge"></div>
        <div className="apartment-stars">
          <span>✩</span>
          <span>✩</span>
          <span>✩</span>
          <span>✩</span>
          <span>✩</span>
        </div>
      </div>
    </div>
    <div className="apartment-description">
     <p>Description</p>
     <p>....</p>
    </div>
    <div className="apartment-description">
     <p>Description</p>
     <p>....</p>
    </div>
  </div>
  );
}

export default Apartment;