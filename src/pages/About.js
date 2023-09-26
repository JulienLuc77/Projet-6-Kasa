import React from "react";
import Banner from "../components/Banner";
import Description from "../components/Description";
import './About.scss';
import { AboutBanner } from "../components/AboutBanner";

function About () {
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