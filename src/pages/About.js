import React from "react";
import Banner from "../components/Banner";
import Description from "../components/Description";
import './About.scss';
import { AboutBanner } from "../components/AboutBanner";
import { useParams } from "react-router-dom";

function About () {
  const params = useParams();
  return (
  <>
    <AboutBanner />
    <div className="about-container">
    <Description />
    <Description />
    <Description />
    <Description />
    </div>
  </>
    
    ); 
}
export default About;