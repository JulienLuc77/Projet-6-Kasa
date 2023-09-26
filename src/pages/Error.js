import React from "react";
import "./Error.scss";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import Footer from "../components/Footer";

export function Error () {
  return <>
    <Navbar />
    <Main>
    <h1 className="error-title">404</h1>
    <h2 className="error-subtitle">Oups! La page que vous demandez n'existe pas. </h2>
    <Link to="/"><p className="error-link">Retourner sur la page d'accueil</p></Link>
    </Main>
    <Footer />
  </>;
}

export default Error;