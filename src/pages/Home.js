import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import Card from "../components/Card/Card.jsx";
import Drop from "../components/img/img-en-tête.png";
import "./Home.scss";

function Home() {
  return (
    <div>
       <Banner
          image={Drop} alt="vue d'un paysage avec mer et falaises" text="Chez vous, partout et ailleurs"/>
        <Card />
    </div>
  )
}
export default Home;