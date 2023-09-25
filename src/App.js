import React from "react";
import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import Card from "./components/Card.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <Card />
      </Main>
      <Footer />
    </div>
  )
}
export default App;