import React from "react";
import Collapse from "../components/Collapse/Collapse";
import './About.scss';
import Flop from "../img/photo-paysage.png"
import Banner from "../components/Banner/Banner";

function About () {

  return (
  <>
    <Banner
        image={Flop} alt="paysage avec montagnes et forêts"/>
    <div className="about-container">
    <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
    <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
    <Collapse title="Service" content="Kasa s'engage à vous offrir un service exceptionnel à chaque étape de votre location. Notre équipe dévouée est là pour répondre à vos besoins et vous assurer une expérience de location sans souci. Nous sommes déterminés à vous offrir un service de qualité supérieure pour que vous puissiez profiter pleinement de votre séjour en toute tranquillité." />
    <Collapse title="Sécurité" content="La sécurité est le priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une notre aussi bien à l'hôtre qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
    </div>
  </>
    
    ); 
}
export default About;