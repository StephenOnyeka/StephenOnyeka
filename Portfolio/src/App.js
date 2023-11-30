import react from "react";
// import AOS from "aos";
import { Router } from "react-router-dom";
// import "aos/dist/aos.css";
// import logo from "./logo.svg";
import "./App.css"

import NVBar from "./components/NVBar";
import Home from "./components/Home";
import Portfolio from "./components/portfolio";
import About from "./components/About";
import Tech from "./components/Tech";
import SwiperAni from "./components/swiperAni";
import Services from "./components/Services";
import Contact from "./components/cOntact";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <div><NVBar /></div>

      <Home />
      <Services />
      <Portfolio />
      <About />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
